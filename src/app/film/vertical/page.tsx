import WorkCard from "@/components/film/WorkCard";
import { Tag } from "@/components/ui/Chip";
import { ButtonLink } from "@/components/ui/Button";
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
            <div
              key={r.slug}
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <WorkCard project={r} index={i} aspect="9/16" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {verticalPage.platforms.map((p) => (
            <Tag key={p}>{p}</Tag>
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
        <ButtonLink href="/film#contact" size="lg" className="reveal">
          بریف عمودی بدهید
        </ButtonLink>
      </section>
    </>
  );
}
