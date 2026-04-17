import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import FabricTruthComponent from './component.astro';
import FabricTruthSEO from './seo.astro';
import FabricTruthBibliography from './bibliography.astro';

import type { FabricTruthUI } from './ui';

export type FabricTruthLocaleContent = ToolLocaleContent<FabricTruthUI>;

export const fabricTruth: TextilesToolEntry<FabricTruthUI> = {
  id: 'fabric-truth',
  icons: {
    bg: 'mdi:tag-text-outline',
    fg: 'mdi:microscope',
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

export { FabricTruthComponent, FabricTruthSEO, FabricTruthBibliography };

export const FABRIC_TRUTH_TOOL: ToolDefinition = {
  entry: fabricTruth,
  Component: FabricTruthComponent,
  SEOComponent: FabricTruthSEO,
  BibliographyComponent: FabricTruthBibliography,
};
