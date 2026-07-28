"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Lenis smooth scroll — mounted once per site layer. No-op under reduced motion. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true });
    return () => lenis.destroy();
  }, []);
  return null;
}
