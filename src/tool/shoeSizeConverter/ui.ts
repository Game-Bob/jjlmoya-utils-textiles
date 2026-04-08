import type { SizeMapping } from './logic';

export interface ShoeSizeConverterUI {
  genderMenTitle: string;
  genderWomenTitle: string;
  regionLabel: string;
  regionEU: string;
  regionUS: string;
  regionUK: string;
  regionCM: string;
  gridTitle: string;
  gridDesc: string;
  labelEU: string;
  labelUS: string;
  labelUK: string;
  labelCM: string;
  unitCM: string;
  infoBannerHtml: string;
  menData: SizeMapping[];
  womenData: SizeMapping[];
}
