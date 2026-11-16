import faq from "@/data/dental-faq.json";
import { clinic, type L, type Locale } from "@/config/clinic";
import { groupedHours, formatTime } from "./hours";

export type ChatAction = "call" | "whatsapp" | "directions" | "book" | "services" | "emergency";

export type FaqEntry = {
  id: string;
  keywords: string[];
  answer: L;
  actions: ChatAction[];
  link?: string;
};

const entries = faq.entries as FaqEntry[];

function normalise(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Scores each entry by keyword hits. Multi-word / Kannada keywords match as substrings;
 * short English keywords must match a whole word (so "ok" doesn't match "book").
 */
export function findAnswer(query: string): FaqEntry | null {
  const q = normalise(query);
  if (!q) return null;
  const words = new Set(q.split(" "));
  let best: { e: FaqEntry; score: number } | null = null;
  for (const e of entries) {
    let score = 0;
    for (const raw of e.keywords) {
      const k = normalise(raw);
      if (!k) continue;
      const isAscii = /^[a-z0-9 ]+$/.test(k);
      const hit = isAscii && !k.includes(" ") ? words.has(k) || (k.length >= 5 && q.includes(k)) : q.includes(k);
      if (hit) score += k.includes(" ") ? 2 : 1;
    }
    // Prefer specific topics over the generic greeting/thanks entries.
    if (score > 0 && (e.id === "greeting" || e.id === "thanks")) score -= 0.5;
    if (score > 0 && (!best || score > best.score)) best = { e, score };
  }
  return best?.e ?? null;
}

export function getEntry(id: string): FaqEntry | undefined {
  return entries.find((e) => e.id === id);
}

export function renderAnswer(e: FaqEntry, locale: Locale, everyDay: string, days: string[]): string {
  const hours = groupedHours()
    .map((r) => {
      const label =
        r.days.length === 7 ? everyDay : r.days.length > 2 ? `${days[r.days[0]]}–${days[r.days.at(-1)!]}` : r.days.map((d) => days[d]).join(", ");
      return `${label} ${r.closed ? "—" : `${formatTime(r.open)} – ${formatTime(r.close)}`}`;
    })
    .join("; ");
  return e.answer[locale]
    .replaceAll("{phone}", clinic.phone.display)
    .replaceAll("{address}", clinic.address.full[locale])
    .replaceAll("{hours}", hours)
    .replaceAll("{clinic}", clinic.name);
}
