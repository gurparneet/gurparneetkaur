import { useState } from "react";
import { profile } from "@/data/portfolio";

export function Footer() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: open mail client
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto flex max-w-[76rem] flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Software Developer | Application Support Developer
          </p>
          <p className="text-sm text-muted-foreground">{profile.location}</p>
        </div>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            <button
              type="button"
              onClick={copyEmail}
              className="hover:text-primary transition-colors text-left"
            >
              {copied ? "Email copied!" : profile.email}
            </button>
          </li>
          <li>
            <a
              className="hover:text-primary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
        &copy; 2026 {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
