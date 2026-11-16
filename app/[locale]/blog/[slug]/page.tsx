import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarCheck, Clock, Info } from "lucide-react";
import { clinic } from "@/config/clinic";
import { posts } from "@/content/blog";
import { fmt, getDictionary, hasLocale, href, locales } from "@/lib/i18n";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { btn } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Prose } from "@/components/ui/Prose";
import { SmartImage } from "@/components/ui/SmartImage";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!hasLocale(locale) || !post) notFound();
  return pageMetadata({
    locale,
    path: `/blog/${slug}`,
    title: `${post.title[locale]} | ${clinic.name}`,
    description: post.excerpt[locale],
    type: "article",
  });
}

export default async function PostPage({ params }: PageProps<"/[locale]/blog/[slug]">) {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!hasLocale(locale) || !post) notFound();
  const t = getDictionary(locale);
  const date = new Date(`${post.date}T00:00:00`).toLocaleDateString(locale === "kn" ? "kn-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHeader
        crumbs={[
          { label: t.nav.home, href: href(locale) },
          { label: t.nav.blog, href: href(locale, "/blog") },
          { label: post.title[locale] },
        ]}
        title={post.title[locale]}
        subtitle={post.excerpt[locale]}
      >
        <p className="mt-6 flex items-center gap-3 text-sm text-slate-600">
          <time dateTime={post.date}>{date}</time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" aria-hidden />
            {fmt(t.common.minRead, { n: post.readMinutes })}
          </span>
        </p>
      </PageHeader>

      <article className="container-x max-w-3xl pb-20">
        <div className="mb-10 overflow-hidden rounded-3xl shadow-soft">
          {/* TODO: replace with a real cover photo */}
          <SmartImage src={post.cover} alt="" width={1200} height={675} sizes="(min-width: 768px) 768px, 100vw" className="h-auto w-full" />
        </div>
        <Prose blocks={post.body} locale={locale} />
        <p className="mt-10 flex items-start gap-3 rounded-2xl bg-brand-50 p-4 text-sm text-brand-900">
          <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          {t.blog.disclaimer}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link href={href(locale, "/blog")} className={btn("outline", "md")}>
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t.blog.back}
          </Link>
          <Link href={href(locale, "#book")} className={btn("primary", "md")}>
            <CalendarCheck className="h-4 w-4" aria-hidden />
            {t.common.bookAppointment}
          </Link>
        </div>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title[locale],
          description: post.excerpt[locale],
          datePublished: post.date,
          inLanguage: locale === "kn" ? "kn-IN" : "en-IN",
          image: absoluteUrl(post.cover),
          url: absoluteUrl(`/${locale}/blog/${slug}`),
          author: { "@type": "Organization", name: clinic.name },
          publisher: { "@id": `${clinic.siteUrl}/#dentist` },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, path: `/${locale}` },
          { name: t.nav.blog, path: `/${locale}/blog` },
          { name: post.title[locale], path: `/${locale}/blog/${slug}` },
        ])}
      />
    </>
  );
}
