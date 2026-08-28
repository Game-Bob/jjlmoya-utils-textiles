export type StitchType = 'running' | 'satin' | 'fill' | 'tatami';

export interface EmbroideryInput {
  widthCm: number;
  heightCm: number;
  density: number;
  stitchType: StitchType;
  colours: number;
  speed: number;
  hourlyRate: number;
}

export interface EmbroideryCalculation {
  areaCm2: number;
  baseStitches: number;
  effectiveStitches: number;
  stitchMinutes: number;
  colourChanges: number;
  setupMinutes: number;
  totalMinutes: number;
  hours: number;
  basePrice: number;
  multiplier: number;
}

export const STITCH_MULTIPLIERS: Record<StitchType, number> = {
  running: 0.55,
  satin: 1,
  fill: 1.25,
  tatami: 1.45,
};

export const DEFAULT_INPUT: EmbroideryInput = {
  widthCm: 10,
  heightCm: 8,
  density: 5,
  stitchType: 'satin',
  colours: 2,
  speed: 700,
  hourlyRate: 24,
};

function isFinitePositive(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

function normaliseColours(value: number): number {
  return Math.max(1, Math.round(value));
}

export function calculateEmbroidery(input: EmbroideryInput): EmbroideryCalculation | null {
  if (!isFinitePositive(input.widthCm) || !isFinitePositive(input.heightCm)) return null;
  if (!isFinitePositive(input.density) || !isFinitePositive(input.speed)) return null;
  if (!isFinitePositive(input.hourlyRate)) return null;
  const multiplier = STITCH_MULTIPLIERS[input.stitchType] ?? STITCH_MULTIPLIERS.satin;
  const areaCm2 = input.widthCm * input.heightCm;
  const baseStitches = Math.round(areaCm2 * input.density * input.density);
  const effectiveStitches = Math.round(baseStitches * multiplier);
  const colourChanges = Math.max(0, normaliseColours(input.colours) - 1);
  const setupMinutes = colourChanges * 1.75;
  const stitchMinutes = effectiveStitches / input.speed;
  const totalMinutes = stitchMinutes + setupMinutes;
  return {
    areaCm2,
    baseStitches,
    effectiveStitches,
    stitchMinutes,
    colourChanges,
    setupMinutes,
    totalMinutes,
    hours: totalMinutes / 60,
    basePrice: (totalMinutes / 60) * input.hourlyRate,
    multiplier,
  };
}

export function formatNumber(value: number, maximumFractionDigits = 0): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits }).format(value);
}

export function formatMinutes(value: number): string {
  if (value < 60) return `${formatNumber(value, 1)} min`;
  const hours = Math.floor(value / 60);
  const minutes = Math.round(value % 60);
  return `${hours}h ${minutes}m`;
}
