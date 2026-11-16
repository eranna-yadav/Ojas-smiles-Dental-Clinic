import { BadgeIndianRupee, Clock4, HeartHandshake, Microscope, ShieldCheck, Smile, Users } from "lucide-react";
import { clinic } from "@/config/clinic";
import type { Dictionary } from "@/lib/i18n";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function About({ t }: { t: Dictionary }) {
  const why = [
    { icon: Microscope, ...t.about.why.equipment },
    { icon: ShieldCheck, ...t.about.why.sterilization },
    { icon: Smile, ...t.about.why.painless },
    { icon: BadgeIndianRupee, ...t.about.why.affordable },
    { icon: Users, ...t.about.why.family },
    { icon: Clock4, ...t.about.why.timings },
  ];

  return (
    <section id="about" className="section-y" aria-labelledby="about-title">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-last lg:order-first">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              {/* TODO: replace with a real photo of the clinic interior */}
              <SmartImage src="/images/about.svg" alt={t.about.imageAlt} width={1200} height={900} sizes="(min-width: 1024px) 45vw, 100vw" className="h-auto w-full" />
            </div>
            {clinic.womenOwned && (
              <div className="absolute -right-2 -bottom-6 flex items-center gap-3 rounded-2xl bg-accent-50 px-4 py-3 shadow-lift ring-1 ring-accent-200 sm:right-6">
                <HeartHandshake className="h-6 w-6 text-accent-700" aria-hidden />
                <span className="text-sm font-semibold text-accent-700">{t.about.womenOwned}</span>
              </div>
            )}
          </Reveal>

          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 id="about-title" className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{t.about.story}</p>
            <p className="mt-4 border-l-4 border-brand-300 pl-4 text-base leading-relaxed text-slate-700">{t.about.mission}</p>
          </Reveal>
        </div>

        <h3 className="mt-20 text-center text-2xl font-bold tracking-tight sm:text-3xl">{t.about.whyTitle}</h3>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 0.05} className="card group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                <w.icon className="h-6 w-6" aria-hidden />
              </span>
              <h4 className="mt-4 text-lg font-bold">{w.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
