import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import StainChemistryComponent from './component.astro';
import StainChemistrySEO from './seo.astro';
import StainChemistryBibliography from './bibliography.astro';

import type { StainChemistryUI } from './ui';

export type StainChemistryLocaleContent = ToolLocaleContent<StainChemistryUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const stainChemistry: TextilesToolEntry<StainChemistryUI> = {
  id: 'stain-chemistry',
  icons: {
    bg: 'mdi:test-tube',
    fg: 'mdi:iv-bag',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { StainChemistryComponent, StainChemistrySEO, StainChemistryBibliography };

export const STAIN_CHEMISTRY_TOOL: ToolDefinition = {
  entry: stainChemistry,
  Component: StainChemistryComponent,
  SEOComponent: StainChemistrySEO,
  BibliographyComponent: StainChemistryBibliography,
};
