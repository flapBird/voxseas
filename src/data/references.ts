import { routes, type Locale } from './guides';

type LocalizedText = string | readonly [portuguese: string, english: string];

interface ReferenceDefinition {
  route: 'fruits' | 'map' | 'weapons' | 'races' | 'bosses';
  kind: string;
  headingSlug: LocalizedText;
  headingTitle: LocalizedText;
  columns: [name: LocalizedText, category: LocalizedText, ...details: LocalizedText[]];
  placeholder: LocalizedText;
  intro?: LocalizedText;
  rows: [name: string, category: LocalizedText, ...details: LocalizedText[]][];
  profiles?: Record<string, { slug: string; aliases?: string[] }>;
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
    intro: ['O Trello do jogo documenta 16 frutas de Dawn of Legends. Legacy reúne registros da versão anterior.', 'The game’s Trello documents 16 Dawn of Legends fruits. Legacy entries come from earlier versions.'],
    profiles: {
      Eclipse: { slug: 'eclipse' },
      Thorn: { slug: 'thorn' },
      Vulcanic: { slug: 'vulcanic', aliases: ['Volcanic', 'Magma'] },
      Orbit: { slug: 'orbit' },
    },
    rows: [
      ['Thorn', common, ['Espinhos corporais e ataques em área', 'Body spines and area attacks']],
      ['Weight', common, ['Controle do peso corporal', 'Body weight control']],
      ['Boom', rare, ['Explosões', 'Explosions']],
      ['Elastic', rare, ['Ataques elásticos e transformação Second Gear', 'Elastic attacks and the Second Gear transformation']],
      ['Haze', rare, ['Transformação em fumaça e empurrões', 'Smoke transformation and knockback']],
      ['Protection', rare, ['Barreiras, paredes e espinhos', 'Barriers, walls and spikes']],
      ['Divide', epic, ['Divisões invisíveis', 'Invisible divisions']],
      ['Blaze', epic, ['Fogo, dano em área e movimentação', 'Fire, area damage and movement']],
      ['Dust', epic, ['Controle de areia', 'Sand control']],
      ['Vulcanic', epic, ['Lava e calor intenso', 'Lava and intense heat']],
      ['Shine', legendary, ['Luz, ataques rápidos e voo', 'Light, fast attacks and flight']],
      ['Frozen', legendary, ['Gelo e ataques em área', 'Ice and area attacks']],
      ['Eclipse', legendary, ['Escuridão e puxões', 'Darkness and pulls']],
      ['Mirror', legendary, ['Reflexos, atordoamento e viagem', 'Reflections, stuns and travel']],
      ['Orbit', mythical, ['Mísseis de gravidade, empurrões e meteoros', 'Gravity missiles, pushes and meteors']],
      ['Zen', mythical, ['Transformação divina', 'Divine transformation']],
      ['Poison', 'Legacy', ['Veneno e transformação Venom King', 'Poison and the Venom King transformation']],
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
    profiles: {
      'Harbor Island': { slug: 'harbor-island' },
      'Forbidden Island': { slug: 'forbidden-island' },
    },
    rows: [
      ['Solmar Island', ['Inicial', 'Starting area'], ['Hango, primeiras missões, loja de barcos e armas', 'Hango, early quests and boat and weapon shops']],
      ['Forbidden Island', ['História', 'Story'], ['Acampamento de caçadores, Witch House e Veyrn', 'Hunter camp, Witch House and Veyrn']],
      ['Circus Town', ['Cidade', 'Town'], ['Mayor House, circo e Arms Dealer', 'Mayor House, circus and Arms Dealer']],
      ['Valoria Island', ['Tesouro', 'Treasure'], ['Praia, penhascos e objetivo de The Powder Keg', 'Beach, cliffs and The Powder Keg quest objective']],
      ['Harbor Island', ['Serviços', 'Services'], ['Vox Gacha, Weapons Dealer, Old Explorer, hotel e venda de peixes', 'Vox Gacha, Weapons Dealer, Old Explorer, hotel and fish sales']],
      ['Golden Dunes', ['Deserto', 'Desert'], ['Cidade, canais e Black Market', 'Town, canals and Black Market']],
      ['Frost Island', ['Neve', 'Snow'], ['Vila, farol, castelo, Ice King e Royal Forge', 'Village, lighthouse, castle, Ice King and Royal Forge']],
      ['Wandering Bastille', ['Navio', 'Ship'], ['Restaurante, Vox Gacha, Ignacio e spawn', 'Restaurant, Vox Gacha, Ignacio and spawn point']],
      ['Skull Island', training, ['Askard e treinamento de Vox', 'Askard and Vox training']],
      ['Shark Park', training, ['Nalu, Old Kaito e Ryusui Ken', 'Nalu, Old Kaito and Ryusui Ken']],
      ['Rustfall', training, ['Ansel e Electro', 'Ansel and Electro']],
      ['Heavenstep Mountain', ['Montanha', 'Mountain'], ['Sete checkpoints e treinamento Heavenstep', 'Seven checkpoints and Heavenstep training']],
      ['Port Island', ['Loja', 'Shop'], ['Gun Dealer em guias anteriores', 'Gun Dealer in earlier guides']],
    ],
  },
  {
    route: 'bosses',
    kind: 'chefe',
    headingSlug: ['chefes-encontrados-na-historia-e-no-mundo', 'story-and-world-bosses'],
    headingTitle: ['Chefes da história e do mundo', 'Story and world bosses'],
    columns: [['Chefe', 'Boss'], ['Encontro', 'Encounter'], ['Local ou recompensa', 'Location or reward']],
    placeholder: ['Ex.: Veyrn ou Frost Island', 'Try Veyrn or Frost Island'],
    intro: ['A vida de cada chefe pode variar conforme o encontro, a dificuldade e a versão do jogo.', 'Boss health can vary by encounter, difficulty and game version.'],
    profiles: {
      Rovan: { slug: 'rovan', aliases: ['The Bandit King'] },
      Veyrn: { slug: 'veyrn', aliases: ['Duskfang Reaper'] },
    },
    rows: [
      ['Rovan', 'Boss Room', ['Solmar Island e equipamentos Outlaw', 'Solmar Island and Outlaw equipment']],
      ['Veyrn', 'Boss Room', ['Forbidden Island e Death Fangs', 'Forbidden Island and Death Fangs']],
      ['Giant Boar', ['Mundo', 'World'], ['6.468 HP no encontro documentado', '6,468 HP in the documented encounter']],
      ['Ice Golem', ['História', 'Story'], ['Royal Chest Key em Frost Island (6.351 HP no encontro documentado)', 'Royal Chest Key on Frost Island (6,351 HP in the documented encounter)']],
      ['Yeti', ['História', 'Story'], ['Yeti Blood em Frost Island (6.351 HP no encontro documentado)', 'Yeti Blood on Frost Island (6,351 HP in the documented encounter)']],
      ['Ice King', ['História', 'Story'], ['Kael em Frost Island (5.959 HP no encontro documentado)', 'Kael on Frost Island (5,959 HP in the documented encounter)']],
      ['Soul Flame', ['Mundo', 'World'], ['5.744 HP no encontro documentado', '5,744 HP in the documented encounter']],
    ],
  },
  {
    route: 'weapons',
    kind: 'arma',
    headingSlug: ['armas-compradas-com-ouro', 'weapons-you-can-buy-with-gold'],
    headingTitle: ['Armas compradas com ouro', 'Weapons you can buy with Gold'],
    columns: [['Arma', 'Weapon'], type, ['Preço', 'Price'], ['Onde conseguir', 'Where to get it'], ['Habilidade Z', 'Z ability']],
    placeholder: ['Ex.: Cutlass ou Circus Town', 'Try Cutlass or Circus Town'],
    rows: [
      ['Katana', sword, ['300 Ouro', '300 Gold'], 'Weapons Dealer, Harbor Island', 'Air Wave'],
      ['Flintlock', gun, ['750 Ouro', '750 Gold'], 'Weapons Dealer, Harbor Island', 'Multiple Shots'],
      ['Cutlass', sword, ['Grátis na história ou 300 Ouro', 'Free in the story or 300 Gold'], ['Hango ou vendedor em Circus Town', 'Hango or the dealer in Circus Town'], 'Moon Fang Slash'],
      ['Dual Katana', ['Espada dupla', 'Dual swords'], ['1.000 Ouro', '1,000 Gold'], 'Weapons Dealer, Circus Town', 'Phantom Slash'],
      ['Slingshot', gun, ['2.000 Ouro', '2,000 Gold'], 'Weapons Dealer, Solmar Island', 'Prison Shot'],
      ['Musket', gun, ['5.000 Ouro', '5,000 Gold'], 'Weapons Dealer, Solmar Island', 'Overcharge Strike'],
    ],
  },
  {
    route: 'races',
    kind: 'raca',
    headingSlug: ['todas-as-raças-de-vox-seas', 'vox-seas-races'],
    headingTitle: ['Todas as raças de Vox Seas', 'Vox Seas races'],
    columns: [['Raça', 'Race'], rarity, ['Chance por reroll', 'Reroll chance'], ['Bônus e função', 'Bonus and role']],
    placeholder: ['Ex.: Tideborn ou regeneração', 'Try Tideborn or regeneration'],
    profiles: {
      Beastborn: { slug: 'beastborn', aliases: ['Wildborn'] },
      Wyrmborn: { slug: 'wyrmborn' },
    },
    rows: [
      ['Manborn', rare, ['22,5%', '22.5%'], ['Sem bônus passivo', 'No passive bonus']],
      ['Beastborn', epic, ['22,5%', '22.5%'], ['+5% de regeneração de stamina e +10% de velocidade', '+5% stamina regeneration and +10% movement speed']],
      ['Tideborn', epic, ['22,5%', '22.5%'], ['Respiração e visão subaquática, com nado 25% mais rápido', 'Underwater breathing and vision, plus 25% faster swimming']],
      ['Angelborn', epic, ['22,5%', '22.5%'], ['+5% de regeneração de vida', '+5% health regeneration']],
      ['Wyrmborn', legendary, '10%', ['+5% de dano e +5% de vida máxima', '+5% damage and +5% maximum health']],
    ],
  },
];

export function getReferences(lang: Locale) {
  const localize = (text: LocalizedText) => typeof text === 'string' ? text : text[lang === 'en' ? 1 : 0];
  return definitions.map(({ route, kind, headingSlug, headingTitle, columns, placeholder, intro, rows, profiles }) => ({
    path: routes[route][lang],
    kind,
    heading: { slug: localize(headingSlug), text: localize(headingTitle) },
    columns: columns.map(localize),
    placeholder: localize(placeholder),
    intro: intro && localize(intro),
    rows: rows.map(([name, category, ...details]) => {
      const profile = profiles?.[name];
      return {
        name,
        category: localize(category),
        details: details.map(localize),
        href: profile && `${routes[route][lang]}${profile.slug}/`,
        aliases: profile?.aliases ?? [],
      };
    }),
  }));
}

export type ReferenceCollection = ReturnType<typeof getReferences>[number];
