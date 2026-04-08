import type { TextilesToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ClothingSizeConverterComponent from './component.astro';
import ClothingSizeConverterSEO from './seo.astro';
import ClothingSizeConverterBibliography from './bibliography.astro';

import type { ClothingSizeConverterUI } from './ui';

export type ClothingSizeConverterLocaleContent = ToolLocaleContent<ClothingSizeConverterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const clothingSizeConverter: TextilesToolEntry<ClothingSizeConverterUI> = {
  id: 'clothing-size-converter',
  icons: {
    bg: 'mdi:tshirt-crew',
    fg: 'mdi:ruler',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ClothingSizeConverterComponent, ClothingSizeConverterSEO, ClothingSizeConverterBibliography };

export const CLOTHING_SIZE_CONVERTER_TOOL: ToolDefinition = {
  entry: clothingSizeConverter,
  Component: ClothingSizeConverterComponent,
  SEOComponent: ClothingSizeConverterSEO,
  BibliographyComponent: ClothingSizeConverterBibliography,
};
