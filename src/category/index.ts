import type { TextilesCategoryEntry } from '../types';
import { FABRIC_TRUTH_TOOL } from '../tool/fabricTruth';
import { LAUNDRY_GUIDE_TOOL } from '../tool/laundryGuide';
import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const textilesCategory: TextilesCategoryEntry = {
  icon: 'mdi:texture',
  tools: [FABRIC_TRUTH_TOOL, LAUNDRY_GUIDE_TOOL],
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

