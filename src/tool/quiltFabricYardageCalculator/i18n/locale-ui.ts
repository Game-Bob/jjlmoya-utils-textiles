import type { QuiltFabricYardageCalculatorUI } from '../ui';

const uiKeys = [
  'unitLabel', 'metricLabel', 'imperialLabel', 'stageLabel', 'controlsLabel', 'presetLabel', 'customPreset',
  'cribPreset', 'throwPreset', 'twinPreset', 'queenPreset', 'kingPreset', 'quiltWidthLabel', 'quiltLengthLabel',
  'blockSizeLabel', 'fabricWidthLabel', 'seamAllowanceLabel', 'backingExtraLabel', 'wasteLabel', 'widthHint',
  'lengthHint', 'blockHint', 'fabricHint', 'seamHint', 'backingHint', 'wasteFive', 'wasteTen', 'wasteFifteen',
  'resultLabel', 'emptyResult', 'blocksLabel', 'gridLabel', 'cutSquareLabel', 'piecesAcrossLabel',
  'topYardageLabel', 'backingYardageLabel', 'backingPanelsLabel', 'backingLayoutLabel', 'lengthwiseLabel',
  'crosswiseLabel', 'totalYardageLabel', 'readyBadge', 'reviewBadge', 'warningPartialBlocks',
  'warningNarrowFabric', 'invalidMessage', 'reset', 'copyPlan', 'copied', 'formulaTitle', 'formulaText',
  'boundaryTitle', 'boundaryText', 'canvasAlt',
] as const;

export function makeUi(values: string[]): QuiltFabricYardageCalculatorUI {
  return Object.fromEntries(uiKeys.map((key, index) => [key, values[index]])) as unknown as QuiltFabricYardageCalculatorUI;
}
