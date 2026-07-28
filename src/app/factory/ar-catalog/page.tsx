import MediaFrame from "@/components/media/MediaFrame";
import { SectionHeading } from "@/components/ui/Surface";
import { Tag } from "@/components/ui/Chip";
import ButtonLink from "@/components/shared/ButtonLink";
import CatalogGrid from "./CatalogGrid";
import { arCatalogPage } from "@/content/factory";
import { faDigits } from "@/lib/cn";

export const metadata = {
  title: "کاتالوگ AR — محصولات صنعتی در واقعیت افزوده",
  description:
    "کاتالوگ سه‌بعدی محصولات صنعتی: مشتری با یک لینک محصول را در ابعاد واقعی در فضای خودش می‌بیند.",
};

export default function ArCatalogPage() {
  return (
    <>
      {/* ۰۱ — هیرو */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h1
            className="reveal max-w-[15ch] font-extrabold"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--leading-display)" }}
          >
            {arCatalogPage.hero.headline}
          </h1>
          <p
            className="reveal mt-6 max-w-[46ch] text-lg leading-[1.8] text-muted"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {arCatalogPage.hero.sub}
          </p>
        </div>
        <MediaFrame
          src={arCatalogPage.hero.media}
          alt="نمایش محصول صنعتی در واقعیت افزوده"
          aspect="16/10"
          reveal="in-view"
          className="reveal rounded-[var(--radius-glass)]"
        />
      </section>

      {/* ۰۲ — چطور کار می‌کند: سه گام روی یک خط موی کداک */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading className="reveal mb-16" level={3}>
            چطور کار می‌کند
          </SectionHeading>

          <ol className="relative grid gap-12 md:grid-cols-3">
            {/* خط اتصال — عمدهٔ بودجهٔ کداک این صفحه */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-5 hidden h-px bg-gradient-to-l from-transparent via-kodak to-transparent md:block"
            />
            {arCatalogPage.steps.map((step, i) => (
              <li
                key={step.title}
                className="reveal relative"
                style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
              >
                <span className="relative z-10 grid size-10 place-items-center rounded-full border border-kodak bg-ink font-bold tabular-nums text-kodak">
                  {faDigits(i + 1)}
                </span>
                <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 max-w-[36ch] leading-[1.8] text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ۰۳ — کاتالوگ نمونه */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeading className="reveal mb-10">کاتالوگ نمونه</SectionHeading>
        <CatalogGrid />
      </section>

      {/* ۰۴ — صنایع */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="reveal text-sm text-muted">صنایعی که با آن‌ها کار کرده‌ایم</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {arCatalogPage.industries.map((ind) => (
            <Tag key={ind} tone="muted">
              {ind}
            </Tag>
          ))}
        </div>
      </section>

      {/* ۰۵ — CTA */}
      <section data-surface="paper" className="bg-paper text-ink">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-24 text-center">
          <h2 className="font-extrabold" style={{ fontSize: "var(--text-h2)" }}>
            محصول خودتان را ببینید
          </h2>
          <p className="max-w-[48ch] leading-[1.8] text-ink-60">
            یک نمونه از محصولتان را رایگان مدل می‌کنیم تا پیش از هر تصمیمی نتیجه را در گوشیِ
            خودتان ببینید.
          </p>
          <ButtonLink href="mailto:hello@avh.studio?subject=درخواست دموی کاتالوگ AR" size="lg">
            درخواست دمو
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
