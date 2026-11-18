import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { languageLinks } from './src/data/guides.ts';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        return { ...item, links: languageLinks(new URL(item.url).pathname, site.url) };
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
