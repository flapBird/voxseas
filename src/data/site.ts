export const site = {
  name: 'Vox Seas Brasil',
  url: 'https://voxseasgame.com',
  robloxUrl: 'https://www.roblox.com/games/104067066727140',
  updated: '16 de novembro de 2026',
  updatedEn: 'November 16, 2026',
  updatedISO: '2026-11-16',
};

export const primaryNav = [
  { label: 'Códigos', href: '/codigos/' },
  { label: 'Tier list', href: '/tier-list/' },
  { label: 'Frutas', href: '/frutas/' },
  { label: 'Raças', href: '/racas/' },
  { label: 'Mapa', href: '/mapa/' },
];

export const categories = [
  { title: 'Códigos', href: '/codigos/', icon: 'ticket', description: 'Recompensas grátis, status e como resgatar.', meta: '8 códigos listados', accent: 'lime' },
  { title: 'Tier list', href: '/tier-list/', icon: 'sparkles', description: 'Frutas ranqueadas para PvE, PvP e mobilidade.', meta: 'Ranking Legacy', accent: 'violet' },
  { title: 'Frutas', href: '/frutas/', icon: 'fruit', description: 'Raridade, poderes e formas de conseguir.', meta: '19 entradas', accent: 'orange' },
  { title: 'Raças', href: '/racas/', icon: 'users', description: 'Bônus passivos, chances e reroll.', meta: '5 raças', accent: 'aqua' },
  { title: 'Armas', href: '/armas/', icon: 'sword', description: 'Espadas, armas de fogo, preços e maestria.', meta: 'Lojas e drops', accent: 'red' },
  { title: 'Chefes', href: '/chefes/', icon: 'skull', description: 'Salas, chaves, recompensas e preparação.', meta: 'Guia de combate', accent: 'violet' },
  { title: 'Mapa e ilhas', href: '/mapa/', icon: 'map', description: 'Destinos, NPCs e serviços em cada ilha.', meta: '13 destinos', accent: 'aqua' },
  { title: 'Girar frutas', href: '/como-girar-fruta/', icon: 'compass', description: 'Vox Gacha, custo, cooldown e localização.', meta: 'Passo a passo', accent: 'lime' },
];

export const secondaryGuides = [
  { title: 'Discord', href: '/discord/', icon: 'discord', description: 'Como encontrar a comunidade oficial com segurança.' },
  { title: 'Lançamento e retorno', href: '/lancamento/', icon: 'calendar', description: 'Linha do tempo e o que mudou na nova versão.' },
  { title: 'Trello', href: '/trello/', icon: 'trello', description: 'Onde acompanhar anúncios e organizar sua consulta.' },
];

export const codes = [
  { code: 'Release2026', reward: '2× XP por cerca de 20 ou 40 minutos; duração divergente nas fontes', rewardEn: '2× XP for approximately 20 or 40 minutes; reported duration varies', shortReward: '2× XP', status: 'active' },
  { code: 'PatchReset', reward: 'Reset de atributos', rewardEn: 'Stat reset', shortReward: 'Reset', status: 'active' },
  { code: 'PatchGold', reward: 'Ouro', rewardEn: 'Gold', shortReward: 'Ouro', status: 'active' },
  { code: 'Release', reward: '2× XP por 20 minutos', rewardEn: '2× XP for 20 minutes', shortReward: '2× XP · 20 min', status: 'active' },
  { code: 'BugFix1', reward: '2× XP por 20 minutos', rewardEn: '2× XP for 20 minutes', shortReward: '2× XP · 20 min', status: 'active' },
  { code: 'BugFix2', reward: 'Reembolso de atributos', rewardEn: 'Stat refund', shortReward: 'Reembolso', status: 'active' },
  { code: 'BugFix3', reward: 'Reembolso de atributos', rewardEn: 'Stat refund', shortReward: 'Reembolso', status: 'active' },
  { code: 'BugFix4', reward: 'Reembolso de atributos', rewardEn: 'Stat refund', shortReward: 'Reembolso', status: 'active' },
];

export const fruits = [
  { name: 'Thorn', rarity: 'Comum', power: 'Espinhos corporais e ataques em área', tier: '—' },
  { name: 'Weight', rarity: 'Comum', power: 'Controle do peso corporal', tier: '—' },
  { name: 'Boom', rarity: 'Rara', power: 'Explosões', tier: 'C' },
  { name: 'Haze', rarity: 'Rara', power: 'Transformação em fumaça e empurrões', tier: '—' },
  { name: 'Protection', rarity: 'Rara', power: 'Barreiras, paredes e espinhos', tier: '—' },
  { name: 'Divide', rarity: 'Épica', power: 'Divisões invisíveis', tier: 'D' },
  { name: 'Blaze', rarity: 'Épica', power: 'Fogo, dano em área e movimentação', tier: 'B' },
  { name: 'Dust', rarity: 'Épica', power: 'Controle de areia', tier: 'C' },
  { name: 'Volcanic', rarity: 'Épica', power: 'Lava e dano contínuo', tier: 'A' },
  { name: 'Vulcanic', rarity: 'Épica', power: 'Lava e calor intenso', tier: '—' },
  { name: 'Shine', rarity: 'Lendária', power: 'Luz, ataques rápidos e voo', tier: 'B' },
  { name: 'Frozen', rarity: 'Lendária', power: 'Gelo e ataques em área', tier: 'B' },
  { name: 'Eclipse', rarity: 'Lendária', power: 'Escuridão e puxões', tier: 'S' },
  { name: 'Mirror', rarity: 'Lendária', power: 'Reflexos, atordoamento e viagem', tier: 'A' },
  { name: 'Orbit', rarity: 'Lendária', power: 'Gravidade, controle e voo', tier: 'S' },
  { name: 'Zen', rarity: 'Mítica', power: 'Transformação divina', tier: 'B' },
  { name: 'Poison', rarity: 'Mítica', power: 'Veneno e transformação Venom King', tier: 'S' },
  { name: 'Elastic', rarity: 'Legacy', power: 'Elasticidade; opção de PvP inicial', tier: 'C' },
  { name: 'Kilo', rarity: 'Legacy', power: 'Fruta básica da versão anterior', tier: 'D' },
];

export const races = [
  { name: 'Manborn', rarity: 'Rara', chance: '22,5%', passive: 'Nenhum bônus passivo', role: 'Base neutra' },
  { name: 'Wildborn', rarity: 'Épica', chance: '22,5%', passive: 'Bônus não confirmado na fonte consultada', role: 'Em verificação' },
  { name: 'Tideborn', rarity: 'Épica', chance: '22,5%', passive: 'Respiração e visão subaquática; nado 25% mais rápido', role: 'Exploração aquática' },
  { name: 'Angelborn', rarity: 'Épica', chance: '22,5%', passive: '+5% de regeneração de vida', role: 'Sustentação' },
  { name: 'Wyrmborn', rarity: 'Lendária', chance: '10%', passive: '+5% de dano e +5% de vida máxima', role: 'Combate geral' },
];

export const weapons = [
  { name: 'Katana', type: 'Espada', price: '300 Ouro', source: 'Weapon Dealer · ilha inicial', skill: 'Air Wave' },
  { name: 'Flintlock', type: 'Arma de fogo', price: '750 Ouro', source: 'Weapon Dealer · ilha inicial', skill: 'Multiple Shots' },
  { name: 'Cutlass', type: 'Espada', price: 'Grátis na história', source: 'Presente de Hango ou Arms Dealer', skill: 'Moon Fang Slash' },
  { name: 'Dual Katana', type: 'Espada dupla', price: '5.000 Ouro', source: 'Arms Dealer · Circus Town', skill: 'Phantom Slash' },
  { name: 'Slingshot', type: 'Arma de fogo', price: '10.000 Ouro', source: 'Gun Dealer · Port Island', skill: 'Prison Shot' },
  { name: 'Musket', type: 'Arma de fogo', price: '25.000 Ouro', source: 'Gun Dealer · Port Island', skill: 'Overcharge Strike' },
];

export const islands = [
  { name: 'Solmar Island', type: 'Inicial', use: 'Hango, primeiras missões, loja de barcos e armas' },
  { name: 'Forbidden Island', type: 'História', use: 'Acampamento de caçadores, Witch House e Veyrn' },
  { name: 'Circus Town', type: 'Cidade', use: 'Mayor House, circo e Arms Dealer' },
  { name: 'Valoria Island', type: 'Tesouro', use: 'Praia, penhascos e objetivo de The Powder Keg' },
  { name: 'Harbor Island', type: 'Serviços', use: 'Old Explorer, hotel, venda de peixes e Vox Gacha' },
  { name: 'Golden Dunes', type: 'Deserto', use: 'Cidade, canais e Black Market' },
  { name: 'Frost Island', type: 'Neve', use: 'Vila, farol, castelo e Royal Forge' },
  { name: 'Wandering Bastille', type: 'Navio', use: 'Restaurante, Vox Gacha, Ignacio e spawn' },
  { name: 'Skull Island', type: 'Treino', use: 'Askard e treinamento de Vox' },
  { name: 'Shark Park', type: 'Treino', use: 'Nalu, Old Kaito e Ryusui Ken' },
  { name: 'Rustfall', type: 'Treino', use: 'Ansel e Electro' },
  { name: 'Heavenstep Mountain', type: 'Montanha', use: 'Sete checkpoints e treinamento Heavenstep' },
  { name: 'Port Island', type: 'Loja', use: 'Gun Dealer, Musket e Slingshot' },
];

export const tierRows = [
  { tier: 'S', fruits: 'Poison · Orbit · Eclipse', note: 'Maior impacto geral na versão Legacy; dano em área e controle.' },
  { tier: 'A', fruits: 'Volcanic · Mirror', note: 'Volcanic para dano contínuo; Mirror para velocidade e stuns.' },
  { tier: 'B', fruits: 'Blaze · Shine · Frozen · Zen', note: 'Opções úteis, com destaque para farm em área ou mobilidade.' },
  { tier: 'C', fruits: 'Boom · Dust · Elastic', note: 'Alternativas situacionais para o começo do jogo.' },
  { tier: 'D', fruits: 'Divide · Kilo', note: 'Prioridade baixa; troque quando surgir uma opção melhor.' },
];

export const searchItems = [
  ...categories.map((item) => ({ title: item.title, description: item.description, href: item.href, lang: 'PT' })),
  ...secondaryGuides.map((item) => ({ title: item.title, description: item.description, href: item.href, lang: 'PT' })),
  { title: 'Vox Seas codes', description: 'Working codes and redemption steps', href: '/en/codes/', lang: 'EN' },
  { title: 'Vox Seas tier list', description: 'Legacy fruit rankings and recommendations', href: '/en/tier-list/', lang: 'EN' },
  { title: 'Vox Seas Discord', description: 'Find official community links safely', href: '/en/discord/', lang: 'EN' },
  { title: 'Vox Seas Trello', description: 'Official information channels and update tracking', href: '/en/trello/', lang: 'EN' },
];
