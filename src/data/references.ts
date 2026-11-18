export interface ReferenceCollection {
  path: string;
  kind: string;
  heading: { slug: string; text: string };
  columns: [name: string, category: string, ...details: string[]];
  placeholder: string;
  intro?: string;
  rows: [name: string, category: string, ...details: string[]][];
}

export const references = {
  frutas: {
    path: '/frutas/',
    kind: 'fruta',
    heading: { slug: 'lista-de-frutas-e-poderes', text: 'Lista de frutas e poderes' },
    columns: ['Fruta', 'Raridade', 'Poder principal'],
    placeholder: 'Ex.: Poison ou veneno',
    intro: 'Os nomes seguem o menu do jogo. As entradas marcadas como Legacy são registros da versão anterior.',
    rows: [
      ['Thorn', 'Comum', 'Espinhos corporais e ataques em área'],
      ['Weight', 'Comum', 'Controle do peso corporal'],
      ['Boom', 'Rara', 'Explosões'],
      ['Haze', 'Rara', 'Transformação em fumaça e empurrões'],
      ['Protection', 'Rara', 'Barreiras, paredes e espinhos'],
      ['Divide', 'Épica', 'Divisões invisíveis'],
      ['Blaze', 'Épica', 'Fogo, dano em área e movimentação'],
      ['Dust', 'Épica', 'Controle de areia'],
      ['Volcanic', 'Épica', 'Lava e dano contínuo'],
      ['Vulcanic', 'Épica', 'Lava e calor intenso'],
      ['Shine', 'Lendária', 'Luz, ataques rápidos e voo'],
      ['Frozen', 'Lendária', 'Gelo e ataques em área'],
      ['Eclipse', 'Lendária', 'Escuridão e puxões'],
      ['Mirror', 'Lendária', 'Reflexos, atordoamento e viagem'],
      ['Orbit', 'Lendária', 'Gravidade, controle e voo'],
      ['Zen', 'Mítica', 'Transformação divina'],
      ['Poison', 'Mítica', 'Veneno e transformação Venom King'],
      ['Elastic', 'Legacy', 'Elasticidade para PvP inicial'],
      ['Kilo', 'Legacy', 'Fruta básica da versão anterior'],
    ],
  },
  mapa: {
    path: '/mapa/',
    kind: 'ilha',
    heading: { slug: 'todas-as-ilhas-e-destinos', text: 'Todas as ilhas e destinos' },
    columns: ['Destino', 'Tipo', 'Principal motivo para visitar'],
    placeholder: 'Ex.: Harbor ou Vox Gacha',
    rows: [
      ['Solmar Island', 'Inicial', 'Hango, primeiras missões, loja de barcos e armas'],
      ['Forbidden Island', 'História', 'Acampamento de caçadores, Witch House e Veyrn'],
      ['Circus Town', 'Cidade', 'Mayor House, circo e Arms Dealer'],
      ['Valoria Island', 'Tesouro', 'Praia, penhascos e objetivo de The Powder Keg'],
      ['Harbor Island', 'Serviços', 'Old Explorer, hotel, venda de peixes e Vox Gacha'],
      ['Golden Dunes', 'Deserto', 'Cidade, canais e Black Market'],
      ['Frost Island', 'Neve', 'Vila, farol, castelo, Ice King e Royal Forge'],
      ['Wandering Bastille', 'Navio', 'Restaurante, Vox Gacha, Ignacio e spawn'],
      ['Skull Island', 'Treino', 'Askard e treinamento de Vox'],
      ['Shark Park', 'Treino', 'Nalu, Old Kaito e Ryusui Ken'],
      ['Rustfall', 'Treino', 'Ansel e Electro'],
      ['Heavenstep Mountain', 'Montanha', 'Sete checkpoints e treinamento Heavenstep'],
      ['Port Island', 'Loja', 'Gun Dealer, Musket e Slingshot'],
    ],
  },
  armas: {
    path: '/armas/',
    kind: 'arma',
    heading: { slug: 'armas-compradas-com-ouro', text: 'Armas compradas com ouro' },
    columns: ['Arma', 'Tipo', 'Preço', 'Onde conseguir', 'Habilidade Z'],
    placeholder: 'Ex.: Cutlass ou Port Island',
    rows: [
      ['Katana', 'Espada', '300 Ouro', 'Weapon Dealer, área inicial', 'Air Wave'],
      ['Flintlock', 'Arma de fogo', '750 Ouro', 'Weapon Dealer, área inicial', 'Multiple Shots'],
      ['Cutlass', 'Espada', 'Grátis na história', 'Hango ou Arms Dealer', 'Moon Fang Slash'],
      ['Dual Katana', 'Espada dupla', '5.000 Ouro', 'Arms Dealer, Circus Town', 'Phantom Slash'],
      ['Slingshot', 'Arma de fogo', '10.000 Ouro', 'Gun Dealer, Port Island', 'Prison Shot'],
      ['Musket', 'Arma de fogo', '25.000 Ouro', 'Gun Dealer, Port Island', 'Overcharge Strike'],
    ],
  },
  racas: {
    path: '/racas/',
    kind: 'raca',
    heading: { slug: 'todas-as-raças-de-vox-seas', text: 'Todas as raças de Vox Seas' },
    columns: ['Raça', 'Raridade', 'Chance por reroll', 'Bônus e função'],
    placeholder: 'Ex.: Tideborn ou regeneração',
    rows: [
      ['Manborn', 'Rara', '22,5%', 'Sem bônus passivo'],
      ['Wildborn', 'Épica', '22,5%', 'Bônus não confirmado na fonte consultada'],
      ['Tideborn', 'Épica', '22,5%', 'Respiração e visão subaquática, com nado 25% mais rápido'],
      ['Angelborn', 'Épica', '22,5%', '+5% de regeneração de vida'],
      ['Wyrmborn', 'Lendária', '10%', '+5% de dano e +5% de vida máxima'],
    ],
  },
} satisfies Record<string, ReferenceCollection>;
