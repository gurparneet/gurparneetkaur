import { Section } from "./Section";
import { leadershipPoints, leadershipStatement } from "@/data/portfolio";

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="Ownership"
      title="Technical Leadership & Ownership"
      className="border-y border-border bg-surface/40"
    >
      <blockquote className="surface-card p-8 font-display text-xl leading-snug">
        {leadershipStatement}
      </blockquote>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {leadershipPoints.map((p) => (
          <li key={p} className="surface-card p-5 text-sm text-muted-foreground">
            {p}
          </li>
        ))}
      </ul>
    </Section>
  );
}
