import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n";

// Any unknown URL under /en or /kn renders the branded [locale]/not-found.tsx inside the site layout.
export function generateStaticParams() {
  return [{ rest: ["404"] }];
}

export async function generateMetadata({ params }: PageProps<"/[locale]/[...rest]">): Promise<Metadata> {
  const { locale } = await params;
  return { title: { absolute: getDictionary(hasLocale(locale) ? locale : "en").meta.notFoundTitle }, robots: { index: false } };
}

export default function CatchAll() {
  notFound();
}
