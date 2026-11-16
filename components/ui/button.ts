import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "whatsapp" | "white" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-brand-700 text-white shadow-soft hover:bg-brand-800 hover:shadow-lift hover:-translate-y-0.5",
  accent: "bg-accent-400 text-ink shadow-soft hover:bg-accent-300 hover:shadow-lift hover:-translate-y-0.5",
  outline: "bg-white text-brand-800 ring-1 ring-brand-200 hover:ring-brand-400 hover:bg-brand-50",
  ghost: "text-brand-800 hover:bg-brand-50",
  whatsapp: "bg-[#0F7A41] text-white shadow-soft hover:bg-[#0b6e37] hover:shadow-lift hover:-translate-y-0.5",
  white: "bg-white text-brand-900 shadow-soft hover:bg-brand-50",
  dark: "bg-ink text-white shadow-soft hover:bg-slate-800 hover:shadow-lift hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
  lg: "h-12 px-6 text-base sm:h-14 sm:px-7",
};

/**
 * Button classes. If `extra` contains "hidden" (e.g. "hidden sm:inline-flex"), the base
 * display class is dropped so the two don't conflict.
 */
export function btn(variant: Variant = "primary", size: Size = "md", extra?: string) {
  const hides = extra?.split(/\s+/).includes("hidden");
  return cn(hides ? base.replace("inline-flex ", "") : base, variants[variant], sizes[size], extra);
}
