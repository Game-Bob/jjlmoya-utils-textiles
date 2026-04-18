export * from './entry';
export const CLOTHING_SIZE_CONVERTER_TOOL: ToolDefinition = {
  entry: clothingSizeConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
