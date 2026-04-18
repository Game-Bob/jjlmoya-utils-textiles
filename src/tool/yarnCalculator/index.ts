export * from './entry';
export const YARN_CALCULATOR_TOOL: ToolDefinition = {
  entry: yarnCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
