import { laundryGuide } from './entry';
export * from './entry';
export const LAUNDRY_GUIDE_TOOL: ToolDefinition = {
  entry: laundryGuide,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
