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

type VerdictMap = Record<string, { label: string; description: string }>;

function safeVerdict(key: string, verdictData: VerdictMap, color: string): Verdict {
  return {
    label: verdictData[key]?.label ?? '!',
    description: verdictData[key]?.description ?? '',
    color,
  };
}

export class FabricEngine {
  private static getPercentage(composition: CompositionRow[], filter: (r: CompositionRow) => boolean): number {
    return composition.filter(filter).reduce((acc, r) => acc + r.percentage, 0);
  }

  static calculateVerdict(
    composition: CompositionRow[],
    fiberData: Record<string, TextileFiber> = {},
    verdictData: VerdictMap = {},
  ): Verdict {
    const total = composition.reduce((acc, row) => acc + row.percentage, 0);
    if (total === 0) return { label: '...', description: '...', color: 'gray' };

    const polyAcrylic = this.getPercentage(composition, (r) => r.fiberId === 'polyester' || r.fiberId === 'acrylic');
    const viscoseModal = this.getPercentage(composition, (r) => r.fiberId === 'viscose' || r.fiberId === 'modal');
    const natural = this.getPercentage(composition, (r) => ['linen', 'cotton', 'hemp'].includes(r.fiberId));
    const noble = this.getPercentage(composition, (r) => !!fiberData[r.fiberId]?.isNoble);
    const synthetic = this.getPercentage(composition, (r) => fiberData[r.fiberId]?.family === 'synthetic');

    const rules: Array<[boolean, string, string]> = [
      [polyAcrylic > 50, 'plasticy', 'red'],
      [noble > 0 && noble < 10, 'hook', 'amber'],
      [viscoseModal > 30, 'fragile', 'yellow'],
      [natural > 70, 'natural', 'emerald'],
      [synthetic > 80, 'technical', 'red'],
      [noble >= 50, 'luxury', 'indigo'],
    ];

    const match = rules.find(([cond]) => cond);
    return match ? safeVerdict(match[1], verdictData, match[2]) : safeVerdict('balanced', verdictData, 'blue');
  }

  static getCareWarning(composition: CompositionRow[], careWarnings: Record<string, string> = {}): string {
    if (composition.length === 0) return '';

    const hasAny = (ids: string[]) => composition.some((c) => ids.includes(c.fiberId));
    const lookups: Array<[boolean, string]> = [
      [hasAny(['silk', 'cashmere']), 'delicate'],
      [hasAny(['wool', 'alpaca', 'merino', 'mohair', 'angora']), 'wool'],
      [hasAny(['linen']), 'linen'],
      [hasAny(['viscose', 'modal']), 'semisynthetic'],
    ];

    const match = lookups.find(([cond]) => cond);
    return match ? (careWarnings[match[1]] ?? '') : (careWarnings.standard ?? '');
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
