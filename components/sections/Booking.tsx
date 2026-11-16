import { Clock, MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import type { Dictionary } from "@/lib/i18n";
import { telUrl } from "@/lib/whatsapp";
import { formatTime, groupedHours } from "@/lib/hours";
import { BookingForm } from "./BookingForm";

export function Booking({ t, defaultService, title, subtitle }: { t: Dictionary; defaultService?: string; title?: string; subtitle?: string }) {
  const hours = groupedHours();
  return (
    <section id="book" className="section-y relative overflow-hidden bg-gradient-to-b from-white to-brand-50/70" aria-labelledby="book-title">
      <div className="container-x grid gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-2">
          <p className="eyebrow">{t.booking.eyebrow}</p>
          <h2 id="book-title" className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {title ?? t.booking.title}
          </h2>
          <p className="mt-4 text-lg text-pretty text-muted">{subtitle ?? t.booking.subtitle}</p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-soft">
                <MessageCircle className="h-5 w-5" aria-hidden />
              </span>
              <p className="pt-2.5 text-sm text-slate-700">{t.booking.privacyNote}</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-soft">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <a href={telUrl} className="pt-2.5 text-sm font-semibold text-brand-800 hover:underline">
                {t.common.callNow}: {clinic.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-soft">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <p className="pt-2.5 text-sm text-slate-700">
                {hours.length === 1 && !hours[0].closed
                  ? `${t.everyDay}: ${formatTime(hours[0].open)} – ${formatTime(hours[0].close)}`
                  : t.hero.badgeHours}
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <BookingForm defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}
