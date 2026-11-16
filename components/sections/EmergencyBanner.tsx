import { PhoneCall, Siren } from "lucide-react";
import { clinic } from "@/config/clinic";
import { fmt, type Dictionary } from "@/lib/i18n";
import { telUrl } from "@/lib/whatsapp";
import { btn } from "@/components/ui/button";

export function EmergencyBanner({ t }: { t: Dictionary }) {
  return (
    <section aria-labelledby="emergency-title" className="container-x">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent-400 to-accent-300 p-6 shadow-lift sm:p-10">
        <div aria-hidden className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/20" />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-accent-600 shadow-soft">
              <Siren className="h-7 w-7" aria-hidden />
            </span>
            <div>
              <h2 id="emergency-title" className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                {t.emergency.title}
              </h2>
              <p className="mt-1 max-w-xl text-sm text-slate-800 sm:text-base">{t.emergency.text}</p>
            </div>
          </div>
          <a href={telUrl} className={btn("dark", "lg", "w-full md:w-auto")}>
            <PhoneCall className="h-5 w-5" aria-hidden />
            {fmt(t.emergency.cta, { phone: clinic.phone.display })}
          </a>
        </div>
      </div>
    </section>
  );
}
