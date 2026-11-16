import en from "@/messages/en.json";
import kn from "@/messages/kn.json";
import type { L, Locale } from "@/config/clinic";

export type { Locale, L };
export type Dictionary = typeof en;

export const locales: Locale[] = ["en", "kn"];
export const defaultLocale: Locale = "en";

// kn.json must have exactly the same shape as en.json (checked at build time).
const dictionaries: Record<Locale, Dictionary> = { en, kn: kn satisfies Dictionary };

export function hasLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Replace {placeholders} in a translated string. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}

/** Prefix a path with the locale: href("kn", "/services") → "/kn/services" */
export function href(locale: Locale, path = ""): string {
  if (!path || path === "/") return `/${locale}`;
  if (path.startsWith("#")) return `/${locale}${path}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}
