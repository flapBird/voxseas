import type { Locale } from './guides';

export const codesReviewedISO = '2026-11-20';
export const officialCodesUrl = 'https://trello.com/c/0DaBs76i';
export const reportedCodesUrl = 'https://robloxden.com/game-codes/vox-seas';
export const archivedCodesUrl = 'https://progameguides.com/roblox/vox-seas-codes/';

export function formatCodesReview(lang: Locale, includeDay = true) {
  return new Intl.DateTimeFormat(lang, {
    day: includeDay ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(codesReviewedISO));
}

export const codes = [
  { code: 'THX200K', reward: { 'pt-BR': '2× XP por 30 minutos', en: 'Double XP for 30 minutes' }, source: 'reported' },
  { code: 'Patch2Reset', reward: { 'pt-BR': '1 token de reset de atributos', en: '1 Stat Reset Token' }, source: 'reported' },
  { code: 'Release2026', reward: { 'pt-BR': '2× XP por 1 hora', en: 'Double XP for 1 hour' }, compactReward: { 'pt-BR': '2× XP', en: '2× XP' }, source: 'trello' },
  { code: 'PatchReset', reward: { 'pt-BR': '1 token de reset de atributos', en: '1 Stat Reset Token' }, compactReward: { 'pt-BR': 'Reset', en: 'Stat reset' }, source: 'trello' },
  { code: 'PatchGold', reward: { 'pt-BR': '20.000 de ouro', en: '20,000 Gold' }, compactReward: { 'pt-BR': 'Ouro', en: 'Gold' }, source: 'trello' },
] as const;

export const archivedCodes = ['BugFix4', 'BugFix3', 'BugFix2', 'BugFix1', 'Release'];
