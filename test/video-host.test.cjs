const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { transformSync } = require("next/dist/build/swc");
const compiled = transformSync(readFileSync("src/lib/video.ts", "utf8"), {
  filename: "video.ts",
  jsc: { parser: { syntax: "typescript" }, target: "es2022" },
  module: { type: "es6" },
}).code;
const modulePromise = import(
  "data:text/javascript;base64," + Buffer.from(compiled).toString("base64")
);

test("Vercel video requests stay on the same origin", async () => {
  const { serveVideo } = await modulePromise;
  const previous = process.env.VERCEL;
  try {
    process.env.VERCEL = "1";
    for (const method of ["GET", "HEAD"]) {
      for (const [segments, expected] of [
        [
          ["German", "Staffel1", "Folgen", "Videos", "Folge1.mp4"],
          "/videos/German/Staffel1/Folge1.mp4",
        ],
        [
          ["English", "Season1", "Episodes", "Videos", "Episode1.mp4"],
          "/videos/English/Season1/Episode1.mp4",
        ],
      ]) {
        const response = await serveVideo(
          new Request("https://flash.free-time.me/api/videos/test", { method }),
          segments,
        );
        assert.equal(response.status, 307);
        assert.equal(response.headers.get("location"), expected);
      }
    }
    assert.equal(
      (
        await serveVideo(new Request("https://flash.free-time.me"), [
          "..",
          "secret.mp4",
        ])
      ).status,
      404,
    );
  } finally {
    if (previous === undefined) delete process.env.VERCEL;
    else process.env.VERCEL = previous;
  }
});
