import MediaFrame from "@/components/media/MediaFrame";
import { verticalReels, verticalPage } from "@/content/film";

export const metadata = { title: "عمودی — تولید ۹:۱۶" };

export default function VerticalPage() {
  return (
    <>
      {/* ۰۱ — هیروی بیانیه */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-28">
        <h1
          className="reveal max-w-[16ch] font-extrabold"
          style={{ fontSize: "var(--text-h1)", lineHeight: "var(--leading-display)" }}
        >
          {verticalPage.headline}
        </h1>
        <p
          className="reveal mt-6 max-w-[48ch] text-lg text-paper-70"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          {verticalPage.intro}
        </p>
      </section>

      {/* ۰۲ — گرید ریل‌ها (۹:۱۶) */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
          {verticalReels.map((r, i) => (
            <article
              key={r.slug}
              className="group reveal cursor-pointer"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              data-cursor="play"
            >
              <MediaFrame
                src={r.poster}
                alt={`ریل عمودی ${r.title}`}
                aspect="9/16"
                reveal="hover"
                className="border border-border"
                imgClassName="transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-105"
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-bold">{r.title}</h3>
                <span className="text-xs text-paper-40">{r.client}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {verticalPage.platforms.map((p) => (
            <span
              key={p}
              className="border border-kodak/50 px-3 py-1 text-xs text-kodak"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ۰۳ — یادداشت فرایند (کاغذ) */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="reveal max-w-[60ch] text-lg leading-[1.8]">{verticalPage.processNote}</p>
        </div>
      </section>

      {/* ۰۴ — CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <a
          href="/film#contact"
          className="reveal inline-block bg-kodak px-10 py-4 text-lg font-bold text-ink transition-transform duration-[var(--duration-fast)] hover:-translate-y-px"
          style={{ borderRadius: "var(--radius-control)" }}
        >
          بریف عمودی بدهید
        </a>
      </section>
    </>
  );
}
