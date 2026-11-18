import { englishGuides, guides } from './guides';
import { references } from './references';
import { codes } from './site';
import { entryId, normalizeSearch, searchTerms } from '../lib/search-text';

type Locale = 'pt-BR' | 'en';

interface SearchItem {
  title: string;
  description: string;
  href: string;
  locale: Locale;
  label: string;
  keywords?: string;
}

const guideItems: SearchItem[] = [
  ...guides.map((guide) => ({ ...guide, locale: 'pt-BR' as const, label: 'Guia' })),
  ...englishGuides.map((guide) => ({ ...guide, locale: 'en' as const, label: 'Guide' })),
];

const items: SearchItem[] = [
  ...guideItems,
  ...Object.values(references).flatMap(({ path, kind, columns, rows }) => rows.map(([title, category, ...details]) => ({
    title,
    description: [category, ...details].join(' · '),
    href: `${path}#${entryId(kind, title)}`,
    locale: 'pt-BR' as const,
    label: columns[0],
    keywords: `${kind} ${columns.join(' ')}`,
  }))),
  ...codes.flatMap(({ code, reward, rewardEn }) => [
    { title: code, description: reward, href: `/codigos/#${entryId('code', code)}`, locale: 'pt-BR' as const, label: 'Código' },
    { title: code, description: rewardEn, href: `/en/codes/#${entryId('code', code)}`, locale: 'en' as const, label: 'Code' },
  ]),
];

const indexed = items.map((item) => {
  const title = normalizeSearch(item.title);
  return { item, title, text: normalizeSearch(`Vox Seas ${item.title} ${item.description} ${item.label} ${item.keywords ?? ''}`) };
});

export function searchSite(query: string, locale: Locale) {
  const terms = searchTerms(query);
  if (!terms.length) return guideItems.filter((item) => item.locale === locale).slice(0, 6);

  const phrase = terms.join(' ');
  const ranked = indexed.filter(({ text }) => terms.every((term) => text.includes(term))).map(({ item, title }) => {
    let score = 0;
    if (title === phrase) score = 30;
    else if (title.startsWith(phrase)) score = 20;
    else if (terms.every((term) => title.includes(term))) score = 10;
    return { item, score: score + Number(item.locale === locale) };
  });

  return ranked.sort((a, b) => b.score - a.score).slice(0, 10).map(({ item }) => item);
}
