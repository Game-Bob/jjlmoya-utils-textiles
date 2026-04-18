import type { ToolDefinition } from './types';
import { FABRIC_TRUTH_TOOL } from './tool/fabricTruth/index';
import { LAUNDRY_GUIDE_TOOL } from './tool/laundryGuide/index';
import { STAIN_CHEMISTRY_TOOL } from './tool/stainChemistry/index';
import { BURN_TEST_TOOL } from './tool/burnTest/index';
import { FIBER_PREP_TOOL } from './tool/fiberPrep/index';
import { SHOE_SIZE_CONVERTER_TOOL } from './tool/shoeSizeConverter/index';
import { CLOTHING_SIZE_CONVERTER_TOOL } from './tool/clothingSizeConverter/index';
import { KNITTING_GAUGE_TOOL } from './tool/knittingGauge/index';
import { FABRIC_PROJECT_CALCULATOR_TOOL } from './tool/fabricProjectCalculator/index';
import { SEWING_PATTERN_SCALER_TOOL } from './tool/sewingPatternScaler/index';
import { NEEDLE_CONVERTER_TOOL } from './tool/needleConverter/index';
import { YARN_CALCULATOR_TOOL } from './tool/yarnCalculator/index';

export const ALL_TOOLS: ToolDefinition[] = [FABRIC_TRUTH_TOOL, LAUNDRY_GUIDE_TOOL, STAIN_CHEMISTRY_TOOL, BURN_TEST_TOOL, FIBER_PREP_TOOL, SHOE_SIZE_CONVERTER_TOOL, CLOTHING_SIZE_CONVERTER_TOOL, KNITTING_GAUGE_TOOL, FABRIC_PROJECT_CALCULATOR_TOOL, SEWING_PATTERN_SCALER_TOOL, NEEDLE_CONVERTER_TOOL, YARN_CALCULATOR_TOOL];


export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
