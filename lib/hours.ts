import { clinic, type DayHours } from "@/config/clinic";

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** "21:00" → "9:00 PM". AM/PM is widely understood in both English and Kannada. */
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
}

/** Current weekday + minutes in the clinic's timezone, regardless of the visitor's timezone. */
export function clinicNow(date = new Date()): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: clinic.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export function hoursFor(day: number): DayHours | undefined {
  return clinic.hours.find((h) => h.day === day);
}

export type OpenStatus =
  | { open: true; closesAt: string }
  | { open: false; opensAt: string | null; tomorrow: boolean };

export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = clinicNow(date);
  const today = hoursFor(day);
  if (today && !today.closed) {
    const o = toMinutes(today.open);
    const c = toMinutes(today.close);
    if (minutes >= o && minutes < c) return { open: true, closesAt: today.close };
    if (minutes < o) return { open: false, opensAt: today.open, tomorrow: false };
  }
  for (let i = 1; i <= 7; i++) {
    const next = hoursFor((day + i) % 7);
    if (next && !next.closed) return { open: false, opensAt: next.open, tomorrow: i === 1 };
  }
  return { open: false, opensAt: null, tomorrow: false };
}

/** Groups days with identical hours, e.g. all 7 the same → one row. */
export function groupedHours(): { days: number[]; open: string; close: string; closed: boolean }[] {
  const order = [1, 2, 3, 4, 5, 6, 0];
  const rows: { days: number[]; open: string; close: string; closed: boolean }[] = [];
  for (const d of order) {
    const h = hoursFor(d);
    const closed = !h || !!h.closed;
    const open = h?.open ?? "";
    const close = h?.close ?? "";
    const last = rows[rows.length - 1];
    if (last && last.closed === closed && last.open === open && last.close === close) last.days.push(d);
    else rows.push({ days: [d], open, close, closed });
  }
  return rows;
}
