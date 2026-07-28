import { cn } from "@/lib/cn";

/**
 * Surfaces. Film layer uses square editorial cards on ink; Factory layer uses
 * the glass panel (the only place heavy blur is allowed).
 */

export function Card({
  as: As = "div",
  interactive = false,
  className,
  children,
}: {
  as?: React.ElementType;
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <As
      className={cn(
        "border border-border bg-ink-90 p-6",
        interactive &&
          "cursor-pointer transition-colors duration-[var(--duration-base)] hover:border-paper-40",
        className
      )}
      style={{ borderRadius: "var(--radius-none)" }}
    >
      {children}
    </As>
  );
}

export function GlassPanel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("border border-border p-6", className)}
      style={{
        borderRadius: "var(--radius-glass)",
        background: "var(--glass-ink)",
        backdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
        WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
      }}
    >
      {children}
    </div>
  );
}

/** Section title + hairline rule. The site's one heading rhythm. */
export function SectionHeading({
  children,
  level = 2,
  className,
}: {
  children: React.ReactNode;
  level?: 2 | 3;
  className?: string;
}) {
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <div className={cn("flex items-baseline gap-4", className)}>
      <Tag
        className="font-extrabold"
        style={{ fontSize: level === 2 ? "var(--text-h2)" : "var(--text-h3)" }}
      >
        {children}
      </Tag>
      <span className="h-px flex-1 bg-border" aria-hidden />
    </div>
  );
}
