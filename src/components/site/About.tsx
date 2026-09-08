import { Section } from "./Section";
import { aboutIntro, aboutNotes, aboutPoints } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering with ownership from development to production."
      intro={aboutIntro}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {aboutPoints.map((group) => (
          <div key={group.title} className="surface-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-primary">
                    &bull;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {aboutNotes.map((note) => (
          <p key={note} className="surface-card p-6 text-sm leading-relaxed text-muted-foreground">
            {note}
          </p>
        ))}
      </div>
    </Section>
  );
}
