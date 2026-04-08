export interface TextileData {
  name: string;
  description: string;
  family: "natural" | "synthetic" | "artificial";
  origin: string;
  breathability: number;
  durability: number;
  warmth: number;
  washing: string;
  drying: string;
  ironing: string;
  donts: string[];
  sos: string;
  icon: string;
  color: string;
  isNoble?: boolean;
  maxTemp: string;
}

