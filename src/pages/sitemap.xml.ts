import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { languageLinks, routes } from '../data/guides';
import { site } from '../data/site';

function urlEntry(path: string) {
  const links = languageLinks(path, site.url).map(({ lang, url }) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${url}"/>`).join('');
  return `<url><loc>${new URL(path, site.url).href}</loc>${links}</url>`;
}

export const GET: APIRoute = async () => {
  const [guides, englishGuides] = await Promise.all([getCollection('guides'), getCollection('en')]);
  const paths = [
    ...[routes.home, routes.directory, routes.codes].flatMap((pair) => Object.values(pair)),
    ...guides.map(({ id }) => `/${id}/`),
    ...englishGuides.map(({ id }) => `/en/${id}/`),
  ].sort();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${paths.map((path) => `  ${urlEntry(path)}`).join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
