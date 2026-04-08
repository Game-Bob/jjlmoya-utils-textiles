export type FiberType = 'protein' | 'cellulosic';

export interface WOFResult {
  alum: number;
  creamOfTartar: number;
  iron: number;
}

export interface PhStrings {
  optimal: string;
  raisePrefix: string;
  raiseSuffix: string;
  lowerPrefix: string;
  lowerSuffix: string;
}

export function calculateWOF(weightG: number, fiberType: FiberType): WOFResult {
  if (fiberType === 'protein') {
    return { alum: weightG * 0.15, creamOfTartar: weightG * 0.02, iron: weightG * 0.01 };
  }
  return { alum: weightG * 0.2, creamOfTartar: 0, iron: weightG * 0.02 };
}

export function computePhAdvice(
  ph: number,
  target: number,
  vol: number,
  strings: PhStrings,
): string {
  const diff = target - ph;
  if (Math.abs(diff) < 0.1) return strings.optimal;
  if (diff > 0) {
    return `${strings.raisePrefix} ${(diff * vol * 0.5).toFixed(1)}g ${strings.raiseSuffix} ${target}`;
  }
  return `${strings.lowerPrefix} ${(Math.abs(diff) * vol * 0.2).toFixed(1)}ml ${strings.lowerSuffix} ${target}`;
}
