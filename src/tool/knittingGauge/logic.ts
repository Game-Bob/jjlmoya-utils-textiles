export interface MultiplesResult {
  base: number;
  offset: number;
}

export function parseMultiples(str: string): MultiplesResult {
  if (!str) return { base: 0, offset: 0 };
  const match = str.replace(/\s+/g, '').match(/(\d+)(?:\+(\d+))?/);
  if (!match) return { base: 0, offset: 0 };
  return {
    base: parseInt(match[1]) || 0,
    offset: parseInt(match[2]) || 0,
  };
}

export function adjustForMultiples(rawSts: number, base: number, offset: number): number {
  const low = Math.floor((rawSts - offset) / base) * base + offset;
  const high = Math.ceil((rawSts - offset) / base) * base + offset;
  return Math.abs(rawSts - low) <= Math.abs(rawSts - high) ? low : high;
}

export function computeScaleFactor(patternSts: number, mySts: number): number {
  return (patternSts / mySts - 1) * 100;
}

export function computeNeedleStep(scaleDiffAbs: number): number {
  return Math.ceil(scaleDiffAbs / 5) * 0.25;
}
