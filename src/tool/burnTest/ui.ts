export interface BurnTestFiber {
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface BurnTestEntry {
  fiberId: string;
  flame: string;
  odor: string;
  smoke: string;
  residue: string;
}

export interface BurnTestUI {
  investigationLabel: string;
  stepPrefix: string;
  stepCompleted: string;
  resetLabel: string;
  positiveId: string;
  flameLabel: string;
  odorLabel: string;
  residueLabel: string;
  identifiedAs: string;
  safetyTitle: string;
  safetyText: string;
  questions: {
    flame: string;
    odor: string;
    residue: string;
    smoke: string;
  };
  fiberData: Record<string, BurnTestFiber>;
  burnTestData: BurnTestEntry[];
}
