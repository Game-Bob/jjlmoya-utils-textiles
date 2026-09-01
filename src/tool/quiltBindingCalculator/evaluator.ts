import type { BindingResult } from './logic';

export interface BindingEvaluation {
  status: 'ready' | 'review';
  warning: 'large-waste' | 'small-surplus' | null;
}

export function evaluateBinding(result: BindingResult): BindingEvaluation {
  const wasteRatio = result.wasteReserveCm / result.requiredBindingCm;
  if (wasteRatio > 0.13) return { status: 'review', warning: 'large-waste' };
  if (result.surplusCm < result.joinLossCm) return { status: 'review', warning: 'small-surplus' };
  return { status: 'ready', warning: null };
}
