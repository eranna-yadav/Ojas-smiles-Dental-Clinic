import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, href } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { Booking } from "@/components/sections/Booking";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({ locale, path: "/services", title: t.meta.servicesTitle, description: t.meta.servicesDescription });
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      <PageHeader
        crumbs={[{ label: t.nav.home, href: href(locale) }, { label: t.nav.services }]}
        title={t.services.allTitle}
        subtitle={t.services.allSubtitle}
      />
      <section className="pb-16 sm:pb-20" aria-label={t.services.allTitle}>
        <div className="container-x">
          <ServicesGrid locale={locale} headingLevel="h2" />
        </div>
      </section>
      <EmergencyBanner t={t} />
      <Booking t={t} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, path: `/${locale}` },
          { name: t.nav.services, path: `/${locale}/services` },
        ])}
      />
    </>
  );
}
