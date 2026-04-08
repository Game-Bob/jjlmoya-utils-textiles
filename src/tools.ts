import type { ToolDefinition } from './types';
import { FABRIC_TRUTH_TOOL } from './tool/fabricTruth/index';
import { LAUNDRY_GUIDE_TOOL } from './tool/laundryGuide/index';
import { STAIN_CHEMISTRY_TOOL } from './tool/stainChemistry/index';
import { BURN_TEST_TOOL } from './tool/burnTest/index';
import { FIBER_PREP_TOOL } from './tool/fiberPrep/index';
import { SHOE_SIZE_CONVERTER_TOOL } from './tool/shoeSizeConverter/index';

export const ALL_TOOLS: ToolDefinition[] = [FABRIC_TRUTH_TOOL, LAUNDRY_GUIDE_TOOL, STAIN_CHEMISTRY_TOOL, BURN_TEST_TOOL, FIBER_PREP_TOOL, SHOE_SIZE_CONVERTER_TOOL];

