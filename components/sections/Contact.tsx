import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import type { Dictionary, Locale } from "@/lib/i18n";
import { formatTime, groupedHours } from "@/lib/hours";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";
import { btn } from "@/components/ui/button";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OpenStatusBadge } from "@/components/widgets/OpenStatusBadge";

export function Contact({ locale, t }: { locale: Locale; t: Dictionary }) {
  const rows = groupedHours();
  const dayLabel = (days: number[]) =>
    days.length === 7 ? t.everyDay : days.length > 2 ? `${t.days[days[0]]} – ${t.days[days[days.length - 1]]}` : days.map((d) => t.days[d]).join(", ");

  return (
    <section id="contact" className="section-y bg-brand-50/50" aria-labelledby="contact-title">
      <div className="container-x">
        <SectionHeading id="contact-title" eyebrow={t.contact.eyebrow} title={t.contact.title} />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="card space-y-6 p-6 sm:p-8 lg:col-span-2">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-bold">{t.contact.address}</h3>
                <address className="mt-1 text-sm leading-relaxed text-muted not-italic">{clinic.address.full[locale]}</address>
                <p className="mt-1 text-xs text-slate-500">Plus Code: {clinic.address.plusCode}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-bold">{t.contact.phone}</h3>
                <a href={telUrl} className="mt-1 inline-block text-lg font-semibold text-brand-800 hover:underline">
                  {clinic.phone.display}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div className="flex-1">
                <h3 className="font-bold">{t.contact.hours}</h3>
                <dl className="mt-1 space-y-1 text-sm text-muted">
                  {rows.map((r) => (
                    <div key={r.days.join()} className="flex flex-wrap justify-between gap-x-4">
                      <dt>{dayLabel(r.days)}</dt>
                      <dd className="font-semibold text-slate-800">{r.closed ? t.contact.closed : `${formatTime(r.open)} – ${formatTime(r.close)}`}</dd>
                    </div>
                  ))}
                </dl>
                <OpenStatusBadge className="mt-3" />
              </div>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href={clinic.links.directions} target="_blank" rel="noopener noreferrer" className={btn("primary", "md")}>
                <Navigation className="h-4 w-4" aria-hidden />
                {t.common.getDirections}
              </a>
              <a href={whatsappUrl(t.common.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className={btn("whatsapp", "md")}>
                <BrandIcon name="whatsapp" className="h-4 w-4" />
                {t.common.whatsapp}
              </a>
            </div>
          </div>
          <div className="card min-h-80 overflow-hidden lg:col-span-3">
            <iframe
              title={t.contact.mapTitle}
              src={clinic.links.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-80 w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
