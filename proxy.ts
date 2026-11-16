import { NextResponse, type NextRequest } from "next/server";
import { clinic } from "@/config/clinic";
import { posts } from "@/content/blog";

const locales = ["en", "kn"];
const serviceSlugs = new Set(clinic.services.map((s) => s.slug));
const postSlugs = new Set(posts.map((p) => p.slug));

/**
 * 1. Sends visitors without a language prefix to /en or /kn
 *    (remembered choice → browser language → English).
 * 2. Rewrites unknown service/blog slugs to the 404 page so they return a real 404 status.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = pathname.match(/^\/(en|kn)(\/.*)?$/);

  if (match) {
    const [, locale, rest = ""] = match;
    const detail = rest.match(/^\/(services|blog)\/([^/]+)\/?$/);
    if (detail) {
      const [, kind, slug] = detail;
      const known = kind === "services" ? serviceSlugs.has(slug) : postSlugs.has(slug);
      if (!known) {
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}/404`;
        return NextResponse.rewrite(url, { status: 404 });
      }
    }
    return;
  }

  const saved = request.cookies.get("NEXT_LOCALE")?.value;
  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const locale = saved && locales.includes(saved) ? saved : /(^|,)\s*kn\b/.test(accept) ? "kn" : "en";

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, sitemap.xml, robots.txt, icons…)
  matcher: ["/((?!_next|api|icon|apple-icon|.*\\..*).*)"],
};
