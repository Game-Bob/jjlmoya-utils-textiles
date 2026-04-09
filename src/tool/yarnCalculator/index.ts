import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import YarnCalculatorComponent from './component.astro';
import YarnCalculatorSEO from './seo.astro';
import YarnCalculatorBibliography from './bibliography.astro';

import type { YarnCalculatorUI } from './ui';

export type YarnCalculatorLocaleContent = ToolLocaleContent<YarnCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const yarnCalculator: TextilesToolEntry<YarnCalculatorUI> = {
  id: 'yarn-calculator',
  icons: {
    bg: 'mdi:comma-circle',
    fg: 'mdi:counter',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { YarnCalculatorComponent, YarnCalculatorSEO, YarnCalculatorBibliography };

export const YARN_CALCULATOR_TOOL: ToolDefinition = {
  entry: yarnCalculator,
  Component: YarnCalculatorComponent,
  SEOComponent: YarnCalculatorSEO,
  BibliographyComponent: YarnCalculatorBibliography,
};
