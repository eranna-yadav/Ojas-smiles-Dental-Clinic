import { notFound } from "next/navigation";
import { clinic } from "@/config/clinic";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { faqJsonLd } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Doctors } from "@/components/sections/Doctors";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Booking } from "@/components/sections/Booking";
import { FaqSection } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} t={t} />
      <About t={t} />
      <Doctors locale={locale} t={t} />
      <section id="services" className="section-y" aria-labelledby="services-title">
        <div className="container-x">
          <SectionHeading id="services-title" eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
          <ServicesGrid locale={locale} />
        </div>
      </section>
      <EmergencyBanner t={t} />
      <BeforeAfter />
      <Gallery />
      <Reviews />
      <Booking t={t} />
      <FaqSection faqs={clinic.faqs} locale={locale} eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />
      <Contact locale={locale} t={t} />
      <BlogTeaser locale={locale} t={t} />
      <JsonLd data={faqJsonLd(clinic.faqs, locale)} />
    </>
  );
}
