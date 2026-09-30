import { convertCmToYards, convertLengthFromCm, type UnitSystem, type YardageInputs, type YardageResult } from './logic';

export function formatLength(valueCm: number, unit: UnitSystem, locale = 'en-US'): string {
  const value = convertLengthFromCm(valueCm, unit);
  return new Intl.NumberFormat(locale, { maximumFractionDigits: unit === 'imperial' ? 2 : 1 }).format(value);
}

export function formatYards(valueCm: number, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(convertCmToYards(valueCm));
}

interface QuiltSceneGeometry {
  columns: number;
  rows: number;
  cellSize: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

function quiltGeometry(result: YardageResult): QuiltSceneGeometry {
  const visibleColumns = Math.min(result.columns, 9);
  const visibleRows = Math.min(result.rows, 7);
  const cellSize = Math.min(22, 150 / visibleColumns, 128 / visibleRows);
  const width = visibleColumns * cellSize;
  const height = visibleRows * cellSize;
  return {
    columns: visibleColumns,
    rows: visibleRows,
    cellSize,
    x: 117 - width / 2,
    y: 103 - height / 2,
    width,
    height,
  };
}

function patchCells(geometry: QuiltSceneGeometry): string {
  return Array.from({ length: geometry.columns * geometry.rows }, (_, index) => {
    const x = geometry.x + (index % geometry.columns) * geometry.cellSize;
    const y = geometry.y + Math.floor(index / geometry.columns) * geometry.cellSize;
    const tone = (index + Math.floor(index / geometry.columns)) % 4;
    return `<rect class="qy-patch qy-patch-${tone}" x="${x}" y="${y}" width="${geometry.cellSize - 1}" height="${geometry.cellSize - 1}" rx="1" />`;
  }).join('');
}

function backingPanels(result: YardageResult): string {
  const count = Math.min(result.backing.panels, 5);
  return Array.from({ length: count }, (_, index) => {
    const x = 232 + index * 18;
    return `<rect class="qy-backing-panel" x="${x}" y="55" width="16" height="102" rx="2" />`;
  }).join('');
}

export function renderIdleScene(): string {
  return '<svg viewBox="0 0 350 220" role="img" aria-hidden="true"><rect class="qy-scene-paper" x="8" y="8" width="334" height="204" rx="22" /><rect class="qy-idle-quilt" x="48" y="42" width="132" height="132" rx="6" /><path class="qy-idle-roll" d="M228 48h64v118h-64z" /></svg>';
}

export function renderYardageScene(inputs: YardageInputs, result: YardageResult, unit: UnitSystem): string {
  const topLabel = `${formatYards(result.topCutLengthCm)} yd top`;
  const backLabel = `${formatYards(result.backing.cutLengthCm)} yd backing`;
  const sizeLabel = `${formatLength(inputs.quiltWidthCm, unit)} x ${formatLength(inputs.quiltLengthCm, unit)}`;
  const quilt = quiltGeometry(result);
  return `<svg viewBox="0 0 350 220" role="img" aria-label="${topLabel}, ${backLabel}"><rect class="qy-scene-paper" x="8" y="8" width="334" height="204" rx="22" /><g>${patchCells(quilt)}</g><rect class="qy-quilt-outline" x="${quilt.x - 8}" y="${quilt.y - 8}" width="${quilt.width + 16}" height="${quilt.height + 16}" rx="7" /><text class="qy-scene-title" x="117" y="196">${result.columns} x ${result.rows} blocks</text><text class="qy-scene-caption" x="117" y="208">${sizeLabel}</text><g>${backingPanels(result)}</g><path class="qy-roll-edge" d="M232 47h${Math.min(result.backing.panels, 5) * 18 - 2}" /><text class="qy-scene-title" x="277" y="184">${result.backing.panels} backing panel${result.backing.panels === 1 ? '' : 's'}</text><text class="qy-scene-caption" x="277" y="198">${backLabel}</text></svg>`;
}

export function resultSummary(result: YardageResult): string {
  return `${result.totalBlocks} blocks, ${formatYards(result.topCutLengthCm)} yd for the top, ${formatYards(result.backing.cutLengthCm)} yd for the backing, ${formatYards(result.totalCutLengthCm)} yd total.`;
}
