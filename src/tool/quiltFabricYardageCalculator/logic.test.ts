import { describe, expect, it } from 'vitest';
import { calculateYardage, convertCmToYards, convertLengthFromCm, convertLengthToCm, type YardageInputs } from './logic';

const example: YardageInputs = {
  quiltWidthCm: 150,
  quiltLengthCm: 200,
  blockSizeCm: 25,
  fabricWidthCm: 110,
  seamAllowanceCm: 0.7,
  backingExtraCm: 10,
  wastePercent: 0.1,
};

describe('quilt fabric yardage calculation', () => {
  it('calculates block cutting passes and top yardage', () => {
    const result = calculateYardage(example);
    expect(result).toMatchObject({ valid: true, columns: 6, rows: 8, totalBlocks: 48, piecesAcross: 4, topPasses: 12 });
    if (result.valid) expect(result.topCutLengthCm).toBeCloseTo(348.48, 4);
  });

  it('chooses the backing orientation with less fabric', () => {
    const result = calculateYardage(example);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.backing.orientation).toBe('lengthwise');
      expect(result.backing.panels).toBe(2);
      expect(result.backing.cutLengthCm).toBe(440);
    }
  });

  it('flags dimensions that need partial edge blocks', () => {
    const result = calculateYardage({ ...example, quiltWidthCm: 151 });
    expect(result.valid && result.hasPartialBlocks).toBe(true);
  });

  it('rejects fabric narrower than one cut square', () => {
    expect(calculateYardage({ ...example, fabricWidthCm: 20 })).toEqual({ valid: false, errors: ['fabricWidth'] });
  });

  it('converts physical units and yards', () => {
    expect(convertLengthToCm(1, 'imperial')).toBe(2.54);
    expect(convertLengthFromCm(2.54, 'imperial')).toBe(1);
    expect(convertCmToYards(91.44)).toBe(1);
  });
});
