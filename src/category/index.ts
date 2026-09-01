import type { TextilesCategoryEntry } from '../types';
import { fabricTruth } from '../tool/fabricTruth/entry';
import { laundryGuide } from '../tool/laundryGuide/entry';
import { stainChemistry } from '../tool/stainChemistry/entry';
import { burnTest } from '../tool/burnTest/entry';
import { fiberPrep } from '../tool/fiberPrep/entry';
import { shoeSizeConverter } from '../tool/shoeSizeConverter/entry';
import { clothingSizeConverter } from '../tool/clothingSizeConverter/entry';
import { knittingGauge } from '../tool/knittingGauge/entry';
import { fabricProjectCalculator } from '../tool/fabricProjectCalculator/entry';
import { sewingPatternScaler } from '../tool/sewingPatternScaler/entry';
import { needleConverter } from '../tool/needleConverter/entry';
import { yarnCalculator } from '../tool/yarnCalculator/entry';
import { embroideryStitchPricingEstimator } from '../tool/embroideryStitchPricingEstimator/entry';
import { quiltBindingCalculator } from '../tool/quiltBindingCalculator/entry';

export const textilesCategory: TextilesCategoryEntry = {
  icon: 'mdi:texture',
  tools: [
    fabricTruth,
    laundryGuide,
    stainChemistry,
    burnTest,
    fiberPrep,
    shoeSizeConverter,
    clothingSizeConverter,
    knittingGauge,
    fabricProjectCalculator,
    sewingPatternScaler,
    needleConverter,
    yarnCalculator,
    embroideryStitchPricingEstimator,
    quiltBindingCalculator,
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
