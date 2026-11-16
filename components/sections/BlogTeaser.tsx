import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/content/blog";
import { fmt, href, type Dictionary, type Locale } from "@/lib/i18n";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function PostCard({ post, locale, t, headingLevel = "h3" }: { post: (typeof posts)[number]; locale: Locale; t: Dictionary; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link href={href(locale, `/blog/${post.slug}`)} className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="overflow-hidden">
        <SmartImage
          src={post.cover}
          alt=""
          width={1200}
          height={675}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {fmt(t.common.minRead, { n: post.readMinutes })}
        </p>
        <H className="mt-2 text-lg leading-snug font-bold group-hover:text-brand-800">{post.title[locale]}</H>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt[locale]}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          {t.common.readMore}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

export function BlogTeaser({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section className="section-y" aria-labelledby="blog-title">
      <div className="container-x">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">{t.blog.eyebrow}</p>
            <h2 id="blog-title" className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t.blog.title}
            </h2>
          </div>
          <Link href={href(locale, "/blog")} className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">
            {t.common.viewAll}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.06}>
              <PostCard post={p} locale={locale} t={t} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
