/**
 * Media discipline wrapper: grayscale at rest, color on reveal.
 * reveal="hover"  → colors on :hover / parent .group hover (work cards)
 * reveal="in-view"→ colors when scrolled into view (heroes, galleries)
 * Aspect is always reserved — CLS 0.
 */
export default function MediaFrame({
  src,
  alt,
  aspect = "16/10",
  reveal = "hover",
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  aspect?: string;
  reveal?: "hover" | "in-view";
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-ink-90 ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`media-rest absolute inset-0 size-full object-cover ${imgClassName}`}
        data-reveal={reveal}
        loading="lazy"
      />
    </div>
  );
}
