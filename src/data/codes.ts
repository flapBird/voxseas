import type { Locale } from './guides';

export const codeReviews = [
  {
    checkedAt: '2026-11-23T03:15-03:00',
    note: { 'pt-BR': 'Nenhum código novo confirmado. O próximo está previsto para quando o jogo atingir 200 mil curtidas.', en: 'No new codes confirmed. The next code is due when the game reaches 200,000 likes.' },
  },
  {
    checkedAt: '2026-11-22T03:31-03:00',
    note: { 'pt-BR': 'Nenhum código novo confirmado. PatchGold continua em verificação após relatos de expiração.', en: 'No new codes confirmed. PatchGold remains under review after expiry reports.' },
  },
  {
    checkedAt: '2026-11-21T08:47-03:00',
    note: { 'pt-BR': 'Adicionado 175KLIKES: 1 token de reset de atributos.', en: 'Added 175KLIKES for 1 Stat Reset Token.' },
  },
];
export const codesReviewedISO = codeReviews[0].checkedAt;
const timeZone = 'America/Sao_Paulo';

export function formatReviewStamp(iso: string, lang: Locale, withTime = false) {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : lang, {
    day: '2-digit', month: '2-digit', timeZone,
    ...(withTime && { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }),
  }).format(new Date(iso));
}

export function formatCodesReview(lang: Locale | 'th', includeDay = true) {
  return new Intl.DateTimeFormat(lang, {
    day: includeDay ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone,
  }).format(new Date(codesReviewedISO));
}

export const codes = [
  { code: '175KLIKES', reward: { 'pt-BR': '1 token de reset de atributos', en: '1 Stat Reset Token', th: 'โทเคนรีเซ็ตค่าสถานะ 1 ชิ้น' }, source: 'reported' },
  { code: 'THX200K', reward: { 'pt-BR': '2× XP por 30 minutos', en: 'Double XP for 30 minutes', th: 'ค่าประสบการณ์ 2 เท่า นาน 30 นาที' }, source: 'reported' },
  { code: 'Patch2Reset', reward: { 'pt-BR': '1 token de reset de atributos', en: '1 Stat Reset Token', th: 'โทเคนรีเซ็ตค่าสถานะ 1 ชิ้น' }, source: 'reported' },
  { code: 'Release2026', reward: { 'pt-BR': '2× XP por 1 hora', en: 'Double XP for 1 hour', th: 'ค่าประสบการณ์ 2 เท่า นาน 1 ชั่วโมง' }, compactReward: { 'pt-BR': '2× XP', en: '2× XP', th: 'ค่าประสบการณ์ 2 เท่า' }, source: 'trello' },
  { code: 'PatchReset', reward: { 'pt-BR': '1 token de reset de atributos', en: '1 Stat Reset Token', th: 'โทเคนรีเซ็ตค่าสถานะ 1 ชิ้น' }, compactReward: { 'pt-BR': 'Reset', en: 'Stat reset', th: 'รีเซ็ตค่าสถานะ' }, source: 'trello' },
] as const;

export const pendingCodes = [
  { code: 'PatchGold', reward: { 'pt-BR': '20.000 de ouro', en: '20,000 Gold', th: 'ทอง 20,000 เหรียญ' }, compactReward: { 'pt-BR': 'Ouro', en: 'Gold', th: 'ทอง' }, source: 'trello' },
] as const;

export const archivedCodes = ['BugFix4', 'BugFix3', 'BugFix2', 'BugFix1', 'Release'];
