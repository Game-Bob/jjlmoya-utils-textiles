import type { UnitSystem, YardageInputs } from './logic';

const STORAGE_KEY = 'jjlmoya-quilt-fabric-yardage-v1';

export interface SavedYardageDraft {
  unit: UnitSystem;
  inputs: YardageInputs;
}

export function loadYardageDraft(): SavedYardageDraft | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as SavedYardageDraft : null;
  } catch {
    return null;
  }
}

export function saveYardageDraft(draft: SavedYardageDraft): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  } catch {
    return;
  }
}
