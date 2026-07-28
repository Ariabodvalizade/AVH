import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MediaFrame from "@/components/media/MediaFrame";
import { GlassPanel } from "@/components/ui/Surface";
import { Tag } from "@/components/ui/Chip";
import { factoryHome } from "@/content/factory";

export const metadata = {
  title: "AVH FACTORY — عینک AR، کاتالوگ سه‌بعدی، تیزر صنعتی",
  description:
    "بازوی محصول و فناوری آوای هنر هفتم: عینک واقعیت افزوده برای صنعت و کاتالوگ AR بدون نصب اپلیکیشن.",
};

export default function FactoryHomePage() {
  return (
    <>
      {/* ۰۱ — هیرو */}
      <section className="relative overflow-hidden">
        <img
          src={factoryHome.hero.media}
          alt=""
          aria-hidden
          data-reveal="in-view"
          className="media-rest absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-40">
          <p className="font-latin text-sm tracking-[0.25em] text-kodak" dir="ltr">
            {factoryHome.hero.eyebrow}
          </p>
          <h1
            className="reveal mt-8 max-w-[16ch] font-extrabold"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--leading-display)" }}
          >
            {factoryHome.hero.headline}
          </h1>
          <p
            className="reveal mt-8 max-w-[52ch] text-lg leading-[1.8] text-muted"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {factoryHome.hero.sub}
          </p>
        </div>
      </section>

      {/* ۰۲ — دو ستون محصول (پنل شیشه‌ای، عمق) */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-32 md:grid-cols-2">
          {factoryHome.pillars.map((p, i) => (
            <Link
              key={p.href}
              href={p.href}
              className="group reveal block"
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
            >
              <GlassPanel className="h-full transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover:-translate-y-1">
                <MediaFrame
                  src={p.media}
                  alt=""
                  aspect="16/9"
                  reveal="hover"
                  className="rounded-[calc(var(--radius-glass)-8px)]"
                />
                <div className="mt-6 flex items-center justify-between gap-4">
                  <h2 className="font-bold" style={{ fontSize: "var(--text-h3)" }}>
                    {p.title}
                  </h2>
                  <Tag tone={p.status === "در دسترس" ? "kodak" : "muted"}>{p.status}</Tag>
                </div>
                <p className="mt-3 leading-[1.8] text-muted">{p.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-kodak">
                  بیشتر بدانید
                  <ArrowLeft
                    size={16}
                    strokeWidth={2}
                    aria-hidden
                    className="transition-transform duration-[var(--duration-base)] group-hover:-translate-x-1"
                  />
                </span>
              </GlassPanel>
            </Link>
          ))}
        </div>
      </section>

      {/* ۰۳ — پل روایت به بخش فیلم (کاغذ) */}
      <section data-surface="paper" className="bg-paper text-ink">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p
            className="reveal font-extrabold"
            style={{ fontSize: "var(--text-h2)", lineHeight: "var(--leading-display)" }}
          >
            «{factoryHome.bridge.statement}»
          </p>
          <p
            className="reveal mx-auto mt-6 max-w-[52ch] leading-[1.8] text-ink-60"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {factoryHome.bridge.body}
          </p>
          <Link
            href="/film"
            className="reveal mt-8 inline-block border-b-2 border-kodak pb-1 font-bold transition-colors hover:text-ink-60"
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            بخش فیلم را ببینید
          </Link>
        </div>
      </section>
    </>
  );
}
