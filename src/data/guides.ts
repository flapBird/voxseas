import { infoPages } from './info-pages';

export type Locale = 'pt-BR' | 'en';

export const routes = {
  home: { 'pt-BR': '/', en: '/en/' },
  directory: { 'pt-BR': '/guias/', en: '/en/guides/' },
  beginner: { 'pt-BR': '/iniciante/', en: '/en/beginner/' },
  codes: { 'pt-BR': '/codigos/', en: '/en/codes/' },
  map: { 'pt-BR': '/mapa/', en: '/en/map/' },
  fruits: { 'pt-BR': '/frutas/', en: '/en/fruits/' },
  tiers: { 'pt-BR': '/tier-list/', en: '/en/tier-list/' },
  gacha: { 'pt-BR': '/como-girar-fruta/', en: '/en/fruit-gacha/' },
  weapons: { 'pt-BR': '/armas/', en: '/en/weapons/' },
  bosses: { 'pt-BR': '/chefes/', en: '/en/bosses/' },
  races: { 'pt-BR': '/racas/', en: '/en/races/' },
  relaunch: { 'pt-BR': '/lancamento/', en: '/en/relaunch/' },
  discord: { 'pt-BR': '/discord/', en: '/en/discord/' },
  trello: { 'pt-BR': '/trello/', en: '/en/trello/' },
};

const entityParents = ['fruits', 'map', 'bosses', 'races'] as const;

export function entityRoute(path: string) {
  for (const parent of entityParents) {
    const prefix = Object.values(routes[parent]).find((base) => path.startsWith(base));
    if (!prefix) continue;
    const match = path.slice(prefix.length).match(/^([a-z0-9]+(?:-[a-z0-9]+)*)\/$/);
    if (match) return { parent, slug: match[1] };
  }
}

export function localizedRoutes(path: string) {
  const guide = [...Object.values(routes), ...infoPages.map(page => page.paths)].find((pair) => pair['pt-BR'] === path || pair.en === path);
  if (guide) return guide;

  const entity = entityRoute(path);
  if (entity) {
    const pair = routes[entity.parent];
    return { 'pt-BR': `${pair['pt-BR']}${entity.slug}/`, en: `${pair.en}${entity.slug}/` };
  }
}

export function languageLinks(path: string, origin: string) {
  const pair = localizedRoutes(path);
  if (!pair) return [];

  const portuguese = new URL(pair['pt-BR'], origin).href;
  return [
    { lang: 'pt-BR', url: portuguese },
    { lang: 'en', url: new URL(pair.en, origin).href },
    { lang: 'x-default', url: portuguese },
  ];
}

export const guideGroups = [
  { key: 'start', 'pt-BR': { id: 'inicio', title: 'Primeiros passos' }, en: { id: 'getting-started', title: 'Getting started' } },
  { key: 'fruits', 'pt-BR': { id: 'frutas', title: 'Frutas e habilidades' }, en: { id: 'fruits', title: 'Fruits and abilities' } },
  { key: 'combat', 'pt-BR': { id: 'combate', title: 'Combate e personagem' }, en: { id: 'combat', title: 'Combat and characters' } },
  { key: 'community', 'pt-BR': { id: 'comunidade', title: 'Atualizações e comunidade' }, en: { id: 'community', title: 'Updates and community' } },
];

interface GuideText {
  title: string;
  description: string;
  keywords?: string;
}

interface GuideDefinition {
  route: Exclude<keyof typeof routes, 'home' | 'directory'>;
  icon: string;
  accent: 'lime' | 'aqua' | 'orange' | 'violet' | 'red';
  group: string;
  'pt-BR': GuideText;
  en: GuideText;
}

const guideDefinitions: GuideDefinition[] = [
  {
    route: 'beginner', icon: 'compass', accent: 'lime', group: 'start',
    'pt-BR': { title: 'Guia para iniciantes', description: 'De Solmar ao primeiro barco, Cutlass e fruta.', keywords: 'como jogar começar história progressão level build atributos Hango' },
    en: { title: 'Beginner guide', description: 'From Solmar to your first boat, Cutlass and fruit.', keywords: 'how to play start story leveling build stats Hango' },
  },
  {
    route: 'codes', icon: 'ticket', accent: 'lime', group: 'start',
    'pt-BR': { title: 'Códigos', description: 'Copie códigos para XP, ouro e reset de atributos.', keywords: 'resgate recompensas redeem' },
    en: { title: 'Codes', description: 'Copy codes for XP, Gold and stat resets.', keywords: 'rewards experience redeem' },
  },
  {
    route: 'map', icon: 'map', accent: 'aqua', group: 'start',
    'pt-BR': { title: 'Mapa e ilhas', description: 'Ilhas, NPCs, lojas e pontos de treinamento.', keywords: 'navegação Navigator Map world' },
    en: { title: 'Map and islands', description: 'Find islands, NPCs, shops and training locations.', keywords: 'sailing Navigator Map world' },
  },
  {
    route: 'fruits', icon: 'fruit', accent: 'orange', group: 'fruits',
    'pt-BR': { title: 'Fruitdex', description: 'Consulte as frutas por raridade e poder.', keywords: 'frutas fruit catálogo maestria' },
    en: { title: 'Fruitdex', description: 'Look up fruits by rarity and ability.', keywords: 'fruit catalog powers mastery' },
  },
  {
    route: 'tiers', icon: 'sparkles', accent: 'violet', group: 'fruits',
    'pt-BR': { title: 'Tier list de frutas', description: 'Ranking Legacy para PvE, PvP e mobilidade.', keywords: 'melhores frutas ranking' },
    en: { title: 'Fruit tier list', description: 'Legacy rankings for PvE, PvP and mobility.', keywords: 'best fruits ranking' },
  },
  {
    route: 'gacha', icon: 'fruit', accent: 'orange', group: 'fruits',
    'pt-BR': { title: 'Como girar frutas', description: 'Onde fica o Vox Gacha, custo e tempo entre giros.', keywords: 'gacha roll cooldown roleta' },
    en: { title: 'How to roll fruits', description: 'Vox Gacha locations, costs and cooldown.', keywords: 'gacha roulette spin' },
  },
  {
    route: 'weapons', icon: 'sword', accent: 'red', group: 'combat',
    'pt-BR': { title: 'Armas', description: 'Espadas, armas de fogo, preços e maestria.', keywords: 'espadas pistolas weapon guns' },
    en: { title: 'Weapons', description: 'Compare swords and guns by cost and mastery.', keywords: 'sword firearms dealers' },
  },
  {
    route: 'bosses', icon: 'skull', accent: 'violet', group: 'combat',
    'pt-BR': { title: 'Chefes', description: 'Boss Rooms, chaves e recompensas.', keywords: 'boss drops Rovan Veyrn Giant Boar Ice Golem Yeti Ice King Soul Flame Royal Chest Key' },
    en: { title: 'Bosses', description: 'Boss Rooms, keys and rewards.', keywords: 'boss drops Rovan Veyrn Giant Boar Ice Golem Yeti Ice King Soul Flame Royal Chest Key' },
  },
  {
    route: 'races', icon: 'users', accent: 'aqua', group: 'combat',
    'pt-BR': { title: 'Raças', description: 'Compare bônus passivos e chances de reroll.', keywords: 'race reroll Crystals' },
    en: { title: 'Races', description: 'Compare passive bonuses and reroll odds.', keywords: 'race reroll Crystals' },
  },
  {
    route: 'relaunch', icon: 'calendar', accent: 'aqua', group: 'community',
    'pt-BR': { title: 'Lançamento e retorno', description: 'O que mudou entre Legacy e Dawn of Legends.' },
    en: { title: 'Launch and relaunch', description: 'What changed between Legacy and Dawn of Legends.', keywords: 'updates timeline release date' },
  },
  {
    route: 'discord', icon: 'discord', accent: 'violet', group: 'community',
    'pt-BR': { title: 'Discord', description: 'Onde encontrar o servidor da comunidade.' },
    en: { title: 'Discord', description: 'Find the official community channels.' },
  },
  {
    route: 'trello', icon: 'trello', accent: 'aqua', group: 'community',
    'pt-BR': { title: 'Trello', description: 'Onde consultar dados e acompanhar atualizações.' },
    en: { title: 'Trello', description: 'Find game information and updates.' },
  },
];

export type GuideLink = GuideText & Pick<GuideDefinition, 'route' | 'icon' | 'accent' | 'group'> & { href: string };

export function getGuideLinks(lang: Locale): GuideLink[] {
  return guideDefinitions.map(({ route, icon, accent, group, ...copy }) => ({
    ...copy[lang], route, icon, accent, group, href: routes[route][lang],
  }));
}
