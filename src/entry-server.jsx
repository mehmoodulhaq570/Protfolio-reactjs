import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export { pages, jsonLdFor, SITE_URL, canonicalUrl } from './data/seo';

// Returns the HTML for one route. React places <title>, <meta> and <link> tags at the start of the string.
export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
