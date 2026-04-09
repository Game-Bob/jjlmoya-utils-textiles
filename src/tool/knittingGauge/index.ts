import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import KnittingGaugeComponent from './component.astro';
import KnittingGaugeSEO from './seo.astro';
import KnittingGaugeBibliography from './bibliography.astro';

import type { KnittingGaugeUI } from './ui';

export type KnittingGaugeLocaleContent = ToolLocaleContent<KnittingGaugeUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const knittingGauge: TextilesToolEntry<KnittingGaugeUI> = {
  id: 'knitting-gauge-calculator',
  icons: {
    bg: 'mdi:ruler-square',
    fg: 'mdi:needle',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { KnittingGaugeComponent, KnittingGaugeSEO, KnittingGaugeBibliography };

export const KNITTING_GAUGE_TOOL: ToolDefinition = {
  entry: knittingGauge,
  Component: KnittingGaugeComponent,
  SEOComponent: KnittingGaugeSEO,
  BibliographyComponent: KnittingGaugeBibliography,
};
