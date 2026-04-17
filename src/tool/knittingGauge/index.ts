import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import KnittingGaugeComponent from './component.astro';
import KnittingGaugeSEO from './seo.astro';
import KnittingGaugeBibliography from './bibliography.astro';

import type { KnittingGaugeUI } from './ui';

export type KnittingGaugeLocaleContent = ToolLocaleContent<KnittingGaugeUI>;

export const knittingGauge: TextilesToolEntry<KnittingGaugeUI> = {
  id: 'knitting-gauge-calculator',
  icons: {
    bg: 'mdi:ruler-square',
    fg: 'mdi:needle',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { KnittingGaugeComponent, KnittingGaugeSEO, KnittingGaugeBibliography };

export const KNITTING_GAUGE_TOOL: ToolDefinition = {
  entry: knittingGauge,
  Component: KnittingGaugeComponent,
  SEOComponent: KnittingGaugeSEO,
  BibliographyComponent: KnittingGaugeBibliography,
};
