import type { PhStrings } from './logic';

export interface FiberPrepFiber {
  id: string;
  name: string;
  icon: string;
}

export interface FiberPrepUI {
  profileTitle: string;
  profileDesc: string;
  proteinTitle: string;
  proteinOrigin: string;
  proteinDesc: string;
  cellulosicTitle: string;
  cellulosicOrigin: string;
  cellulosicDesc: string;
  wofTitle: string;
  weightLabel: string;
  weightUnit: string;
  wofEmptyMsg: string;
  alumLabel: string;
  cremLabel: string;
  ironLabel: string;
  rampTitle: string;
  rampEmptyTitle: string;
  rampEmptyDesc: string;
  phTitle: string;
  phDesc: string;
  phVolumeLabel: string;
  phSliderLabel: string;
  phAcidLabel: string;
  phAlkalineLabel: string;
  phEmptyMsg: string;
  phStrings: PhStrings;
  proteinFibers: FiberPrepFiber[];
  cellulosicFibers: FiberPrepFiber[];
}
