export function normalizeSearch(value: string) {
  return value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
}

export function searchTerms(value: string) {
  return normalizeSearch(value).trim().split(/\s+/).filter(Boolean);
}

export function entryId(kind: string, name: string) {
  return `${kind}-${normalizeSearch(name).replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`;
}
