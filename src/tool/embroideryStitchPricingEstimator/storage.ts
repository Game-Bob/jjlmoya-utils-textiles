import type { EmbroideryInput } from './logic';

const STORAGE_KEY = 'jjlmoya-embroidery-stitch-pricing:v1';

export function loadEmbroideryInput(fallback: EmbroideryInput): EmbroideryInput {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const saved = JSON.parse(raw) as Partial<EmbroideryInput>;
    return { ...fallback, ...saved };
  } catch {
    return fallback;
  }
}

export function saveEmbroideryInput(input: EmbroideryInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}
