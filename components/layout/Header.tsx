"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import { clinic } from "@/config/clinic";
import { href } from "@/lib/i18n";
import { telUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { btn } from "@/components/ui/button";
import { ToothMark } from "@/components/ui/ToothLogo";
import { useI18n } from "@/components/I18nProvider";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { locale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = [
    { label: t.nav.about, to: href(locale, "#about") },
    { label: t.nav.services, to: href(locale, "/services") },
    { label: t.nav.doctors, to: href(locale, "#doctors") },
    { label: t.nav.gallery, to: href(locale, "#gallery") },
    { label: t.nav.reviews, to: href(locale, "#reviews") },
    { label: t.nav.blog, to: href(locale, "/blog") },
    { label: t.nav.contact, to: href(locale, "#contact") },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled || open ? "bg-white/90 shadow-soft backdrop-blur-lg" : "bg-white/70 backdrop-blur-sm"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-3 sm:h-20">
        <Link href={href(locale)} className="flex min-w-0 shrink-0 items-center gap-2.5">
          <ToothMark className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-extrabold tracking-tight text-brand-900 sm:text-lg">
              {clinic.shortName}
            </span>
            <span className="block truncate text-[11px] font-medium text-muted sm:text-xs">
              {locale === "kn" ? "ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ · ಹಾಸನ" : "Dental Clinic · Hassan"}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  href={n.to}
                  className="rounded-full px-2.5 py-2 text-sm font-medium whitespace-nowrap text-slate-700 2xl:px-3 transition hover:bg-brand-50 hover:text-brand-800"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          {/* Full "Call Now" on tablets/small laptops; icon-only when the full nav is shown */}
          <a href={telUrl} aria-label={`${t.common.callNow} ${clinic.phone.display}`} className={btn("outline", "md", "hidden lg:inline-flex xl:w-11 xl:px-0")}>
            <Phone className="h-4 w-4" aria-hidden />
            <span className="xl:sr-only">{t.common.callNow}</span>
          </a>
          <Link href={href(locale, "#book")} className={btn("primary", "md", "hidden sm:inline-flex")}>
            <CalendarCheck className="h-4 w-4" aria-hidden />
            {t.common.bookAppointment}
          </Link>
          <button
            ref={menuBtn}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-900 ring-1 ring-brand-200 transition hover:bg-brand-50 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.common.close : t.common.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-brand-100 bg-white xl:hidden"
          >
            <nav aria-label="Mobile" className="container-x max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
              <ul className="grid gap-1">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link
                      href={n.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-brand-50"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid gap-3 border-t border-brand-100 pt-4">
                <LanguageToggle className="w-full justify-center sm:hidden" />
                <Link href={href(locale, "#book")} onClick={() => setOpen(false)} className={btn("primary", "lg", "w-full")}>
                  <CalendarCheck className="h-5 w-5" aria-hidden />
                  {t.common.bookAppointment}
                </Link>
                <a href={telUrl} className={btn("outline", "lg", "w-full")}>
                  <Phone className="h-5 w-5" aria-hidden />
                  {t.common.callNow} · {clinic.phone.display}
                </a>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
