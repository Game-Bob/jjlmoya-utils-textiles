import { describe, expect, it } from 'vitest';
import {
  calculateEmbroidery,
  DEFAULT_INPUT,
  formatMinutes,
  formatNumber,
} from './logic';

describe('calculateEmbroidery', () => {
  it('calculates equivalent stitches, setup time, and price', () => {
    const result = calculateEmbroidery(DEFAULT_INPUT);
    expect(result).not.toBeNull();
    expect(result?.areaCm2).toBe(80);
    expect(result?.baseStitches).toBe(2000);
    expect(result?.effectiveStitches).toBe(2000);
    expect(result?.colourChanges).toBe(1);
    expect(result?.setupMinutes).toBe(1.75);
    expect(result?.basePrice).toBeCloseTo(1.8429, 3);
  });

  it('uses the selected stitch multiplier and clamps colour count', () => {
    const result = calculateEmbroidery({ ...DEFAULT_INPUT, stitchType: 'tatami', colours: 0 });
    expect(result?.effectiveStitches).toBe(2900);
    expect(result?.colourChanges).toBe(0);
  });

  it('returns null for non-positive production inputs', () => {
    expect(calculateEmbroidery({ ...DEFAULT_INPUT, widthCm: 0 })).toBeNull();
    expect(calculateEmbroidery({ ...DEFAULT_INPUT, speed: 0 })).toBeNull();
    expect(calculateEmbroidery({ ...DEFAULT_INPUT, hourlyRate: -1 })).toBeNull();
  });
});

describe('formatters', () => {
  it('formats whole numbers and short durations', () => {
    expect(formatNumber(1200)).toBe('1,200');
    expect(formatMinutes(12.4)).toBe('12.4 min');
    expect(formatMinutes(74)).toBe('1h 14m');
  });
});
