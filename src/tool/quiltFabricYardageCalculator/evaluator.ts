import type { YardageInputs, YardageResult } from './logic';

export interface YardageEvaluation {
  status: 'ready' | 'review';
  warning: 'partial-blocks' | 'narrow-fabric' | null;
}

export function evaluateYardage(inputs: YardageInputs, result: YardageResult): YardageEvaluation {
  if (result.hasPartialBlocks) return { status: 'review', warning: 'partial-blocks' };
  if (result.piecesAcross === 1 && result.cutSquareCm * 2 > inputs.fabricWidthCm) {
    return { status: 'review', warning: 'narrow-fabric' };
  }
  return { status: 'ready', warning: null };
}
