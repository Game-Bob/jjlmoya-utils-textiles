export interface FiberEntry {
  name: string;
  family: 'natural' | 'synthetic' | 'artificial';
  breathability: number;
  durability: number;
  warmth: number;
  isNoble?: boolean;
}

export interface FabricTruthUI {
  [key: string]: unknown;
  toolTitle: string;
  addFiber: string;
  total: string;
  composition: string;
  description: string;
  verdict: string;
  breathability: string;
  durability: string;
  warmth: string;
  careWarning: string;
  specialCareWarning: string;
  validationError: string;
  actualTotal: string;
  disclaimer: string;
  fiberData: Record<string, FiberEntry>;
  verdicts: Record<string, { label: string; description: string }>;
}
