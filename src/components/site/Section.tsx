import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={className}>
      <div className="section-shell">
        <header className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className="text-3xl font-semibold leading-tight sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
