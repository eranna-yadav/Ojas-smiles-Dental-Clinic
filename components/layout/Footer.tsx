import Link from "next/link";
import { cacheLife } from "next/cache";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { clinic } from "@/config/clinic";
import { href, type Dictionary, type Locale } from "@/lib/i18n";
import { groupedHours, formatTime } from "@/lib/hours";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";
import { ToothMark } from "@/components/ui/ToothLogo";
import { BrandIcon, type BrandName } from "@/components/ui/BrandIcon";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const year = await currentYear();
  const socials: { name: BrandName; url: string; label: string }[] = [
    { name: "whatsapp" as const, url: whatsappUrl(t.common.whatsappGreeting), label: "WhatsApp" },
    { name: "google" as const, url: clinic.links.googleMaps, label: "Google Maps" },
    { name: "instagram" as const, url: clinic.social.instagram, label: "Instagram" },
    { name: "facebook" as const, url: clinic.social.facebook, label: "Facebook" },
    { name: "youtube" as const, url: clinic.social.youtube, label: "YouTube" },
  ].filter((s) => s.url);

  const quick = [
    { label: t.nav.about, to: href(locale, "#about") },
    { label: t.nav.doctors, to: href(locale, "#doctors") },
    { label: t.nav.services, to: href(locale, "/services") },
    { label: t.nav.gallery, to: href(locale, "#gallery") },
    { label: t.nav.faq, to: href(locale, "#faq") },
    { label: t.nav.blog, to: href(locale, "/blog") },
    { label: t.common.bookAppointment, to: href(locale, "#book") },
  ];

  return (
    <footer className="bg-brand-950 text-brand-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-4">
          <Link href={href(locale)} className="inline-flex items-center gap-3">
            <ToothMark className="h-11 w-11" />
            <span className="text-lg font-extrabold text-white">{clinic.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200">{t.footer.about}</p>
          {socials.length > 0 && (
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-wider text-brand-300 uppercase">{t.footer.follow}</p>
              <ul className="mt-3 flex gap-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                    >
                      <BrandIcon name={s.name} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <nav className="lg:col-span-2" aria-label={t.footer.quickLinks}>
          <h3 className="text-sm font-bold text-white">{t.footer.quickLinks}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quick.map((q) => (
              <li key={q.to}>
                <Link href={q.to} className="text-brand-200 transition hover:text-white">
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-3" aria-label={t.footer.services}>
          <h3 className="text-sm font-bold text-white">{t.footer.services}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {clinic.services.map((s) => (
              <li key={s.slug}>
                <Link href={href(locale, `/services/${s.slug}`)} className="text-brand-200 transition hover:text-white">
                  {s.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold text-white">{t.footer.contact}</h3>
          <ul className="mt-4 space-y-4 text-sm text-brand-200">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden />
              <address className="not-italic">{clinic.address.full[locale]}</address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden />
              <a href={telUrl} className="hover:text-white">
                {clinic.phone.display}
              </a>
            </li>
            {clinic.email && (
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden />
                <a href={`mailto:${clinic.email}`} className="hover:text-white">
                  {clinic.email}
                </a>
              </li>
            )}
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden />
              <div>
                <p className="font-semibold text-white">{t.footer.hours}</p>
                {groupedHours().map((row) => (
                  <p key={row.days.join()}>
                    {row.days.length === 7
                      ? t.everyDay
                      : row.days.length > 2
                        ? `${t.daysShort[row.days[0]]}–${t.daysShort[row.days[row.days.length - 1]]}`
                        : row.days.map((d) => t.daysShort[d]).join(", ")}
                    : {row.closed ? t.contact.closed : `${formatTime(row.open)} – ${formatTime(row.close)}`}
                  </p>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 pt-6 pb-24 text-xs md:pb-6 text-brand-300 sm:flex-row">
          <p>
            © {year} {clinic.name}. {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href={href(locale, "/privacy-policy")} className="hover:text-white">
              {t.footer.privacy}
            </Link>
            <Link href={href(locale, "/medical-disclaimer")} className="hover:text-white">
              {t.footer.disclaimer}
            </Link>
            <span>
              {t.footer.credit}{" "}
              {clinic.credit.url ? (
                <a href={clinic.credit.url} target="_blank" rel="noopener" className="font-semibold text-brand-100 hover:text-white">
                  {clinic.credit.label}
                </a>
              ) : (
                <span className="font-semibold text-brand-100">{clinic.credit.label}</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
