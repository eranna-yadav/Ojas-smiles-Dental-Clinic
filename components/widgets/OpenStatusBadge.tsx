"use client";

import { useSyncExternalStore } from "react";
import { getOpenStatus, formatTime, type OpenStatus } from "@/lib/hours";
import { fmt } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/I18nProvider";

// Re-check every minute; the server snapshot is null so nothing time-based is prerendered.
let cached: { key: string; status: OpenStatus } | null = null;
function snapshot(): OpenStatus {
  const key = String(Math.floor(Date.now() / 60_000));
  if (!cached || cached.key !== key) cached = { key, status: getOpenStatus() };
  return cached.status;
}
function subscribe(cb: () => void) {
  const id = setInterval(cb, 30_000);
  return () => clearInterval(id);
}

export function OpenStatusBadge({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const { t } = useI18n();
  const status = useSyncExternalStore(subscribe, snapshot, () => null);

  if (!status) {
    return <span className={cn("inline-block h-7 w-52 max-w-full animate-pulse rounded-full bg-brand-100/70", className)} aria-hidden />;
  }

  const label = status.open
    ? `${t.common.openNow} · ${fmt(t.common.closesAt, { time: formatTime(status.closesAt) })}`
    : `${t.common.closedNow}${
        status.opensAt
          ? ` · ${fmt(status.tomorrow ? t.common.opensTomorrow : t.common.opensAt, { time: formatTime(status.opensAt) })}`
          : ""
      }`;

  return (
    <span
      className={cn(
        "inline-flex h-7 items-center gap-2 rounded-full px-3 text-xs font-semibold whitespace-nowrap sm:text-sm",
        tone === "light"
          ? status.open
            ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
            : "bg-rose-50 text-rose-800 ring-1 ring-rose-200"
          : "bg-white/10 text-white ring-1 ring-white/20",
        className
      )}
      role="status"
    >
      <span className="relative flex h-2.5 w-2.5" aria-hidden>
        {status.open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />}
        <span className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", status.open ? "bg-emerald-500" : "bg-rose-500")} />
      </span>
      {label}
    </span>
  );
}
