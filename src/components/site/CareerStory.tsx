import { Section } from "./Section";
import { careerStory } from "@/data/portfolio";

export function CareerStory() {
  return (
    <Section
      id="career-story"
      eyebrow="Career Progression"
      title="From Quality Engineering to Software Development & Production Ownership"
      className="border-y border-border bg-surface/40"
    >
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {careerStory.map((step, i) => (
          <li key={step} className="surface-card flex items-center gap-4 p-5">
            <span className="font-display text-sm font-semibold text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium">{step}</span>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
        This progression reflects demonstrated technical ownership and leadership potential — not a
        formal people-management or engineering-manager title.
      </p>
    </Section>
  );
}
