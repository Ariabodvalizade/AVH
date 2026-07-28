import { cn } from "@/lib/cn";

/**
 * BTS still in a paper frame. The tilt is static CSS (never animated) so the
 * page reads as printed photographs on a table rather than a UI effect.
 */
export default function Polaroid({
  src,
  caption,
  tilt = 0,
  className,
}: {
  src: string;
  caption: string;
  tilt?: number;
  className?: string;
}) {
  return (
    <figure
      className={cn("bg-paper p-3 pb-10 shadow-[var(--shadow-lg)]", className)}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative overflow-hidden bg-ink-80" style={{ aspectRatio: "7/5" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption}
          loading="lazy"
          data-reveal="in-view"
          className="media-rest absolute inset-0 size-full object-cover [filter:grayscale(1)_sepia(0.25)_contrast(1.05)]"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-[1.8] text-ink-60">{caption}</figcaption>
    </figure>
  );
}
