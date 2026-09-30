export const INCH_TO_CM = 2.54;
export const YARD_IN_CM = 91.44;

export type UnitSystem = 'metric' | 'imperial';
export type WastePercent = 0.05 | 0.1 | 0.15;
export type BackingOrientation = 'lengthwise' | 'crosswise';

export interface YardageInputs {
  quiltWidthCm: number;
  quiltLengthCm: number;
  blockSizeCm: number;
  fabricWidthCm: number;
  seamAllowanceCm: number;
  backingExtraCm: number;
  wastePercent: WastePercent;
}

export interface BackingPlan {
  orientation: BackingOrientation;
  panels: number;
  targetWidthCm: number;
  targetLengthCm: number;
  cutLengthCm: number;
}

export interface YardageResult {
  valid: true;
  columns: number;
  rows: number;
  totalBlocks: number;
  cutSquareCm: number;
  piecesAcross: number;
  topPasses: number;
  topCutLengthCm: number;
  backing: BackingPlan;
  totalCutLengthCm: number;
  hasPartialBlocks: boolean;
}

export interface InvalidYardageResult {
  valid: false;
  errors: string[];
}

export type CalculationResult = YardageResult | InvalidYardageResult;

export function convertLengthToCm(value: number, unit: UnitSystem): number {
  return unit === 'imperial' ? value * INCH_TO_CM : value;
}

export function convertLengthFromCm(value: number, unit: UnitSystem): number {
  return unit === 'imperial' ? value / INCH_TO_CM : value;
}

export function convertCmToYards(value: number): number {
  return value / YARD_IN_CM;
}

function validateInputs(inputs: YardageInputs): string[] {
  const positive = [inputs.quiltWidthCm, inputs.quiltLengthCm, inputs.blockSizeCm, inputs.fabricWidthCm];
  const nonNegative = [inputs.seamAllowanceCm, inputs.backingExtraCm];
  const errors: string[] = [];
  if (positive.some((value) => !Number.isFinite(value) || value <= 0)) errors.push('dimensions');
  if (nonNegative.some((value) => !Number.isFinite(value) || value < 0)) errors.push('allowances');
  if (inputs.blockSizeCm + inputs.seamAllowanceCm * 2 > inputs.fabricWidthCm) errors.push('fabricWidth');
  if (![0.05, 0.1, 0.15].includes(inputs.wastePercent)) errors.push('waste');
  return errors;
}

function panelCount(targetAcrossCm: number, fabricWidthCm: number, joinLossCm: number): number {
  const effectivePanel = fabricWidthCm - joinLossCm;
  return Math.max(1, Math.ceil((targetAcrossCm - joinLossCm) / effectivePanel));
}

function backingOption(
  dimensions: Pick<BackingPlan, 'orientation' | 'targetWidthCm' | 'targetLengthCm'>,
  fabricWidthCm: number,
  joinLossCm: number,
): BackingPlan {
  const panels = panelCount(dimensions.targetWidthCm, fabricWidthCm, joinLossCm);
  return {
    ...dimensions,
    panels,
    cutLengthCm: panels * dimensions.targetLengthCm,
  };
}

function chooseBacking(inputs: YardageInputs): BackingPlan {
  const width = inputs.quiltWidthCm + inputs.backingExtraCm * 2;
  const length = inputs.quiltLengthCm + inputs.backingExtraCm * 2;
  const joinLoss = inputs.seamAllowanceCm * 2;
  const lengthwise = backingOption(
    { orientation: 'lengthwise', targetWidthCm: width, targetLengthCm: length },
    inputs.fabricWidthCm,
    joinLoss,
  );
  const crosswise = backingOption(
    { orientation: 'crosswise', targetWidthCm: length, targetLengthCm: width },
    inputs.fabricWidthCm,
    joinLoss,
  );
  return crosswise.cutLengthCm < lengthwise.cutLengthCm ? crosswise : lengthwise;
}

function isWholeMultiple(value: number, blockSize: number): boolean {
  const ratio = value / blockSize;
  return Math.abs(ratio - Math.round(ratio)) < 0.000001;
}

export function calculateYardage(inputs: YardageInputs): CalculationResult {
  const errors = validateInputs(inputs);
  if (errors.length > 0) return { valid: false, errors };
  const columns = Math.ceil(inputs.quiltWidthCm / inputs.blockSizeCm);
  const rows = Math.ceil(inputs.quiltLengthCm / inputs.blockSizeCm);
  const totalBlocks = columns * rows;
  const cutSquareCm = inputs.blockSizeCm + inputs.seamAllowanceCm * 2;
  const piecesAcross = Math.floor(inputs.fabricWidthCm / cutSquareCm);
  const topPasses = Math.ceil(totalBlocks / piecesAcross);
  const topCutLengthCm = topPasses * cutSquareCm * (1 + inputs.wastePercent);
  const backing = chooseBacking(inputs);
  return {
    valid: true,
    columns,
    rows,
    totalBlocks,
    cutSquareCm,
    piecesAcross,
    topPasses,
    topCutLengthCm,
    backing,
    totalCutLengthCm: topCutLengthCm + backing.cutLengthCm,
    hasPartialBlocks: !isWholeMultiple(inputs.quiltWidthCm, inputs.blockSizeCm)
      || !isWholeMultiple(inputs.quiltLengthCm, inputs.blockSizeCm),
  };
}
