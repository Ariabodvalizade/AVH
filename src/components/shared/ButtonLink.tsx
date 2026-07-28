import Link from "next/link";
import { buttonClasses, type ButtonVariant, type ButtonSize } from "@/components/ui/Button";

/**
 * App-level link that wears the Button look. Lives outside components/ui so the
 * design-system library stays framework-free; this is the only place next/link
 * and the button recipe meet.
 */
export default function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    return (
      <a href={href} className={buttonClasses({ variant, size, className })}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props} className={buttonClasses({ variant, size, className })}>
      {children}
    </Link>
  );
}
