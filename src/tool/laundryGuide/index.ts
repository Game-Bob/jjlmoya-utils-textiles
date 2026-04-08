import type { TextilesToolEntry, ToolDefinition } from '../../types';
import LaundryGuideComponent from './component.astro';
import LaundryGuideSEO from './seo.astro';
import LaundryGuideBibliography from './bibliography.astro';
import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const laundryGuide: TextilesToolEntry = {
  id: 'laundry-guide',
  icons: {
    bg: 'mdi:washing-machine',
    fg: 'mdi:water-check',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { LaundryGuideComponent, LaundryGuideSEO, LaundryGuideBibliography };

export const LAUNDRY_GUIDE_TOOL: ToolDefinition = {
  entry: laundryGuide,
  Component: LaundryGuideComponent,
  SEOComponent: LaundryGuideSEO,
  BibliographyComponent: LaundryGuideBibliography,
};
