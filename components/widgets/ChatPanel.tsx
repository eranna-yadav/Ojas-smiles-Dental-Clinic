"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { m } from "framer-motion";
import { CalendarCheck, LayoutGrid, MapPin, Phone, SendHorizontal, Siren, X } from "lucide-react";
import { clinic } from "@/config/clinic";
import { findAnswer, getEntry, renderAnswer, type ChatAction, type FaqEntry } from "@/lib/chatbot";
import { href } from "@/lib/i18n";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ToothMark } from "@/components/ui/ToothLogo";
import { useI18n } from "@/components/I18nProvider";
import { cn } from "@/lib/utils";

type Msg = { id: number; from: "bot" | "user"; text: string; actions?: ChatAction[]; link?: string; fallbackFor?: string };

let nextId = 1;

export default function ChatPanel({ onClose }: { onClose: () => void }) {
  const { locale, t } = useI18n();
  const [msgs, setMsgs] = useState<Msg[]>([{ id: 0, from: "bot", text: t.chat.greeting }]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs]);

  const reply = (userText: string, entry: FaqEntry | null | undefined) => {
    const bot: Msg = entry
      ? { id: nextId++, from: "bot", text: renderAnswer(entry, locale, t.everyDay, t.daysShort), actions: entry.actions, link: entry.link }
      : { id: nextId++, from: "bot", text: t.chat.fallback, fallbackFor: userText };
    setMsgs((prev) => [...prev, { id: nextId++, from: "user", text: userText }, bot]);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    setInput("");
    reply(q, findAnswer(q));
  };

  const chips: { id: string; label: string }[] = [
    { id: "timings", label: t.chat.chips.timings },
    { id: "location", label: t.chat.chips.location },
    { id: "services", label: t.chat.chips.services },
    { id: "book", label: t.chat.chips.book },
    { id: "emergency", label: t.chat.chips.emergency },
  ];

  const actionBtn = "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition";

  const renderAction = (a: ChatAction) => {
    switch (a) {
      case "call":
      case "emergency":
        return (
          <a key={a} href={telUrl} className={cn(actionBtn, "bg-brand-700 text-white hover:bg-brand-800")}>
            {a === "emergency" ? <Siren className="h-3.5 w-3.5" aria-hidden /> : <Phone className="h-3.5 w-3.5" aria-hidden />}
            {t.common.callNow}
          </a>
        );
      case "whatsapp":
        return (
          <a key={a} href={whatsappUrl(t.common.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className={cn(actionBtn, "bg-[#0F7A41] text-white hover:bg-[#0b6e37]")}>
            <BrandIcon name="whatsapp" className="h-3.5 w-3.5" />
            {t.common.whatsapp}
          </a>
        );
      case "directions":
        return (
          <a key={a} href={clinic.links.directions} target="_blank" rel="noopener noreferrer" className={cn(actionBtn, "bg-white text-brand-800 ring-1 ring-brand-200 hover:bg-brand-50")}>
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {t.common.getDirections}
          </a>
        );
      case "book":
        return (
          <Link key={a} href={href(locale, "#book")} onClick={onClose} className={cn(actionBtn, "bg-accent-400 text-ink hover:bg-accent-300")}>
            <CalendarCheck className="h-3.5 w-3.5" aria-hidden />
            {t.chat.bookCta}
          </Link>
        );
      case "services":
        return (
          <Link key={a} href={href(locale, "/services")} onClick={onClose} className={cn(actionBtn, "bg-white text-brand-800 ring-1 ring-brand-200 hover:bg-brand-50")}>
            <LayoutGrid className="h-3.5 w-3.5" aria-hidden />
            {t.nav.services}
          </Link>
        );
    }
  };

  return (
    <m.section
      id="chat-panel"
      role="dialog"
      aria-labelledby="chat-title"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="fixed right-4 bottom-[10.5rem] left-4 z-50 flex max-h-[min(34rem,calc(100dvh-12rem))] flex-col overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-slate-900/10 sm:left-auto sm:w-[23rem]"
    >
      <header className="flex items-center gap-3 bg-brand-800 px-4 py-3 text-white">
        <ToothMark className="h-9 w-9" />
        <div className="min-w-0 flex-1">
          <h2 id="chat-title" className="truncate text-sm font-bold">
            {t.chat.title}
          </h2>
          <p className="truncate text-xs text-brand-100">{t.chat.subtitle}</p>
        </div>
        <button type="button" onClick={onClose} aria-label={t.chat.close} className="rounded-full p-2 hover:bg-white/10">
          <X className="h-4 w-4" aria-hidden />
        </button>
      </header>

      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-brand-50/40 px-4 py-4" aria-live="polite">
        {msgs.map((msg) => (
          <div key={msg.id} className={cn("flex", msg.from === "user" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                msg.from === "user" ? "rounded-br-md bg-brand-700 text-white" : "rounded-bl-md bg-white text-ink shadow-soft ring-1 ring-slate-900/5"
              )}
            >
              <p>{msg.text}</p>
              {(msg.actions?.length || msg.link || msg.fallbackFor) && (
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {msg.actions?.map(renderAction)}
                  {msg.link && (
                    <Link
                      href={href(locale, `/services/${msg.link}`)}
                      onClick={onClose}
                      className={cn(actionBtn, "bg-white text-brand-800 ring-1 ring-brand-200 hover:bg-brand-50")}
                    >
                      {t.common.learnMore}
                    </Link>
                  )}
                  {msg.fallbackFor && (
                    <a
                      href={whatsappUrl(msg.fallbackFor)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(actionBtn, "bg-[#0F7A41] text-white hover:bg-[#0b6e37]")}
                    >
                      <BrandIcon name="whatsapp" className="h-3.5 w-3.5" />
                      {t.chat.fallbackCta}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 bg-white px-3 pt-3 pb-2">
        <div className="-mx-1 mb-2 flex gap-2 overflow-x-auto px-1 pb-1" role="group" aria-label="Quick replies">
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => reply(c.label, getEntry(c.id))}
              className="shrink-0 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800 ring-1 ring-brand-100 transition hover:bg-brand-100"
            >
              {c.label}
            </button>
          ))}
        </div>
        <form onSubmit={onSubmit} className="flex items-center gap-2">
          <label htmlFor="chat-input" className="sr-only">
            {t.chat.inputPlaceholder}
          </label>
          <input
            id="chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chat.inputPlaceholder}
            autoComplete="off"
            className="h-11 min-w-0 flex-1 rounded-full bg-slate-100 px-4 text-base outline-none placeholder:text-slate-500 focus:bg-white focus:ring-2 focus:ring-brand-400 sm:text-sm"
          />
          <button
            type="submit"
            aria-label={t.chat.send}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-800"
          >
            <SendHorizontal className="h-4 w-4" aria-hidden />
          </button>
        </form>
        <p className="mt-1.5 text-center text-[11px] text-slate-500">{t.chat.disclaimer}</p>
      </div>
    </m.section>
  );
}
