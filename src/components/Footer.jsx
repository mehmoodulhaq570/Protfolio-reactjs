import React from "react";
import { profile } from "../data/portfolio";

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Google Scholar", href: profile.scholar },
];

// Matches the night navigation bar. Its focus outline colour is set in index.css.
const Footer = () => (
  <footer className="bg-night text-night-muted border-t border-white/10 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
      {/* The year comes from the build; a page built in one year and opened in
          the next shows the old year until the next deploy, without a hydration warning. */}
      <p suppressHydrationWarning>© {new Date().getFullYear()} Mehmood Ul Haq</p>
      <nav aria-label="Profiles">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map(({ label, href }) => {
            const external = !href.startsWith("mailto:");
            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="hover:text-night-accent active:text-night-ink transition-colors"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
