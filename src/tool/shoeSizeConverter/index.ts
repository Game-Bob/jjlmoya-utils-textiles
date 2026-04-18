import { shoeSizeConverter } from './entry';
export * from './entry';
export const SHOE_SIZE_CONVERTER_TOOL: ToolDefinition = {
  entry: shoeSizeConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
