export * from './entry';
export const SEWING_PATTERN_SCALER_TOOL: ToolDefinition = {
  entry: sewingPatternScaler,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
