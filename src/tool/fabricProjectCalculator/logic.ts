export interface PieceSpec {
  nameKey: string;
  w: number;
  fold?: boolean;
  col: number;
}

export interface PieceRow {
  h: number;
  pieces: PieceSpec[];
}

export const PIECE_ROWS: Record<string, PieceRow[]> = {
  skirt: [
    { h: 0.38, pieces: [{ nameKey: 'front', w: 0.88, fold: true, col: 0 }] },
    { h: 0.33, pieces: [{ nameKey: 'back', w: 0.44, col: 1 }, { nameKey: 'back', w: 0.44, col: 1 }] },
    { h: 0.12, pieces: [{ nameKey: 'waistband', w: 0.88, col: 2 }] },
  ],
  pants: [
    { h: 0.32, pieces: [{ nameKey: 'front', w: 0.44, col: 0 }, { nameKey: 'front', w: 0.44, col: 0 }] },
    { h: 0.30, pieces: [{ nameKey: 'back', w: 0.44, col: 1 }, { nameKey: 'back', w: 0.44, col: 1 }] },
    { h: 0.09, pieces: [{ nameKey: 'waistbelt', w: 0.88, fold: true, col: 2 }] },
    { h: 0.12, pieces: [{ nameKey: 'pocket', w: 0.22, col: 5 }, { nameKey: 'pocket', w: 0.22, col: 5 }] },
  ],
  dress: [
    { h: 0.36, pieces: [{ nameKey: 'front', w: 0.88, fold: true, col: 0 }] },
    { h: 0.27, pieces: [{ nameKey: 'back', w: 0.44, col: 1 }, { nameKey: 'back', w: 0.44, col: 1 }] },
    { h: 0.22, pieces: [{ nameKey: 'sleeve', w: 0.44, col: 3 }, { nameKey: 'sleeve', w: 0.44, col: 3 }] },
    { h: 0.08, pieces: [{ nameKey: 'facings', w: 0.88, col: 4 }] },
  ],
  shirt: [
    { h: 0.35, pieces: [{ nameKey: 'front', w: 0.44, col: 0 }, { nameKey: 'front', w: 0.44, col: 0 }] },
    { h: 0.28, pieces: [{ nameKey: 'back', w: 0.88, fold: true, col: 1 }] },
    { h: 0.20, pieces: [{ nameKey: 'sleeve', w: 0.44, col: 3 }, { nameKey: 'sleeve', w: 0.44, col: 3 }] },
    { h: 0.08, pieces: [{ nameKey: 'collar', w: 0.40, col: 2 }, { nameKey: 'collar', w: 0.40, col: 2 }] },
    { h: 0.06, pieces: [{ nameKey: 'cuffs', w: 0.35, col: 4 }, { nameKey: 'cuffs', w: 0.35, col: 4 }] },
  ],
  coat: [
    { h: 0.32, pieces: [{ nameKey: 'front', w: 0.44, col: 0 }, { nameKey: 'front', w: 0.44, col: 0 }] },
    { h: 0.30, pieces: [{ nameKey: 'back', w: 0.88, fold: true, col: 1 }] },
    { h: 0.20, pieces: [{ nameKey: 'sleeve', w: 0.44, col: 3 }, { nameKey: 'sleeve', w: 0.44, col: 3 }] },
    { h: 0.08, pieces: [{ nameKey: 'collar', w: 0.78, col: 2 }] },
    { h: 0.06, pieces: [{ nameKey: 'lapels', w: 0.55, col: 4 }] },
  ],
  tote: [
    { h: 0.62, pieces: [{ nameKey: 'body', w: 0.44, col: 0 }, { nameKey: 'body', w: 0.44, col: 0 }] },
    { h: 0.20, pieces: [{ nameKey: 'handleA', w: 0.15, col: 5 }, { nameKey: 'handleB', w: 0.15, col: 5 }] },
  ],
};

export const CONSUMPTION_MATRIX: Record<string, Record<string, number>> = {
  skirt: { '90': 2.0, '115': 1.5, '140': 1.2, '150': 1.1 },
  pants: { '90': 2.5, '115': 2.2, '140': 1.6, '150': 1.5 },
  dress: { '90': 3.5, '115': 3.0, '140': 2.5, '150': 2.2 },
  shirt: { '90': 2.2, '115': 1.8, '140': 1.4, '150': 1.2 },
  coat: { '90': 4.5, '115': 3.8, '140': 3.0, '150': 2.8 },
  tote: { '90': 1.2, '115': 1.0, '140': 0.8, '150': 0.7 },
};

export const SIZE_MULTS: Record<string, number> = {
  xs_core: 0.88,
  m_core: 1.0,
  xl_core: 1.25,
};

export const SIZE_MIN_WIDTHS: Record<string, number> = {
  xs_core: 40,
  m_core: 55,
  xl_core: 70,
};

export function isSerialCut(minWidth: number, fabricWidth: number, garment: string): boolean {
  return garment !== 'tote' && minWidth * 2 > fabricWidth;
}

export function computeMeters(base: number, mult: number, serial: boolean, allowCm: number): number {
  return parseFloat(((base * mult * (serial ? 1.4 : 1)) + allowCm * 0.1).toFixed(2));
}

export function shopAdviceMeters(meters: number): number {
  const rounded = Math.ceil(meters * 4) / 4;
  return rounded < meters + 0.1 ? rounded + 0.25 : rounded;
}

export function getRulerStep(totalMeters: number): number {
  if (totalMeters <= 1.5) return 0.25;
  if (totalMeters <= 3) return 0.5;
  return 1;
}
