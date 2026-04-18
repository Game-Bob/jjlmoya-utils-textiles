import { burnTest } from './entry';
export * from './entry';
export const BURN_TEST_TOOL: ToolDefinition = {
  entry: burnTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
