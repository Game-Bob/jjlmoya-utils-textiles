import type { EmbroideryCalculation } from './logic';

export type EstimateStatus = 'ready' | 'attention' | 'invalid';

export interface EstimateEvaluation {
  status: EstimateStatus;
  message: string;
}

export function evaluateEstimate(
  calculation: EmbroideryCalculation | null,
  labels: { invalid: string; highVolume: string; longRun: string },
): EstimateEvaluation {
  if (!calculation) return { status: 'invalid', message: labels.invalid };
  if (calculation.effectiveStitches > 1000000) {
    return { status: 'attention', message: labels.highVolume };
  }
  if (calculation.totalMinutes > 120) {
    return { status: 'attention', message: labels.longRun };
  }
  return { status: 'ready', message: '' };
}
