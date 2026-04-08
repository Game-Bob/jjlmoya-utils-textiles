export { textilesCategory } from './category';
export { default as textilesCategorySEO } from './category/seo.astro';

export { FabricTruthComponent, FabricTruthSEO, FabricTruthBibliography } from './tool/fabricTruth';
export { LaundryGuideComponent, LaundryGuideSEO, LaundryGuideBibliography } from './tool/laundryGuide';

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

