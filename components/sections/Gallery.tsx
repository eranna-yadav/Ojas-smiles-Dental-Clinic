"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { clinic } from "@/config/clinic";
import { fmt } from "@/lib/i18n";
import { useI18n } from "@/components/I18nProvider";
import { SmartImage } from "@/components/ui/SmartImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Gallery() {
  const { locale, t } = useI18n();
  const items = clinic.gallery;
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  const open = (i: number, el: HTMLButtonElement) => {
    opener.current = el;
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const go = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onClose = () => {
      setIndex(null);
      opener.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    dlg.addEventListener("close", onClose);
    dlg.addEventListener("keydown", onKey);
    return () => {
      dlg.removeEventListener("close", onClose);
      dlg.removeEventListener("keydown", onKey);
    };
  }, [go]);

  const current = index !== null ? items[index] : null;

  return (
    <section id="gallery" className="section-y bg-brand-50/50" aria-labelledby="gallery-title">
      <div className="container-x">
        <SectionHeading id="gallery-title" eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map((g, i) => (
            <li key={g.src} className={cn(i === 0 && "col-span-2 row-span-2 lg:col-span-2")}>
              <button
                type="button"
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={fmt(t.gallery.open, { alt: g.alt[locale] })}
                className="group relative block h-full w-full overflow-hidden rounded-2xl ring-1 ring-slate-900/5 sm:rounded-3xl"
              >
                <SmartImage
                  src={g.src}
                  alt=""
                  width={1200}
                  height={900}
                  sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span aria-hidden className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent p-3 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-4">
                  <span className="flex w-full items-center justify-between text-left text-xs font-semibold text-white sm:text-sm">
                    {g.alt[locale]}
                    <Expand className="h-4 w-4 shrink-0" aria-hidden />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={current ? current.alt[locale] : t.nav.gallery}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-auto w-[min(64rem,calc(100vw-1.5rem))] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
      >
        {current && index !== null && (
          <div className="relative">
            <SmartImage
              src={current.src}
              alt={current.alt[locale]}
              width={1200}
              height={900}
              sizes="100vw"
              className="max-h-[80dvh] w-full rounded-2xl object-contain"
            />
            <div className="mt-3 flex items-center justify-between gap-3 text-white">
              <p className="text-sm font-medium">
                {current.alt[locale]} <span className="text-white/60">· {fmt(t.gallery.counter, { i: index + 1, n: items.length })}</span>
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={() => go(-1)} aria-label={t.common.previous} className="rounded-full bg-white/15 p-2.5 hover:bg-white/25">
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
                <button type="button" onClick={() => go(1)} aria-label={t.common.next} className="rounded-full bg-white/15 p-2.5 hover:bg-white/25">
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
                <button type="button" onClick={close} aria-label={t.common.close} className="rounded-full bg-white p-2.5 text-ink hover:bg-brand-50" autoFocus>
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
