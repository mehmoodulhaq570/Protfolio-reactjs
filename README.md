# Mehmood Ul Haq — Research & Engineering Portfolio

A portfolio built with React, Vite, Tailwind CSS 3, and React Router, focused on AI/ML research, data science, and computer engineering.

## Run locally

Use Node.js matching `^20.19.0 || >=22.12.0` (the installed Node.js 22.20.0 works).

```sh
npm install
npm run dev
```

Open the URL printed in the terminal (normally http://localhost:5173).
`npm start` also starts Vite. Press Ctrl+C to stop it.
If PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev`.

## Build and preview

```sh
npm run build
npm run preview
```

The production output is `dist/`. Netlify build settings and the React Router fallback are in `netlify.toml`. Other static hosts must serve `index.html` for application routes such as `/projects`.

## Content and structure

- `src/data/portfolio.js`: profile, research interests, research work, publications, featured projects, skills, experience, education, leadership, and certifications.
- `src/components/PortfolioSections.jsx`: shared section layouts used on the homepage and dedicated pages.
- `src/components/Home.jsx`: introduction and complete portfolio overview.
- `src/components/Navigationbar.jsx`: responsive navigation and theme toggle.
- `src/context/DarkModeProvider.jsx`: persistent light/dark theme.
- `src/App.jsx`: routes, page titles, and anchor scrolling.
- `src/index.css`: responsive visual design and Tailwind directives.
- `public/images/`: original portrait and project assets.
- `CONTENT_NEEDED.md`: details still needed to complete the content.

Existing routes (`/about`, `/skills`, `/education`, `/experience`, `/projects`, `/resume`) remain available. Added `/research`, `/interests`, and `/contact`.

Published papers, manuscripts under review, and work in progress are grouped separately. Six certifications and the PAPAAM award are included. Add confirmed leadership records to display the community section. Add `profile.scholar` to display Google Scholar. The supplied professional CV, KICS experience letter, and certificate documents are linked from the appropriate sections. Ensure their Google Drive sharing settings allow visitors to view them.

The website deliberately avoids unverified credentials or numerical performance claims. Project outcomes currently describe implemented functionality.

## Validation

Production build verified. Browser smoke checks cover the homepage, six featured projects, mobile navigation and anchor scrolling, theme persistence, dedicated routes, horizontal overflow at desktop/mobile sizes, and runtime exceptions.

No automated test runner is configured. The unused Create React App starter test and metrics helper were removed during the Vite migration.
