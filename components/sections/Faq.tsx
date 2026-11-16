import { Plus } from "lucide-react";
import type { Faq as FaqItem, Locale } from "@/config/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Accordion built on native <details>: keyboard + screen-reader friendly, works without JS. */
export function FaqList({ faqs, locale }: { faqs: FaqItem[]; locale: Locale }) {
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <details key={i} className="group card overflow-hidden transition open:shadow-lift" name="faq">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-semibold text-ink transition hover:text-brand-800 sm:p-6 [&::-webkit-details-marker]:hidden">
            <span>{f.q[locale]}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition duration-300 group-open:rotate-45 group-open:bg-brand-700 group-open:text-white">
              <Plus className="h-4 w-4" aria-hidden />
            </span>
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-base">{f.a[locale]}</div>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({ faqs, locale, eyebrow, title, subtitle }: { faqs: FaqItem[]; locale: Locale; eyebrow: string; title: string; subtitle: string }) {
  return (
    <section id="faq" className="section-y" aria-labelledby="faq-title">
      <div className="container-x max-w-3xl">
        <SectionHeading id="faq-title" eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <FaqList faqs={faqs} locale={locale} />
      </div>
    </section>
  );
}
