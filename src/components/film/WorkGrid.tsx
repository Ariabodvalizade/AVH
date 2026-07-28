"use client";

import { useState } from "react";
import WorkCard from "@/components/film/WorkCard";
import { FilterChip } from "@/components/ui/Chip";
import { EmptyState } from "@/components/ui/Feedback";
import { projects, categories } from "@/content/film";

export default function WorkGrid() {
  const [active, setActive] = useState<string>("all");
  const list = projects.filter((p) => active === "all" || p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="فیلتر دسته‌بندی کارها">
        {categories.map((c) => (
          <FilterChip key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>
            {c.label}
          </FilterChip>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="هنوز کاری در این دسته منتشر نشده"
            body="دستهٔ دیگری را انتخاب کنید یا همهٔ کارها را ببینید."
          />
        </div>
      ) : (
        <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
