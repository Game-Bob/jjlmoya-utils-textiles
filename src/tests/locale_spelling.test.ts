import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';

const TOOL_ID = 'embroidery-stitch-pricing-estimator';
const LOCALES = ['de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh'] as const;
const TRANSLATABLE_KEYS = ['title', 'description', 'ui', 'seo', 'faq', 'howTo'] as const;
const FORBIDDEN_TERMS: Partial<Record<(typeof LOCALES)[number], RegExp>> = {
  de: /\b(?:fuer|schaetze|schaetzung|flaeche|hoehe|groesse|waehle|zaehle|waehrung|fuell|saeulen|raender|berueck|probestueck|pruef|ergaenz|veraend|umruest)\w*\b/i,
  es: /\b(?:produccion|estimacion|tamano|diseno|maquina|preparacion|digitalizacion|numero|despues|planificacion|segun|anade|area)\b/i,
  fr: /\b(?:l estimation|d oeuvre|t il|s agit|l effort|l echelle|l application|l exemple|contient il|seront ils)\b/i,
  id: /\b(?:benar benar|menyetik)\b/i,
  it: /\b(?:l impegno|all ora|un impostazione|l applicazione|l operatore|d una|d oeuvre|s agit|l esempio)\b/i,
  nl: /\bvaluta eenheden\b/i,
  pl: /\b(?:sciegow|scieg|gestosci|wspolczynnik\w*|wypeln\w*|oszacowac|porown\w*|dlugo|sprawdz|zaloz\w*|predkosc\w*|kolorow)\b/i,
  sv: /\b(?:Tatafyllnad|Brodderiyta)\b/i,
};

function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (!value || typeof value !== 'object') return [];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  return Object.values(value).flatMap(collectStrings);
}

function localeText(content: Record<string, unknown>): string {
  return TRANSLATABLE_KEYS.flatMap((key) => collectStrings(content[key])).join(' ');
}

describe('Locale spelling regression', () => {
  it('keeps the reviewed embroidery translations free of known transcription errors', async () => {
    const tool = ALL_TOOLS.find((item) => item.entry.id === TOOL_ID);
    expect(tool).toBeDefined();
    if (!tool) return;

    for (const locale of LOCALES) {
      const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
      expect(loader, `Missing loader for ${locale}`).toBeDefined();
      if (!loader) continue;
      const content = await loader();
      const pattern = FORBIDDEN_TERMS[locale];
      expect(pattern?.test(localeText(content as unknown as Record<string, unknown>)) ?? false, `Known spelling regression in ${locale}`).toBe(false);
    }
  });
});
