"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor — desktop pointer-fine only, absent on touch.
 * Morphs to a labeled ring over [data-cursor="play"] targets.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"dot" | "play">("dot");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let raf = 0;
    let tx = -100, ty = -100, x = -100, y = -100;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = (e.target as HTMLElement).closest("[data-cursor='play']");
      setMode(t ? "play" : "dot");
    };
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed start-0 top-0 z-[var(--z-cursor)]"
    >
      <div
        className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 ${
          mode === "play"
            ? "size-20 border-kodak bg-ink/60 text-kodak"
            : "size-3 border-paper/0 bg-kodak"
        }`}
      >
        {mode === "play" && <span className="text-xs font-bold">پخش</span>}
      </div>
    </div>
  );
}
