import type { ToolDefinition } from '../../types';
import { quiltFabricYardageCalculator } from './entry';

export * from './entry';

export const QUILT_FABRIC_YARDAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: quiltFabricYardageCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
