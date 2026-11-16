"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, PenLine, Quote } from "lucide-react";
import { clinic } from "@/config/clinic";
import { fmt } from "@/lib/i18n";
import { useI18n } from "@/components/I18nProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { btn } from "@/components/ui/button";

export function Reviews() {
  const { locale, t } = useI18n();
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 300) + 16), behavior: "smooth" });
  };

  return (
    <section id="reviews" className="section-y overflow-hidden" aria-labelledby="reviews-title">
      <div className="container-x">
        <SectionHeading id="reviews-title" eyebrow={t.reviews.eyebrow} title={t.reviews.title} subtitle={t.reviews.subtitle} />

        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-soft ring-1 ring-slate-900/5">
            <BrandIcon name="google" className="h-5 w-5 text-[#4285F4]" />
            <span className="text-2xl font-extrabold">{clinic.rating.value.toFixed(1)}</span>
            <Stars value={clinic.rating.value} label={fmt(t.reviews.starsLabel, { n: clinic.rating.value })} size={18} />
          </div>
        </div>

        <div className="relative">
          <ul
            ref={track}
            tabIndex={0}
            className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:scroll-px-0 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
            aria-label={t.reviews.title}
          >
            {clinic.reviews.map((r, i) => (
              <li key={i} className="card flex w-[85%] shrink-0 snap-start flex-col p-6 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
                <Quote className="h-8 w-8 text-brand-200" aria-hidden />
                {r.text ? (
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">{r.text[locale]}</p>
                ) : (
                  // TODO: paste a real Google review (with permission) into config/clinic.ts → reviews
                  <p className="mt-3 flex-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3 text-sm text-slate-500 italic">
                    {t.reviews.placeholder}
                  </p>
                )}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-bold">{r.author}</span>
                  <Stars value={r.rating} label={fmt(t.reviews.starsLabel, { n: r.rating })} size={14} />
                </div>
              </li>
            ))}
          </ul>
          {clinic.reviews.length > 1 && (
            <div className="mt-4 flex justify-center gap-2 lg:hidden">
              <button type="button" onClick={() => scroll(-1)} aria-label={t.common.previous} className="rounded-full p-3 ring-1 ring-brand-200 hover:bg-brand-50">
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button type="button" onClick={() => scroll(1)} aria-label={t.common.next} className="rounded-full p-3 ring-1 ring-brand-200 hover:bg-brand-50">
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={clinic.links.googleReviews} target="_blank" rel="noopener noreferrer" className={btn("outline", "lg")}>
            <ExternalLink className="h-5 w-5" aria-hidden />
            {t.reviews.seeAll}
          </a>
          <a href={clinic.links.writeReview} target="_blank" rel="noopener noreferrer" className={btn("accent", "lg")}>
            <PenLine className="h-5 w-5" aria-hidden />
            {t.reviews.write}
          </a>
        </div>
      </div>
    </section>
  );
}
