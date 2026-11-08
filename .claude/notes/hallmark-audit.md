# Hallmark design audit

Linter: `/hallmark audit src`, run against the prerendered production build on 7 routes: /, /about, /research, /projects, /experience, /skills, /contact. Raw output is in `.hallmark/` (gitignored):
- **Before (2026-11-08):** `before.txt`, `before.json` and the screenshots in `before/`. 184 FAIL.
- **After Polish (2026-11-08):** `after.txt` and the screenshots in `after/`. 36 FAIL.

Re-run the audit if the code has changed since the last run.

**Overall read:** the content is strong (real employers and dates, published papers with DOIs, honest status labels). The design still reads as a stock Tailwind template: every page is a centred title plus a grid of identical cards, all in the default blue. Polish fixed the defects but not that.

## Done: Polish (PR #5, merged 2026-11-08)
- Visible `:focus-visible` outline at 3:1 or better on every surface (26a).
- Date and award badges moved to `bg-blue-700`, white text 6.7:1 (40).
- `overflow-x: clip` on html, body and #root (34).
- Named transitions instead of `transition-all` (10a).
- `:active` states, `text-wrap: balance` on headings, `motion-safe:` on the cursor pulse (27).
- Uppercase eyebrow labels removed (54/67), dates in their own column instead of middle dots (63), em dash removed from the CV title (19).
- Cards: shadow in light mode, border in dark mode.
- Dead CSS deleted: `src/App.css` and the legacy block in `src/index.css`.
- PR #6: a real site footer ("© <build year> Mehmood Ul Haq" plus Email, LinkedIn, GitHub and Scholar links), replacing the old `Footer.jsx` that was never rendered. Unused `projects/ProjectCard.jsx` and the starter `logo.svg` deleted.

## Done: serif headings (PR #8)
- The owner tried a full teal restyle (colour tokens, teal accent, serif headings) on 2026-11-08. They liked the font and **want the original colours kept: the blue accent, white and gray-900 backgrounds, black nav, brand-coloured icons. Don't propose a colour change again.**
- What shipped: headings (h1–h3) in Source Serif 4, self-hosted. It's one static semibold file, Latin subset, 21.5 KB, with `font-weight: 400 700` so every heading weight uses that cut without a faked bold. Body text stays on the system sans.
- Performance notes from the experiment, measured with local Lighthouse mobile against a local build of `main`:
  - Variable Source Serif plus Inter (about 99 KB) cost about 10 points: first paint +0.45 s, LCP +0.5 s.
  - Preloading the fonts made it worse, because the homepage LCP element is the portrait image and the fonts competed with it for bandwidth.
  - The single static file costs about 0.2 s of LCP, which is within noise.
- Netlify deploy previews inject a toolbar iframe (about 300 KB of scripts from app.netlify.com), so Lighthouse on a preview isn't comparable with production. Compare local builds instead.

## Still open
- **48/74 and 7a, colour tokens:** the raw Tailwind palette and pure #fff. **The owner wants these colours, so leave them.**
- **Layout (redesign territory):**
  - 44c/79: page heads end around 200px into a 900px screen.
  - 6b: the homepage hero is a stack on the centre line.
  - 9: every page repeats the same title plus card grid.
  - 77: the homepage is a thin column.
  - 71: on /skills, headings sit closer to the content above them than to what they head.
- 44c/79: page heads end around 200px into a 900px screen, leaving the rest of the first screen to cards or empty space.
- 6b: the homepage hero is a stack on the centre line. 9: every page repeats the same title plus card grid. 77: the homepage is a thin column.
- 71: on /skills, headings sit closer to the content above them than to what they head.
- Finish: /skills leaves one item alone on its last row; "View on GitHub" buttons leave uneven card heights on /projects; no project screenshots.

## Next step
A layout pass or full redesign, best done once project screenshots exist. Ask before starting.
