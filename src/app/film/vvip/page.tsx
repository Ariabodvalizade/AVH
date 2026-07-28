import Grain from "@/components/media/Grain";
import NumberedList from "@/components/ui/NumberedList";
import MediaFrame from "@/components/media/MediaFrame";
import InquiryForm from "./InquiryForm";
import { vvipPage, projects } from "@/content/film";

export const metadata = {
  title: "VVIP — تولید ممتاز",
  description: "تولید ممتاز آوای هنر هفتم: کارگردانی اختصاصی، تیم بسته، و اکران خصوصی.",
};

/**
 * The quietest page on the site: one statement per viewport, --space-3xl
 * rhythm, and exactly three kodak moments — the wordmark hairline, one inline
 * emphasis in the manifesto, and the inquiry CTA inside the form.
 */
export default function VvipPage() {
  const refSlugs: readonly string[] = vvipPage.references;
  const references = projects.filter((p) => refSlugs.includes(p.slug));

  return (
    <>
      <Grain layer="vvip" />

      {/* ۰۱ — مانیفست */}
      <section className="flex min-h-[80dvh] items-center">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-kodak" aria-hidden />
            <span className="font-latin text-sm tracking-[0.25em] text-muted" dir="ltr">
              VVIP
            </span>
          </div>
          <h1
            className="reveal mt-12 max-w-[18ch] font-extrabold"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--leading-display)" }}
          >
            {vvipPage.manifesto.line}
          </h1>
          <p
            className="reveal mt-10 max-w-[54ch] text-lg leading-[1.8] text-muted"
            style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
          >
            {vvipPage.manifesto.paragraph}
          </p>
        </div>
      </section>

      {/* ۰۲ — خدمات ویژه */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <p className="reveal text-sm text-muted">خدمات</p>
        <div className="reveal mt-10">
          <NumberedList items={[...vvipPage.offerings.map((o) => ({ title: o.title, body: o.body }))]} size="lg" />
        </div>
      </section>

      {/* ۰۳ — فرایند */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 md:grid-cols-3">
          {vvipPage.process.map((step, i) => (
            <div
              key={step.title}
              className="reveal"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-[1.8] text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ۰۴ — مراجع منتخب (بزرگ‌ترین ارائهٔ مدیا در سایت) */}
      <section className="py-32">
        <p className="mx-auto max-w-5xl px-6 text-sm text-muted">مراجع</p>
        <div className="mt-12 flex flex-col gap-24">
          {references.map((p) => (
            <figure key={p.slug} className="reveal">
              <MediaFrame
                src={p.poster}
                alt={`نمای فیلم ${p.title}`}
                aspect="21/9"
                reveal="hover"
              />
              <figcaption className="mx-auto mt-5 max-w-5xl px-6 text-sm text-muted">
                {p.title} — {p.client} · {p.year}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ۰۵ — فرم درخواست خصوصی (کاغذ) */}
      <section data-surface="paper" className="bg-paper text-ink">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 py-28 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-extrabold" style={{ fontSize: "var(--text-h3)" }}>
              درخواست خصوصی
            </h2>
            <p className="mt-4 max-w-[40ch] leading-[1.8] text-ink-60">{vvipPage.form.intro}</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
