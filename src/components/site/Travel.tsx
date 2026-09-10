import { Section } from "./Section";
import { travelIntro, travelClosing } from "@/data/portfolio";

export function Travel() {
  return (
    <Section
      id="travel"
      eyebrow="Beyond the Keyboard"
      title="About Me"
      className="border-y border-border bg-surface/40"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.6fr_1fr] md:gap-14">
        {/* personal quote */}
        <figure className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-1 -top-6 select-none font-hand text-6xl text-primary/25 sm:text-7xl"
          >
            &ldquo;
          </span>
          <blockquote className="relative px-4 sm:px-6">
            <p className="font-hand text-2xl leading-relaxed text-foreground/90 sm:text-[1.7rem] sm:leading-relaxed">
              {travelIntro}
            </p>
          </blockquote>
          <span
            aria-hidden="true"
            className="absolute -bottom-8 right-2 select-none font-hand text-6xl text-primary/25 sm:text-7xl"
          >
            &rdquo;
          </span>
          <figcaption className="mt-10 text-center font-display text-base italic text-muted-foreground">
            — {travelClosing}
          </figcaption>
        </figure>

        {/* polaroid-style photo on the side */}
        <div className="flex justify-center md:justify-end">
          <div className="rotate-3 rounded-[0.5rem] bg-white p-3 pb-10 shadow-xl transition-transform duration-300 hover:rotate-1 sm:p-4 sm:pb-12">
            <img
              src="/images/gurparneet-travel.jpg"
              alt="Gurparneet Kaur travelling"
              loading="lazy"
              className="h-64 w-64 rounded-sm object-cover sm:h-72 sm:w-72"
            />
            <p className="mt-2 text-center font-hand text-base text-muted-foreground">
              ✈ somewhere new
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
