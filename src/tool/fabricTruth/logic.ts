export interface TextileFiber {
  name: string;
  family: 'natural' | 'synthetic' | 'artificial';
  breathability: number;
  durability: number;
  warmth: number;
  isNoble?: boolean;
}

export interface CompositionRow {
  fiberId: string;
  percentage: number;
}

export interface Verdict {
  label: string;
  description: string;
  color: string;
}

export class FabricEngine {
  private static getPercentage(composition: CompositionRow[], filter: (r: CompositionRow) => boolean): number {
    return composition.filter(filter).reduce((acc, r) => acc + r.percentage, 0);
  }

  static calculateVerdict(
    composition: CompositionRow[], 
    fiberData: Record<string, TextileFiber> = {},
    verdictData: Record<string, { label: string; description: string }> = {}
  ): Verdict {
    const total = composition.reduce((acc, row) => acc + row.percentage, 0);
    if (total === 0) return { label: '...', description: '...', color: 'gray' };

    const polyAcrylic = this.getPercentage(composition, (r) => r.fiberId === 'polyester' || r.fiberId === 'acrylic');
    const viscoseModal = this.getPercentage(composition, (r) => r.fiberId === 'viscose' || r.fiberId === 'modal');
    const natural = this.getPercentage(composition, (r) => ['linen', 'cotton', 'hemp'].includes(r.fiberId));
    const noble = this.getPercentage(composition, (r) => !!fiberData[r.fiberId]?.isNoble);
    const synthetic = this.getPercentage(composition, (r) => fiberData[r.fiberId]?.family === 'synthetic');

    if (polyAcrylic > 50) return { label: verdictData.plasticy?.label || '!', description: verdictData.plasticy?.description || '', color: 'red' };
    if (noble > 0 && noble < 10) return { label: verdictData.hook?.label || '!', description: verdictData.hook?.description || '', color: 'amber' };
    if (viscoseModal > 30) return { label: verdictData.fragile?.label || '!', description: verdictData.fragile?.description || '', color: 'yellow' };
    if (natural > 70) return { label: verdictData.natural?.label || '!', description: verdictData.natural?.description || '', color: 'emerald' };
    if (synthetic > 80) return { label: verdictData.technical?.label || '!', description: verdictData.technical?.description || '', color: 'red' };
    if (noble >= 50) return { label: verdictData.luxury?.label || '!', description: verdictData.luxury?.description || '', color: 'indigo' };

    return { label: verdictData.balanced?.label || '!', description: verdictData.balanced?.description || '', color: 'blue' };
  }

  static getCareWarning(composition: CompositionRow[], careWarnings: Record<string, string> = {}): string {
    const hasAny = (ids: string[]) => composition.some((c) => ids.includes(c.fiberId));
    if (composition.length === 0) return '';
    if (hasAny(['silk', 'cashmere'])) return careWarnings.delicate || '';
    if (hasAny(['wool', 'alpaca', 'merino', 'mohair', 'angora'])) return careWarnings.wool || '';
    if (composition.some((c) => c.fiberId === 'linen')) return careWarnings.linen || '';
    if (hasAny(['viscose', 'modal'])) return careWarnings.semisynthetic || '';
    return careWarnings.standard || '';
  }

  static getAverages(composition: CompositionRow[], fiberData: Record<string, TextileFiber> = {}) {
    let b = 0, d = 0, w = 0, total = 0;
    composition.forEach((r) => {
      const f = fiberData[r.fiberId];
      if (f) {
        b += f.breathability * r.percentage;
        d += f.durability * r.percentage;
        w += f.warmth * r.percentage;
        total += r.percentage;
      }
    });
    return total === 0 ? { b: 0, d: 0, w: 0 } : { b: b / total, d: d / total, w: w / total };
  }
}
