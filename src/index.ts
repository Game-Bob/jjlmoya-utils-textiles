export { textilesCategory } from './category';
export const textilesCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export { FABRIC_TRUTH_TOOL } from './tool/fabricTruth';
export { LAUNDRY_GUIDE_TOOL } from './tool/laundryGuide';
export { STAIN_CHEMISTRY_TOOL } from './tool/stainChemistry';
export { BURN_TEST_TOOL } from './tool/burnTest';
export { FIBER_PREP_TOOL } from './tool/fiberPrep';
export { SHOE_SIZE_CONVERTER_TOOL } from './tool/shoeSizeConverter';
export { CLOTHING_SIZE_CONVERTER_TOOL } from './tool/clothingSizeConverter';
export { KNITTING_GAUGE_TOOL } from './tool/knittingGauge';
export { FABRIC_PROJECT_CALCULATOR_TOOL } from './tool/fabricProjectCalculator';
export { SEWING_PATTERN_SCALER_TOOL } from './tool/sewingPatternScaler';
export { NEEDLE_CONVERTER_TOOL } from './tool/needleConverter';
export { YARN_CALCULATOR_TOOL } from './tool/yarnCalculator';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  TextilesToolEntry,
  TextilesCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

