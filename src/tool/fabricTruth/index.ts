import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import FabricTruthComponent from './component.astro';
import FabricTruthSEO from './seo.astro';
import FabricTruthBibliography from './bibliography.astro';

import type { FabricTruthUI } from './ui';

export type FabricTruthLocaleContent = ToolLocaleContent<FabricTruthUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const fabricTruth: TextilesToolEntry<FabricTruthUI> = {
  id: 'fabric-truth',
  icons: {
    bg: 'mdi:tag-text-outline',
    fg: 'mdi:microscope',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { FabricTruthComponent, FabricTruthSEO, FabricTruthBibliography };

export const FABRIC_TRUTH_TOOL: ToolDefinition = {
  entry: fabricTruth,
  Component: FabricTruthComponent,
  SEOComponent: FabricTruthSEO,
  BibliographyComponent: FabricTruthBibliography,
};
