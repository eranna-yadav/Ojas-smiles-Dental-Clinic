"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { clinic } from "@/config/clinic";
import { fmt } from "@/lib/i18n";
import { useI18n } from "@/components/I18nProvider";
import { SmartImage } from "@/components/ui/SmartImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

function CompareSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const { t } = useI18n();
  const [pos, setPos] = useState(50);

  return (
    <figure className="card overflow-hidden">
      <div className="relative aspect-[3/2] select-none">
        <SmartImage src={after} alt={`${title} — ${t.beforeAfter.after}`} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <SmartImage src={before} alt={`${title} — ${t.beforeAfter.before}`} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold text-white">{t.beforeAfter.before}</span>
        <span className="absolute top-3 right-3 rounded-full bg-brand-800/85 px-3 py-1 text-xs font-semibold text-white">{t.beforeAfter.after}</span>
        <div className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow" style={{ left: `${pos}%` }} aria-hidden>
          <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-800 shadow-lift">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
        {/* Native range input = keyboard + touch + screen-reader support for free */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={fmt(t.beforeAfter.sliderLabel, { title })}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="px-5 py-4 text-sm font-semibold">{title}</figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  const { locale, t } = useI18n();
  if (clinic.beforeAfter.length === 0) return null;
  return (
    <section className="section-y" aria-labelledby="ba-title">
      <div className="container-x">
        <SectionHeading id="ba-title" eyebrow={t.beforeAfter.eyebrow} title={t.beforeAfter.title} subtitle={t.beforeAfter.subtitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {clinic.beforeAfter.map((c) => (
            <CompareSlider key={c.before} before={c.before} after={c.after} title={c.title[locale]} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">{t.beforeAfter.notice}</p>
      </div>
    </section>
  );
}
