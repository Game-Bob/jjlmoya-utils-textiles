import {
  calculateBinding,
  convertLengthFromCm,
  convertLengthToCm,
  type BindingInputs,
  type JoinMethod,
  type SafetyPercent,
  type UnitSystem,
} from './logic';
import { evaluateBinding } from './evaluator';
import { formatLength, formatWhole, renderBindingScene, renderIdleScene, resultSummary } from './dom-views';
import { loadBindingDraft, saveBindingDraft, type SavedBindingDraft } from './storage';
import type { QuiltBindingCalculatorUI } from './ui';

export const DEFAULT_INPUTS: BindingInputs = {
  quiltWidthCm: 90,
  quiltLengthCm: 120,
  cornerCount: 4,
  stripWidthCm: 6.5,
  fabricWidthCm: 110,
  seamAllowanceCm: 0.6,
  joinMethod: 'diagonal',
  safetyPercent: 0.1,
};

interface ControllerState {
  unit: UnitSystem;
  inputs: BindingInputs;
  ui: QuiltBindingCalculatorUI;
}

function readUi(root: HTMLElement): QuiltBindingCalculatorUI {
  return JSON.parse(root.dataset.ui ?? '{}') as QuiltBindingCalculatorUI;
}

function readNumber(root: HTMLElement, field: string): number {
  const input = root.querySelector<HTMLInputElement>(`[data-field="${field}"]`);
  return Number(input?.value ?? '0');
}

function readInputs(root: HTMLElement, unit: UnitSystem): BindingInputs {
  return {
    quiltWidthCm: convertLengthToCm(readNumber(root, 'quiltWidth'), unit),
    quiltLengthCm: convertLengthToCm(readNumber(root, 'quiltLength'), unit),
    cornerCount: Math.round(readNumber(root, 'cornerCount')),
    stripWidthCm: convertLengthToCm(readNumber(root, 'stripWidth'), unit),
    fabricWidthCm: convertLengthToCm(readNumber(root, 'fabricWidth'), unit),
    seamAllowanceCm: convertLengthToCm(readNumber(root, 'seamAllowance'), unit),
    joinMethod: (root.querySelector<HTMLInputElement>('[data-field="joinMethod"]')?.value ?? 'diagonal') as JoinMethod,
    safetyPercent: Number(root.querySelector<HTMLInputElement>('[data-field="safetyPercent"]')?.value ?? '0.1') as SafetyPercent,
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

function writeInputs(root: HTMLElement, inputs: BindingInputs, unit: UnitSystem): void {
  writeLength(root, 'quiltWidth', inputs.quiltWidthCm, unit);
  writeLength(root, 'quiltLength', inputs.quiltLengthCm, unit);
  writeLength(root, 'stripWidth', inputs.stripWidthCm, unit);
  writeLength(root, 'fabricWidth', inputs.fabricWidthCm, unit);
  writeLength(root, 'seamAllowance', inputs.seamAllowanceCm, unit);
  const corners = root.querySelector<HTMLInputElement>('[data-field="cornerCount"]');
  if (corners) corners.value = String(inputs.cornerCount);
  setSelect(root, 'joinMethod', inputs.joinMethod);
  setSelect(root, 'safetyPercent', String(inputs.safetyPercent));
}

function setSelect(root: HTMLElement, field: string, value: string): void {
  const hidden = root.querySelector<HTMLInputElement>(`[data-field="${field}"]`);
  const option = root.querySelector<HTMLElement>(`[data-select="${field}"] [data-value="${value}"]`);
  const trigger = root.querySelector<HTMLButtonElement>(`[data-select="${field}"] [data-select-trigger]`);
  if (hidden) hidden.value = value;
  if (trigger && option) {
    trigger.textContent = option.textContent;
    trigger.setAttribute('aria-expanded', 'false');
  }
  root.querySelectorAll(`[data-select="${field}"] [data-value]`).forEach((item) => {
    item.classList.toggle('is-active', item.getAttribute('data-value') === value);
  });
}

function setOutput(root: HTMLElement, field: string, value: string): void {
  const output = root.querySelector<HTMLElement>(`[data-output="${field}"]`);
  if (output) output.textContent = value;
}

function unitSuffix(unit: UnitSystem): string {
  return unit === 'imperial' ? 'in' : 'cm';
}

function warningText(ui: QuiltBindingCalculatorUI, warning: ReturnType<typeof evaluateBinding>['warning']): string {
  if (warning === 'large-waste') return ui.warningLargeWaste;
  if (warning === 'small-surplus') return ui.warningSmallSurplus;
  return '';
}

function renderMetrics(root: HTMLElement, state: ControllerState, result: Extract<ReturnType<typeof calculateBinding>, { valid: true }>): void {
  const suffix = unitSuffix(state.unit);
  setOutput(root, 'perimeter', `${formatLength(result.perimeterCm, state.unit)} ${suffix}`);
  setOutput(root, 'required', `${formatLength(result.requiredBindingCm, state.unit)} ${suffix}`);
  setOutput(root, 'strips', formatWhole(result.strips));
  setOutput(root, 'cutSize', `${formatLength(state.inputs.stripWidthCm, state.unit)} x ${formatLength(state.inputs.fabricWidthCm, state.unit)}`);
  setOutput(root, 'joined', `${formatLength(result.joinedLengthCm, state.unit)} ${suffix}`);
  setOutput(root, 'surplus', `${formatLength(result.surplusCm, state.unit)} ${suffix}`);
  setOutput(root, 'joins', formatWhole(result.joinCount));
  setOutput(root, 'plan', resultSummary(state.inputs, result, state.unit));
}

function renderStatus(root: HTMLElement, evaluation: ReturnType<typeof evaluateBinding>): void {
  root.querySelector('[data-status]')?.classList.remove('is-error');
  root.querySelector('[data-status]')?.classList.toggle('is-ready', evaluation.status === 'ready');
  root.querySelector('[data-status]')?.classList.toggle('is-review', evaluation.status === 'review');
  root.querySelector('[data-result-body]')?.classList.remove('is-empty');
}

function renderInvalid(root: HTMLElement, ui: QuiltBindingCalculatorUI): void {
  setOutput(root, 'status', ui.invalidMessage);
  setOutput(root, 'empty', ui.invalidMessage);
  ['perimeter', 'required', 'strips', 'cutSize', 'joined', 'surplus', 'joins', 'plan', 'warning'].forEach((field) => setOutput(root, field, '-'));
  const scene = root.querySelector<HTMLElement>('[data-scene]');
  if (scene) scene.innerHTML = renderIdleScene();
  root.querySelector('[data-status]')?.classList.add('is-error');
  root.querySelector('[data-status]')?.classList.remove('is-ready', 'is-review');
  root.querySelector('[data-result-body]')?.classList.add('is-empty');
}

function renderValid(root: HTMLElement, state: ControllerState, result: Extract<ReturnType<typeof calculateBinding>, { valid: true }>): void {
  const evaluation = evaluateBinding(result);
  setOutput(root, 'status', evaluation.status === 'ready' ? state.ui.readyBadge : state.ui.reviewBadge);
  renderMetrics(root, state, result);
  renderStatus(root, evaluation);
  setOutput(root, 'warning', warningText(state.ui, evaluation.warning));
  const scene = root.querySelector<HTMLElement>('[data-scene]');
  if (scene) scene.innerHTML = renderBindingScene(state.inputs, result, state.unit);
}

function render(root: HTMLElement, state: ControllerState): void {
  const result = calculateBinding(state.inputs);
  setOutput(root, 'unit', state.unit === 'imperial' ? state.ui.imperialLabel : state.ui.metricLabel);
  if (!result.valid) {
    renderInvalid(root, state.ui);
    return;
  }
  renderValid(root, state, result);
  saveBindingDraft({ unit: state.unit, inputs: state.inputs });
}

function closeSelects(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-select].is-open').forEach((select) => {
    select.classList.remove('is-open');
    const options = select.querySelector<HTMLElement>('[data-select-options]');
    if (options) options.hidden = true;
    select.querySelector('[data-select-trigger]')?.setAttribute('aria-expanded', 'false');
  });
}

function toggleSelect(select: HTMLElement): void {
  const options = select.querySelector<HTMLElement>('[data-select-options]');
  if (!options) return;
  const open = !select.classList.contains('is-open');
  select.classList.toggle('is-open', open);
  options.hidden = !open;
  select.querySelector('[data-select-trigger]')?.setAttribute('aria-expanded', String(open));
}

function handleSelectClick(root: HTMLElement, target: HTMLElement, state: ControllerState): boolean {
  const select = target.closest<HTMLElement>('[data-select]');
  if (!select) return false;
  if (target.closest('[data-select-trigger]')) {
    closeSelects(root);
    toggleSelect(select);
    return true;
  }
  const option = target.closest<HTMLElement>('[data-value]');
  if (!option) return true;
  const field = select.dataset.select ?? '';
  setSelect(root, field, option.dataset.value ?? '');
  state.inputs = readInputs(root, state.unit);
  render(root, state);
  closeSelects(root);
  return true;
}

function switchUnit(root: HTMLElement, state: ControllerState, unit: UnitSystem): void {
  if (unit === state.unit) return;
  state.inputs = readInputs(root, state.unit);
  state.unit = unit;
  writeInputs(root, state.inputs, state.unit);
  switchUnitButtons(root, state.unit);
  render(root, state);
}

async function copySummary(root: HTMLElement, state: ControllerState): Promise<void> {
  const result = calculateBinding(state.inputs);
  if (!result.valid) return;
  const summary = resultSummary(state.inputs, result, state.unit);
  await navigator.clipboard?.writeText(summary);
  setOutput(root, 'feedback', state.ui.copied);
}

function switchUnitButtons(root: HTMLElement, unit: UnitSystem): void {
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.unit === unit);
  });
}

function handleClick(root: HTMLElement, event: MouseEvent, state: ControllerState): void {
  const target = event.target as HTMLElement;
  if (handleSelectClick(root, target, state)) return;
  const unit = target.closest<HTMLElement>('[data-unit]')?.dataset.unit as UnitSystem | undefined;
  if (unit) {
    switchUnit(root, state, unit);
    return;
  }
  if (target.closest('[data-reset]')) {
    state.unit = 'metric';
    state.inputs = DEFAULT_INPUTS;
    writeInputs(root, state.inputs, state.unit);
    switchUnitButtons(root, state.unit);
    render(root, state);
    return;
  }
  if (target.closest('[data-copy]')) void copySummary(root, state);
}

function initialiseState(root: HTMLElement): ControllerState {
  const saved = loadBindingDraft() as SavedBindingDraft | null;
  const state: ControllerState = {
    unit: saved?.unit ?? 'metric',
    inputs: saved?.inputs ?? DEFAULT_INPUTS,
    ui: readUi(root),
  };
  writeInputs(root, state.inputs, state.unit);
  switchUnitButtons(root, state.unit);
  return state;
}

export function createQuiltBindingController(root: HTMLElement): void {
  const state = initialiseState(root);
  root.addEventListener('input', () => {
    state.inputs = readInputs(root, state.unit);
    render(root, state);
  });
  root.addEventListener('click', (event) => handleClick(root, event, state));
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closeSelects(root);
  });
  render(root, state);
}
