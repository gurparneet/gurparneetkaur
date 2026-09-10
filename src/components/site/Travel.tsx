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
      <div className="relative mx-auto max-w-4xl">
        {/* small bubbly cutout photo, floating beside the quote */}
        <img
          src="/images/gurparneet-travel-cutout.png"
          alt="Gurparneet Kaur"
          loading="lazy"
          className="absolute -top-16 right-2 w-20 rotate-6 drop-shadow-lg transition-transform duration-300 hover:rotate-2 sm:-top-24 sm:right-6 sm:w-28 md:w-32"
        />

        {/* personal quote */}
        <figure className="relative rounded-3xl border border-border bg-surface px-7 py-10 shadow-sm sm:px-12 sm:py-14">
          <span
            aria-hidden="true"
            className="absolute left-5 top-3 select-none font-hand text-6xl text-primary/30 sm:left-8 sm:text-7xl"
          >
            &ldquo;
          </span>
          <blockquote className="relative">
            <p className="font-hand text-2xl leading-relaxed text-foreground/90 sm:text-[1.7rem] sm:leading-relaxed">
              {travelIntro}
            </p>
          </blockquote>
          <span
            aria-hidden="true"
            className="absolute bottom-2 right-6 select-none font-hand text-6xl text-primary/30 sm:right-9 sm:text-7xl"
          >
            &rdquo;
          </span>
          <figcaption className="mt-8 text-center font-display text-base italic text-muted-foreground">
            — {travelClosing}
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
