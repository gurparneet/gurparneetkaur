import { Section } from "./Section";
import { travelIntro, travelClosing, destinations } from "@/data/portfolio";
import cutout from "@/assets/gurparneet-travel-cutout.png.asset.json";

export function Travel() {
  return (
    <Section
      id="travel"
      eyebrow="Beyond Work"
      title="Travel & Beyond"
      intro={travelIntro}
      className="border-y border-border bg-surface/40"
    >
      <div className="relative">
        {/* dotted travel path */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-10 hidden h-40 w-full text-primary/35 lg:block"
          viewBox="0 0 1000 160"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M10 120 C 200 10, 380 150, 560 60 S 900 30, 990 90"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
        </svg>

        <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <li
              key={d.place}
              className={`surface-card group relative overflow-hidden p-5 shadow-sm hover:-translate-y-1 ${
                i % 3 === 1 ? "lg:mt-8" : ""
              } ${i % 3 === 2 ? "lg:mt-4" : ""}`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 to-violet/70 opacity-60 transition-opacity group-hover:opacity-100"
              />
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="currentColor">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
                {d.country}
              </p>
              <p className="mt-2 font-display text-lg font-semibold">{d.place}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.note}</p>
            </li>
          ))}
        </ul>

        {/* playful cutout photo */}
        <div className="pointer-events-none mt-10 flex justify-center lg:absolute lg:-bottom-6 lg:right-0 lg:mt-0 lg:block">
          <figure className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/15 to-violet/15 blur-xl"
            />
            <img
              src={cutout.url}
              alt="Gurparneet Kaur smiling while travelling"
              loading="lazy"
              className="relative h-32 w-32 rounded-full border-2 border-surface bg-surface-2 object-cover object-top shadow-lg sm:h-36 sm:w-36"
            />
            <figcaption className="relative mx-auto mt-3 flex w-max items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground shadow-sm">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13 18v-4.5L21 16Z" />
              </svg>
              somewhere new
            </figcaption>
          </figure>
        </div>
      </div>

      <p className="mt-12 text-center font-display text-base italic text-muted-foreground lg:mt-20">
        {travelClosing}
      </p>
    </Section>
  );
}
