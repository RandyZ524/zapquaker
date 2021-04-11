export type Building = {
  id: string;
  name: string;
  hp: number[];
};

export type Spell = {
  id: string;
  damage: number[];
};

export type ZapQuake = {
  nbZaps: number;
  nbQuakes: number;
};

// prettier-ignore
export const DATA_BUILDINGS: Building[] = [
  { id: "18", name: "Wall", hp: [300,500,700,900,1400,2000,2500,3000,4000,5500,7000,8500,10000,11500,13000] },
];

// prettier-ignore
export const DATA_SPELLS: Spell[] = [
  { id: "earthquake", damage: [14.5,17,21,25,29] },
  { id: "lightning", damage: [150,180,210,240,270,320,400,480,560] },
];
