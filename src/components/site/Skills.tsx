import { Section } from "./Section";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="Tools and technologies used across development, support and delivery."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="surface-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {cat.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
