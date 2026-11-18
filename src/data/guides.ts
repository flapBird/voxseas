export interface GuideLink {
  title: string;
  href: string;
  icon: string;
  description: string;
  accent: 'lime' | 'aqua' | 'orange' | 'violet' | 'red';
  group: string;
  keywords?: string;
}

export const guideGroups = [
  { id: 'inicio', title: 'Primeiros passos' },
  { id: 'frutas', title: 'Frutas e habilidades' },
  { id: 'combate', title: 'Combate e personagem' },
  { id: 'comunidade', title: 'Atualizações e comunidade' },
];

export const guides: GuideLink[] = [
  { title: 'Guia para iniciantes', href: '/iniciante/', icon: 'compass', description: 'De Solmar ao primeiro barco, Cutlass e fruta.', accent: 'lime', group: 'inicio', keywords: 'como jogar começar história progressão level build atributos Hango' },
  { title: 'Códigos', href: '/codigos/', icon: 'ticket', description: 'Copie códigos para XP, ouro e reset de atributos.', accent: 'lime', group: 'inicio', keywords: 'resgate recompensas redeem' },
  { title: 'Mapa e ilhas', href: '/mapa/', icon: 'map', description: 'Ilhas, NPCs, lojas e pontos de treinamento.', accent: 'aqua', group: 'inicio', keywords: 'navegação Navigator Map world' },
  { title: 'Fruitdex', href: '/frutas/', icon: 'fruit', description: 'Consulte as frutas por raridade e poder.', accent: 'orange', group: 'frutas', keywords: 'frutas fruit catálogo maestria' },
  { title: 'Tier list de frutas', href: '/tier-list/', icon: 'sparkles', description: 'Ranking Legacy para PvE, PvP e mobilidade.', accent: 'violet', group: 'frutas', keywords: 'melhores frutas ranking' },
  { title: 'Como girar frutas', href: '/como-girar-fruta/', icon: 'fruit', description: 'Onde fica o Vox Gacha, custo e tempo entre giros.', accent: 'orange', group: 'frutas', keywords: 'gacha roll cooldown roleta' },
  { title: 'Armas', href: '/armas/', icon: 'sword', description: 'Espadas, armas de fogo, preços e maestria.', accent: 'red', group: 'combate', keywords: 'espadas pistolas weapon guns' },
  { title: 'Chefes', href: '/chefes/', icon: 'skull', description: 'Boss Rooms, chaves e recompensas.', accent: 'violet', group: 'combate', keywords: 'boss drops Rovan Veyrn Giant Boar Ice Golem Yeti Ice King Soul Flame Royal Chest Key' },
  { title: 'Raças', href: '/racas/', icon: 'users', description: 'Compare bônus passivos e chances de reroll.', accent: 'aqua', group: 'combate', keywords: 'race reroll Crystals' },
  { title: 'Lançamento e retorno', href: '/lancamento/', icon: 'calendar', description: 'O que mudou entre Legacy e Dawn of Legends.', accent: 'aqua', group: 'comunidade' },
  { title: 'Discord', href: '/discord/', icon: 'discord', description: 'Onde encontrar o servidor da comunidade.', accent: 'violet', group: 'comunidade' },
  { title: 'Trello', href: '/trello/', icon: 'trello', description: 'Onde consultar dados e acompanhar atualizações.', accent: 'aqua', group: 'comunidade' },
];

export const englishGuideGroups = [
  { id: 'gameplay', title: 'Gameplay' },
  { id: 'community', title: 'Community' },
];

export const englishGuides: GuideLink[] = [
  { title: 'Codes', href: '/en/codes/', icon: 'ticket', description: 'Copy codes and find out how to redeem them.', accent: 'lime', group: 'gameplay', keywords: 'rewards experience gold redeem' },
  { title: 'Fruit tier list', href: '/en/tier-list/', icon: 'sparkles', description: 'Legacy rankings for PvE, PvP and mobility.', accent: 'violet', group: 'gameplay' },
  { title: 'Discord', href: '/en/discord/', icon: 'discord', description: 'Find the official community channels.', accent: 'violet', group: 'community' },
  { title: 'Trello', href: '/en/trello/', icon: 'trello', description: 'Find game information and updates.', accent: 'aqua', group: 'community' },
];
