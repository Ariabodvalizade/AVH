"use client";

import { useState } from "react";
import MediaFrame from "@/components/media/MediaFrame";
import { projects, categories, type Project } from "@/content/film";

const faIndex = ["۰۱", "۰۲", "۰۳", "۰۴", "۰۵", "۰۶", "۰۷", "۰۸"];

function WorkCard({ p, i }: { p: Project; i: number }) {
  return (
    <article
      className="group reveal cursor-pointer"
      style={{ "--reveal-delay": `${(i % 3) * 40}ms` } as React.CSSProperties}
      data-cursor="play"
    >
      <MediaFrame
        src={p.poster}
        alt={`نمای فیلم ${p.title}`}
        aspect={p.tall ? "4/5" : "16/10"}
        reveal="hover"
        imgClassName="transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-105"
      />
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-bold">{p.title}</h3>
          <p className="text-sm text-paper-40">
            {p.client} · {p.year}
          </p>
        </div>
        <span
          className="text-sm font-bold text-kodak opacity-0 transition-opacity duration-[var(--duration-base)] group-hover:opacity-100"
          aria-hidden
        >
          {faIndex[i]}
        </span>
      </div>
    </article>
  );
}

export default function WorkGrid() {
  const [active, setActive] = useState<string>("all");
  const list = projects.filter((p) => active === "all" || p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="فیلتر دسته‌بندی کارها">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(c.id)}
            aria-pressed={active === c.id}
            className={`cursor-pointer border px-4 py-1.5 text-sm transition-colors duration-[var(--duration-fast)] ${
              active === c.id
                ? "border-kodak text-kodak"
                : "border-border text-paper-70 hover:text-paper"
            }`}
            style={{ borderRadius: "var(--radius-control)" }}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <WorkCard key={p.slug} p={p} i={i} />
        ))}
      </div>
    </div>
  );
}
