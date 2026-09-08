import { useState } from "react";
import { credibility, profile } from "@/data/portfolio";

export function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="glow-ring pointer-events-none absolute inset-x-0 top-0 h-[520px]" aria-hidden="true" />
      <div className="section-shell relative pt-32 sm:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {profile.status}
            </span>

            <p className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {profile.name}
            </p>

            <h1
              id="hero-heading"
              className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[3rem]"
            >
              Software Developer Building, Supporting &amp;{" "}
              <span className="accent-text">Improving Enterprise Applications</span>
            </h1>

            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {profile.title}
            </p>


            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View My Experience
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          <div className="order-first lg:order-none">
            <div className="relative mx-auto w-fit">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/35 to-violet/25 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface">
                {imgOk ? (
                  <img
                    src={profile.photoUrl}
                    alt="Portrait of Gurparneet Kaur, Software Developer and Application Support Developer"
                    width={420}
                    height={520}
                    className="h-[320px] w-[260px] object-cover sm:h-[420px] sm:w-[340px]"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <div className="flex h-[320px] w-[260px] flex-col items-center justify-center gap-3 bg-surface-2 text-center sm:h-[420px] sm:w-[340px]">
                    <span className="font-display text-5xl font-semibold accent-text">GK</span>
                    <span className="px-6 text-xs text-muted-foreground">
                      Professional photograph pending upload
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid gap-3 border-t border-border pt-8 sm:grid-cols-3 lg:grid-cols-5">
          {credibility.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-surface px-4 py-3 text-center text-sm font-medium text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted-foreground">
          &ldquo;256 Projects Platform&rdquo; describes the scale of the supported platform environment.
        </p>
      </div>
    </section>
  );
}
