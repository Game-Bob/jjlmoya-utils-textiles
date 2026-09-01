import { describe, expect, it } from 'vitest';
import { renderBindingScene } from './dom-views';
import { calculateBinding, convertLengthFromCm, convertLengthToCm, type BindingInputs } from './logic';

const example: BindingInputs = {
  quiltWidthCm: 90,
  quiltLengthCm: 120,
  cornerCount: 4,
  stripWidthCm: 6.5,
  fabricWidthCm: 110,
  seamAllowanceCm: 0.6,
  joinMethod: 'diagonal',
  safetyPercent: 0.1,
};

describe('quilt binding calculation', () => {
  it('calculates perimeter, reserves, strips, and surplus', () => {
    const result = calculateBinding(example);
    expect(result).toMatchObject({
      valid: true,
      perimeterCm: 420,
      cornerReserveCm: 4.8,
      joiningReserveCm: 7.7,
      requiredBindingCm: 475.75,
      strips: 5,
      joinCount: 4,
      joinedLengthCm: 524,
    });
    if (result.valid) expect(result.surplusCm).toBeCloseTo(48.25, 4);
  });

  it('uses the smaller loss for straight joins', () => {
    const result = calculateBinding({ ...example, joinMethod: 'straight' });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.joinLossCm).toBe(1.2);
      expect(result.joiningReserveCm).toBe(1.2);
    }
  });

  it('rejects a fabric width that cannot hold the strip', () => {
    const result = calculateBinding({ ...example, fabricWidthCm: 6 });
    expect(result).toEqual({ valid: false, errors: ['fabricWidth'] });
  });

  it('rejects negative dimensions and invalid corners', () => {
    const result = calculateBinding({ ...example, quiltWidthCm: -1, cornerCount: 2.5 });
    expect(result).toEqual({ valid: false, errors: ['lengths', 'corners'] });
  });

  it('converts inches without changing the physical length', () => {
    const inches = convertLengthFromCm(2.54, 'imperial');
    expect(inches).toBe(1);
    expect(convertLengthToCm(inches, 'imperial')).toBe(2.54);
  });

  it('keeps scene labels clear and preserves quilt proportions', () => {
    const result = calculateBinding(example);
    expect(result.valid).toBe(true);
    if (result.valid) {
      const scene = renderBindingScene(example, result, 'metric');
      const quilt = scene.match(/class="qb-quilt"[^>]*width="([^"]+)" height="([^"]+)"/);
      const label = scene.match(/class="qb-scene-measure" x="150" y="([^"]+)"/);
      const marks = scene.match(/class="qb-strip-mark" x="38" y="([^"]+)"/);
      expect(quilt).not.toBeNull();
      expect(Number(quilt?.[1]) / Number(quilt?.[2])).toBeCloseTo(0.75, 4);
      expect(Number(label?.[1])).toBeLessThan(Number(marks?.[1]));
    }
  });
});
