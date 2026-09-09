import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          _subject: `Portfolio enquiry from ${String(data.get("name") ?? "")}`,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Connect"
      intro="Interested in discussing software development, application support, technical problem solving or new technology opportunities? I'd be happy to connect."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={onSubmit} className="surface-card p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
              placeholder="you@company.com"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={field}
              placeholder="How can I help?"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Send Message
          </button>
          <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
            {sent
              ? "Your email app should now be open with the message ready to send."
              : "Messages open in your email app. A secure email service can be connected later."}
          </p>
        </form>

        <div className="surface-card p-6 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Direct contact
          </h3>
          <dl className="mt-5 space-y-5 text-sm">
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd className="mt-1">
                <a className="hover:text-primary" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">LinkedIn</dt>
              <dd className="mt-1 break-all">
                <a
                  className="hover:text-primary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {profile.linkedinLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Location</dt>
              <dd className="mt-1">{profile.location}</dd>
            </div>
          </dl>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-block rounded-lg border border-border bg-background/50 px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Connect with me on LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
