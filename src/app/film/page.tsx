import Link from "next/link";
import Grain from "@/components/media/Grain";
import WorkGrid from "@/components/film/WorkGrid";
import { SectionHeading } from "@/components/ui/Surface";
import { filmHome } from "@/content/film";

export const metadata = { title: "AVH FILM — فیلم تبلیغاتی، CGI و موشن سه‌بعدی" };

export default function FilmHomePage() {
  return (
    <>
      <Grain />
      {/* ۰۱ — هیروی نمایشریل (پوستر تا اتصال Cloudflare Stream) */}
      <section className="relative flex min-h-[88dvh] items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/posters/p1.svg"
          alt=""
          aria-hidden
          data-reveal="in-view"
          className="media-rest absolute inset-0 size-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        <div className="relative z-10 px-6 text-center">
          <h1
            className="hero-title font-extrabold"
            style={{ fontSize: "var(--text-display)", lineHeight: "var(--leading-display)" }}
          >
            {filmHome.headline}
          </h1>
          <p className="hero-sub mt-4 text-lg text-paper-70">{filmHome.sub}</p>
        </div>
        <div className="absolute bottom-6 start-1/2 z-10 translate-x-1/2 text-sm text-paper-40">
          ↓ اسکرول
        </div>
        <button
          type="button"
          className="absolute bottom-6 end-6 z-10 cursor-pointer border border-border px-3 py-1.5 text-xs text-paper-70 transition-colors hover:border-kodak hover:text-kodak"
          style={{ borderRadius: "var(--radius-control)" }}
        >
          صدا: خاموش
        </button>
      </section>

      {/* ۰۲ — کارهای منتخب */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading className="reveal mb-10">کارهای منتخب</SectionHeading>
        <WorkGrid />
      </section>

      {/* ۰۳ — خدمات */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-6 py-20 md:grid-cols-3 md:gap-10">
          {filmHome.services.map((s, i) => (
            <div
              key={s.title}
              className="reveal py-6"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 max-w-[38ch] text-sm leading-[1.8] text-paper-70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ۰۴ — مشتریان */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="reveal text-sm text-paper-40">برندهایی که با ما روایت ساخته‌اند</p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {filmHome.clients.map((c, i) => (
            <div
              key={c}
              className="reveal flex h-16 items-center justify-center border border-border text-sm text-paper-40 transition-colors duration-[var(--duration-base)] hover:border-paper-40 hover:text-paper"
              style={{ "--reveal-delay": `${i * 40}ms` } as React.CSSProperties}
            >
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* ۰۵ — فلسفه (سطح کاغذ) */}
      <section data-surface="paper" className="bg-paper text-ink">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <p
            className="reveal font-extrabold"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--leading-display)" }}
          >
            «{filmHome.philosophy.statement}»
          </p>
          <p className="reveal mx-auto mt-6 max-w-[52ch] text-ink-60" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {filmHome.philosophy.body}
          </p>
          <Link
            href="/about"
            className="reveal mt-8 inline-block border-b-2 border-kodak pb-1 font-bold text-ink transition-colors hover:text-ink-60"
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            داستان ما را بخوانید
          </Link>
        </div>
      </section>
    </>
  );
}
