import type { StainChemistryFiber } from './ui';

export type FiberType = 'natural' | 'synthetic' | 'delicate';

export function getFiberType(fiberId: string, fiberData: Record<string, StainChemistryFiber>): FiberType {
  const fiber = fiberData[fiberId];
  if (!fiber) return 'natural';
  if (fiber.family === 'synthetic') return 'synthetic';
  if (fiber.isNoble) return 'delicate';
  return 'natural';
}
