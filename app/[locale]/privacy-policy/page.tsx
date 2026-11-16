import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { privacyPolicy } from "@/content/legal";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy-policy">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({ locale, path: "/privacy-policy", title: t.meta.privacyTitle, description: t.meta.privacyDescription });
}

export default async function Page({ params }: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return <LegalPage locale={locale} t={t} title={privacyPolicy.title[locale]} body={privacyPolicy.body} />;
}
