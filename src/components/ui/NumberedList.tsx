import { faDigits } from "@/lib/cn";

/**
 * Editorial numbered list — VVIP offerings, process steps.
 * Numbering is used only where order carries meaning; the numerals are
 * Persian and carry the kodak accent.
 */
export default function NumberedList({
  items,
  size = "md",
}: {
  items: { title: string; body?: string }[];
  size?: "md" | "lg";
}) {
  return (
    <ol className="flex flex-col">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="grid grid-cols-[3rem_1fr] gap-6 border-b border-border py-6 last:border-b-0"
        >
          <span
            aria-hidden
            className="font-extrabold text-[var(--color-accent-text)] tabular-nums"
            style={{ fontSize: size === "lg" ? "var(--text-h3)" : "1.5rem" }}
          >
            {faDigits(i + 1)}
          </span>
          <div>
            <h3
              className="font-bold"
              style={{ fontSize: size === "lg" ? "var(--text-h3)" : "1.125rem" }}
            >
              {item.title}
            </h3>
            {item.body && (
              <p className="mt-2 max-w-[56ch] leading-[1.8] text-muted">{item.body}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
