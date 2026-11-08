# Hallmark design audit (2026-11-08)

Ran `/hallmark audit src` against the production build. It covered 7 routes: /, /about, /research, /projects, /experience, /skills, /contact.
- The raw linter output is in `.hallmark/before.txt` and `.hallmark/before.json`, with screenshots in `.hallmark/before/`. The folder is untracked.
- Re-run the audit if the code has changed since this date.

**Overall read:** the content is strong (real employers and dates, published papers with DOIs, honest status labels). The design reads as a stock Tailwind template: every page is a centred title plus a grid of identical shadowed cards, all in the default blue.

## Floor issues (must fix)
| Gate | Problem | Where |
|---|---|---|
| 26a | No `focus-visible` style in any component. The default ring on the black nav is 1.10:1, so keyboard focus is invisible. | all components |
| 40 | The "Jan 2026 – Present" badge is white on `bg-blue-500`, 3.68:1. | /experience |
| 34 | `overflow-x:hidden` on html, body and #root breaks sticky positioning. Use `clip`. | `src/index.css:67` |
| 10a | `transition-all`. Name the properties instead. | `src/components/Navigationbar.jsx:39`, `:93` |
| 54/67 | Uppercase, tracked labels above headings, e.g. "AI · DATA SCIENCE · ENGINEERING" and "Beyond Engineering". | `Home.jsx:69`, `PortfolioSections.jsx:152`, `:238` |
| 63 | Middle-dot separators in meta lines. | project and research meta lines |
| 19 | Em dash in "Mehmood Ul Haq — Professional CV". | `PortfolioSections.jsx:307` |
| 48/74 | No colour tokens; the raw Tailwind palette everywhere. | site-wide |
| 58 | /about has 127 words on one screen and /experience has 150. Arguably fine for CV pages, so this is a judgement call. | /about, /experience |

**Noise:** most of the 184 FAIL count comes from dead CSS.
- `src/App.css` is a leftover from the React starter template, and nothing imports it.
- The legacy rule block in `src/index.css` styles classes no component uses: `.section`, `.about-grid`, `.interest-card` and others.

Deleting both changes nothing visible.

## Reflex and judged findings
- 6b: the homepage hero is seven elements stacked on the centre line.
- 9: every page repeats the same centred title plus card grid.
- 77/79: the homepage is a thin column at 47% width, and /about ends with about 700px of empty space.
- 26b: no `:active` states anywhere.
- 71: on /skills, headings sit closer to the content above them than to what they head.

## Finish checks
- Add `text-wrap: balance` to headings (some break into a short stub of a word).
- /skills leaves one item alone on its last row.
- Cards have both a border and a soft shadow; pick one.
- Five solid "View on GitHub" buttons compete on /projects, and cards without a GitHub link leave uneven gaps.
- No project screenshots.
- The footer's "All rights reserved" line has no legal effect.

## Next step: the owner hasn't chosen yet
- **Polish (recommended):** fix the Floor items and delete the dead CSS, keeping the layout and look. Run on a new branch.
- **Restyle:** add colour and type tokens and replace the default blue; the layout stays.
- **Full redesign:** a new layout built around the publications and projects, with screenshots.

Ask which one before starting.
