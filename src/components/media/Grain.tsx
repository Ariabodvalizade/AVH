/**
 * Film-stock grain. The overlay itself is a fixed ::after on this element, so a
 * zero-size div anywhere in the page covers the viewport — which lets each page
 * declare its own stock instead of inheriting one from the layout.
 *
 * film 0.12 · film-bts 0.15 (heaviest) · vvip 0.08 · factory 0.05
 */
export default function Grain({
  layer = "film",
}: {
  layer?: "film" | "film-bts" | "vvip" | "factory";
}) {
  return <div data-layer={layer} className="grain" aria-hidden />;
}
