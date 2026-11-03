import { readdir } from "node:fs/promises";
import { hydrateVideo } from "./lfs-download.mjs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

async function checkVideos(directory) {
  let count = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) count += await checkVideos(file);
    else if (entry.name.endsWith(".mp4")) {
      await hydrateVideo(file);
      count++;
    }
  }
  return count;
}
const count = await checkVideos("public/videos");
if (!count)
  throw new Error(
    "No MP4 files in public/videos. Download the Git LFS files before deploying.",
  );
console.log(
  `Validated ${count} local video files; keeping them as same-origin public assets.`,
);
const result = spawnSync(
  process.execPath,
  ["node_modules/next/dist/bin/next", "build"],
  { stdio: "inherit", env: process.env },
);
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
