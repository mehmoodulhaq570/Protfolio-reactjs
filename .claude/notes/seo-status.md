# SEO status (as of 2026-11-16)

Production site: https://mehmoodulhaq570.netlify.app (Netlify, repo mehmoodulhaq570/Protfolio-reactjs, branch `main`).
Confirmed by the owner: this domain is canonical, the LinkedIn handle `mehmodulhaq570` is correct, and there is no ORCID.

## Shipped (all merged to main)
- **PR #1, seo-improvements**
  - Build-time prerender of 13 routes as flat `<route>.html` files plus a real 404.
  - Per-page metadata in `src/data/seo.js` and JSON-LD.
  - `scripts/prerender.js` generates `sitemap.xml` and `_redirects`.
  - Security headers in `netlify.toml`, WebP portraits, `og-image.png`.
- **PR #2, content-and-a11y**
  - Blue text contrast fix (`text-blue-600 dark:text-blue-400`).
  - Removed about 2 MB of unused images.
  - A homepage intro paragraph was added and then removed at the owner's request. **They don't want it, so don't propose it again.**
- **PR #3, gsc-verification**: `public/google91dddc4b0485351d.html`. **It must stay forever.** Google Search Console was verified on 2026-11-08.
- **GitHub repo**: the homepage field is set to the site URL.
- **Later PRs (design, not SEO), all merged 2026-11-08:**
  - #4: project notes.
  - #5: Polish (accessibility and CSS fixes).
  - #6: footer and cleanup.
  - #7: notes.
  - #8: serif heading font.

  None of them changed metadata, routes or the sitemap. Details are in `hallmark-audit.md`.
- **PR #9, docs-update** (merged 2026-11-08): README rewritten in a standard format.
- **PR #10, favicon-icons** (merged 2026-11-16)
  - `favicon.ico`, `logo192.png` and `logo512.png` were still the Create React App React-atom defaults, so iOS, Android installs and Google results showed the React logo. They are now generated from the `favicon.svg` design (blue `#2563eb` square with a Georgia "M").
  - Added a full-bleed `apple-touch-icon.png` (180×180), because iOS rounds corners itself and fills transparency with black. `index.html` uses it, with `favicon.ico` as a `sizes="any"` fallback ahead of the SVG.
  - The manifest `theme_color` is now `#2563eb`. The `<meta name="theme-color">` in `index.html` is still `#000000`.
  - Google caches favicons, so its results may show the old icon for days or weeks.

## Scores
- SEO audit: 46/100 at baseline (local), 81/100 live.
- PageSpeed: mobile 99, desktop 100, SEO 100. This was measured before the heading font (PR #8); local Lighthouse showed only a small difference. Re-check the live score once the API quota allows.
- The full audit is in `portfolio-audit/` (gitignored).

## Owner actions (done 2026-11-08, reported by the owner)
- Google Search Console: `sitemap.xml` submitted; indexing requested for `/`, `/research` and `/about`.
- Bing Webmaster Tools: imported from Google Search Console.
- Site URL added to LinkedIn, Google Scholar, Kaggle, Medium, DEV, Credly and Lightning, so the site now has inbound links from those profiles.

## Follow-up
- Around 2026-11-22: check the Search Console **Pages** report for what got indexed, and look into anything marked "Discovered – not indexed" or "Crawled – not indexed". Also check that Google's result shows the "M" icon, not the React logo.

## Ideas not started
- An HTML CV on `/resume`, with the PDF hosted on the site.
- Project screenshots and detail pages.
- `SoftwareSourceCode` schema on `/projects`.
