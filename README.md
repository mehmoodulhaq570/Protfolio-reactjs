<div align="center">

# Mehmood Ul Haq: Research & Engineering Portfolio

Personal portfolio for AI engineering, data science and machine-learning research.

[![Live site](https://img.shields.io/badge/live-mehmoodulhaq570.netlify.app-2563eb?style=flat-square)](https://mehmoodulhaq570.netlify.app)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/hosted_on-Netlify-00c7b7?style=flat-square&logo=netlify&logoColor=white)

[![Portfolio preview](public/og-image.png)](https://mehmoodulhaq570.netlify.app)

</div>

## Overview

This site presents my research, publications, projects, work experience and credentials. It is a React single-page app, but every route is **prerendered to static HTML at build time**. Each page therefore arrives with its full content and metadata, loads quickly and can be indexed by search engines. React then hydrates it in the browser.

## Features

- **Static prerendering:** 13 routes are rendered to HTML, plus a real `404.html` served with a 404 status.
- **SEO built in:** each page has its own title, description, canonical URL, Open Graph tags and JSON-LD structured data. The build also generates `sitemap.xml`.
- **Performance:** WebP portraits, a single 21.5 KB self-hosted heading font and no client-side data fetching. Live PageSpeed scores: mobile 99, desktop 100, SEO 100.
- **Light and dark themes:** the choice is remembered across visits and applied before first paint, so the page never flashes the wrong theme.
- **Accessibility:** WCAG AA text contrast, a visible keyboard focus outline everywhere and support for reduced-motion settings.
- **Security and caching headers:** `nosniff`, frame denial, a referrer policy and a permissions policy, plus long-lived caching for hashed assets, all set in `netlify.toml`.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 19, React Router 7 |
| Build | Vite 8, with an SSR build that prerenders every route |
| Styling | Tailwind CSS 3, Source Serif 4 headings via `@fontsource` |
| Icons | `react-icons` |
| Hosting | Netlify, with deploy previews for every pull request |

## Getting started

**Requirements:** Node.js `^20.19.0 || >=22.12.0` (22.20.0 is tested).

```sh
git clone https://github.com/mehmoodulhaq570/Protfolio-reactjs.git
cd Protfolio-reactjs
npm install
npm run dev
```

Then open http://localhost:5173.

> On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev` instead.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server with hot reload. `npm start` does the same. |
| `npm run build` | Builds the production site into `dist/` and prerenders every route. |
| `npm run preview` | Serves the built `dist/` folder locally. |

### How the build works

`npm run build` runs three steps:

1. A client build of the React app.
2. An SSR build of `src/entry-server.jsx`.
3. `scripts/prerender.js`, which writes `dist/<route>.html` for every route, plus `404.html`, `sitemap.xml` and the Netlify `_redirects` rules.

A successful build ends with `Prerendered 13 routes + 404.html`.

`npm run preview` differs from Netlify in one way: an unknown path returns the homepage with a 200 status, not `404.html` with a 404.

## Project structure

```
├── public/                  Static assets: portraits, og-image.png, favicons, robots.txt
├── scripts/
│   └── prerender.js         Writes route HTML, 404.html, sitemap.xml and _redirects
├── src/
│   ├── components/
│   │   ├── Home.jsx               Homepage hero
│   │   ├── PortfolioSections.jsx  Layouts for most pages
│   │   ├── Navigationbar.jsx      Fixed navigation and theme toggle
│   │   ├── Footer.jsx             Site footer
│   │   └── Seo.jsx                Writes per-page metadata into <head>
│   ├── context/
│   │   └── DarkModeProvider.jsx   Light/dark theme state
│   ├── data/
│   │   ├── portfolio.js     All site content
│   │   └── seo.js           Per-route titles, descriptions and JSON-LD
│   ├── App.jsx              Route definitions
│   ├── main.jsx             Browser entry point
│   ├── entry-server.jsx     Prerender entry point
│   └── index.css            Tailwind layers, heading font, base styles
├── index.html
└── netlify.toml             Build settings, security headers, caching
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Portrait, name, rotating role and profile links |
| `/about` | Background and research focus |
| `/research` | Research work and publications |
| `/projects` | Selected projects with source links |
| `/experience` | Work experience |
| `/education` | Degrees and institutions |
| `/skills` | Technical skills |
| `/certifications` | Certifications and credentials |
| `/achievements` | Awards and recognition |
| `/interests` | Research interests |
| `/community` | Leadership and community work |
| `/contact` | Contact details |
| `/resume` | CV |

## Editing content

- **Text and data:** almost everything on the site comes from `src/data/portfolio.js`. That includes the profile, links, research, publications, projects, skills, experience, education, certifications and achievements.
- **Page metadata:** edit `src/data/seo.js`.
- **Adding a page:** add the route to `src/App.jsx` and to the `pages` list in `src/data/seo.js`. The page is then prerendered and listed in the sitemap.

All content is factual. The site avoids unverified credentials and numerical performance claims, and project descriptions state what was actually built.

## Deployment

Netlify builds and publishes the `main` branch automatically. Every pull request gets a deploy preview at `https://deploy-preview-<PR number>--mehmoodulhaq570.netlify.app`.

Before merging a change:

- `npm run build` passes.
- The deploy preview shows the changed pages correctly in light and dark mode, at desktop and phone widths.
- For visual or performance changes, a local Lighthouse run (mobile) on the build stays in line with `main`. Don't measure deploy previews: Netlify's review toolbar adds about 300 KB of scripts to them.

> `public/google91dddc4b0485351d.html` verifies the site in Google Search Console. Don't delete it.

## Contact

**Mehmood Ul Haq**

- Website: [mehmoodulhaq570.netlify.app](https://mehmoodulhaq570.netlify.app)
- Email: [mehmoodulhaq1040@gmail.com](mailto:mehmoodulhaq1040@gmail.com)
- LinkedIn: [linkedin.com/in/mehmodulhaq570](https://www.linkedin.com/in/mehmodulhaq570/)
- GitHub: [github.com/mehmoodulhaq570](https://github.com/mehmoodulhaq570)
- Google Scholar: [profile](https://scholar.google.com/citations?user=oRDkaNIAAAAJ&hl=en)
- Kaggle: [kaggle.com/mehmoodulhaq570](https://www.kaggle.com/mehmoodulhaq570)
