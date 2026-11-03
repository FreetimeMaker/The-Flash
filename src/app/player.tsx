"use client";

import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function Player({ src }: { src: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [failedSource, setFailedSource] = useState<string | null>(null);

  useEffect(() => {
    if (!container.current) return;
    // Create a fresh element each mount: dispose removes it, including in Strict Mode.
    const element = document.createElement("video-js");
    element.classList.add("vjs-default-skin", "vjs-big-play-centered");
    element.setAttribute("aria-label", "Videoplayer");
    container.current.appendChild(element);
    const player = videojs(element, {
      controls: true,
      autoplay: false,
      playsinline: true,
      preload: "metadata",
      fluid: true,
      aspectRatio: "16:9",
      playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
      sources: [{ src, type: "video/mp4" }],
    });
    player.on("error", () => setFailedSource(src));
    player.on("loadedmetadata", () => setFailedSource(null));
    return () => {
      if (!player.isDisposed()) player.dispose();
    };
  }, [src]);

  return (
    <>
      <div data-vjs-player data-video-src={src}>
        <div ref={container} className="player-mount" />
      </div>
      {failedSource === src && (
        <p role="alert">
          Video nicht verfügbar. Die MP4-Datei muss auf dem Server mit Git LFS
          heruntergeladen sein (git lfs pull). Für Browser H.264/AAC verwenden.
        </p>
      )}
      <noscript>
        Bitte JavaScript aktivieren, um den Videoplayer zu verwenden.
      </noscript>
    </>
  );
}
