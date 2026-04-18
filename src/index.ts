export { textilesCategory } from './category';
export { default as textilesCategorySEO } from './category/seo.astro';

export { FabricTruthComponent, FabricTruthSEO, FabricTruthBibliography, FABRIC_TRUTH_TOOL } from './tool/fabricTruth';
export { LaundryGuideComponent, LaundryGuideSEO, LaundryGuideBibliography, LAUNDRY_GUIDE_TOOL } from './tool/laundryGuide';
export { StainChemistryComponent, StainChemistrySEO, StainChemistryBibliography, STAIN_CHEMISTRY_TOOL } from './tool/stainChemistry';
export { BurnTestComponent, BurnTestSEO, BurnTestBibliography, BURN_TEST_TOOL } from './tool/burnTest';
export { FiberPrepComponent, FiberPrepSEO, FiberPrepBibliography, FIBER_PREP_TOOL } from './tool/fiberPrep';
export { ShoeSizeConverterComponent, ShoeSizeConverterSEO, ShoeSizeConverterBibliography, SHOE_SIZE_CONVERTER_TOOL } from './tool/shoeSizeConverter';
export { ClothingSizeConverterComponent, ClothingSizeConverterSEO, ClothingSizeConverterBibliography, CLOTHING_SIZE_CONVERTER_TOOL } from './tool/clothingSizeConverter';
export { KnittingGaugeComponent, KnittingGaugeSEO, KnittingGaugeBibliography, KNITTING_GAUGE_TOOL } from './tool/knittingGauge';
export { FabricProjectCalculatorComponent, FabricProjectCalculatorSEO, FabricProjectCalculatorBibliography, FABRIC_PROJECT_CALCULATOR_TOOL } from './tool/fabricProjectCalculator';
export { SewingPatternScalerComponent, SewingPatternScalerSEO, SewingPatternScalerBibliography, SEWING_PATTERN_SCALER_TOOL } from './tool/sewingPatternScaler';
export { NeedleConverterComponent, NeedleConverterSEO, NeedleConverterBibliography, NEEDLE_CONVERTER_TOOL } from './tool/needleConverter';
export { YarnCalculatorComponent, YarnCalculatorSEO, YarnCalculatorBibliography, YARN_CALCULATOR_TOOL } from './tool/yarnCalculator';

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

