import { Section } from "./Section";
import { currentRole, previousRoles } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="Professional Experience"
      title="A career built across development, delivery and production support."
    >
      <ol className="relative space-y-6 border-l border-border pl-6">
        <li className="relative">
          <span
            className="absolute -left-[1.9rem] top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
            aria-hidden="true"
          />
          <article className="surface-card p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-semibold">{currentRole.company}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{currentRole.role}</p>
              </div>
              <p className="text-sm text-muted-foreground">{currentRole.period}</p>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {currentRole.groups.map((group) => (
                <details
                  key={group.title}
                  className="group rounded-lg border border-border bg-background/40 px-4 py-3"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold marker:hidden">
                    <span className="flex items-center justify-between gap-3">
                      {group.title}
                      <span
                        aria-hidden="true"
                        className="text-primary transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden="true" className="text-primary">
                          &bull;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </article>
        </li>

        {previousRoles.map((role) => (
          <li key={role.company} className="relative">
            <span
              className="absolute -left-[1.78rem] top-6 h-2 w-2 rounded-full bg-muted-foreground ring-4 ring-background"
              aria-hidden="true"
            />
            <article className="surface-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold">{role.company}</h3>
                  <p className="text-xs text-muted-foreground">{role.location}</p>
                  <p className="mt-1 text-sm font-medium text-primary">{role.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">{role.period}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {role.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-primary">
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
