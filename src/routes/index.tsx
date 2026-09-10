import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { CareerHighlights } from "@/components/site/CareerHighlights";
import { About } from "@/components/site/About";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { CareerStory } from "@/components/site/CareerStory";
import { Skills } from "@/components/site/Skills";
import { HowIWork } from "@/components/site/HowIWork";
import { AISection } from "@/components/site/AISection";
import { ProductionSupport } from "@/components/site/ProductionSupport";
import { Projects } from "@/components/site/Projects";
import { Leadership } from "@/components/site/Leadership";
import { Education } from "@/components/site/Education";
import { Resume } from "@/components/site/Resume";
import { Travel } from "@/components/site/Travel";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Gurparneet Kaur | Software Developer | Application Support Developer";
const description =
  "Gurparneet Kaur is a Software Developer and Application Support professional with 8+ years of enterprise technology experience across C#/.NET, SQL, APIs, CI/CD, production support, QA automation and AI-assisted development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gurparneet Kaur",
          jobTitle: "Software Developer, Application Support Developer",
          email: "mailto:gurparneet03@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cambridge",
            addressRegion: "Ontario",
            addressCountry: "CA",
          },
          sameAs: [
            "https://www.linkedin.com/in/gurparneet-kaur-jattana-284122179",
          ],
          knowsAbout: [
            "C#",
            ".NET",
            "SQL",
            "REST APIs",
            "SOAP APIs",
            "CI/CD",
            "Application Support",
            "QA Automation",
            "Selenium",
            "AI-Assisted Development",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <CareerHighlights />
        <About />
        <ExperienceTimeline />
        <CareerStory />
        <Skills />
        <HowIWork />
        <AISection />
        <ProductionSupport />
        <Projects />
        <Leadership />
        <Education />
        <Resume />
        <Travel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
