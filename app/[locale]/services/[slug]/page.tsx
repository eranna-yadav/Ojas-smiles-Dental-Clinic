import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, CheckCircle2, HeartPulse, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { serviceDetails } from "@/content/services";
import { fmt, getDictionary, hasLocale, href, locales } from "@/lib/i18n";
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { telUrl } from "@/lib/whatsapp";
import { btn } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/PageHeader";
import { SmartImage } from "@/components/ui/SmartImage";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal } from "@/components/ui/Reveal";
import { FaqList } from "@/components/sections/Faq";
import { Booking } from "@/components/sections/Booking";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return locales.flatMap((locale) => clinic.services.map((s) => ({ locale, slug: s.slug })));
}

function load(slug: string) {
  const service = clinic.services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  return service && detail ? { service, detail } : null;
}

export async function generateMetadata({ params }: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = load(slug);
  if (!hasLocale(locale) || !data) notFound();
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    path: `/services/${slug}`,
    title: fmt(t.meta.serviceTitle, { service: data.service.name[locale] }),
    description: data.detail.metaDescription[locale],
    keywords: [`${data.service.name.en} Hassan`, `${data.service.name.en} near me`],
  });
}

export default async function ServicePage({ params }: PageProps<"/[locale]/services/[slug]">) {
  const { locale, slug } = await params;
  const data = load(slug);
  if (!hasLocale(locale) || !data) notFound();
  const { service, detail } = data;
  const t = getDictionary(locale);
  const name = service.name[locale];
  const others = clinic.services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHeader
        crumbs={[
          { label: t.nav.home, href: href(locale) },
          { label: t.nav.services, href: href(locale, "/services") },
          { label: name },
        ]}
        title={name}
        subtitle={service.short[locale]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="#book" className={btn("primary", "lg")}>
            <CalendarCheck className="h-5 w-5" aria-hidden />
            {t.common.bookAppointment}
          </Link>
          <a href={telUrl} className={btn("outline", "lg")}>
            <Phone className="h-5 w-5" aria-hidden />
            {t.common.callNow} · {clinic.phone.display}
          </a>
        </div>
      </PageHeader>

      {service.icon === "emergency" && (
        <div className="pb-12">
          <EmergencyBanner t={t} />
        </div>
      )}

      <div className="container-x grid gap-12 pb-16 lg:grid-cols-3 lg:gap-14">
        <article className="space-y-14 lg:col-span-2">
          <Reveal>
            <section aria-labelledby="what-title" className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 id="what-title" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {t.services.whatIs}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{detail.what[locale]}</p>
              </div>
              <div className="overflow-hidden rounded-3xl shadow-soft">
                {/* TODO: replace with a real photo for this treatment */}
                <SmartImage src={service.image} alt={name} width={1200} height={800} sizes="(min-width: 768px) 30vw, 100vw" className="h-auto w-full" />
              </div>
            </section>
          </Reveal>

          <section aria-labelledby="who-title">
            <h2 id="who-title" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {t.services.whoNeeds}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {detail.who.map((w, i) => (
                <li key={i} className="card flex items-start gap-3 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                  <span className="text-sm font-medium text-slate-800 sm:text-base">{w[locale]}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="steps-title">
            <h2 id="steps-title" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {t.services.procedure}
            </h2>
            <ol className="relative mt-8 space-y-6 border-l-2 border-dashed border-brand-200 pl-8">
              {detail.steps.map((s, i) => (
                <Reveal as="li" key={i} delay={i * 0.05} className="relative">
                  <span className="absolute top-0 -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <p className="text-xs font-bold tracking-wider text-brand-700 uppercase">{fmt(t.services.step, { n: i + 1 })}</p>
                  <h3 className="mt-1 text-lg font-bold">{s.title[locale]}</h3>
                  <p className="mt-1 text-muted">{s.text[locale]}</p>
                </Reveal>
              ))}
            </ol>
          </section>

          <section aria-labelledby="recovery-title" className="rounded-3xl bg-brand-50 p-6 sm:p-8">
            <h2 id="recovery-title" className="flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              <HeartPulse className="h-7 w-7 text-brand-700" aria-hidden />
              {t.services.recovery}
            </h2>
            <ul className="mt-6 space-y-3">
              {detail.recovery.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-500" aria-hidden />
                  {r[locale]}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="sfaq-title">
            <h2 id="sfaq-title" className="mb-6 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {t.services.faqs}
            </h2>
            <FaqList faqs={detail.faqs} locale={locale} />
          </section>
        </article>

        <aside className="lg:col-span-1" aria-labelledby="others-title">
          <div className="card sticky top-28 p-6">
            <h2 id="others-title" className="text-lg font-bold">
              {t.services.otherServices}
            </h2>
            <ul className="mt-4 space-y-1">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={href(locale, `/services/${s.slug}`)}
                    className="flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-800"
                  >
                    <ServiceIcon icon={s.icon} className="h-4 w-4 shrink-0 text-brand-600" />
                    {s.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Booking t={t} defaultService={slug} title={t.services.ctaTitle} subtitle={t.services.ctaText} />

      <JsonLd data={faqJsonLd(detail.faqs, locale)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          name: service.name[locale],
          description: detail.metaDescription[locale],
          url: absoluteUrl(`/${locale}/services/${slug}`),
          howPerformed: detail.steps.map((s) => s.title[locale]).join(" → "),
          provider: { "@id": `${clinic.siteUrl}/#dentist` },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, path: `/${locale}` },
          { name: t.nav.services, path: `/${locale}/services` },
          { name, path: `/${locale}/services/${slug}` },
        ])}
      />
    </>
  );
}
