"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { glassesPage } from "@/content/factory";

/**
 * Pinned scrollytelling. The canvas sticks while the feature panels scroll past
 * it; scroll position inside the section becomes 0→1 progress for the scene.
 *
 * Pinning is CSS `position: sticky` rather than a scroll library — same result,
 * no extra dependency, and it degrades to a normal stacked layout if JS fails.
 *
 * `three` arrives only through this dynamic import, and only on the client.
 */
const GlassesScene = dynamic(() => import("@/components/three/GlassesScene"), {
  ssr: false,
  loading: () => <div className="size-full animate-pulse bg-ink-90" />,
});

export default function Scrolly() {
  const section = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [render3d, setRender3d] = useState(false);

  useEffect(() => {
    // Static poster instead of a live scene for reduced-motion or low-power devices.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowCore = (navigator.hardwareConcurrency ?? 8) <= 2;
    setRender3d(!reduced && !lowCore);
  }, []);

  useEffect(() => {
    const el = section.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const span = rect.height - window.innerHeight;
        if (span <= 0) return;
        const p = Math.min(1, Math.max(0, -rect.top / span));
        setProgress(p);
        setActive(
          Math.min(
            glassesPage.featureSections.length - 1,
            Math.floor(p * glassesPage.featureSections.length)
          )
        );
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={section} className="relative">
      <div className="sticky top-0 mx-auto grid h-dvh max-w-7xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:gap-16">
        {/* بوم سه‌بعدی — نسبت رزروشده، بدون جابه‌جایی چیدمان */}
        <div className="relative h-[45dvh] md:h-[70dvh]">
          {render3d ? (
            <GlassesScene progress={progress} />
          ) : (
            <img
              src={glassesPage.hero.media}
              alt="نمای عینک واقعیت افزودهٔ AVH"
              className="media-rest in-view size-full object-contain"
            />
          )}
          <div
            className="pointer-events-none absolute bottom-0 start-0 h-px bg-kodak transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
            aria-hidden
          />
        </div>

        {/* پنل ویژگی‌ها */}
        <div className="relative">
          {glassesPage.featureSections.map((f, i) => (
            <div
              key={f.headline}
              aria-hidden={i !== active}
              className="transition-opacity duration-[var(--duration-base)]"
              style={{
                opacity: i === active ? 1 : 0,
                position: i === 0 ? "relative" : "absolute",
                insetInlineStart: i === 0 ? undefined : 0,
                top: i === 0 ? undefined : 0,
              }}
            >
              <p className="text-sm tracking-[0.2em] text-kodak">{f.eyebrow}</p>
              <h3
                className="mt-4 font-extrabold"
                style={{ fontSize: "var(--text-h2)", lineHeight: "var(--leading-display)" }}
              >
                {f.headline}
              </h3>
              <p className="mt-6 max-w-[46ch] text-lg leading-[1.8] text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ارتفاع اسکرول: یک ویوپورت به‌ازای هر ویژگی */}
      <div style={{ height: `${glassesPage.featureSections.length * 100}dvh` }} aria-hidden />

      {/* متن ویژگی‌ها برای موتور جست‌وجو و اسکرین‌ریدر، بیرون از مکانیزم پین */}
      <div className="sr-only">
        {glassesPage.featureSections.map((f) => (
          <section key={f.headline}>
            <h3>{f.headline}</h3>
            <p>{f.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
