import { open, realpath } from "node:fs/promises";
import type { FileHandle } from "node:fs/promises";
import { isAbsolute, relative, resolve, sep } from "node:path";

export type ByteRange = { start: number; end: number };
export type RangeResult = ByteRange | null | "unsatisfiable";

/** null means no Range header; malformed or unsatisfiable ranges are rejected. */
export function parseRange(header: string | null, size: number): RangeResult {
  if (!Number.isSafeInteger(size) || size < 0) {
    throw new RangeError("File size must be a non-negative safe integer");
  }
  if (header === null) return null;
  const match = /^bytes=(\d*)-(\d*)$/i.exec(header.trim());
  if (!match || (!match[1] && !match[2]) || size === 0) {
    return "unsatisfiable";
  }
  const length = BigInt(size);
  if (!match[1]) {
    const suffix = BigInt(match[2]);
    if (suffix === 0n) return "unsatisfiable";
    return {
      start: Number(suffix >= length ? 0n : length - suffix),
      end: size - 1,
    };
  }
  const start = BigInt(match[1]);
  const end = match[2] ? BigInt(match[2]) : length - 1n;
  if (start >= length || end < start) return "unsatisfiable";
  return {
    start: Number(start),
    end: Number(end >= length ? length - 1n : end),
  };
}

const videoPath =
  /^(?:German\/Staffel[0-9]+\/Folgen\/Videos\/Folge[0-9]+\.mp4|English\/Season[0-9]+\/Episodes\/Videos\/Episode[0-9]+\.mp4)$(?![\s\S])/;

function confined(root: string, file: string): boolean {
  const remainder = relative(root, file);
  return (
    remainder !== "" &&
    !isAbsolute(remainder) &&
    remainder !== ".." &&
    !remainder.startsWith(`..${sep}`)
  );
}

function message(request: Request, status: number, text: string): Response {
  return new Response(request.method === "HEAD" ? null : text, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Length": String(Buffer.byteLength(text)),
      "Cache-Control": "no-store",
    },
  });
}

/** Owns the handle until EOF, a read failure, or consumer cancellation. */
function streamFile(
  handle: FileHandle,
  start: number,
  length: number,
): ReadableStream<Uint8Array> {
  let position = start;
  let remaining = length;
  let closed = false;
  async function close() {
    if (closed) return;
    closed = true;
    await handle.close();
  }
  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      try {
        if (remaining === 0) {
          await close();
          controller.close();
          return;
        }
        const buffer = Buffer.allocUnsafe(Math.min(64 * 1024, remaining));
        const { bytesRead } = await handle.read(
          buffer,
          0,
          buffer.length,
          position,
        );
        if (closed) return;
        if (bytesRead === 0)
          throw new Error("Video ended before the advertised content length");
        position += bytesRead;
        remaining -= bytesRead;
        controller.enqueue(buffer.subarray(0, bytesRead));
        if (remaining === 0) {
          await close();
          controller.close();
        }
      } catch (error) {
        await close();
        controller.error(error);
      }
    },
    async cancel() {
      await close();
    },
  });
}

export async function serveVideo(
  request: Request,
  segments: string[],
): Promise<Response> {
  // Validate segments individually as joining alone would accept embedded slashes.
  if (
    !Array.isArray(segments) ||
    segments.some(
      (segment) =>
        typeof segment !== "string" ||
        segment.includes("/") ||
        segment.includes("\\"),
    ) ||
    !videoPath.test(segments.join("/"))
  ) {
    return message(request, 404, "Video not found");
  }

  if (process.env.VERCEL === "1") {
    const target =
      "/videos/" + [segments[0], segments[1], segments[4]].join("/");
    // Vercel serves public files directly on the same origin, outside Functions.
    return new Response(null, {
      status: 307,
      headers: { Location: target, "Cache-Control": "no-store" },
    });
  }

  let handle: FileHandle | undefined;
  try {
    const root = await realpath(resolve(process.cwd(), "public", "videos"));
    // Keep existing player URLs while storing files directly in each season folder.
    const file = await realpath(
      resolve(root, segments[0], segments[1], segments[4]),
    );
    if (!confined(root, file)) return message(request, 404, "Video not found");
    handle = await open(file, "r");
    const info = await handle.stat();
    if (!info.isFile()) return message(request, 404, "Video not found");

    const prefix = Buffer.alloc(128);
    const { bytesRead } = await handle.read(prefix, 0, prefix.length, 0);
    if (
      prefix
        .subarray(0, bytesRead)
        .toString("utf8")
        .startsWith("version https://git-lfs.github.com/spec/v1")
    ) {
      return message(
        request,
        503,
        "Video is a Git LFS pointer. Run git lfs pull on the server.",
      );
    }

    const range = parseRange(request.headers.get("range"), info.size);
    const headers = new Headers({
      "Accept-Ranges": "bytes",
      "Content-Type": "video/mp4",
      "X-Content-Type-Options": "nosniff",
    });
    if (range === "unsatisfiable") {
      headers.set("Content-Range", `bytes */${info.size}`);
      headers.set("Content-Length", "0");
      return new Response(null, { status: 416, headers });
    }
    const start = range?.start ?? 0;
    const length = range ? range.end - start + 1 : info.size;
    headers.set("Content-Length", String(length));
    if (range)
      headers.set("Content-Range", `bytes ${start}-${range.end}/${info.size}`);
    const status = range ? 206 : 200;
    if (request.method === "HEAD" || length === 0) {
      return new Response(null, { status, headers });
    }
    const body = streamFile(handle, start, length);
    const response = new Response(body, { status, headers });
    handle = undefined; // Ownership transfers to the stream, including cancellation.
    return response;
  } catch (error) {
    if (
      ["ENOENT", "ENOTDIR", "ELOOP"].includes(
        (error as NodeJS.ErrnoException).code ?? "",
      )
    ) {
      return message(request, 404, "Video not found");
    }
    throw error;
  } finally {
    await handle?.close();
  }
}
