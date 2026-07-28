import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Grain from "@/components/media/Grain";
import Polaroid from "@/components/film/Polaroid";
import FilmStrip from "@/components/film/FilmStrip";
import ButtonLink from "@/components/shared/ButtonLink";
import { btsPage } from "@/content/film";

export const metadata = {
  title: "پشت صحنه — جستارهای عکاسی",
  description: "ساعت‌هایی که به یک قاب ختم می‌شوند: نور، دست‌ها، و خطاهای پیش از رندر نهایی.",
};

const tilts = [-2, 1.5, -1];

export default function BtsPage() {
  return (
    <>
      <Grain layer="film-bts" />

      {/* ۰۱ — مانیفست تاریکخانه (کاغذ) */}
      <section data-surface="paper" className="bg-paper text-ink">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="font-latin text-sm tracking-[0.2em] text-ink-60" dir="ltr">
            BEHIND THE SCENES
          </p>
          <h1
            className="reveal mt-6 font-extrabold"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--leading-display)" }}
          >
            پشت صحنه
          </h1>
          <p
            className="reveal mx-auto mt-8 max-w-[56ch] text-lg leading-[1.8] text-ink-60"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {btsPage.manifesto}
          </p>
        </div>
      </section>

      {/* ۰۲ — جریان جستارها */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        {btsPage.essays.map((essay, index) => (
          <article key={essay.slug}>
            {index > 0 && <FilmStrip />}

            <header className="reveal flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-extrabold" style={{ fontSize: "var(--text-h2)" }}>
                {essay.project}
              </h2>
              <Link
                href="/film#work"
                className="group inline-flex items-center gap-2 text-sm font-bold text-kodak"
              >
                دیدن فیلم نهایی
                <ArrowLeft
                  size={16}
                  strokeWidth={2}
                  aria-hidden
                  className="transition-transform duration-[var(--duration-base)] group-hover:-translate-x-1"
                />
              </Link>
            </header>

            <p className="reveal mt-6 max-w-[60ch] text-lg leading-[1.8] text-paper-70">
              {essay.intro}
            </p>

            {/* قاب تمام‌عرض */}
            <div className="reveal relative mt-12 overflow-hidden" style={{ aspectRatio: "21/9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={essay.hero}
                alt={`پشت صحنهٔ ${essay.project}`}
                loading="lazy"
                data-reveal="in-view"
                className="media-rest absolute inset-0 size-full object-cover [filter:grayscale(1)_sepia(0.25)_contrast(1.05)]"
              />
            </div>

            {/* پولاروییدها */}
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {essay.stills.map((s, i) => (
                <div
                  key={s.src + i}
                  className="reveal"
                  style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                >
                  <Polaroid src={s.src} caption={s.caption} tilt={tilts[i % tilts.length]} />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* ۰۳ — CTA */}
      <section className="border-t border-border py-20 text-center">
        <ButtonLink href="/film#work" variant="hairline" size="lg" className="reveal">
          فیلم‌های نهایی را ببینید
        </ButtonLink>
      </section>
    </>
  );
}
