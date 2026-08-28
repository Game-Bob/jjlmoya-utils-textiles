import type { EmbroideryCalculation, EmbroideryInput } from './logic';
import { formatMinutes, formatNumber } from './logic';
import type { EmbroideryStitchPricingEstimatorUI } from './ui';
import type { EstimateEvaluation } from './evaluator';

interface RenderContext {
  input: EmbroideryInput;
  calculation: EmbroideryCalculation | null;
  evaluation: EstimateEvaluation;
  ui: EmbroideryStitchPricingEstimatorUI;
}

function setText(id: string, value: string): void {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function makeSvgElement<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string>): SVGElementTagNameMap[K] {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function renderThreadLines(svg: SVGSVGElement, input: EmbroideryInput): void {
  const lineCount = Math.min(18, Math.max(5, Math.round(input.density * 2)));
  for (let index = 0; index < lineCount; index += 1) {
    const y = 38 + (index * 124) / Math.max(1, lineCount - 1);
    const path = makeSvgElement('path', {
      d: `M 45 ${y} C 95 ${y - 20} 145 ${y + 20} 195 ${y} S 295 ${y - 20} 355 ${y}`,
      class: 'embroider-thread',
      'stroke-width': `${1.2 + input.density / 10}`,
    });
    svg.appendChild(path);
  }
}

function renderCanvas(input: EmbroideryInput): void {
  const svg = document.getElementById('embroider-canvas') as SVGSVGElement | null;
  if (!svg) return;
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  svg.appendChild(makeSvgElement('circle', { cx: '200', cy: '100', r: '160', class: 'embroider-hoop-shadow' }));
  svg.appendChild(makeSvgElement('circle', { cx: '200', cy: '100', r: '150', class: 'embroider-hoop' }));
  svg.appendChild(makeSvgElement('rect', { x: '42', y: '22', width: '316', height: '156', rx: '14', class: 'embroider-cloth' }));
  renderThreadLines(svg, input);
  svg.appendChild(makeSvgElement('circle', { cx: '200', cy: '100', r: '8', class: 'embroider-needle' }));
}

function renderValues(calculation: EmbroideryCalculation | null, ui: EmbroideryStitchPricingEstimatorUI): void {
  if (!calculation) {
    setText('embroider-result-status', ui.emptyResult);
    setText('embroider-effective', '--');
    setText('embroider-duration', '--');
    setText('embroider-price', '--');
    return;
  }
  setText('embroider-result-status', ui.estimateBadge);
  setText('embroider-effective', `${formatNumber(calculation.effectiveStitches)} ${ui.stitchesUnit}`);
  setText('embroider-duration', formatMinutes(calculation.totalMinutes));
  setText('embroider-price', calculation.basePrice.toFixed(2));
  setText('embroider-area', `${formatNumber(calculation.areaCm2, 1)} cm2`);
  setText('embroider-stitch-time', formatMinutes(calculation.stitchMinutes));
  setText('embroider-setup-time', formatMinutes(calculation.setupMinutes));
  setText('embroider-colour-changes', formatNumber(calculation.colourChanges));
}

function renderEvaluation(evaluation: EstimateEvaluation): void {
  const badge = document.getElementById('embroider-status-badge');
  const notice = document.getElementById('embroider-notice');
  if (badge) {
    badge.textContent = getStatusLabel(evaluation.status);
    badge.dataset.status = evaluation.status;
  }
  if (notice) {
    notice.textContent = evaluation.message;
    notice.hidden = !evaluation.message;
  }
}

function getStatusLabel(status: EstimateEvaluation['status']): string {
  if (status === 'ready') return 'READY';
  if (status === 'attention') return 'CHECK';
  return 'INPUT NEEDED';
}

export function renderEmbroidery(ctx: RenderContext): void {
  renderCanvas(ctx.input);
  renderValues(ctx.calculation, ctx.ui);
  renderEvaluation(ctx.evaluation);
}

export function copyableSummary(ctx: RenderContext): string {
  if (!ctx.calculation) return ctx.ui.invalidMessage;
  return `${ctx.ui.resultLabel}: ${formatNumber(ctx.calculation.effectiveStitches)} ${ctx.ui.stitchesUnit}, ${formatMinutes(ctx.calculation.totalMinutes)}, ${ctx.calculation.basePrice.toFixed(2)} ${ctx.ui.priceUnit}`;
}
