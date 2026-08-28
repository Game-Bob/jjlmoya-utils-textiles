import type { ToolDefinition } from '../../types';
import { embroideryStitchPricingEstimator } from './entry';

export * from './entry';

export const EMBROIDERY_STITCH_PRICING_ESTIMATOR_TOOL: ToolDefinition = {
  entry: embroideryStitchPricingEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
