import { Section } from "./Section";
import { profile } from "@/data/portfolio";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Explore My Resume"
      intro="A full breakdown of enterprise development, application support, API, database, CI/CD and QA automation experience."
      className="border-y border-border bg-surface/40"
    >
      <div className="flex flex-wrap gap-3">
        <a
          href={profile.resumeUrl}
          download
          className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Download Resume
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
        >
          View Resume
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          Connect with me on LinkedIn
        </a>
      </div>
    </Section>
  );
}
