import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import BurnTestComponent from './component.astro';
import BurnTestSEO from './seo.astro';
import BurnTestBibliography from './bibliography.astro';

import type { BurnTestUI } from './ui';

export type BurnTestLocaleContent = ToolLocaleContent<BurnTestUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const burnTest: TextilesToolEntry<BurnTestUI> = {
  id: 'burn-test',
  icons: {
    bg: 'mdi:fire',
    fg: 'mdi:test-tube',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { BurnTestComponent, BurnTestSEO, BurnTestBibliography };

export const BURN_TEST_TOOL: ToolDefinition = {
  entry: burnTest,
  Component: BurnTestComponent,
  SEOComponent: BurnTestSEO,
  BibliographyComponent: BurnTestBibliography,
};
