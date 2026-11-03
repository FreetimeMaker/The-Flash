# The Flash — Next.js

A Next.js application built with React, TypeScript, and the App Router. All 32 original static HTML pages have been migrated to TSX while preserving their original layout, backgrounds, fonts, images, and colors. No NestJS server or runtime HTML parser is used.

## Features

- German and English season and episode navigation using Next.js `Link`.
- Page-specific titles and backward-compatible URLs such as `/German/Staffel1/Folgen/Folge1.html`.
- Video.js player with playback controls, seeking, volume, fullscreen, and playback speeds from 0.5× to 2×.
- Original 640 × 360 player dimensions.
- Locally bundled player JavaScript and CSS; no player CDN required.
- MP4 streaming through a Next.js route with HTTP byte ranges, HEAD requests, and Git LFS pointer detection.

The player requires JavaScript. Original tracking scripts have not been carried over. Original fonts and remote images still depend on their external providers.

## Requirements

- Node.js 20.9 or later and npm.
- Git LFS to download and manage the video files.
- Optional: FFmpeg to convert videos to browser-compatible MP4 files.

## Getting started

```sh
npm install
git lfs install
git lfs pull
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```sh
npm run build
npm start
```

Run these commands from the project root.

## Project structure

- `src/app/[[...path]]/page.tsx` — App Router page that selects TSX content and provides page-specific metadata.
- `src/lib/site-pages.tsx` — React/TSX content for all 32 migrated pages, including navigation and player references.
- `src/app/layout.tsx` — shared document layout, font links, and favicon configuration.
- `src/app/player.tsx` — Video.js integration, lifecycle cleanup, and playback error messages.
- `src/app/api/videos/[...path]/route.ts` — video streaming endpoint.
- `src/lib/video.ts` — file validation, byte-range handling, streaming, and LFS pointer detection.
- `public/original-assets` — original page-specific stylesheets and favicon.
- `public/videos` — video files managed through Git LFS.
- `test/site.test.cjs` — HTTP integration tests.

The `.html` suffix in existing URLs is retained for compatibility; these are Next.js routes, not HTML files. Overview pages are also available without `index.html`, for example `/German/Staffel1`. Links to pages that have not been implemented return 404.

## Video files and Git LFS

Git LFS stores video files; it is not a streaming service. The Next.js server must have the actual video files checked out, rather than the small text pointers stored in Git.

Place videos directly in their season folders:

```text
public/videos/
  German/
    Staffel1/
      Folge1.mp4
      Folge2.mp4
  English/
    Season1/
      Episode1.mp4
```

The English path illustrates the naming convention; it does not mean that the corresponding video is included.

Naming conventions:

- German: `public/videos/German/Staffel<season>/Folge<episode>.mp4`
- English: `public/videos/English/Season<season>/Episode<episode>.mp4`

The existing `.gitattributes` tracks MP4 files through Git LFS, including files inside `public`. Add, commit, and push new videos normally after installing Git LFS. Its Git hooks handle the LFS upload.

After cloning and during each deployment, run:

```sh
git lfs install
git lfs pull
git lfs ls-files
```

### Streaming URLs

Players use the existing API URL format, which maps to the flat season folders:

```text
/api/videos/German/Staffel1/Folgen/Videos/Folge1.mp4
  → public/videos/German/Staffel1/Folge1.mp4

/api/videos/English/Season1/Episodes/Videos/Episode1.mp4
  → public/videos/English/Season1/Episode1.mp4
```

The API supports seeking through HTTP range requests. Missing files return 404; files that are still LFS pointers return 503 with instructions to run `git lfs pull`.

Because the files are in `public`, they are also directly available at URLs such as `/videos/German/Staffel1/Folge1.mp4`. Direct static requests bypass the API's LFS pointer checks.

### Supported video formats

Use MP4 with H.264 video and AAC audio for broad browser compatibility. An MP4 extension alone does not guarantee compatible codecs. Video.js does not transcode unsupported formats.

For example, convert a source file with FFmpeg:

```sh
ffmpeg -i source.mkv -c:v libx264 -crf 20 -preset medium -c:a aac -b:a 192k -movflags +faststart public/videos/German/Staffel1/Folge3.mp4
```

Create the destination season folder first if it does not exist. Missing episodes are not downloaded automatically.

## Adding or updating pages

Edit `src/lib/site-pages.tsx` to update page content or add a page. Each entry contains a title, a stylesheet directory (`cssKey`), and React content. Use Next.js `Link` for internal navigation and the shared `Player` component for episodes.

Keep the original CSS files in `public/original-assets` when preserving the static site's appearance. Adding a video file does not automatically create its episode page or navigation links.

## Validation

```sh
npm run typecheck
npm test
```

`npm test` creates a production build, starts a temporary server on `127.0.0.1:3197`, and runs HTTP integration tests covering all 32 pages, original styles, player markup, protected application files, public video access, and streaming responses.

The public-file tests expect `Folge1.mp4` and `Folge2.mp4` in `public/videos/German/Staffel1`. HTTP tests do not verify actual browser playback or visual parity; check those in a browser with the real media files.

## Deploy to Vercel: flash.free-time.me

The Next.js application is configured for Vercel in `vercel.json`. The production domain is `https://flash.free-time.me`.

### 1. Prepare same-origin video assets

Videos remain in `public/videos` and are deployed as static assets on the same domain as the application. No external video URL, storage service, or `VIDEO_BASE_URL` variable is used. For example, playback on production loads `https://flash.free-time.me/videos/German/Staffel1/Folge1.mp4`.

The two current MP4 files total approximately 1.14 GB. They must not be bundled into Vercel Functions; Next.js file tracing excludes them from function bundles, while `public` assets remain part of the deployment. On Vercel, the existing video API redirects to the corresponding relative `/videos/...` URL. Vercel's static delivery handles the video transfer instead of a long-running function.

**Deployment size limitation:** this configuration does not bypass Vercel upload, static-file, or bandwidth limits. The documented CLI source-upload limits are 100 MB on Hobby and 1 GB on Pro; these videos exceed both in total. A direct CLI source upload of the current repository therefore exceeds those limits. Check the limits of your actual deployment method and plan before deploying. If Vercel rejects the assets, reduce the media size or use a hosting plan/provider that supports this same-origin deployment. Successful local builds do not prove Vercel will accept the videos. See [Vercel limits](https://vercel.com/docs/limits).

Vercel's Git checkout may contain LFS pointers instead of media. `npm run build:vercel` automatically downloads those objects through the GitHub Git LFS batch API for `FreetimeMaker/The-Flash`, streams them to temporary files, and verifies their size and SHA-256 before replacing each pointer. This does not require Git metadata or an installed Git LFS executable. The download occurs only during the build; viewers still load videos from this site's own `/videos/...` URLs.

Public LFS downloads are attempted without credentials. If GitHub requires authentication, add a sensitive **GITHUB_LFS_TOKEN** environment variable in Vercel, scoped to the required environments, with read access to the repository's LFS objects. Never use a `NEXT_PUBLIC_` prefix or commit the token. Ensure the actual LFS objects have been pushed and GitHub LFS quota is available. Failed downloads or checksum mismatches stop the build rather than publishing pointers. Downloading the media can consume GitHub LFS transfer quota on each clean build.

### 2. Import and deploy the repository

1. Import this Git repository into Vercel.
2. Use the **Next.js** framework preset and the repository root as the Root Directory.
3. Use a Node.js version supported by Vercel that satisfies this project's minimum (20.9).
4. Ensure the real Git LFS video files are available in the build workspace and that your deployment method accepts their size.
5. Deploy. `vercel.json` sets `npm ci` and `npm run build:vercel`; leave the output directory at the Next.js default.

The Vercel build validates the local media and keeps `public/videos` intact. `.vercelignore` does not exclude the videos. Local and self-hosted deployments continue to stream through the API with range handling and pointer detection; on Vercel, pointer validation happens during the build before the files are published as static assets.

### 3. Connect the custom domain

1. In Vercel, open **Project → Settings → Domains** and add **flash.free-time.me** to the production environment.
2. At the DNS provider for `free-time.me`, create a **CNAME** for **flash** using the exact target shown by Vercel. Do not guess the target; Vercel may assign a project-specific value.
3. Remove conflicting A/AAAA/CNAME records for the same `flash` hostname, without changing records for other services.
4. If Vercel requests ownership verification, add the exact TXT record it provides.
5. Wait for Vercel to show a valid domain configuration and provision HTTPS.
6. Verify the homepage, an episode, playback, seeking, and fullscreen at `https://flash.free-time.me`. Also verify an API video URL redirects to `/videos/...` on the same domain.

Repository configuration alone cannot register the domain, create DNS records, or deploy to your Vercel account. Those steps require access to the relevant accounts. Preview deployments are not forced to redirect to the production domain.

## Self-hosting and access

- A self-hosted Node.js deployment serves files from `public/videos`. Include `public` and run `git lfs pull` before starting it.
- GitHub Pages or a static export cannot run the video API.
- Use HTTPS through your hosting platform or a reverse proxy.
- This application has no authentication. Both API URLs and direct `/videos/...` URLs are public unless access controls are added at every applicable layer.
- Check storage, deployment size, and bandwidth limits for Git LFS and your hosting provider.
- Only publish videos you have the rights to distribute.
