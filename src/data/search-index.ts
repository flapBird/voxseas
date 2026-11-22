import { getGuideLinks, routes, type SiteLocale } from './guides';
import { getReferences } from './references';
import { codes, pendingCodes } from './codes';
import { entryId, normalizeSearch, searchTerms } from '../lib/search-text';

interface SearchItem {
  title: string;
  description: string;
  href: string;
  label: string;
  keywords?: string;
}

function makeIndex(lang: SiteLocale) {
  const isEn = lang === 'en';
  const guides = getGuideLinks(lang).map((guide) => ({ ...guide, label: lang === 'th' ? 'คู่มือ' : isEn ? 'Guide' : 'Guia' }));
  const items: SearchItem[] = [
    ...guides,
    ...(lang === 'th' ? [] : getReferences(lang)).flatMap(({ path, kind, columns, rows }) => rows.map(({ name, category, details, href, aliases }) => ({
      title: name,
      description: [category, ...details].join(' · '),
      href: href ?? `${path}#${entryId(kind, name)}`,
      label: columns[0],
      keywords: [...columns, ...aliases].join(' '),
    }))),
    ...[...codes, ...pendingCodes].map(({ code, reward }) => ({
      title: code,
      description: reward[lang],
      href: `${lang === 'th' ? '/th/codes/' : routes.codes[lang]}#${entryId('code', code)}`,
      label: lang === 'th' ? 'โค้ด' : isEn ? 'Code' : 'Código',
    })),
  ];
  return {
    suggestions: guides.slice(0, 6),
    indexed: items.map((item) => ({
      item,
      title: normalizeSearch(item.title),
      text: normalizeSearch(`Vox Seas ${item.title} ${item.description} ${item.label} ${item.keywords ?? ''}`),
    })),
  };
}

export function createSiteSearch(lang: SiteLocale) {
  const { suggestions, indexed } = makeIndex(lang);

  return (query: string) => {
    const terms = searchTerms(query);
    if (!terms.length) return suggestions;

    const phrase = terms.join(' ');
    const ranked = indexed.filter(({ text }) => terms.every((term) => text.includes(term))).map(({ item, title }) => {
      let score = 0;
      if (title === phrase) score = 30;
      else if (title.startsWith(phrase)) score = 20;
      else if (terms.every((term) => title.includes(term))) score = 10;
      return { item, score };
    });

    return ranked.sort((a, b) => b.score - a.score).slice(0, 10).map(({ item }) => item);
  };
}
