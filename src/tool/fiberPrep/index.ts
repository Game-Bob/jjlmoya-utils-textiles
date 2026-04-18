import { fiberPrep } from './entry';
export * from './entry';
export const FIBER_PREP_TOOL: ToolDefinition = {
  entry: fiberPrep,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
