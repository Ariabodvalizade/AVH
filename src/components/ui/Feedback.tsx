import { cn } from "@/lib/cn";

/** Loading placeholder — reserves exact space so nothing shifts (CLS 0). */
export function Skeleton({
  className,
  aspect,
}: {
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("animate-pulse bg-ink-80", className)}
      style={aspect ? { aspectRatio: aspect } : undefined}
    />
  );
}

/** Empty state — always says what to do next, never just "nothing here". */
export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4 border border-dashed border-border px-6 py-16 text-center">
      <p className="text-lg font-bold">{title}</p>
      {body && <p className="max-w-[44ch] text-sm text-muted">{body}</p>}
      {action}
    </div>
  );
}

/** Inline status message. Errors get role=alert; the rest stay polite. */
export function Notice({
  tone = "info",
  children,
}: {
  tone?: "info" | "success" | "error";
  children: React.ReactNode;
}) {
  const tones = {
    info: "border-border text-muted",
    success: "border-[var(--color-accent-text)] text-[var(--color-accent-text)]",
    error: "border-[var(--color-error)] text-[var(--color-error)]",
  } as const;

  return (
    <p
      role={tone === "error" ? "alert" : undefined}
      aria-live={tone === "error" ? undefined : "polite"}
      className={cn("border-s-2 py-2 ps-4 text-sm", tones[tone])}
    >
      {children}
    </p>
  );
}
