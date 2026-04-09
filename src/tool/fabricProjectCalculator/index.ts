import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import FabricProjectCalculatorComponent from './component.astro';
import FabricProjectCalculatorSEO from './seo.astro';
import FabricProjectCalculatorBibliography from './bibliography.astro';

import type { FabricProjectCalculatorUI } from './ui';

export type FabricProjectCalculatorLocaleContent = ToolLocaleContent<FabricProjectCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const fabricProjectCalculator: TextilesToolEntry<FabricProjectCalculatorUI> = {
  id: 'fabric-project-calculator',
  icons: {
    bg: 'mdi:content-cut',
    fg: 'mdi:tape-measure',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { FabricProjectCalculatorComponent, FabricProjectCalculatorSEO, FabricProjectCalculatorBibliography };

export const FABRIC_PROJECT_CALCULATOR_TOOL: ToolDefinition = {
  entry: fabricProjectCalculator,
  Component: FabricProjectCalculatorComponent,
  SEOComponent: FabricProjectCalculatorSEO,
  BibliographyComponent: FabricProjectCalculatorBibliography,
};
