export const INCH_TO_CM = 2.54;

export type UnitSystem = 'metric' | 'imperial';
export type JoinMethod = 'diagonal' | 'straight';
export type SafetyPercent = 0.05 | 0.1 | 0.15;

export interface BindingInputs {
  quiltWidthCm: number;
  quiltLengthCm: number;
  cornerCount: number;
  stripWidthCm: number;
  fabricWidthCm: number;
  seamAllowanceCm: number;
  joinMethod: JoinMethod;
  safetyPercent: SafetyPercent;
}

export interface BindingResult {
  valid: true;
  perimeterCm: number;
  cornerReserveCm: number;
  joiningReserveCm: number;
  wasteReserveCm: number;
  requiredBindingCm: number;
  strips: number;
  joinCount: number;
  joinedLengthCm: number;
  surplusCm: number;
  fabricCutLengthCm: number;
  joinLossCm: number;
}

export interface InvalidBindingResult {
  valid: false;
  errors: string[];
}

export type CalculationResult = BindingResult | InvalidBindingResult;

export function convertLengthToCm(value: number, unit: UnitSystem): number {
  return unit === 'imperial' ? value * INCH_TO_CM : value;
}

export function convertLengthFromCm(value: number, unit: UnitSystem): number {
  return unit === 'imperial' ? value / INCH_TO_CM : value;
}

function validateInputs(inputs: BindingInputs): string[] {
  const errors: string[] = [];
  const lengths = [inputs.quiltWidthCm, inputs.quiltLengthCm, inputs.stripWidthCm, inputs.fabricWidthCm, inputs.seamAllowanceCm];
  if (lengths.some((value) => !Number.isFinite(value) || value <= 0)) errors.push('lengths');
  if (!Number.isInteger(inputs.cornerCount) || inputs.cornerCount < 0 || inputs.cornerCount > 100) errors.push('corners');
  if (inputs.fabricWidthCm <= inputs.stripWidthCm) errors.push('fabricWidth');
  if (inputs.safetyPercent < 0.05 || inputs.safetyPercent > 0.15) errors.push('safety');
  return errors;
}

function countStrips(requiredCm: number, fabricWidthCm: number, joinLossCm: number): number {
  const usefulLength = fabricWidthCm - joinLossCm;
  return Math.max(1, Math.ceil((requiredCm - joinLossCm) / usefulLength));
}

export function calculateBinding(inputs: BindingInputs): CalculationResult {
  const errors = validateInputs(inputs);
  if (errors.length > 0) return { valid: false, errors };

  const perimeterCm = 2 * (inputs.quiltWidthCm + inputs.quiltLengthCm);
  const cornerReserveCm = inputs.cornerCount * inputs.seamAllowanceCm * 2;
  const joiningReserveCm = inputs.joinMethod === 'diagonal'
    ? inputs.stripWidthCm + inputs.seamAllowanceCm * 2
    : inputs.seamAllowanceCm * 2;
  const baseLengthCm = perimeterCm + cornerReserveCm + joiningReserveCm;
  const wasteReserveCm = baseLengthCm * inputs.safetyPercent;
  const requiredBindingCm = baseLengthCm + wasteReserveCm;
  const joinLossCm = inputs.joinMethod === 'diagonal' ? inputs.stripWidthCm : inputs.seamAllowanceCm * 2;
  const strips = countStrips(requiredBindingCm, inputs.fabricWidthCm, joinLossCm);
  const joinedLengthCm = strips * inputs.fabricWidthCm - (strips - 1) * joinLossCm;

  return {
    valid: true,
    perimeterCm,
    cornerReserveCm,
    joiningReserveCm,
    wasteReserveCm,
    requiredBindingCm,
    strips,
    joinCount: Math.max(0, strips - 1),
    joinedLengthCm,
    surplusCm: joinedLengthCm - requiredBindingCm,
    fabricCutLengthCm: strips * inputs.stripWidthCm,
    joinLossCm,
  };
}
