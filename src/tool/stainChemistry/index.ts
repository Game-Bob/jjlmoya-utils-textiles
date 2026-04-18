export * from './entry';
export const STAIN_CHEMISTRY_TOOL: ToolDefinition = {
  entry: stainChemistry,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
