import { Section } from "./Section";
import { howIWork } from "@/data/portfolio";

export function HowIWork() {
  return (
    <Section
      id="how-i-work"
      eyebrow="Approach"
      title="How I Solve Technical Problems"
      className="border-y border-border bg-surface/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {howIWork.map((step, i) => (
          <div key={step.title} className="surface-card p-6">
            <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
