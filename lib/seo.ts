import type { Metadata } from "next";
import { clinic, type Faq, type Locale } from "@/config/clinic";
import { locales } from "./i18n";

const KEYWORDS = [
  "dentist in Hassan",
  "dental clinic in Hassan",
  "root canal Hassan",
  "dental implants Hassan",
  "best dentist Hassan",
  "kids dentist Hassan",
  "braces Hassan",
  "teeth whitening Hassan",
  "ಹಾಸನ ದಂತ ವೈದ್ಯರು",
];

export function absoluteUrl(path = "") {
  return `${clinic.siteUrl}${path}`;
}

/** Builds per-page metadata with canonical URL, hreflang alternates and Open Graph tags. */
export function pageMetadata({
  locale,
  path = "",
  title,
  description,
  keywords = [],
  type = "website",
}: {
  locale: Locale;
  path?: string; // path WITHOUT locale prefix, e.g. "/services/dental-implants"
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l === "kn" ? "kn-IN" : "en-IN", `/${l}${path}`]));
  languages["x-default"] = `/en${path}`;
  return {
    title: { absolute: title },
    description,
    keywords: [...keywords, ...KEYWORDS],
    alternates: { canonical: `/${locale}${path}`, languages },
    openGraph: {
      type,
      url: `/${locale}${path}`,
      title,
      description,
      siteName: clinic.name,
      locale: locale === "kn" ? "kn_IN" : "en_IN",
      alternateLocale: locale === "kn" ? ["en_IN"] : ["kn_IN"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function dentistJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${clinic.siteUrl}/#dentist`,
    name: clinic.name,
    alternateName: clinic.nameKn,
    description: clinic.tagline[locale],
    url: absoluteUrl(`/${locale}`),
    telephone: clinic.phone.tel,
    ...(clinic.email ? { email: clinic.email } : {}),
    image: absoluteUrl(`/${locale}/opengraph-image`),
    logo: absoluteUrl("/icon.svg"),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: `${clinic.address.locality}, ${clinic.address.city}`,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: clinic.geo.lat, longitude: clinic.geo.lng },
    hasMap: clinic.links.googleMaps,
    areaServed: { "@type": "City", name: "Hassan" },
    openingHoursSpecification: clinic.hours
      .filter((h) => !h.closed)
      .map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: dayNames[h.day], opens: h.open, closes: h.close })),
    ...(clinic.rating.count
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: clinic.rating.value,
            bestRating: 5,
            reviewCount: clinic.rating.count,
          },
        }
      : {}),
    medicalSpecialty: "Dentistry",
    availableService: clinic.services.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.name.en,
      url: absoluteUrl(`/${locale}/services/${s.slug}`),
    })),
    sameAs: [clinic.links.googleMaps, ...Object.values(clinic.social).filter(Boolean)],
  };
}

export function faqJsonLd(faqs: Faq[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q[locale],
      acceptedAnswer: { "@type": "Answer", text: f.a[locale] },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}
