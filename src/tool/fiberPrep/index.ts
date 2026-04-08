import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import FiberPrepComponent from './component.astro';
import FiberPrepSEO from './seo.astro';
import FiberPrepBibliography from './bibliography.astro';

import type { FiberPrepUI } from './ui';

export type FiberPrepLocaleContent = ToolLocaleContent<FiberPrepUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const fiberPrep: TextilesToolEntry<FiberPrepUI> = {
  id: 'fiber-prep',
  icons: {
    bg: 'mdi:beaker-outline',
    fg: 'mdi:molecule',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { FiberPrepComponent, FiberPrepSEO, FiberPrepBibliography };

export const FIBER_PREP_TOOL: ToolDefinition = {
  entry: fiberPrep,
  Component: FiberPrepComponent,
  SEOComponent: FiberPrepSEO,
  BibliographyComponent: FiberPrepBibliography,
};
