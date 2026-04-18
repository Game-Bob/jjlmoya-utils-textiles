import { fabricTruth } from './entry';
export * from './entry';
export const FABRIC_TRUTH_TOOL: ToolDefinition = {
  entry: fabricTruth,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
