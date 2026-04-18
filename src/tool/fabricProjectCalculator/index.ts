import { fabricProjectCalculator } from './entry';
export * from './entry';
export const FABRIC_PROJECT_CALCULATOR_TOOL: ToolDefinition = {
  entry: fabricProjectCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
