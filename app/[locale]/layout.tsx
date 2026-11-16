import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans, Noto_Sans_Kannada } from "next/font/google";
import "../globals.css";
import { clinic } from "@/config/clinic";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import { dentistJsonLd, pageMetadata } from "@/lib/seo";
import { I18nProvider } from "@/components/I18nProvider";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { OffersStrip } from "@/components/layout/OffersStrip";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/widgets/FloatingActions";
import { JsonLd } from "@/components/seo/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Only downloaded when Kannada characters are on the page (unicode-range).
const kannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  variable: "--font-kannada",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(clinic.siteUrl),
    applicationName: clinic.name,
    authors: [{ name: clinic.name }],
    formatDetection: { telephone: true },
    ...pageMetadata({ locale, title: t.meta.homeTitle, description: t.meta.homeDescription }),
  };
}

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <html lang={locale === "kn" ? "kn" : "en"} className={`${jakarta.variable} ${kannada.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-dvh bg-white">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-brand-800 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {t.common.skipToContent}
        </a>
        <I18nProvider locale={locale} dict={t}>
          <MotionProvider>
            <OffersStrip locale={locale} />
            <Header />
            <main id="main">{children}</main>
            <Footer locale={locale} t={t} />
            <FloatingActions />
          </MotionProvider>
        </I18nProvider>
        <JsonLd data={dentistJsonLd(locale)} />
      </body>
    </html>
  );
}
