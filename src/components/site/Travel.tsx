import { Section } from "./Section";
import { travelIntro, travelClosing, destinations } from "@/data/portfolio";
import cutout from "@/assets/gurparneet-travel-cutout.png.asset.json";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

export function Travel() {
  return (
    <Section
      id="travel"
      eyebrow="Beyond the Keyboard"
      title="About Me Beyond Work"
      intro={travelIntro}
      className="border-y border-border bg-surface/40"
    >
      <div className="relative mx-auto max-w-4xl">
        {/* memory board */}
        <div className="relative rounded-3xl border border-dashed border-primary/30 bg-surface px-6 py-10 shadow-sm sm:px-12 sm:py-14">
          {/* subtle flight path */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-4 hidden h-24 w-[calc(100%-4rem)] text-primary/25 sm:block"
            viewBox="0 0 800 96"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M10 70 C 180 10, 340 90, 520 40 S 720 20, 790 55"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />
            <path d="M786 47l14 8-14 6 3-7-3-7Z" fill="currentColor" />
          </svg>

          {/* destination chips */}
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5 sm:gap-x-6">
            {destinations.map((d, i) => (
              <li key={d.place} className={rotations[i % rotations.length]}>
                <span className="group inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
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

        {/* playful cutout photo, tilted like a polaroid */}
        <figure className="pointer-events-none mx-auto -mt-8 w-max rotate-3 rounded-2xl border border-border bg-surface p-2.5 pb-3 shadow-lg transition-transform duration-300 hover:rotate-1 sm:absolute sm:-right-6 sm:-top-10 sm:mt-0 sm:rotate-6">
          <img
            src={cutout.url}
            alt="Gurparneet Kaur enjoying a trip"
            loading="lazy"
            className="h-28 w-28 rounded-xl bg-surface-2 object-cover object-top sm:h-32 sm:w-32"
          />
          <figcaption className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3 text-primary" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13 18v-4.5L21 16Z" />
            </svg>
            somewhere new
          </figcaption>
        </figure>
      </div>

      <p className="mt-12 text-center font-display text-base italic text-muted-foreground">
        {travelClosing}
      </p>
    </Section>
  );
}
