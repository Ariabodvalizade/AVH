"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Video is always HLS from Cloudflare Stream — never a raw <video src="*.mp4">.
 * Renders the grayscale poster and reserves the exact aspect box; the iframe is
 * only mounted after an explicit play, so no stream loads on page view.
 */
export default function ShowreelPlayer({
  playbackId,
  poster,
  title,
  aspect = "16/9",
}: {
  playbackId: string;
  poster: string;
  title: string;
  aspect?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-ink-90"
      style={{ aspectRatio: aspect }}
    >
      {playing ? (
        <iframe
          src={`https://customer-placeholder.cloudflarestream.com/${playbackId}/iframe?autoplay=true`}
          title={title}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 size-full cursor-pointer"
          aria-label={`پخش ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            aria-hidden
            className="media-rest absolute inset-0 size-full object-cover"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-20 place-items-center rounded-full border border-kodak bg-ink/60 text-kodak transition-transform duration-[var(--duration-base)] group-hover:scale-110">
              <Play size={22} strokeWidth={1.5} aria-hidden />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
