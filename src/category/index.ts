import type { TextilesCategoryEntry } from '../types';
import { FABRIC_TRUTH_TOOL } from '../tool/fabricTruth/entry';
import { LAUNDRY_GUIDE_TOOL } from '../tool/laundryGuide/entry';
import { STAIN_CHEMISTRY_TOOL } from '../tool/stainChemistry/entry';
import { BURN_TEST_TOOL } from '../tool/burnTest/entry';
import { FIBER_PREP_TOOL } from '../tool/fiberPrep/entry';
import { SHOE_SIZE_CONVERTER_TOOL } from '../tool/shoeSizeConverter/entry';
import { CLOTHING_SIZE_CONVERTER_TOOL } from '../tool/clothingSizeConverter/entry';
import { KNITTING_GAUGE_TOOL } from '../tool/knittingGauge/entry';
import { FABRIC_PROJECT_CALCULATOR_TOOL } from '../tool/fabricProjectCalculator/entry';
import { SEWING_PATTERN_SCALER_TOOL } from '../tool/sewingPatternScaler/entry';
import { NEEDLE_CONVERTER_TOOL } from '../tool/needleConverter/entry';
import { YARN_CALCULATOR_TOOL } from '../tool/yarnCalculator/entry';

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

