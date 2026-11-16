import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clinic } from "@/config/clinic";
import { href, type Locale } from "@/lib/i18n";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function ServicesGrid({ locale, exclude, headingLevel = "h3" }: { locale: Locale; exclude?: string; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  const list = clinic.services.filter((s) => s.slug !== exclude);
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={(i % 3) * 0.06}>
          <Link
            href={href(locale, `/services/${s.slug}`)}
            className={cn(
              "card group relative flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-200",
              s.icon === "emergency" && "bg-accent-50 ring-accent-200"
            )}
          >
            <span
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl transition",
                s.icon === "emergency"
                  ? "bg-accent-200 text-accent-700 group-hover:bg-accent-600 group-hover:text-white"
                  : "bg-brand-50 text-brand-700 group-hover:bg-brand-700 group-hover:text-white"
              )}
            >
              <ServiceIcon icon={s.icon} className="h-6 w-6" />
            </span>
            <H className="mt-4 pr-8 text-lg font-bold leading-snug">{s.name[locale]}</H>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short[locale]}</p>
            <ArrowUpRight
              className="absolute top-6 right-6 h-5 w-5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-700"
              aria-hidden
            />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
