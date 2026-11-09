const { test, before, after } = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
let server;
const base = "http://127.0.0.1:3197";
before(async () => {
  server = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "start",
      "--port",
      "3197",
      "--hostname",
      "127.0.0.1",
    ],
    {
      env: { ...process.env, PORT: "3197", HOST: "127.0.0.1" },
      stdio: "inherit",
    },
  );
  for (let i = 0; i < 100; i++) {
    try {
      if ((await fetch(base)).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Server did not start");
});
after(() => server?.kill());
test("serves the homepage and styles", async () => {
  assert.match(await (await fetch(base)).text(), /The Flash/);
  assert.match(
    await (await fetch(base + "/German/index.html")).text(),
    /Staffel/,
  );
});
test("preserves original homepage markup and page-specific styles", async () => {
  const { readFile } = require("node:fs/promises");
  const home = await (await fetch(base)).text();
  assert.match(home, /class="Titel"/);
  assert.match(home, /class="r3"/);
  assert.match(home, /Flag_of_Germany/);
  assert.match(home, /\/original-assets\/All.Pages.css/);
  assert.doesNotMatch(home, /class="grid"/);
  for (const file of [
    "All.Pages.css",
    "German/All.Pages.css",
    "German/Staffel1/All.Pages.css",
    "German/Staffel1/Folgen/All.Pages.css",
  ]) {
    const response = await fetch(base + "/original-assets/" + file);
    assert.equal(response.status, 200);
    assert.equal(
      await response.text(),
      await readFile("public/original-assets/" + file, "utf8"),
    );
  }
  const episode = await (
    await fetch(base + "/German/Staffel1/Folgen/Folge2.html")
  ).text();
  assert.match(episode, /class="c2"/);
  assert.match(episode, /class="player-mount"/);
  assert.match(episode, /class="episode-page"/);
  assert.match(episode, /data-vjs-player/);
  assert.doesNotMatch(episode, /<iframe/i);
  assert.equal((await fetch(base + "/legacy/package.json")).status, 404);
});
test("all 32 converted TSX pages render with original titles", async () => {
  const { readFile } = require("node:fs/promises");
  const source = await readFile("src/lib/site-pages.tsx", "utf8");
  const entries = [
    ...source.matchAll(/^  "?([^":\r\n]*)"?: \{\s+title: "([^"]+)"/gm),
  ];
  assert.equal(entries.length, 32);
  assert.doesNotMatch(
    source,
    /html-react-parser|readFile|dangerouslySetInnerHTML/,
  );
  for (const [, path, title] of entries) {
    const response = await fetch(base + "/" + path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes("<title>" + title + "</title>"), path);
    if (/(?:Folge|Episode)\d+$/.test(path))
      assert.match(html, /data-vjs-player/);
  }
  assert.equal((await fetch(base + "/German/Staffel1")).status, 200);
});
test("uses responsive layouts and a mobile viewport", async () => {
  for (const [path, layout] of [
    ["/", "home-page"],
    ["/German", "language-page"],
    ["/German/Staffel1", "season-page"],
    ["/German/Staffel1/Folgen/Folge1", "episode-page"],
  ]) {
    const html = await (await fetch(base + path)).text();
    assert.ok(html.includes('class="' + layout + '"'));
    assert.match(
      html,
      /name="viewport" content="width=device-width, initial-scale=1"/,
    );
  }
});
test("redirects old HTML URLs and uses extensionless navigation", async () => {
  for (const [old, clean] of [
    ["/index.html", "/"],
    ["/German/index.html", "/German"],
    ["/German/Staffel1/index.html", "/German/Staffel1"],
    ["/German/Staffel1/Folgen/Folge1.html", "/German/Staffel1/Folgen/Folge1"],
  ]) {
    const response = await fetch(base + old + "?test=1", {
      redirect: "manual",
    });
    assert.equal(response.status, 308);
    const target = new URL(response.headers.get("location"), base);
    assert.equal(target.pathname, clean);
    assert.equal(target.searchParams.get("test"), "1");
  }
  const html = await (await fetch(base + "/German/Staffel1")).text();
  assert.doesNotMatch(html, /href="[^"]*\.html/);
  assert.equal(
    (await fetch(base + "/German/Staffel1/Folgen/Folge1")).status,
    200,
  );
});
test("renders players for German and English episodes", async () => {
  for (const path of [
    "/German/Staffel1/Folgen/Folge2.html",
    "/English/Season1/Episodes/Episode1.html",
  ]) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /data-vjs-player/);
    assert.match(html, /data-video-src="\/api\/videos\//);
  }
});
test("does not expose application or git files", async () => {
  for (const path of [
    "/package.json",
    "/src/main.ts",
    "/.git/config",
    "/German/missing.mp4",
  ]) {
    assert.equal((await fetch(base + path)).status, 404);
  }
});
test("videos reside in public and are directly available", async () => {
  const { stat } = require("node:fs/promises");
  for (const name of ["Folge1.mp4", "Folge2.mp4"]) {
    const relative = "videos/German/Staffel1/" + name;
    const info = await stat("public/" + relative);
    const response = await fetch(base + "/" + relative, { method: "HEAD" });
    assert.equal(response.status, 200);
    assert.equal(Number(response.headers.get("content-length")), info.size);
  }
});
test("streams available video ranges or reports an unhydrated LFS pointer", async () => {
  const response = await fetch(
    base + "/api/videos/German/Staffel1/Folgen/Videos/Folge1.mp4",
    { headers: { Range: "bytes=0-31" } },
  );
  if (response.status === 503) {
    assert.match(await response.text(), /git lfs pull/);
  } else {
    assert.equal(response.status, 206);
    assert.match(response.headers.get("content-range"), /^bytes 0-31\//);
    assert.equal((await response.arrayBuffer()).byteLength, 32);
  }
});
