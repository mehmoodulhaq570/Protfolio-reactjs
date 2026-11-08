import React from "react";
import { useLocation } from "react-router-dom";
import { OG_IMAGE, SITE_NAME, canonicalUrl, getPage } from "../data/seo";
// The same files index.css declares in @font-face; Vite gives both the same hashed URL.
import serifFont from "@fontsource-variable/source-serif-4/files/source-serif-4-latin-wght-normal.woff2?url";
import sansFont from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";

// React 19 hoists these tags into <head> and swaps them on every route change.
const Seo = () => {
  const { pathname } = useLocation();
  const page = getPage(pathname);
  const url = page.path ? canonicalUrl(page.path) : null;

  return (
    <>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      {page.noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={page.type ?? "website"} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={OG_IMAGE.url} />
      <meta property="og:image:width" content={String(OG_IMAGE.width)} />
      <meta property="og:image:height" content={String(OG_IMAGE.height)} />
      <meta property="og:image:alt" content={OG_IMAGE.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={OG_IMAGE.url} />
      {/* Fetch both fonts with the HTML instead of waiting until the CSS is parsed. */}
      <link rel="preload" href={serifFont} as="font" type="font/woff2" crossOrigin="" />
      <link rel="preload" href={sansFont} as="font" type="font/woff2" crossOrigin="" />
    </>
  );
};

export default Seo;
