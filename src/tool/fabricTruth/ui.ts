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
  fiberData: Record<string, any>;
  verdicts: Record<string, { label: string; description: string }>;
}
