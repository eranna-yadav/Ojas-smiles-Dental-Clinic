import type { MetadataRoute } from "next";
import { clinic } from "@/config/clinic";
import { posts } from "@/content/blog";
import { locales } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly"; lastModified?: string }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    ...clinic.services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.5, changeFrequency: "yearly" as const, lastModified: p.date })),
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/medical-disclaimer", priority: 0.2, changeFrequency: "yearly" },
  ];

  return pages.flatMap((p) =>
    locales.map((locale) => ({
      url: absoluteUrl(`/${locale}${p.path}`),
      lastModified: p.lastModified,
      changeFrequency: p.changeFrequency,
      priority: locale === "en" ? p.priority : Math.max(0.1, p.priority - 0.1),
      alternates: {
        languages: {
          "en-IN": absoluteUrl(`/en${p.path}`),
          "kn-IN": absoluteUrl(`/kn${p.path}`),
          "x-default": absoluteUrl(`/en${p.path}`),
        },
      },
    }))
  );
}
