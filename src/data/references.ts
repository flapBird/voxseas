import { routes, type Locale } from './guides';

type LocalizedText = string | readonly [portuguese: string, english: string];

interface ReferenceDefinition {
  route: 'fruits' | 'map' | 'weapons' | 'races';
  kind: string;
  headingSlug: LocalizedText;
  headingTitle: LocalizedText;
  columns: [name: LocalizedText, category: LocalizedText, ...details: LocalizedText[]];
  placeholder: LocalizedText;
  intro?: LocalizedText;
  rows: [name: string, category: LocalizedText, ...details: LocalizedText[]][];
}

const common = ['Comum', 'Common'] as const;
const rare = ['Rara', 'Rare'] as const;
const epic = ['Épica', 'Epic'] as const;
const legendary = ['Lendária', 'Legendary'] as const;
const mythical = ['Mítica', 'Mythical'] as const;
const rarity = ['Raridade', 'Rarity'] as const;
const type = ['Tipo', 'Type'] as const;
const gun = ['Arma de fogo', 'Gun'] as const;
const sword = ['Espada', 'Sword'] as const;
const training = ['Treino', 'Training'] as const;

const definitions: ReferenceDefinition[] = [
  {
    route: 'fruits',
    kind: 'fruta',
    headingSlug: ['lista-de-frutas-e-poderes', 'fruit-list-and-abilities'],
    headingTitle: ['Lista de frutas e poderes', 'Fruit list and abilities'],
    columns: [['Fruta', 'Fruit'], rarity, ['Poder principal', 'Main ability']],
    placeholder: ['Ex.: Poison ou veneno', 'Try Poison or venom'],
    intro: ['Os nomes seguem o menu do jogo. As entradas marcadas como Legacy são registros da versão anterior.', 'Names match the in-game menu. Entries marked Legacy belong to the previous version.'],
    rows: [
      ['Thorn', common, ['Espinhos corporais e ataques em área', 'Body spines and area attacks']],
      ['Weight', common, ['Controle do peso corporal', 'Body weight control']],
      ['Boom', rare, ['Explosões', 'Explosions']],
      ['Haze', rare, ['Transformação em fumaça e empurrões', 'Smoke transformation and knockback']],
      ['Protection', rare, ['Barreiras, paredes e espinhos', 'Barriers, walls and spikes']],
      ['Divide', epic, ['Divisões invisíveis', 'Invisible divisions']],
      ['Blaze', epic, ['Fogo, dano em área e movimentação', 'Fire, area damage and movement']],
      ['Dust', epic, ['Controle de areia', 'Sand control']],
      ['Volcanic', epic, ['Lava e dano contínuo', 'Lava and damage over time']],
      ['Vulcanic', epic, ['Lava e calor intenso', 'Lava and intense heat']],
      ['Shine', legendary, ['Luz, ataques rápidos e voo', 'Light, fast attacks and flight']],
      ['Frozen', legendary, ['Gelo e ataques em área', 'Ice and area attacks']],
      ['Eclipse', legendary, ['Escuridão e puxões', 'Darkness and pulls']],
      ['Mirror', legendary, ['Reflexos, atordoamento e viagem', 'Reflections, stuns and travel']],
      ['Orbit', legendary, ['Gravidade, controle e voo', 'Gravity, crowd control and flight']],
      ['Zen', mythical, ['Transformação divina', 'Divine transformation']],
      ['Poison', mythical, ['Veneno e transformação Venom King', 'Poison and the Venom King transformation']],
      ['Elastic', 'Legacy', ['Elasticidade para PvP inicial', 'Elasticity for early PvP']],
      ['Kilo', 'Legacy', ['Fruta básica da versão anterior', 'Basic fruit from the previous version']],
    ],
  },
  {
    route: 'map',
    kind: 'ilha',
    headingSlug: ['todas-as-ilhas-e-destinos', 'islands-and-destinations'],
    headingTitle: ['Todas as ilhas e destinos', 'Islands and destinations'],
    columns: [['Destino', 'Destination'], type, ['Principal motivo para visitar', 'Highlights']],
    placeholder: ['Ex.: Harbor ou Vox Gacha', 'Try Harbor or Vox Gacha'],
    rows: [
      ['Solmar Island', ['Inicial', 'Starting area'], ['Hango, primeiras missões, loja de barcos e armas', 'Hango, early quests and boat and weapon shops']],
      ['Forbidden Island', ['História', 'Story'], ['Acampamento de caçadores, Witch House e Veyrn', 'Hunter camp, Witch House and Veyrn']],
      ['Circus Town', ['Cidade', 'Town'], ['Mayor House, circo e Arms Dealer', 'Mayor House, circus and Arms Dealer']],
      ['Valoria Island', ['Tesouro', 'Treasure'], ['Praia, penhascos e objetivo de The Powder Keg', 'Beach, cliffs and The Powder Keg quest objective']],
      ['Harbor Island', ['Serviços', 'Services'], ['Old Explorer, hotel, venda de peixes e Vox Gacha', 'Old Explorer, hotel, fish sales and Vox Gacha']],
      ['Golden Dunes', ['Deserto', 'Desert'], ['Cidade, canais e Black Market', 'Town, canals and Black Market']],
      ['Frost Island', ['Neve', 'Snow'], ['Vila, farol, castelo, Ice King e Royal Forge', 'Village, lighthouse, castle, Ice King and Royal Forge']],
      ['Wandering Bastille', ['Navio', 'Ship'], ['Restaurante, Vox Gacha, Ignacio e spawn', 'Restaurant, Vox Gacha, Ignacio and spawn point']],
      ['Skull Island', training, ['Askard e treinamento de Vox', 'Askard and Vox training']],
      ['Shark Park', training, ['Nalu, Old Kaito e Ryusui Ken', 'Nalu, Old Kaito and Ryusui Ken']],
      ['Rustfall', training, ['Ansel e Electro', 'Ansel and Electro']],
      ['Heavenstep Mountain', ['Montanha', 'Mountain'], ['Sete checkpoints e treinamento Heavenstep', 'Seven checkpoints and Heavenstep training']],
      ['Port Island', ['Loja', 'Shop'], ['Gun Dealer, Musket e Slingshot', 'Gun Dealer, Musket and Slingshot']],
    ],
  },
  {
    route: 'weapons',
    kind: 'arma',
    headingSlug: ['armas-compradas-com-ouro', 'weapons-you-can-buy-with-gold'],
    headingTitle: ['Armas compradas com ouro', 'Weapons you can buy with Gold'],
    columns: [['Arma', 'Weapon'], type, ['Preço', 'Price'], ['Onde conseguir', 'Where to get it'], ['Habilidade Z', 'Z ability']],
    placeholder: ['Ex.: Cutlass ou Port Island', 'Try Cutlass or Port Island'],
    rows: [
      ['Katana', sword, ['300 Ouro', '300 Gold'], ['Weapon Dealer, área inicial', 'Weapon Dealer, starting area'], 'Air Wave'],
      ['Flintlock', gun, ['750 Ouro', '750 Gold'], ['Weapon Dealer, área inicial', 'Weapon Dealer, starting area'], 'Multiple Shots'],
      ['Cutlass', sword, ['Grátis na história', 'Free in the story'], ['Hango ou Arms Dealer', 'Hango or Arms Dealer'], 'Moon Fang Slash'],
      ['Dual Katana', ['Espada dupla', 'Dual swords'], ['5.000 Ouro', '5,000 Gold'], 'Arms Dealer, Circus Town', 'Phantom Slash'],
      ['Slingshot', gun, ['10.000 Ouro', '10,000 Gold'], 'Gun Dealer, Port Island', 'Prison Shot'],
      ['Musket', gun, ['25.000 Ouro', '25,000 Gold'], 'Gun Dealer, Port Island', 'Overcharge Strike'],
    ],
  },
  {
    route: 'races',
    kind: 'raca',
    headingSlug: ['todas-as-raças-de-vox-seas', 'vox-seas-races'],
    headingTitle: ['Todas as raças de Vox Seas', 'Vox Seas races'],
    columns: [['Raça', 'Race'], rarity, ['Chance por reroll', 'Reroll chance'], ['Bônus e função', 'Bonus and role']],
    placeholder: ['Ex.: Tideborn ou regeneração', 'Try Tideborn or regeneration'],
    rows: [
      ['Manborn', rare, ['22,5%', '22.5%'], ['Sem bônus passivo', 'No passive bonus']],
      ['Wildborn', epic, ['22,5%', '22.5%'], ['Bônus não confirmado na fonte consultada', 'Passive bonus pending verification']],
      ['Tideborn', epic, ['22,5%', '22.5%'], ['Respiração e visão subaquática, com nado 25% mais rápido', 'Underwater breathing and vision, plus 25% faster swimming']],
      ['Angelborn', epic, ['22,5%', '22.5%'], ['+5% de regeneração de vida', '+5% health regeneration']],
      ['Wyrmborn', legendary, '10%', ['+5% de dano e +5% de vida máxima', '+5% damage and +5% maximum health']],
    ],
  },
];

export function getReferences(lang: Locale) {
  const localize = (text: LocalizedText) => typeof text === 'string' ? text : text[lang === 'en' ? 1 : 0];
  return definitions.map(({ route, kind, headingSlug, headingTitle, columns, placeholder, intro, rows }) => ({
    path: routes[route][lang],
    kind,
    heading: { slug: localize(headingSlug), text: localize(headingTitle) },
    columns: columns.map(localize),
    placeholder: localize(placeholder),
    intro: intro && localize(intro),
    rows: rows.map(([name, category, ...details]) => [name, localize(category), ...details.map(localize)]),
  }));
}

export type ReferenceCollection = ReturnType<typeof getReferences>[number];
