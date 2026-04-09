export interface MeasureSet {
  chest: number;
  waist: number;
  hips: number;
  length: number;
}

export const SIZE_TABLE: Record<string, MeasureSet> = {
  '36': { chest: 84, waist: 64, hips: 90, length: 58 },
  '38': { chest: 88, waist: 68, hips: 94, length: 59 },
  '40': { chest: 92, waist: 72, hips: 98, length: 60 },
  '42': { chest: 96, waist: 76, hips: 102, length: 61 },
  '44': { chest: 100, waist: 80, hips: 106, length: 62 },
  '46': { chest: 104, waist: 84, hips: 110, length: 63 },
};

export function getStandardMeasures(size: string): MeasureSet {
  return { ...(SIZE_TABLE[size] ?? SIZE_TABLE['38']) };
}

export function computeResult(tgt: MeasureSet, ease: number): { c: number; w: number; h: number; l: number } {
  return { c: tgt.chest + ease, w: tgt.waist + ease, h: tgt.hips + ease, l: tgt.length };
}

export function computeLateralAdj(orgChest: number, tgtChest: number): number {
  return parseFloat(((tgtChest - orgChest) / 4).toFixed(2));
}

export function computeLengthAdj(orgLen: number, tgtLen: number): number {
  return parseFloat((tgtLen - orgLen).toFixed(1));
}

export function isLargeScale(orgChest: number, tgtChest: number): boolean {
  return Math.abs(orgChest - tgtChest) > 12;
}
