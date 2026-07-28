import { cn } from "@/lib/cn";

/** Static label — platform tags, categories on cards. Never interactive. */
export function Tag({
  children,
  tone = "kodak",
  className,
}: {
  children: React.ReactNode;
  tone?: "kodak" | "muted";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-3 py-1 text-sm",
        tone === "kodak" ? "border-kodak/50 text-kodak" : "border-border text-paper-40",
        className
      )}
      style={{ borderRadius: "var(--radius-control)" }}
    >
      {children}
    </span>
  );
}

/** Toggle chip — filter rows. Selection is announced, not just colored. */
export function FilterChip({
  active,
  className,
  children,
  ...props
}: { active: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-pressed={active}
      {...props}
      className={cn(
        "min-h-9 cursor-pointer border px-4 text-sm transition-colors duration-[var(--duration-fast)]",
        active
          ? "border-kodak text-kodak"
          : "border-border text-paper-70 hover:border-paper-40 hover:text-paper",
        className
      )}
      style={{ borderRadius: "var(--radius-control)" }}
    >
      {children}
    </button>
  );
}
