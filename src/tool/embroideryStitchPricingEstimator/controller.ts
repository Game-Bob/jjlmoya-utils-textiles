import { evaluateEstimate } from './evaluator';
import { calculateEmbroidery, DEFAULT_INPUT, type EmbroideryInput, type StitchType } from './logic';
import { copyableSummary, renderEmbroidery } from './dom-views';
import { loadEmbroideryInput, saveEmbroideryInput } from './storage';
import type { EmbroideryStitchPricingEstimatorUI } from './ui';

function numberValue(id: string, fallback: number): number {
  const element = document.getElementById(id) as HTMLInputElement | null;
  return Number(element?.value ?? fallback);
}

function readInput(): EmbroideryInput {
  const selected = document.querySelector('[data-stitch-option].is-selected') as HTMLElement | null;
  return {
    widthCm: numberValue('embroider-width', DEFAULT_INPUT.widthCm),
    heightCm: numberValue('embroider-height', DEFAULT_INPUT.heightCm),
    density: numberValue('embroider-density', DEFAULT_INPUT.density),
    stitchType: (selected?.dataset.stitchOption as StitchType) || DEFAULT_INPUT.stitchType,
    colours: numberValue('embroider-colours', DEFAULT_INPUT.colours),
    speed: numberValue('embroider-speed', DEFAULT_INPUT.speed),
    hourlyRate: numberValue('embroider-rate', DEFAULT_INPUT.hourlyRate),
  };
}

function writeInput(input: EmbroideryInput): void {
  const values: Record<string, number> = {
    'embroider-width': input.widthCm,
    'embroider-height': input.heightCm,
    'embroider-density': input.density,
    'embroider-colours': input.colours,
    'embroider-speed': input.speed,
    'embroider-rate': input.hourlyRate,
  };
  Object.entries(values).forEach(([id, value]) => {
    const element = document.getElementById(id) as HTMLInputElement | null;
    if (element) element.value = String(value);
  });
  selectStitch(input.stitchType);
}

function selectStitch(value: StitchType): void {
  document.querySelectorAll<HTMLElement>('[data-stitch-option]').forEach((option) => {
    const active = option.dataset.stitchOption === value;
    option.classList.toggle('is-selected', active);
    option.setAttribute('aria-selected', String(active));
  });
  const selected = document.querySelector(`[data-stitch-option="${value}"]`) as HTMLElement | null;
  const trigger = document.getElementById('embroider-stitch-trigger');
  if (trigger && selected) trigger.textContent = selected.textContent;
  const note = document.getElementById('embroider-stitch-note');
  if (note && selected?.dataset.note) note.textContent = selected.dataset.note;
}

function update(ui: EmbroideryStitchPricingEstimatorUI): { input: EmbroideryInput; calculation: ReturnType<typeof calculateEmbroidery> } {
  const input = readInput();
  const calculation = calculateEmbroidery(input);
  const evaluation = evaluateEstimate(calculation, { invalid: ui.invalidMessage, highVolume: ui.warningHighVolume, longRun: ui.warningLongRun });
  renderEmbroidery({ input, calculation, evaluation, ui });
  saveEmbroideryInput(input);
  return { input, calculation };
}

function wireSelect(ui: EmbroideryStitchPricingEstimatorUI, refresh: () => void): void {
  const trigger = document.getElementById('embroider-stitch-trigger');
  const menu = document.getElementById('embroider-stitch-menu');
  trigger?.addEventListener('click', () => {
    if (menu) menu.hidden = !menu.hidden;
    trigger.setAttribute('aria-expanded', String(menu ? !menu.hidden : false));
  });
  document.querySelectorAll<HTMLElement>('[data-stitch-option]').forEach((option) => option.addEventListener('click', () => {
    selectStitch(option.dataset.stitchOption as StitchType);
    if (menu) menu.hidden = true;
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    refresh();
  }));
  document.addEventListener('click', (event) => {
    if (!(event.target as HTMLElement).closest('.embroider-select')) {
      if (menu) menu.hidden = true;
      trigger?.setAttribute('aria-expanded', 'false');
    }
  });
  const note = document.getElementById('embroider-stitch-note');
  document.querySelectorAll<HTMLElement>('[data-stitch-option]').forEach((option) => option.addEventListener('mouseenter', () => {
    if (note) note.textContent = option.dataset.note || ui.stitchSatinNote;
  }));
}

function wireCopy(ui: EmbroideryStitchPricingEstimatorUI, refresh: () => ReturnType<typeof update>): void {
  document.getElementById('embroider-copy')?.addEventListener('click', async () => {
    const state = refresh();
    try {
      await navigator.clipboard.writeText(copyableSummary({ input: state.input, calculation: state.calculation, evaluation: evaluateEstimate(state.calculation, { invalid: ui.invalidMessage, highVolume: ui.warningHighVolume, longRun: ui.warningLongRun }), ui }));
      const button = document.getElementById('embroider-copy');
      if (button) {
        button.textContent = ui.copied;
        window.setTimeout(() => { button.textContent = ui.copySummary; }, 1600);
      }
    } catch {}
  });
}

export function mountEmbroideryEstimator(ui: EmbroideryStitchPricingEstimatorUI): void {
  const saved = loadEmbroideryInput(DEFAULT_INPUT);
  writeInput(saved);
  const refresh = () => update(ui);
  document.querySelectorAll<HTMLInputElement>('.embroider-input').forEach((input) => input.addEventListener('input', refresh));
  document.getElementById('embroider-reset')?.addEventListener('click', () => { writeInput(DEFAULT_INPUT); refresh(); });
  wireSelect(ui, refresh);
  wireCopy(ui, refresh);
  refresh();
}
