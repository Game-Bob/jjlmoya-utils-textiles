export interface NeedleItem {
  mm: number;
  usK: string;
  usC: string;
  uk: string;
  yarn: string;
  wpi: string;
}

export const NEEDLE_DATA: NeedleItem[] = [
  { mm: 2.0, usK: '0', usC: 'B-1', uk: '14', yarn: 'Lace / Fingering', wpi: '18+' },
  { mm: 2.25, usK: '1', usC: 'B-1', uk: '13', yarn: 'Lace / Fingering', wpi: '18+' },
  { mm: 2.5, usK: '1.5', usC: 'C-2', uk: '12', yarn: 'Lace / Fingering', wpi: '18+' },
  { mm: 2.75, usK: '2', usC: 'C-2', uk: '12', yarn: 'Fingering', wpi: '18-22' },
  { mm: 3.0, usK: '2.5', usC: 'D-3', uk: '11', yarn: 'Fingering', wpi: '18-22' },
  { mm: 3.25, usK: '3', usC: 'D-3', uk: '10', yarn: 'Sport', wpi: '14-16' },
  { mm: 3.5, usK: '4', usC: 'E-4', uk: '9', yarn: 'Sport', wpi: '14-16' },
  { mm: 3.75, usK: '5', usC: 'F-5', uk: '9', yarn: 'Sport', wpi: '14-16' },
  { mm: 4.0, usK: '6', usC: 'G-6', uk: '8', yarn: 'DK / Light Worsted', wpi: '11-13' },
  { mm: 4.5, usK: '7', usC: '7', uk: '7', yarn: 'DK / Light Worsted', wpi: '11-13' },
  { mm: 5.0, usK: '8', usC: 'H-8', uk: '6', yarn: 'Worsted / Aran', wpi: '9-11' },
  { mm: 5.5, usK: '9', usC: 'I-9', uk: '5', yarn: 'Worsted / Aran', wpi: '9-11' },
  { mm: 6.0, usK: '10', usC: 'J-10', uk: '4', yarn: 'Bulky / Chunky', wpi: '7-8' },
  { mm: 6.5, usK: '10.5', usC: 'K-10.5', uk: '3', yarn: 'Bulky / Chunky', wpi: '7-8' },
  { mm: 7.0, usK: '-', usC: '-', uk: '2', yarn: 'Bulky / Chunky', wpi: '7-8' },
  { mm: 8.0, usK: '11', usC: 'L-11', uk: '\u2014', yarn: 'Super Bulky', wpi: '5-6' },
  { mm: 9.0, usK: '13', usC: 'M-13', uk: '\u2014', yarn: 'Super Bulky', wpi: '5-6' },
  { mm: 10.0, usK: '15', usC: 'N-15', uk: '\u2014', yarn: 'Super Bulky', wpi: '5-6' },
];

export const DEFAULT_IDX = 8;
