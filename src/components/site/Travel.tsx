import { Section } from "./Section";
import { travelIntro, travelClosing, destinations } from "@/data/portfolio";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "-rotate-1"];

function DottedLink() {
  return (
    <span
      aria-hidden="true"
      className="mx-1 inline-block w-5 border-t-2 border-dotted border-primary/40 sm:w-7"
    />
  );
}

export function Travel() {
  const mid = Math.floor(destinations.length / 2);
  return (
    <Section
      id="travel"
      eyebrow="Beyond the Keyboard"
      title="About Me Beyond Work"
      className="border-y border-border bg-surface/40"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
        {/* personal paragraph */}
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {travelIntro}
        </p>

        {/* original photo, tilted like a scrapbook polaroid */}
        <figure className="mx-auto w-max rotate-2 rounded-2xl border border-border bg-surface p-2.5 pb-3 shadow-lg transition-transform duration-300 hover:rotate-0 lg:sticky lg:top-24">
          <img
            src="/images/gurparneet-travel.jpg"
            alt="Gurparneet Kaur on one of her trips"
            loading="lazy"
            className="h-44 w-44 rounded-xl object-cover object-top sm:h-52 sm:w-52"
          />
          <figcaption className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3 text-primary" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13 18v-4.5L21 16Z" />
            </svg>
            somewhere new
          </figcaption>
        </figure>
      </div>

      {/* memory board */}
      <div className="relative mx-auto mt-12 max-w-4xl">
        <div className="relative rounded-3xl border border-dashed border-primary/30 bg-surface px-6 py-10 shadow-sm sm:px-10 sm:py-12">
          {/* destination chips joined by a dotted route with a plane midway */}
          <ul className="flex flex-wrap items-center justify-center gap-y-5">
            {destinations.map((d, i) => (
              <li key={d.place} className="flex items-center">
                {i > 0 ? <DottedLink /> : null}
                {i === mid ? (
                  <>
                    <span
                      aria-hidden="true"
                      title="Next stop"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-surface text-primary shadow-sm"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13 18v-4.5L21 16Z" />
                      </svg>
                    </span>
                    <DottedLink />
                  </>
                ) : null}
                <span
                  className={`group inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md ${rotations[i % rotations.length]}`}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 shrink-0 text-primary"
                    fill="currentColor"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                  {d.place}
                  <span className="hidden text-xs text-muted-foreground sm:inline">{d.country}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-12 text-center font-display text-base italic text-muted-foreground">
        {travelClosing}
      </p>
    </Section>
  );
}
