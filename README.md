# Mehmood Ul Haq: Research & Engineering Portfolio

The portfolio of Mehmood Ul Haq (AI engineering, data science and machine-learning research), live at **https://mehmoodulhaq570.netlify.app**.

Built with React 19, Vite, Tailwind CSS 3 and React Router 7. Every route is prerendered to static HTML at build time, so each page ships with its content and metadata, then React hydrates it in the browser.

## Run locally

Use Node.js `^20.19.0 || >=22.12.0` (22.20.0 is known to work).

```sh
npm install
npm run dev
```

Open the URL printed in the terminal (normally http://localhost:5173). `npm start` also starts Vite. Press Ctrl+C to stop it.
If PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev`.

## Build

```sh
npm run build
```

The output is `dist/`. The build runs three steps:
1. The client build.
2. An SSR build of `src/entry-server.jsx`.
3. `scripts/prerender.js`, which writes:
   - static HTML for every route as `dist/<route>.html`;
   - `404.html`;
   - `sitemap.xml`;
   - the Netlify `_redirects` rules.

Each prerendered page includes its content, title, description, canonical URL, Open Graph tags and JSON-LD. Unknown paths get `404.html` with a real 404 status.

`npm run preview` serves the prerendered pages from `dist/`. One difference from Netlify: an unknown path returns the homepage with a 200 status instead of `404.html` with a 404.

## Deployment

Netlify builds and publishes `main` automatically (see `netlify.toml`, which also sets the security and caching headers). Every pull request gets a deploy preview at `https://deploy-preview-<PR number>--mehmoodulhaq570.netlify.app`.

Work goes on a branch with a pull request. Check the deploy preview before merging.

Deploy previews carry Netlify's review toolbar, which adds about 300 KB of scripts. Don't use them to measure performance. Compare local builds of `main` and the branch instead.

## Routes

There are 13 prerendered routes:
- `/`
- `/about`
- `/research`
- `/projects`
- `/experience`
- `/education`
- `/skills`
- `/certifications`
- `/achievements`
- `/interests`
- `/community`
- `/contact`
- `/resume`

The last three in the nav (Education, Achievements, Research Interests) sit under **Explore More**.

To add a route, add it to `src/App.jsx` and to the `pages` list in `src/data/seo.js`, so it gets prerendered and included in the sitemap.

## Where things live

- `src/data/portfolio.js` is all the content: profile and links, research interests, research work, publications, projects, skills, experience, education, leadership, certifications and achievements.
- `src/data/seo.js` holds per-route titles, descriptions and JSON-LD. `src/components/Seo.jsx` renders them into `<head>`.
- `src/components/PortfolioSections.jsx` holds the page layouts. Most routes are a `Section` from this file. `About.jsx`, `Skills.jsx` and similar files just re-export them.
- `src/components/Home.jsx` is the homepage hero: portrait, name, rotating role, calls to action and profile links.
- `src/components/Navigationbar.jsx` is the fixed navigation and the light/dark toggle.
- `src/components/Footer.jsx` is the site footer: copyright with the build year, plus profile links.
- `src/context/DarkModeProvider.jsx` keeps the light/dark theme across visits. An inline script in `index.html` applies it before first paint, so nothing flashes.
- `src/App.jsx` defines the routes. The router itself comes from `main.jsx` (browser) or `entry-server.jsx` (prerender).
- `src/index.css` has the Tailwind directives, the heading font, focus styles and base rules.
- `public/` holds the WebP portraits (360px for the homepage, 600px for About), `og-image.png` (the 1200×630 share card) and the Google Search Console verification file. The verification file must stay.
- `CONTENT_NEEDED.md` lists details still missing from the content.

## Design

- **Colours:** Tailwind's default palette, with blue as the accent, white and `gray-900` backgrounds, and a black navigation bar. These are a deliberate choice; a teal restyle was tried and not kept.
- **Type:** headings (h1–h3) use **Source Serif 4**, self-hosted from `@fontsource/source-serif-4`. It's one semibold file, Latin subset, about 21.5 KB. Body text uses the system sans, so it needs no download.
- **Accessibility:**
  - A visible keyboard focus outline on every surface, at 3:1 contrast or better.
  - Text contrast at WCAG AA.
  - Pressed states on buttons and links.
  - Respect for reduced-motion settings.
  - Balanced heading line breaks.

The website deliberately avoids unverified credentials and numerical performance claims. Project outcomes describe implemented functionality.

## Checking a change

There is no automated test runner. Before merging, check that:
- `npm run build` passes and prints `Prerendered 13 routes + 404.html`;
- the deploy preview loads the changed pages in light and dark mode, at desktop and phone widths;
- for visual or performance changes, Lighthouse (mobile) on a local build stays in line with `main`.

For reference, live PageSpeed scores before the heading font were mobile 99, desktop 100 and SEO 100.
