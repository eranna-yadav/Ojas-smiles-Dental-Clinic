import type { Block } from "@/content/blog";
import { legalUpdated } from "@/content/legal";
import { href, type Dictionary, type Locale } from "@/lib/i18n";
import { PageHeader } from "./PageHeader";
import { Prose } from "./Prose";

export function LegalPage({ locale, t, title, body }: { locale: Locale; t: Dictionary; title: string; body: Block[] }) {
  const date = new Date(`${legalUpdated}T00:00:00`).toLocaleDateString(locale === "kn" ? "kn-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric" });
  return (
    <>
      <PageHeader crumbs={[{ label: t.nav.home, href: href(locale) }, { label: title }]} title={title}>
        <p className="mt-4 text-sm text-slate-600">
          {t.legal.lastUpdated}: <time dateTime={legalUpdated}>{date}</time>
        </p>
      </PageHeader>
      <article className="container-x max-w-3xl pb-20">
        <Prose blocks={body} locale={locale} />
      </article>
    </>
  );
}
