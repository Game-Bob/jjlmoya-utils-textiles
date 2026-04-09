export type SizeKey = 's' | 'm' | 'l' | 'xl';
export type WeightKey = 'fingering' | 'dk' | 'worsted' | 'bulky';

export interface ProjectSpec {
  s: number[];
  m: number[];
  l: number[];
  xl: number[];
  parts: { body: number; sleeves: number };
}

export const PROJECTS: Record<string, ProjectSpec> = {
  sweater: {
    s: [1100, 1000, 900, 800],
    m: [1250, 1150, 1050, 950],
    l: [1450, 1350, 1250, 1150],
    xl: [1700, 1600, 1500, 1400],
    parts: { body: 0.7, sleeves: 0.3 },
  },
  cardigan: {
    s: [1200, 1100, 1000, 900],
    m: [1350, 1250, 1150, 1050],
    l: [1550, 1450, 1350, 1250],
    xl: [1850, 1750, 1650, 1550],
    parts: { body: 0.65, sleeves: 0.35 },
  },
  hat: {
    s: [180, 160, 140, 120],
    m: [210, 190, 170, 150],
    l: [250, 230, 210, 190],
    xl: [300, 280, 260, 240],
    parts: { body: 1, sleeves: 0 },
  },
  scarf: {
    s: [350, 300, 250, 200],
    m: [500, 450, 400, 350],
    l: [700, 650, 600, 550],
    xl: [950, 900, 850, 800],
    parts: { body: 1, sleeves: 0 },
  },
  socks: {
    s: [300, 250, 200, 150],
    m: [400, 350, 300, 250],
    l: [500, 450, 400, 350],
    xl: [650, 600, 550, 500],
    parts: { body: 1, sleeves: 0 },
  },
  blanket: {
    s: [800, 750, 700, 650],
    m: [3500, 3200, 3000, 2800],
    l: [5500, 5000, 4500, 4000],
    xl: [8000, 7500, 7000, 6500],
    parts: { body: 1, sleeves: 0 },
  },
};

export const WEIGHT_IDX: Record<WeightKey, number> = {
  fingering: 0,
  dk: 1,
  worsted: 2,
  bulky: 3,
};

export function getBaseMeters(project: string, size: SizeKey, weight: WeightKey): number {
  const proj = PROJECTS[project];
  if (!proj) return 0;
  return proj[size][WEIGHT_IDX[weight]];
}

export function computeTotal(baseM: number, cables: boolean): number {
  return Math.ceil(baseM * (cables ? 1.25 : 1) * 1.1);
}

export function computeBalls(totalM: number, ballM: number): number {
  return Math.ceil(totalM / ballM);
}

export function getProjectParts(project: string): { body: number; sleeves: number } {
  return PROJECTS[project]?.parts ?? { body: 1, sleeves: 0 };
}

export function parseParam(p: URLSearchParams, key: string, def: number): number {
  return parseInt(p.get(key) ?? '') || def;
}
