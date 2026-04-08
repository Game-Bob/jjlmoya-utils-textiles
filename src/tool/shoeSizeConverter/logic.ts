export interface SizeMapping {
  EU: string;
  US: string;
  UK: string;
  CM: string;
}

export type ShoeSizeRegion = keyof SizeMapping;
