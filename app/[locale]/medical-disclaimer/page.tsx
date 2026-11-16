import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { medicalDisclaimer } from "@/content/legal";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/medical-disclaimer">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({ locale, path: "/medical-disclaimer", title: t.meta.disclaimerTitle, description: t.meta.disclaimerDescription });
}

export default async function Page({ params }: PageProps<"/[locale]/medical-disclaimer">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return <LegalPage locale={locale} t={t} title={medicalDisclaimer.title[locale]} body={medicalDisclaimer.body} />;
}
