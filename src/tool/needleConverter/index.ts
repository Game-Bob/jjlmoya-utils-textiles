export * from './entry';
export const NEEDLE_CONVERTER_TOOL: ToolDefinition = {
  entry: needleConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
