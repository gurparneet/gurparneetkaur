import { Section } from "./Section";
import { caseStudies } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Representative areas of delivery"
      intro="Editable case study cards covering the types of work delivered. Specific project details can be added at any time."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <details key={cs.name} className="surface-card group p-6">
            <summary className="cursor-pointer list-none marker:hidden">
              <span className="flex items-start justify-between gap-4">
                <span className="font-display text-lg font-semibold">{cs.name}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
              <span className="mt-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {cs.technology}
              </span>
            </summary>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ["Problem", cs.problem],
                ["Role", cs.role],
                ["Approach", cs.approach],
                ["Technology", cs.technology],
                ["Outcome", cs.outcome],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {k}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </details>
        ))}
      </div>
    </Section>
  );
}
