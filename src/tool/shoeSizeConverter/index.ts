import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ShoeSizeConverterComponent from './component.astro';
import ShoeSizeConverterSEO from './seo.astro';
import ShoeSizeConverterBibliography from './bibliography.astro';

import type { ShoeSizeConverterUI } from './ui';

export type ShoeSizeConverterLocaleContent = ToolLocaleContent<ShoeSizeConverterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const shoeSizeConverter: TextilesToolEntry<ShoeSizeConverterUI> = {
  id: 'shoe-size-converter',
  icons: {
    bg: 'mdi:shoe-heel',
    fg: 'mdi:ruler',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ShoeSizeConverterComponent, ShoeSizeConverterSEO, ShoeSizeConverterBibliography };

export const SHOE_SIZE_CONVERTER_TOOL: ToolDefinition = {
  entry: shoeSizeConverter,
  Component: ShoeSizeConverterComponent,
  SEOComponent: ShoeSizeConverterSEO,
  BibliographyComponent: ShoeSizeConverterBibliography,
};
