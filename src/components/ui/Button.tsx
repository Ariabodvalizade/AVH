import { cn } from "@/lib/cn";

export type ButtonVariant = "kodak" | "hairline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * The single action primitive. Framework-free by design: this file must not
 * import next/link, so the compiled component renders anywhere (including the
 * design-system bundle). Links reuse the look via `buttonClasses`.
 *
 * `kodak` is the only filled variant — it carries most of a page's 10% accent
 * budget, so a screen gets exactly one.
 */
const base =
  "inline-flex items-center justify-center gap-2 font-bold cursor-pointer " +
  "transition-[color,background-color,border-color,transform] duration-[var(--duration-fast)] " +
  "disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40";

const variants: Record<ButtonVariant, string> = {
  kodak: "bg-kodak text-ink hover:-translate-y-px active:translate-y-0 active:bg-kodak-press",
  hairline: "border border-border text-paper hover:border-kodak hover:text-kodak",
  ghost: "text-paper-70 hover:text-paper",
  danger: "border border-destructive text-destructive hover:bg-destructive hover:text-paper",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-11 px-6",
  lg: "min-h-14 px-10 text-lg",
};

/** Class recipe — use on any element that should look like a button (e.g. next/link). */
export function buttonClasses({
  variant = "kodak",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], "rounded-[var(--radius-control)]", className);
}

function Spinner() {
  return (
    <span
      aria-hidden
      className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  );
}

export function Button({
  variant,
  size,
  loading = false,
  className,
  children,
  ...props
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={props.disabled || loading}
      aria-busy={loading || undefined}
      className={buttonClasses({ variant, size, className })}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}
