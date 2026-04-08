export type SizeData = Record<string, string>;
export type ClothingRegion = 'EU' | 'US' | 'UK' | 'IT';

export interface MeasurementRange {
  size: string;
  chest: number;
  waist: number;
  hip: number;
}

export function findBestSize(
  chest: number,
  waist: number,
  hip: number,
  ranges: MeasurementRange[],
): MeasurementRange {
  let best = ranges[0];
  let bestScore = Infinity;
  for (const range of ranges) {
    const score =
      Math.abs(chest - range.chest) +
      Math.abs(waist - range.waist) +
      Math.abs(hip - range.hip);
    if (score < bestScore) {
      bestScore = score;
      best = range;
    }
  }
  return best;
}
