import type { Block } from "@/content/blog";
import type { Locale } from "@/lib/i18n";

export function Prose({ blocks, locale }: { blocks: Block[]; locale: Locale }) {
  return (
    <div className="prose-clinic text-base sm:text-lg">
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i}>{b.text[locale]}</p>
        ) : b.type === "h2" ? (
          <h2 key={i}>{b.text[locale]}</h2>
        ) : (
          <ul key={i}>
            {b.items.map((it, j) => (
              <li key={j}>{it[locale]}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}
