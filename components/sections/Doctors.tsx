import { Award, GraduationCap } from "lucide-react";
import { clinic } from "@/config/clinic";
import { fmt, type Dictionary, type Locale } from "@/lib/i18n";
import { SmartImage } from "@/components/ui/SmartImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Doctors({ locale, t }: { locale: Locale; t: Dictionary }) {
  const single = clinic.doctors.length === 1;
  return (
    <section id="doctors" className="section-y bg-brand-50/50" aria-labelledby="doctors-title">
      <div className="container-x">
        <SectionHeading id="doctors-title" eyebrow={t.doctors.eyebrow} title={t.doctors.title} subtitle={t.doctors.subtitle} />
        <div className={cn("grid gap-8", single ? "mx-auto max-w-4xl" : "sm:grid-cols-2 lg:grid-cols-3")}>
          {clinic.doctors.map((d) => (
            <Reveal key={d.id} as="article" className={cn("card overflow-hidden", single && "grid md:grid-cols-5")}>
              <div className={cn("relative bg-brand-100", single ? "md:col-span-2" : "")}>
                {/* TODO: replace with the doctor's real photo */}
                <SmartImage
                  src={d.image}
                  alt={d.imageAlt[locale]}
                  width={800}
                  height={1000}
                  sizes="(min-width: 768px) 35vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className={cn("p-6 sm:p-8", single && "md:col-span-3 md:self-center")}>
                <p className="text-sm font-semibold text-brand-700">{d.role[locale]}</p>
                <h3 className="mt-1 text-2xl font-extrabold tracking-tight">{d.name[locale]}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-brand-600" aria-hidden />
                    {d.qualifications}
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-brand-600" aria-hidden />
                    {d.experienceYears ? fmt(t.doctors.experience, { n: d.experienceYears }) : t.doctors.experienceTodo}
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted">{d.bio[locale]}</p>
                {d.specialties.length > 0 && (
                  <>
                    <p className="mt-5 text-xs font-bold tracking-wider text-slate-500 uppercase">{t.doctors.specialties}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {d.specialties.map((s) => (
                        <li key={s.en} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800 ring-1 ring-brand-100">
                          {s[locale]}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
