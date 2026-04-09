import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import NeedleConverterComponent from './component.astro';
import NeedleConverterSEO from './seo.astro';
import NeedleConverterBibliography from './bibliography.astro';

import type { NeedleConverterUI } from './ui';

export type NeedleConverterLocaleContent = ToolLocaleContent<NeedleConverterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const needleConverter: TextilesToolEntry<NeedleConverterUI> = {
  id: 'needle-converter',
  icons: {
    bg: 'mdi:needle',
    fg: 'mdi:swap-horizontal',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { NeedleConverterComponent, NeedleConverterSEO, NeedleConverterBibliography };

export const NEEDLE_CONVERTER_TOOL: ToolDefinition = {
  entry: needleConverter,
  Component: NeedleConverterComponent,
  SEOComponent: NeedleConverterSEO,
  BibliographyComponent: NeedleConverterBibliography,
};
