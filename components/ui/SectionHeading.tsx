import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-10 sm:mb-14", align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="mt-4 text-3xl font-extrabold tracking-tight text-balance text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
