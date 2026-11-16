import { Star } from "lucide-react";

export function Stars({ value, label, size = 16 }: { value: number; label: string; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          width={size}
          height={size}
          className={i < Math.round(value) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}
        />
      ))}
    </span>
  );
}
