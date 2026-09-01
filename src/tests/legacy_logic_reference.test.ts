import { describe, expect, it } from 'vitest';
import { STEPS } from '../tool/burnTest/logic';
import { findBestSize } from '../tool/clothingSizeConverter/logic';
import { computeMeters, getRulerStep, shopAdviceMeters } from '../tool/fabricProjectCalculator/logic';
import { FabricEngine } from '../tool/fabricTruth/logic';
import { calculateWOF, computePhAdvice } from '../tool/fiberPrep/logic';
import { adjustForMultiples, computeNeedleStep, computeScaleFactor, parseMultiples } from '../tool/knittingGauge/logic';
import type { TextileData } from '../tool/laundryGuide/logic';
import { DEFAULT_IDX, NEEDLE_DATA } from '../tool/needleConverter/logic';
import { computeLengthAdj, computeLateralAdj, computeResult, getStandardMeasures, isLargeScale } from '../tool/sewingPatternScaler/logic';
import type { SizeMapping } from '../tool/shoeSizeConverter/logic';
import { getFiberType } from '../tool/stainChemistry/logic';
import { computeBalls, computeTotal, getBaseMeters, getProjectParts } from '../tool/yarnCalculator/logic';

describe('legacy calculator logic reference cases', () => {
  it('keeps public APIs covered with representative calculations', () => {
    expect(STEPS).toEqual(['flame', 'odor', 'residue', 'smoke']);
    expect(findBestSize(89, 69, 95, [
      { size: '38', chest: 88, waist: 68, hip: 94 },
      { size: '40', chest: 92, waist: 72, hip: 98 },
    ]).size).toBe('38');
    expect(computeMeters(1.2, 1, false, 1.5)).toBe(1.35);
    expect(shopAdviceMeters(1.4)).toBe(1.5);
    expect(getRulerStep(2)).toBe(0.5);

    const fiberData = {
      cotton: { name: 'Cotton', family: 'natural' as const, breathability: 8, durability: 6, warmth: 4 },
      polyester: { name: 'Polyester', family: 'synthetic' as const, breathability: 3, durability: 9, warmth: 5 },
    };
    expect(FabricEngine.calculateVerdict([{ fiberId: 'cotton', percentage: 100 }], fiberData, {
      natural: { label: 'Natural', description: 'Natural fibre' },
    }).label).toBe('Natural');
    expect(FabricEngine.getAverages([{ fiberId: 'cotton', percentage: 100 }], fiberData).b).toBe(8);
    expect(calculateWOF(100, 'protein')).toEqual({ alum: 15, creamOfTartar: 2, iron: 1 });
    expect(computePhAdvice(6.5, 7, 10, {
      optimal: 'ok', raisePrefix: 'raise', raiseSuffix: 'acid', lowerPrefix: 'lower', lowerSuffix: 'base',
    })).toContain('raise');
    expect(parseMultiples('4 + 1')).toEqual({ base: 4, offset: 1 });
    expect(adjustForMultiples(10, 4, 1)).toBe(9);
    expect(computeScaleFactor(20, 22)).toBeCloseTo(-9.09, 2);
    expect(computeNeedleStep(11)).toBe(0.75);
    expect(NEEDLE_DATA[DEFAULT_IDX].mm).toBe(4);
    expect(getStandardMeasures('40').chest).toBe(92);
    expect(computeResult({ chest: 92, waist: 72, hips: 98, length: 60 }, 4)).toEqual({ c: 96, w: 76, h: 102, l: 60 });
    expect(computeLateralAdj(88, 96)).toBe(2);
    expect(computeLengthAdj(59, 61)).toBe(2);
    expect(isLargeScale(84, 100)).toBe(true);
    expect(getFiberType('polyester', { polyester: { name: 'Polyester', family: 'synthetic' } })).toBe('synthetic');
    expect(getBaseMeters('sweater', 'm', 'fingering')).toBe(1250);
    expect(computeTotal(1250, true)).toBe(1719);
    expect(computeBalls(400, 200)).toBe(2);
    expect(getProjectParts('hat')).toEqual({ body: 1, sleeves: 0 });
  });

  it('keeps data-only logic contracts representable', () => {
    const textile: TextileData = {
      name: 'Cotton', description: 'Plant fibre', family: 'natural', origin: 'Plant', breathability: 8,
      durability: 6, warmth: 4, washing: 'Machine wash', drying: 'Air dry', ironing: 'Medium', donts: [],
      sos: 'Check the label', icon: 'cotton', color: '#fff', maxTemp: '40 C',
    };
    const shoe: SizeMapping = { EU: '38', US: '8', UK: '5', CM: '24' };
    expect(textile.family).toBe('natural');
    expect(shoe.EU).toBe('38');
  });
});
