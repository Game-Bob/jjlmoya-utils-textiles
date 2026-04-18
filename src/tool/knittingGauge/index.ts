import { knittingGauge } from './entry';
export * from './entry';
export const KNITTING_GAUGE_TOOL: ToolDefinition = {
  entry: knittingGauge,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
