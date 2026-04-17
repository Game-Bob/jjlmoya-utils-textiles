import type { TextilesCategoryEntry } from '../types';
import { FABRIC_TRUTH_TOOL } from '../tool/fabricTruth';
import { LAUNDRY_GUIDE_TOOL } from '../tool/laundryGuide';
import { STAIN_CHEMISTRY_TOOL } from '../tool/stainChemistry';
import { BURN_TEST_TOOL } from '../tool/burnTest';
import { FIBER_PREP_TOOL } from '../tool/fiberPrep';
import { SHOE_SIZE_CONVERTER_TOOL } from '../tool/shoeSizeConverter';
import { CLOTHING_SIZE_CONVERTER_TOOL } from '../tool/clothingSizeConverter';
import { KNITTING_GAUGE_TOOL } from '../tool/knittingGauge';
import { FABRIC_PROJECT_CALCULATOR_TOOL } from '../tool/fabricProjectCalculator';
import { SEWING_PATTERN_SCALER_TOOL } from '../tool/sewingPatternScaler';
import { NEEDLE_CONVERTER_TOOL } from '../tool/needleConverter';
import { YARN_CALCULATOR_TOOL } from '../tool/yarnCalculator';

export const textilesCategory: TextilesCategoryEntry = {
  icon: 'mdi:texture',
  tools: [
    FABRIC_TRUTH_TOOL,
    LAUNDRY_GUIDE_TOOL,
    STAIN_CHEMISTRY_TOOL,
    BURN_TEST_TOOL,
    FIBER_PREP_TOOL,
    SHOE_SIZE_CONVERTER_TOOL,
    CLOTHING_SIZE_CONVERTER_TOOL,
    KNITTING_GAUGE_TOOL,
    FABRIC_PROJECT_CALCULATOR_TOOL,
    SEWING_PATTERN_SCALER_TOOL,
    NEEDLE_CONVERTER_TOOL,
    YARN_CALCULATOR_TOOL,
  ],
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

