# Hallmark design audit

Linter: `/hallmark audit src`, run against the prerendered production build on 7 routes: /, /about, /research, /projects, /experience, /skills, /contact. Raw output is in `.hallmark/` (gitignored):
- **Before (2026-11-08):** `before.txt`, `before.json` and the screenshots in `before/`. 184 FAIL.
- **After Polish (2026-11-08):** `after.txt` and the screenshots in `after/`. 36 FAIL.

Re-run the audit if the code has changed since the last run.

**Overall read:** the content is strong (real employers and dates, published papers with DOIs, honest status labels). The layout is still a centred title plus a grid of cards on every page. The colours are the default Tailwind blue, and **the owner has chosen to keep them** (see below).

## Done: Polish (PR #5, merged 2026-11-08)
- Visible `:focus-visible` outline at 3:1 or better on every surface (26a).
- Date and award badges moved to `bg-blue-700`, white text 6.7:1 (40).
- `overflow-x: clip` on html, body and #root (34).
- Named transitions instead of `transition-all` (10a).
- `:active` states, `text-wrap: balance` on headings, `motion-safe:` on the cursor pulse (27).
- Uppercase eyebrow labels removed (54/67), dates in their own column instead of middle dots (63), em dash removed from the CV title (19).
- Cards: shadow in light mode, border in dark mode.
- Dead CSS deleted: `src/App.css` and the legacy block in `src/index.css`.

## Done: footer and cleanup (PR #6, merged 2026-11-08)
- A real site footer: "© <build year> Mehmood Ul Haq" plus Email, LinkedIn, GitHub and Scholar links, black to match the nav.
- It replaces the old `Footer.jsx`, which was never rendered.
- Unused `projects/ProjectCard.jsx` and the starter `logo.svg` deleted.

## Done: serif headings (PR #8, merged 2026-11-08)
- The owner tried a full teal restyle (colour tokens, teal accent, serif headings). They liked the font and **want the original colours kept: the blue accent, white and gray-900 backgrounds, black nav, brand-coloured icons. Don't propose a colour change again.**
- What shipped: headings (h1–h3) in Source Serif 4, self-hosted. It's one static semibold file, Latin subset, 21.5 KB, with `font-weight: 400 700` so every heading weight uses that cut without a faked bold. Body text stays on the system sans.
- Performance notes from the experiment, measured with local Lighthouse mobile against a local build of `main`:
  - Variable Source Serif plus Inter (about 99 KB) cost about 10 points: first paint +0.45 s, LCP +0.5 s.
  - Preloading the fonts made it worse, because the homepage LCP element is the portrait image and the fonts competed with it for bandwidth.
  - The single static file costs about 0.2 s of LCP, which is within noise.

## Still open
- **48/74 and 7a, colour tokens:** the raw Tailwind palette and pure #fff. **The owner wants these colours, so leave them.**
- **58, word count per screen** on /about, /experience, /projects and /research. A judgement call for CV pages.
- **Layout (redesign territory):**
  - 44c/79: page heads end around 200px into a 900px screen.
  - 6b: the homepage hero is a stack on the centre line.
  - 9: every page repeats the same title plus card grid.
  - 77: the homepage is a thin column.
  - 71: on /skills, headings sit closer to the content above them than to what they head.
- **Finish:**
  - /skills leaves one item alone on its last row.
  - "View on GitHub" buttons leave uneven card heights on /projects.
  - No project screenshots.

## Next step
A layout pass or full redesign, best done once project screenshots exist. Keep the current colours and the serif headings. Ask before starting.
