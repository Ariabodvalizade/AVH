"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Dialog built on <dialog> so focus trapping, Esc and inertness come from the
 * platform. Scrim is ink at 60% + blur; the panel animates from scale/fade.
 */
export default function Modal({
  open,
  onClose,
  title,
  surface = "ink",
  className,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  surface?: "ink" | "paper";
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-label={title}
      className={cn(
        "m-auto w-[min(56rem,92vw)] border p-0 backdrop:backdrop-blur-sm",
        surface === "ink"
          ? "border-border bg-ink text-paper"
          : "border-border-paper bg-paper text-ink",
        className
      )}
      style={{ borderRadius: "var(--radius-none)" }}
    >
      <div className="flex items-center justify-between gap-4 border-b border-inherit p-6">
        <h2 className="text-lg font-bold">{title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن"
          className="grid size-11 cursor-pointer place-items-center transition-colors hover:text-kodak"
        >
          <X size={20} strokeWidth={1.5} aria-hidden />
        </button>
      </div>
      <div className="p-6">{children}</div>
    </dialog>
  );
}
