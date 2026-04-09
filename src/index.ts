export { textilesCategory } from './category';
export { default as textilesCategorySEO } from './category/seo.astro';

export { FabricTruthComponent, FabricTruthSEO, FabricTruthBibliography } from './tool/fabricTruth';
export { LaundryGuideComponent, LaundryGuideSEO, LaundryGuideBibliography } from './tool/laundryGuide';
export { StainChemistryComponent, StainChemistrySEO, StainChemistryBibliography } from './tool/stainChemistry';
export { BurnTestComponent, BurnTestSEO, BurnTestBibliography } from './tool/burnTest';
export { FiberPrepComponent, FiberPrepSEO, FiberPrepBibliography } from './tool/fiberPrep';
export { ShoeSizeConverterComponent, ShoeSizeConverterSEO, ShoeSizeConverterBibliography } from './tool/shoeSizeConverter';
export { ClothingSizeConverterComponent, ClothingSizeConverterSEO, ClothingSizeConverterBibliography } from './tool/clothingSizeConverter';
export { KnittingGaugeComponent, KnittingGaugeSEO, KnittingGaugeBibliography } from './tool/knittingGauge';
export { FabricProjectCalculatorComponent, FabricProjectCalculatorSEO, FabricProjectCalculatorBibliography } from './tool/fabricProjectCalculator';
export { SewingPatternScalerComponent, SewingPatternScalerSEO, SewingPatternScalerBibliography } from './tool/sewingPatternScaler';
export { NeedleConverterComponent, NeedleConverterSEO, NeedleConverterBibliography } from './tool/needleConverter';
export { YarnCalculatorComponent, YarnCalculatorSEO, YarnCalculatorBibliography } from './tool/yarnCalculator';

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

export { ALL_TOOLS } from './tools';

