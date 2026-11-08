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

## Done: Restyle (PR #8)
- Deep teal accent with serif headings, chosen by the owner on 2026-11-08 (from: teal, navy with amber, refined blue; serif or all sans).
- Colour tokens live as CSS variables (RGB channels) in `src/index.css` for light and `.dark`, mapped in `tailwind.config.js`: paper, surface, soft, ink, muted, faint, line, accent, accent-strong, on-accent, and night-* for the always-dark nav and footer. Every text pair is AA; the tightest is faint on soft at 5.0:1. Components use token classes, so almost no `dark:` variants are left.
- Fonts are self-hosted, Latin subset only: Source Serif 4 (headings, ~51 KB) and Inter (body, ~48 KB). Layout shift from the font swap is about 0.003.
- Cards: hairline border, no shadow. Profile and contact icons use one ink colour instead of brand colours, and skill logos use one muted colour.
- Audit after Restyle: 6 FAIL. That's 5 × 58 word count (a judgement call for CV pages) and 1 × 20 (Hallmark stamp, not applicable). Output is in `.hallmark/restyle.txt`.

## Still open (layout, redesign territory)
- 44c/79: page heads end around 200px into a 900px screen, leaving the rest of the first screen to cards or empty space.
- 6b: the homepage hero is a stack on the centre line. 9: every page repeats the same title plus card grid. 77: the homepage is a thin column.
- 71: on /skills, headings sit closer to the content above them than to what they head.
- Finish: /skills leaves one item alone on its last row; "View on GitHub" buttons leave uneven card heights on /projects; no project screenshots.

## Next step
A layout pass or full redesign, best done once project screenshots exist. Ask before starting.
