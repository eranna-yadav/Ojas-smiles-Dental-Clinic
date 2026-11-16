import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  crumbs,
  title,
  subtitle,
  children,
}: {
  crumbs: { label: string; href?: string }[];
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl" />
      <div className="container-x relative pt-8 pb-12 sm:pt-12 sm:pb-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-600">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand-800 hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-slate-800">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-pretty text-muted">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
