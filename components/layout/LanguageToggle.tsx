"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, t } = useI18n();
  const pathname = usePathname() || `/${locale}`;
  const other = locale === "en" ? "kn" : "en";
  const target = pathname.replace(/^\/(en|kn)(?=\/|$)/, `/${other}`);

  return (
    <Link
      href={target}
      hrefLang={other}
      lang={other}
      aria-label={t.common.switchToLabel}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${other}; path=/; max-age=31536000; samesite=lax`;
      }}
      className={cn(
        !className?.split(" ").includes("hidden") && "inline-flex",
        "h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-brand-800 ring-1 ring-brand-200 transition hover:bg-brand-50 hover:ring-brand-400",
        className
      )}
    >
      <Languages className="h-4 w-4" aria-hidden />
      {t.common.switchTo}
    </Link>
  );
}
