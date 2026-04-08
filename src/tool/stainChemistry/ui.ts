export interface StainChemistryFiber {
  name: string;
  family: 'natural' | 'synthetic' | 'artificial';
  isNoble?: boolean;
}

export interface StainChemistryAgent {
  name: string;
  description: string;
  warning?: string;
}

export interface StainChemistryProtocol {
  agentId: string;
  temperature: string;
  method: string;
  notes?: string;
}

export interface StainChemistryStain {
  id: string;
  name: string;
  protocols: {
    natural: StainChemistryProtocol;
    synthetic: StainChemistryProtocol;
    delicate: StainChemistryProtocol;
  };
}

export interface StainChemistryUI {
  toolTitle: string;
  fiberLabel: string;
  selectFiberPlaceholder: string;
  stainLabel: string;
  selectStainPlaceholder: string;
  molecularDiagnosis: string;
  requiredAgent: string;
  thermalCondition: string;
  temperature: string;
  cleaningInstructions: string;
  criticalWarning: string;
  criticalWarningLabel: string;
  technicalNote: string;
  technicalNoteText: string;
  systemDiagnosis: string;
  systemDiagnosisDesc: string;
  delicatePercarbonateWarning: string;
  fiberData: Record<string, StainChemistryFiber>;
  agents: Record<string, StainChemistryAgent>;
  stains: StainChemistryStain[];
}
