import { convertLengthFromCm, type BindingInputs, type BindingResult, type UnitSystem } from './logic';

export function formatLength(valueCm: number, unit: UnitSystem, locale = 'en-US'): string {
  const value = convertLengthFromCm(valueCm, unit);
  return new Intl.NumberFormat(locale, { maximumFractionDigits: unit === 'imperial' ? 2 : 1 }).format(value);
}

export function formatWhole(value: number, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value);
}

function sceneScale(inputs: BindingInputs): { width: number; height: number } {
  const ratio = inputs.quiltWidthCm / inputs.quiltLengthCm;
  const maxWidth = 212;
  const maxHeight = 126;
  if (ratio >= maxWidth / maxHeight) return { width: maxWidth, height: maxWidth / ratio };
  return { width: maxHeight * ratio, height: maxHeight };
}

function stripMarks(result: BindingResult, y: number): string {
  const count = Math.min(result.strips, 8);
  const marks = Array.from({ length: count }, (_, index) => {
    const x = 38 + index * 27;
    return `<rect class="qb-strip-mark" x="${x}" y="${y}" width="21" height="8" rx="2" />`;
  }).join('');
  const extra = result.strips > 8 ? `<text class="qb-strip-extra" x="257" y="${y + 7}">+${result.strips - 8}</text>` : '';
  return `${marks}${extra}`;
}

export function renderIdleScene(): string {
  return '<svg viewBox="0 0 300 230" role="img" aria-hidden="true"><rect class="qb-scene-paper" x="8" y="8" width="284" height="214" rx="22" /><path class="qb-ribbon-idle" d="M58 52H242V168H58Z" /><rect class="qb-quilt-idle" x="76" y="70" width="148" height="80" rx="4" /></svg>';
}

export function renderBindingScene(inputs: BindingInputs, result: BindingResult, unit: UnitSystem): string {
  const size = sceneScale(inputs);
  const x = 150 - size.width / 2;
  const y = 90 - size.height / 2;
  const right = x + size.width;
  const bottom = y + size.height;
  const cornerDots = [
    `<circle class="qb-corner-dot" cx="${x}" cy="${y}" r="4" />`,
    `<circle class="qb-corner-dot" cx="${right}" cy="${y}" r="4" />`,
    `<circle class="qb-corner-dot" cx="${right}" cy="${bottom}" r="4" />`,
    `<circle class="qb-corner-dot" cx="${x}" cy="${bottom}" r="4" />`,
  ].join('');
  const label = `${formatLength(result.requiredBindingCm, unit)} ${unit === 'imperial' ? 'in' : 'cm'} binding`;
  const labelY = 183;
  const countY = 197;
  const marksY = 209;
  return `<svg viewBox="0 0 300 230" role="img" aria-label="${label}"><rect class="qb-scene-paper" x="8" y="8" width="284" height="214" rx="22" /><path class="qb-ribbon" d="M${x - 10} ${y - 10}H${right + 10}V${bottom + 10}H${x - 10}Z" /><rect class="qb-quilt" x="${x}" y="${y}" width="${size.width}" height="${size.height}" rx="4" />${cornerDots}<text class="qb-scene-measure" x="150" y="${labelY}">${label}</text><text class="qb-scene-count" x="150" y="${countY}">${formatWhole(result.strips)} strips to join</text>${stripMarks(result, marksY)}</svg>`;
}

export function resultSummary(inputs: BindingInputs, result: BindingResult, unit: UnitSystem): string {
  const cut = `${formatLength(inputs.stripWidthCm, unit)} x ${formatLength(inputs.fabricWidthCm, unit)}`;
  return `${formatWhole(result.strips)} strips at ${cut}, ${formatLength(result.requiredBindingCm, unit)} binding required.`;
}
