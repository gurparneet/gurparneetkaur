import { profile } from "@/data/portfolio";

export function Footer() {
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
            <a className="hover:text-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
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
