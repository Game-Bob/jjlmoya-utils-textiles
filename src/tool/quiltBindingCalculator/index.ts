import type { ToolDefinition } from '../../types';
import { quiltBindingCalculator } from './entry';

export * from './entry';

export const QUILT_BINDING_CALCULATOR_TOOL: ToolDefinition = {
  entry: quiltBindingCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
