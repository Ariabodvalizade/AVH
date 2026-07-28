"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

/**
 * Mobile navigation for the Film layer. Full-screen ink sheet, links staggered
 * in. Locks body scroll while open and closes on Esc or route click.
 */
export default function MobileMenu({
  items,
}: {
  items: readonly { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="باز کردن منو"
        aria-expanded={open}
        className="grid size-11 cursor-pointer place-items-center text-paper"
      >
        <Menu size={22} strokeWidth={1.5} aria-hidden />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[var(--z-modal)] flex flex-col bg-ink"
          role="dialog"
          aria-modal="true"
          aria-label="منوی اصلی"
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <span className="font-bold">آوای هنر هفتم</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="بستن منو"
              className="grid size-11 cursor-pointer place-items-center"
            >
              <X size={22} strokeWidth={1.5} aria-hidden />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
            {items.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="reveal is-in border-b border-border py-4 text-2xl font-bold transition-colors hover:text-kodak"
                style={{ "--reveal-delay": `${i * 40}ms` } as React.CSSProperties}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
