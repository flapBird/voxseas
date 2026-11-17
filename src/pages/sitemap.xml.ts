import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://voxseas.online';

const bilingualPairs: Record<string, string> = {
  'tier-list': '/en/tier-list/',
  discord: '/en/discord/',
  trello: '/en/trello/',
};

function urlEntry(path: string, alternates?: { ptBR: string; en: string }) {
  const links = alternates
    ? `<xhtml:link rel="alternate" hreflang="pt-BR" href="${site}${alternates.ptBR}"/><xhtml:link rel="alternate" hreflang="en" href="${site}${alternates.en}"/>`
    : '';
  return `<url><loc>${site}${path}</loc>${links}</url>`;
}

export const GET: APIRoute = async () => {
  const guides = await getCollection('guides');
  const enGuides = await getCollection('en');

  const entries = [
    urlEntry('/'),
    ...guides
      .map((entry) => `/${entry.id}/`)
      .sort()
      .map((path) => {
        const slug = path.slice(1, -1);
        const enPath = bilingualPairs[slug];
        return urlEntry(path, enPath ? { ptBR: path, en: enPath } : undefined);
      }),
    urlEntry('/codigos/'),
    urlEntry('/en/codes/'),
    ...enGuides
      .map((entry) => `/en/${entry.id}/`)
      .sort()
      .map((path) => {
        const slug = path.slice(4, -1);
        const ptPath = Object.keys(bilingualPairs).find((key) => bilingualPairs[key] === path);
        return urlEntry(path, ptPath ? { ptBR: `/${ptPath}/`, en: path } : undefined);
      }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};