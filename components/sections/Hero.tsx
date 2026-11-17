import Link from "next/link";
import { CalendarCheck, Clock, HeartHandshake, Phone, ShieldCheck } from "lucide-react";
import { clinic } from "@/config/clinic";
import { href, type Dictionary, type Locale } from "@/lib/i18n";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";
import { btn } from "@/components/ui/button";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { SmartImage } from "@/components/ui/SmartImage";
import { Stars } from "@/components/ui/Stars";
import { OpenStatusBadge } from "@/components/widgets/OpenStatusBadge";
import { fmt } from "@/lib/i18n";

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white" aria-labelledby="hero-title">
      {/* soft decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-2 lg:gap-8 lg:pt-20 lg:pb-24">
        <div>
          {/* Badge sits on its own line on phones so the client-rendered status never reflows the hero */}
          <div className="flex min-h-7 flex-col items-start gap-2 sm:flex-row sm:items-center">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <OpenStatusBadge />
          </div>
          <h1 id="hero-title" className="mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
            {t.hero.title}{" "}
            <span className="relative inline-block text-brand-700">
              {t.hero.titleAccent}
              <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 h-3 w-full text-accent-400" preserveAspectRatio="none">
                <path d="M2 9c60-6 140-8 296-3" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={href(locale, "#book")} className={btn("primary", "lg")}>
              <CalendarCheck className="h-5 w-5" aria-hidden />
              {t.common.bookAppointment}
            </Link>
            <div className="grid grid-cols-2 gap-3 sm:flex">
              <a href={telUrl} className={btn("outline", "lg")}>
                <Phone className="h-5 w-5" aria-hidden />
                {t.common.callNow}
              </a>
              <a href={whatsappUrl(t.common.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className={btn("whatsapp", "lg")}>
                <BrandIcon name="whatsapp" className="h-5 w-5" />
                {t.common.whatsapp}
              </a>
            </div>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <li className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-soft ring-1 ring-slate-900/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-lg font-extrabold text-amber-800">
                {clinic.rating.value.toFixed(1)}
              </span>
              <span className="min-w-0">
                <Stars value={clinic.rating.value} label={fmt(t.reviews.starsLabel, { n: clinic.rating.value })} size={14} />
                <span className="block text-sm font-semibold text-ink">{t.hero.badgeRating}</span>
              </span>
            </li>
            {clinic.womenOwned && (
              <li className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-soft ring-1 ring-slate-900/5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                  <HeartHandshake className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-ink">{t.hero.badgeWomen}</span>
              </li>
            )}
            <li className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-soft ring-1 ring-slate-900/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm font-semibold text-ink">{t.hero.badgeHours}</span>
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute inset-4 -z-10 rotate-6 rounded-[3rem] bg-gradient-to-br from-brand-200 to-accent-200" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift ring-8 ring-white">
            {/* Hero photo: public/images/hero.webp (portrait, 1122×1402) */}
            <SmartImage
              src="/images/hero.webp"
              alt={t.hero.imageAlt}
              width={1122}
              height={1402}
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 flex max-w-[16rem] items-center gap-3 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-slate-900/5 sm:-left-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
              <ShieldCheck className="h-6 w-6" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-bold text-ink">{t.hero.floatingCardTitle}</span>
              <span className="block text-xs text-muted">{t.hero.floatingCardText}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
