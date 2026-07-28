import { Plus } from "lucide-react";

/**
 * FAQ / progressive disclosure. Native <details> so it works without JS and
 * stays keyboard-operable by default.
 */
export default function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold marker:hidden [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus
              size={20}
              strokeWidth={1.5}
              aria-hidden
              className="shrink-0 text-kodak transition-transform duration-[var(--duration-base)] group-open:rotate-45"
            />
          </summary>
          <p className="max-w-[60ch] pb-5 leading-[1.8] text-paper-70">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
