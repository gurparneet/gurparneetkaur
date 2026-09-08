import { highlights } from "@/data/portfolio";

export function CareerHighlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-heading" className="border-y border-border bg-surface/40">
      <div className="section-shell py-14">
        <h2 id="highlights-heading" className="sr-only">
          Career highlights
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <li key={h.value} className="surface-card p-6">
              <p className="font-display text-3xl font-semibold accent-text">{h.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
