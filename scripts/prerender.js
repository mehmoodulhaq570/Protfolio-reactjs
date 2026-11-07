// Post-build step: renders every route to static HTML so crawlers, AI bots and link previews get real
// content, then writes the sitemap and Netlify routing rules. Run after the client and SSR builds.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, pages, jsonLdFor, SITE_URL, canonicalUrl } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> or <!--app-html--> placeholder.');
}

// React 19 emits hoistable tags (<title>, <meta>, <link>) at the start of renderToString output.
const LEADING_HEAD_TAGS = /^(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>)+/;

const jsonLdTag = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

function renderPage(url, jsonLd) {
  const output = render(url);
  const head = output.match(LEADING_HEAD_TAGS)?.[0] ?? '';
  if (!head.includes('<title>')) throw new Error(`No <title> rendered for ${url}`);
  const body = output.slice(head.length);
  const headHtml = jsonLd ? `${head}\n    ${jsonLdTag(jsonLd)}` : head;
  return template.replace('<!--app-head-->', () => headHtml).replace('<!--app-html-->', () => body);
}

async function write(relative, contents) {
  const file = path.join(dist, relative);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, contents);
}

// Flat files (about.html, not about/index.html): Netlify 301-redirects a directory index to a
// trailing-slash URL, which would contradict the slash-less canonical URLs.
for (const page of pages) {
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
  await write(file, renderPage(page.path, jsonLdFor(page.path)));
}

// Any unknown path renders the catch-all route (noindex), served with a real 404 status.
await write('404.html', renderPage('/__not-found__', null));

await write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((page) => `  <url><loc>${canonicalUrl(page.path)}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);

// Netlify: serve each prerendered route, and return 404.html with a 404 status for everything else.
await write(
  '_redirects',
  [
    ...pages.filter((page) => page.path !== '/').map((page) => `${page.path}  ${page.path}.html  200`),
    '/*  /404.html  404',
    '',
  ].join('\n')
);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${pages.length} routes + 404.html for ${SITE_URL}`);
