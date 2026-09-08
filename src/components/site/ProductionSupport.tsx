import { Section } from "./Section";
import { supportCapabilities, supportFlow } from "@/data/portfolio";

export function ProductionSupport() {
  return (
    <Section
      id="support"
      eyebrow="Production Ownership"
      title="Beyond Development"
      intro="Experience extends beyond writing code — through the full application lifecycle, from incident to monitored release."
      className="border-y border-border bg-surface/40"
    >
      <ul className="flex flex-wrap gap-2">
        {supportCapabilities.map((c) => (
          <li
            key={c}
            className="rounded-md border border-border bg-background/50 px-3 py-1.5 text-xs font-medium"
          >
            {c}
          </li>
        ))}
      </ul>

      <ol className="mt-8 flex flex-wrap items-center gap-2">
        {supportFlow.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="surface-card px-4 py-2 text-sm font-medium">{step}</span>
            {i < supportFlow.length - 1 ? (
              <span aria-hidden="true" className="text-primary">
                &rarr;
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
