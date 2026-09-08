import { Section } from "./Section";
import { aiUses } from "@/data/portfolio";

export function AISection() {
  return (
    <Section
      id="ai"
      eyebrow="AI-Assisted Development"
      title="Modern Development, Accelerated by AI"
      intro="Hands-on experience using GitHub Copilot and Cursor as part of day-to-day engineering work."
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card relative overflow-hidden p-8">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-violet/25 blur-3xl"
            aria-hidden="true"
          />
          <p className="relative font-display text-xl leading-snug">
            &ldquo;I use AI-assisted development tools to accelerate engineering work while
            maintaining human review, technical judgment and validation.&rdquo;
          </p>
          <div className="relative mt-6 flex flex-wrap gap-2">
            {["GitHub Copilot", "Cursor"].map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-border bg-background/50 px-3 py-1.5 text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="surface-card p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Where AI fits in the workflow
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {aiUses.map((use) => (
              <li key={use} className="flex gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="text-primary">
                  &bull;
                </span>
                <span>{use}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
            AI-generated output is always reviewed and validated. These tools support engineering
            judgment — they do not replace it.
          </p>
        </div>
      </div>
    </Section>
  );
}
