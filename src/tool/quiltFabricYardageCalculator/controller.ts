import {
  calculateYardage,
  convertLengthFromCm,
  convertLengthToCm,
  type UnitSystem,
  type WastePercent,
  type YardageInputs,
  type YardageResult,
} from './logic';
import { evaluateYardage } from './evaluator';
import { formatLength, formatYards, renderIdleScene, renderYardageScene, resultSummary } from './dom-views';
import { loadYardageDraft, saveYardageDraft } from './storage';
import type { QuiltFabricYardageCalculatorUI } from './ui';

export const DEFAULT_INPUTS: YardageInputs = {
  quiltWidthCm: 150,
  quiltLengthCm: 200,
  blockSizeCm: 25,
  fabricWidthCm: 110,
  seamAllowanceCm: 0.7,
  backingExtraCm: 10,
  wastePercent: 0.1,
};

const PRESETS: Record<string, Pick<YardageInputs, 'quiltWidthCm' | 'quiltLengthCm'>> = {
  crib: { quiltWidthCm: 90, quiltLengthCm: 120 },
  throw: { quiltWidthCm: 130, quiltLengthCm: 170 },
  twin: { quiltWidthCm: 170, quiltLengthCm: 230 },
  queen: { quiltWidthCm: 230, quiltLengthCm: 260 },
  king: { quiltWidthCm: 275, quiltLengthCm: 275 },
};

interface ControllerState {
  unit: UnitSystem;
  inputs: YardageInputs;
  ui: QuiltFabricYardageCalculatorUI;
}

function readNumber(root: HTMLElement, field: string): number {
  return Number(root.querySelector<HTMLInputElement>(`[data-field="${field}"]`)?.value ?? '0');
}

function readInputs(root: HTMLElement, unit: UnitSystem): YardageInputs {
  return {
    quiltWidthCm: convertLengthToCm(readNumber(root, 'quiltWidth'), unit),
    quiltLengthCm: convertLengthToCm(readNumber(root, 'quiltLength'), unit),
    blockSizeCm: convertLengthToCm(readNumber(root, 'blockSize'), unit),
    fabricWidthCm: convertLengthToCm(readNumber(root, 'fabricWidth'), unit),
    seamAllowanceCm: convertLengthToCm(readNumber(root, 'seamAllowance'), unit),
    backingExtraCm: convertLengthToCm(readNumber(root, 'backingExtra'), unit),
    wastePercent: Number(root.querySelector<HTMLInputElement>('[data-field="wastePercent"]')?.value ?? '0.1') as WastePercent,
  };
}

function inputValue(valueCm: number, unit: UnitSystem): string {
  const value = convertLengthFromCm(valueCm, unit);
  return value.toFixed(unit === 'imperial' ? 2 : 1).replace(/\.0+$|(?<=\.[0-9])0+$/, '');
}

function writeLength(root: HTMLElement, field: string, valueCm: number, unit: UnitSystem): void {
  const input = root.querySelector<HTMLInputElement>(`[data-field="${field}"]`);
  if (input) input.value = inputValue(valueCm, unit);
}

function writeInputs(root: HTMLElement, state: ControllerState): void {
  writeLength(root, 'quiltWidth', state.inputs.quiltWidthCm, state.unit);
  writeLength(root, 'quiltLength', state.inputs.quiltLengthCm, state.unit);
  writeLength(root, 'blockSize', state.inputs.blockSizeCm, state.unit);
  writeLength(root, 'fabricWidth', state.inputs.fabricWidthCm, state.unit);
  writeLength(root, 'seamAllowance', state.inputs.seamAllowanceCm, state.unit);
  writeLength(root, 'backingExtra', state.inputs.backingExtraCm, state.unit);
  setSelect(root, String(state.inputs.wastePercent));
}

function setSelect(root: HTMLElement, value: string): void {
  const hidden = root.querySelector<HTMLInputElement>('[data-field="wastePercent"]');
  const option = root.querySelector<HTMLElement>(`[data-waste-value="${value}"]`);
  const trigger = root.querySelector<HTMLButtonElement>('[data-select-trigger]');
  if (hidden) hidden.value = value;
  if (trigger && option) trigger.textContent = option.textContent;
  root.querySelectorAll<HTMLElement>('[data-waste-value]').forEach((item) => {
    item.classList.toggle('is-active', item.dataset.wasteValue === value);
  });
}

function setOutput(root: HTMLElement, field: string, value: string): void {
  const output = root.querySelector<HTMLElement>(`[data-output="${field}"]`);
  if (output) output.textContent = value;
}

function unitSuffix(unit: UnitSystem): string {
  return unit === 'imperial' ? 'in' : 'cm';
}

function renderMetrics(root: HTMLElement, state: ControllerState, result: YardageResult): void {
  const suffix = unitSuffix(state.unit);
  setOutput(root, 'blocks', String(result.totalBlocks));
  setOutput(root, 'grid', `${result.columns} x ${result.rows}`);
  setOutput(root, 'cutSquare', `${formatLength(result.cutSquareCm, state.unit)} ${suffix}`);
  setOutput(root, 'piecesAcross', String(result.piecesAcross));
  setOutput(root, 'topYardage', `${formatYards(result.topCutLengthCm)} yd`);
  setOutput(root, 'backingYardage', `${formatYards(result.backing.cutLengthCm)} yd`);
  setOutput(root, 'backingPanels', String(result.backing.panels));
  const layout = result.backing.orientation === 'lengthwise' ? state.ui.lengthwiseLabel : state.ui.crosswiseLabel;
  setOutput(root, 'backingLayout', layout);
  setOutput(root, 'totalYardage', `${formatYards(result.totalCutLengthCm)} yd`);
}

function warningText(state: ControllerState, warning: ReturnType<typeof evaluateYardage>['warning']): string {
  if (warning === 'partial-blocks') return state.ui.warningPartialBlocks;
  if (warning === 'narrow-fabric') return state.ui.warningNarrowFabric;
  return '';
}

function renderInvalid(root: HTMLElement, state: ControllerState): void {
  root.querySelector('[data-result-body]')?.classList.add('is-empty');
  root.querySelector('[data-status]')?.classList.add('is-error');
  setOutput(root, 'status', state.ui.reviewBadge);
  setOutput(root, 'empty', state.ui.invalidMessage);
  const scene = root.querySelector<HTMLElement>('[data-scene]');
  if (scene) scene.innerHTML = renderIdleScene();
}

function renderStatus(
  root: HTMLElement,
  state: ControllerState,
  evaluation: ReturnType<typeof evaluateYardage>,
): void {
  root.querySelector('[data-status]')?.classList.remove('is-error', 'is-ready', 'is-review');
  root.querySelector('[data-status]')?.classList.add(evaluation.status === 'ready' ? 'is-ready' : 'is-review');
  setOutput(root, 'status', evaluation.status === 'ready' ? state.ui.readyBadge : state.ui.reviewBadge);
  setOutput(root, 'warning', warningText(state, evaluation.warning));
}

function render(root: HTMLElement, state: ControllerState): void {
  const result = calculateYardage(state.inputs);
  setOutput(root, 'unit', state.unit === 'metric' ? state.ui.metricLabel : state.ui.imperialLabel);
  if (!result.valid) {
    renderInvalid(root, state);
    return;
  }
  const evaluation = evaluateYardage(state.inputs, result);
  root.querySelector('[data-result-body]')?.classList.remove('is-empty');
  renderStatus(root, state, evaluation);
  renderMetrics(root, state, result);
  const scene = root.querySelector<HTMLElement>('[data-scene]');
  if (scene) scene.innerHTML = renderYardageScene(state.inputs, result, state.unit);
  saveYardageDraft({ unit: state.unit, inputs: state.inputs });
}

function syncUnitButtons(root: HTMLElement, unit: UnitSystem): void {
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.unit === unit);
  });
}

function switchUnit(root: HTMLElement, state: ControllerState, unit: UnitSystem): void {
  if (unit === state.unit) return;
  state.unit = unit;
  writeInputs(root, state);
  syncUnitButtons(root, unit);
  render(root, state);
}

function applyPreset(root: HTMLElement, state: ControllerState, key: string): void {
  const preset = PRESETS[key];
  if (!preset) return;
  state.inputs = { ...state.inputs, ...preset };
  writeInputs(root, state);
  root.querySelectorAll<HTMLElement>('[data-preset]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.preset === key);
  });
  render(root, state);
}

function handleSelect(root: HTMLElement, target: HTMLElement, state: ControllerState): boolean {
  const option = target.closest<HTMLElement>('[data-waste-value]');
  if (option?.dataset.wasteValue) {
    setSelect(root, option.dataset.wasteValue);
    state.inputs = readInputs(root, state.unit);
    root.querySelector<HTMLElement>('[data-select-options]')?.setAttribute('hidden', '');
    render(root, state);
    return true;
  }
  const trigger = target.closest('[data-select-trigger]');
  if (!trigger) return false;
  const panel = root.querySelector<HTMLElement>('[data-select-options]');
  if (panel) panel.toggleAttribute('hidden');
  return true;
}

async function copyPlan(root: HTMLElement, state: ControllerState): Promise<void> {
  const result = calculateYardage(state.inputs);
  if (!result.valid) return;
  await navigator.clipboard?.writeText(resultSummary(result));
  setOutput(root, 'feedback', state.ui.copied);
}

function handleClick(root: HTMLElement, event: MouseEvent, state: ControllerState): void {
  const target = event.target as HTMLElement;
  if (handleSelect(root, target, state)) return;
  const unit = target.closest<HTMLElement>('[data-unit]')?.dataset.unit as UnitSystem | undefined;
  if (unit) return switchUnit(root, state, unit);
  const preset = target.closest<HTMLElement>('[data-preset]')?.dataset.preset;
  if (preset) return applyPreset(root, state, preset);
  if (target.closest('[data-reset]')) {
    state.unit = 'metric';
    state.inputs = DEFAULT_INPUTS;
    writeInputs(root, state);
    render(root, state);
  }
  if (target.closest('[data-copy]')) void copyPlan(root, state);
}

function initialiseState(root: HTMLElement): ControllerState {
  const saved = loadYardageDraft();
  const state = {
    unit: saved?.unit ?? 'metric',
    inputs: saved?.inputs ?? DEFAULT_INPUTS,
    ui: JSON.parse(root.dataset.ui ?? '{}') as QuiltFabricYardageCalculatorUI,
  };
  writeInputs(root, state);
  syncUnitButtons(root, state.unit);
  return state;
}

export function createQuiltFabricYardageController(root: HTMLElement): void {
  const state = initialiseState(root);
  root.addEventListener('input', () => {
    state.inputs = readInputs(root, state.unit);
    root.querySelectorAll('[data-preset]').forEach((button) => button.classList.remove('is-active'));
    render(root, state);
  });
  root.addEventListener('click', (event) => handleClick(root, event, state));
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) root.querySelector('[data-select-options]')?.setAttribute('hidden', '');
  });
  render(root, state);
}
