import { Megaphone } from "lucide-react";
import { clinic } from "@/config/clinic";
import type { Locale } from "@/lib/i18n";

export function OffersStrip({ locale }: { locale: Locale }) {
  if (!clinic.offers.enabled || clinic.offers.items.length === 0) return null;
  const items = clinic.offers.items.map((o) => o[locale]);
  return (
    <div className="bg-brand-900 text-brand-50">
      <div className="container-x flex min-h-9 items-center justify-center gap-2 py-2 text-center text-xs sm:text-sm">
        <Megaphone className="h-4 w-4 shrink-0 text-accent-300" aria-hidden />
        <p className="font-medium">{items.join("  •  ")}</p>
      </div>
    </div>
  );
}
