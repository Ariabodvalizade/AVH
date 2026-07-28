import MediaFrame from "@/components/media/MediaFrame";
import Accordion from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/Surface";
import Scrolly from "./Scrolly";
import Waitlist from "./Waitlist";
import { glassesPage } from "@/content/factory";

export const metadata = {
  title: "عینک AVH — واقعیت افزوده برای کار",
  description:
    "عینک واقعیت افزودهٔ AVH: میدان دید ۵۲ درجه، ۹۸ گرم، فرمان صوتی فارسی روی خود دستگاه.",
};

export default function GlassesPage() {
  return (
    <>
      {/* ۰۱ — هیرو */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-24 md:grid-cols-2">
        <div>
          <p className="font-latin text-sm tracking-[0.25em] text-kodak" dir="ltr">
            {glassesPage.hero.eyebrow}
          </p>
          <h1
            className="reveal mt-8 max-w-[14ch] font-extrabold"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--leading-display)" }}
          >
            {glassesPage.hero.headline}
          </h1>
          <p
            className="reveal mt-6 max-w-[42ch] text-lg leading-[1.8] text-muted"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {glassesPage.hero.sub}
          </p>
        </div>
        <MediaFrame
          src={glassesPage.hero.media}
          alt="عینک واقعیت افزودهٔ AVH"
          aspect="4/3"
          reveal="in-view"
          className="reveal"
        />
      </section>

      {/* ۰۲ — اسکرولی‌تلینگ سه‌بعدی (بوم پین‌شده) */}
      <Scrolly />

      {/* ۰۳ — جدول مشخصات (سطح کاغذ) */}
      <section data-surface="paper" className="bg-paper text-ink">
        <div className="mx-auto max-w-5xl px-6 py-28">
          <h2 className="font-extrabold" style={{ fontSize: "var(--text-h2)" }}>
            مشخصات فنی
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {glassesPage.specs.map((group) => (
              <div key={group.group} className="reveal">
                <h3 className="text-sm tracking-[0.15em] text-ink-60">{group.group}</h3>
                <dl className="mt-4">
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-6 border-b border-border py-3"
                    >
                      <dt className="text-ink-60">{row.label}</dt>
                      <dd className="font-bold tabular-nums">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ۰۴ — گالری */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeading className="reveal mb-10">گالری</SectionHeading>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {glassesPage.gallery.map((src, i) => (
            <div
              key={src}
              className="reveal"
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <MediaFrame src={src} alt={`نمای ${i + 1} از عینک AVH`} aspect="1/1" reveal="in-view" />
            </div>
          ))}
        </div>
      </section>

      {/* ۰۵ — فهرست انتظار */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-extrabold" style={{ fontSize: "var(--text-h2)" }}>
              {glassesPage.waitlist.headline}
            </h2>
            <p className="mt-4 max-w-[44ch] leading-[1.8] text-muted">
              {glassesPage.waitlist.body}
            </p>
          </div>
          <Waitlist />
        </div>
      </section>

      {/* ۰۶ — پرسش‌های متداول */}
      <section className="mx-auto max-w-3xl px-6 py-28">
        <SectionHeading className="reveal mb-10">پرسش‌های متداول</SectionHeading>
        <Accordion items={[...glassesPage.faq]} />
      </section>
    </>
  );
}
