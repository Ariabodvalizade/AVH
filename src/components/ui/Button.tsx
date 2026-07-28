import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "kodak" | "hairline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * The single action primitive.
 * `kodak` is the only filled variant — it carries most of the page's 10% accent
 * budget, so a screen gets exactly one. Everything else is a hairline or ghost.
 */
const base =
  "inline-flex items-center justify-center gap-2 font-bold cursor-pointer " +
  "transition-[color,background-color,border-color,transform] duration-[var(--duration-fast)] " +
  "disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40";

const variants: Record<ButtonVariant, string> = {
  kodak:
    "bg-kodak text-ink hover:-translate-y-px active:translate-y-0 active:bg-kodak-press",
  hairline:
    "border border-border text-paper hover:border-kodak hover:text-kodak",
  ghost: "text-paper-70 hover:text-paper",
  danger:
    "border border-destructive text-destructive hover:bg-destructive hover:text-paper",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-11 px-6",
  lg: "min-h-14 px-10 text-lg",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
};

function classes({ variant = "kodak", size = "md", className }: CommonProps) {
  return cn(base, variants[variant], sizes[size], className);
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
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={props.disabled || loading}
      aria-busy={loading || undefined}
      className={classes({ variant, size, className, children })}
      style={{ borderRadius: "var(--radius-control)", ...props.style }}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >) {
  return (
    <Link
      href={href}
      {...props}
      className={classes({ variant, size, className, children })}
      style={{ borderRadius: "var(--radius-control)" }}
    >
      {children}
    </Link>
  );
}
