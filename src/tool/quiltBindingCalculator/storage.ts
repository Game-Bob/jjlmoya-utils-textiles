import type { BindingInputs, UnitSystem } from './logic';

const STORAGE_KEY = 'jjlmoya-quilt-binding-calculator-v1';

export interface SavedBindingDraft {
  unit: UnitSystem;
  inputs: BindingInputs;
}

export function loadBindingDraft(): SavedBindingDraft | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SavedBindingDraft;
  } catch {
    return null;
  }
}

export function saveBindingDraft(draft: SavedBindingDraft): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  } catch {
    return;
  }
}
