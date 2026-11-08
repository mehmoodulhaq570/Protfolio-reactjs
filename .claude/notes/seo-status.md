# SEO status (as of 2026-11-08)

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

## Scores
- SEO audit: 46/100 at baseline (local), 81/100 live.
- PageSpeed: mobile 99, desktop 100, SEO 100.
- The full audit is in `portfolio-audit/` (gitignored).

## Owner actions (done 2026-11-08, reported by the owner)
- Google Search Console: `sitemap.xml` submitted; indexing requested for `/`, `/research` and `/about`.
- Bing Webmaster Tools: imported from Google Search Console.
- Site URL added to LinkedIn, Google Scholar, Kaggle, Medium, DEV, Credly and Lightning, so the site now has inbound links from those profiles.

## Follow-up
- Around 2026-11-22: check the Search Console **Pages** report for what got indexed, and look into anything marked "Discovered – not indexed" or "Crawled – not indexed".

## Ideas not started
- An HTML CV on `/resume`, with the PDF hosted on the site.
- Project screenshots and detail pages.
- `SoftwareSourceCode` schema on `/projects`.
