import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/content/blog";
import { getDictionary, hasLocale, href } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { PostCard } from "@/components/sections/BlogTeaser";

export async function generateMetadata({ params }: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({ locale, path: "/blog", title: t.meta.blogTitle, description: t.meta.blogDescription });
}

export default async function BlogPage({ params }: PageProps<"/[locale]/blog">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHeader crumbs={[{ label: t.nav.home, href: href(locale) }, { label: t.nav.blog }]} title={t.blog.title} subtitle={t.blog.subtitle} />
      <section className="pb-20" aria-label={t.blog.title}>
        <ul className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} locale={locale} t={t} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
