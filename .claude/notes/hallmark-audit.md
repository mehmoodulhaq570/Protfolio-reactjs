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

## Still open
- **48/74 and 7a, colour tokens:** the raw Tailwind palette and pure #fff everywhere. This is the Restyle work.
- **54:** two blue meta lines above headings still trip the eyebrow rule: the research category and the community dates. They were left alone because they're data, not decoration.
- **58:** word count per screen on /about, /experience, /projects and /research. Arguably fine for CV pages, so this is a judgement call.
- **Layout (redesign territory):**
  - 6b: the homepage hero is a stack on the centre line.
  - 9: every page repeats the same title plus card grid.
  - 77/79: the homepage is a thin column, and the page heads leave about 700px of empty space.
  - 71: on /skills, headings sit closer to the content above them than to what they head.
- **Finish:**
  - /skills leaves one item alone on its last row.
  - Five solid "View on GitHub" buttons compete on /projects, and cards without a GitHub link leave uneven gaps.
  - No project screenshots.

## Next step: Restyle, when the owner is ready
Add colour and type tokens and replace the default blue; the layout stays. Full redesign waits until project screenshots exist. Ask before starting.
