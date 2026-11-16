"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";
import { href } from "@/lib/i18n";
import { btn } from "@/components/ui/button";
import { ToothMark } from "@/components/ui/ToothLogo";

export default function NotFound() {
  const { locale, t } = useI18n();
  useEffect(() => {
    document.title = t.meta.notFoundTitle;
  }, [t]);
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <ToothMark className="h-16 w-16" />
      <p className="mt-6 text-6xl font-extrabold text-brand-200">404</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight">{t.notFound.title}</h1>
      <p className="mt-3 max-w-md text-muted">{t.notFound.text}</p>
      <Link href={href(locale)} className={btn("primary", "lg", "mt-8")}>
        <Home className="h-5 w-5" aria-hidden />
        {t.common.backHome}
      </Link>
    </section>
  );
}
