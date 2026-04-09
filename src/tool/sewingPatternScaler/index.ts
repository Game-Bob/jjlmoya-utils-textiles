import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SewingPatternScalerComponent from './component.astro';
import SewingPatternScalerSEO from './seo.astro';
import SewingPatternScalerBibliography from './bibliography.astro';

import type { SewingPatternScalerUI } from './ui';

export type SewingPatternScalerLocaleContent = ToolLocaleContent<SewingPatternScalerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const sewingPatternScaler: TextilesToolEntry<SewingPatternScalerUI> = {
  id: 'sewing-pattern-scaler',
  icons: {
    bg: 'mdi:human-female',
    fg: 'mdi:checkerboard',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SewingPatternScalerComponent, SewingPatternScalerSEO, SewingPatternScalerBibliography };

export const SEWING_PATTERN_SCALER_TOOL: ToolDefinition = {
  entry: sewingPatternScaler,
  Component: SewingPatternScalerComponent,
  SEOComponent: SewingPatternScalerSEO,
  BibliographyComponent: SewingPatternScalerBibliography,
};
