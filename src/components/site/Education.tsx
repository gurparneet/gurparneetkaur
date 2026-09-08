import { Section } from "./Section";
import { education, training } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background & professional training">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <article key={e.degree} className="surface-card p-6">
            <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
            <p className="mt-1 text-sm text-primary">{e.school}</p>
            <p className="text-sm text-muted-foreground">
              {e.location} &middot; {e.period}
            </p>
            {e.areas.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {e.areas.map((a) => (
                  <li
                    key={a}
                    className="rounded-md border border-border bg-background/50 px-3 py-1.5 text-xs"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {training.map((t) => (
          <article key={t.name} className="surface-card p-6">
            <h3 className="font-display text-base font-semibold">{t.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
            <p className="text-sm text-primary">{t.date}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
