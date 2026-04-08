import type { ToolDefinition } from './types';
import { FABRIC_TRUTH_TOOL } from './tool/fabricTruth/index';
import { LAUNDRY_GUIDE_TOOL } from './tool/laundryGuide/index';
import { STAIN_CHEMISTRY_TOOL } from './tool/stainChemistry/index';

export const ALL_TOOLS: ToolDefinition[] = [FABRIC_TRUTH_TOOL, LAUNDRY_GUIDE_TOOL, STAIN_CHEMISTRY_TOOL];

