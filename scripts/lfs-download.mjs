import { open, rename, rm } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { createHash, randomUUID } from "node:crypto";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

export async function hydrateVideo(
  file,
  { fetchImpl = fetch, token = process.env.GITHUB_LFS_TOKEN } = {},
) {
  const handle = await open(file, "r");
  let text;
  try {
    const buffer = Buffer.alloc(1024);
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
    text = buffer.subarray(0, bytesRead).toString();
  } finally {
    await handle.close();
  }
  if (!text.startsWith("version https://git-lfs.github.com/spec/v1"))
    return false;
  const oid = /^oid sha256:([a-f0-9]{64})\r?$/m.exec(text)?.[1];
  const size = Number(/^size (\d+)\r?$/m.exec(text)?.[1]);
  if (!oid || !Number.isSafeInteger(size) || size <= 0)
    throw new Error(`Invalid LFS pointer: ${file}`);
  console.log(`Downloading Git LFS video: ${file} (${size} bytes)`);
  const headers = {
    Accept: "application/vnd.git-lfs+json",
    "Content-Type": "application/vnd.git-lfs+json",
  };
  if (token)
    headers.Authorization =
      "Basic " + Buffer.from("x-access-token:" + token).toString("base64");
  const batch = await fetchImpl(
    "https://github.com/FreetimeMaker/The-Flash.git/info/lfs/objects/batch",
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        operation: "download",
        transfers: ["basic"],
        objects: [{ oid, size }],
      }),
      signal: AbortSignal.timeout(60000),
    },
  );
  if (!batch.ok)
    throw new Error(
      `Git LFS batch HTTP ${batch.status} for ${file}. Check GitHub LFS access/quota; for private access set GITHUB_LFS_TOKEN in Vercel.`,
    );
  const result = await batch.json();
  const object = result.objects?.find((item) => item.oid === oid);
  if (object?.error)
    throw new Error(
      `Git LFS object unavailable for ${file} (code ${object.error.code}). Check that the LFS object was pushed and quota is available.`,
    );
  const action = object?.actions?.download;
  if (!action?.href || new URL(action.href).protocol !== "https:")
    throw new Error(`No valid HTTPS Git LFS download action for ${file}`);
  // Only action-specific headers go to storage, never the GitHub token by default.
  const download = await fetchImpl(action.href, {
    headers: action.header ?? {},
    signal: AbortSignal.timeout(20 * 60 * 1000),
  });
  if (!download.ok || !download.body)
    throw new Error(`Git LFS download HTTP ${download.status} for ${file}`);
  const temporary = `${file}.${randomUUID()}.download`;
  const hash = createHash("sha256");
  let received = 0;
  try {
    const verify = new Transform({
      transform(chunk, _encoding, callback) {
        received += chunk.length;
        if (received > size)
          return callback(new Error(`LFS size exceeded for ${file}`));
        hash.update(chunk);
        callback(null, chunk);
      },
    });
    await pipeline(
      Readable.fromWeb(download.body),
      verify,
      createWriteStream(temporary, { flags: "wx" }),
    );
    if (received !== size || hash.digest("hex") !== oid)
      throw new Error(`LFS size/SHA-256 verification failed for ${file}`);
    await rename(temporary, file);
  } finally {
    await rm(temporary, { force: true });
  }
  return true;
}
