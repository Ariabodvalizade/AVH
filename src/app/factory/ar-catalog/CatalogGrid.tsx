"use client";

import { useState } from "react";
import { Smartphone, QrCode } from "lucide-react";
import MediaFrame from "@/components/media/MediaFrame";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { FilterChip, Tag } from "@/components/ui/Chip";
import { EmptyState } from "@/components/ui/Feedback";
import { catalogItems, arCatalogPage, type CatalogItem } from "@/content/factory";

export default function CatalogGrid() {
  const [industry, setIndustry] = useState("all");
  const [open, setOpen] = useState<CatalogItem | null>(null);

  const list = catalogItems.filter((i) => industry === "all" || i.industry === industry);
  const industries = ["all", ...arCatalogPage.industries.filter((ind) =>
    catalogItems.some((i) => i.industry === ind)
  )];

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="فیلتر صنعت">
        {industries.map((ind) => (
          <FilterChip key={ind} active={industry === ind} onClick={() => setIndustry(ind)}>
            {ind === "all" ? "همهٔ صنایع" : ind}
          </FilterChip>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="نمونه‌ای در این صنعت ثبت نشده"
            body="صنعت دیگری را انتخاب کنید یا برای محصول خودتان درخواست دمو بدهید."
          />
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setOpen(item)}
              className="group reveal cursor-pointer border border-border bg-[var(--glass-ink)] p-4 text-start backdrop-blur-[var(--glass-blur)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1"
              style={{
                borderRadius: "var(--radius-glass)",
                "--reveal-delay": `${i * 70}ms`,
              } as React.CSSProperties}
            >
              <MediaFrame
                src={item.poster}
                alt={item.title}
                aspect="4/3"
                reveal="hover"
                className="rounded-[calc(var(--radius-glass)-10px)]"
              />
              <h3 className="mt-4 font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.industry}</p>
            </button>
          ))}
        </div>
      )}

      <Modal open={open !== null} onClose={() => setOpen(null)} title={open?.title ?? ""}>
        {open && (
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <MediaFrame
              src={open.poster}
              alt={open.title}
              aspect="4/3"
              reveal="in-view"
              className="rounded-[var(--radius-glass)]"
            />
            <div>
              <Tag>{open.industry}</Tag>
              <dl className="mt-6">
                {open.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between gap-4 border-b border-border py-3"
                  >
                    <dt className="text-sm text-muted">{s.label}</dt>
                    <dd className="text-sm font-bold tabular-nums">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <Button className="mt-8 w-full">
                <Smartphone size={18} strokeWidth={1.5} aria-hidden />
                مشاهده در AR
              </Button>
              <p className="mt-4 flex items-start gap-2 text-sm leading-[1.8] text-muted">
                <QrCode size={16} strokeWidth={1.5} aria-hidden className="mt-1 shrink-0" />
                روی موبایل مستقیم باز می‌شود (iOS با Quick Look، اندروید با WebXR). روی دسکتاپ
                کد QR برای انتقال به گوشی نمایش داده می‌شود.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
