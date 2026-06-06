import type { Difficulty, SnapSwitchLiteStore } from './snapswitch-lite.store';

const STORAGE_KEY = 'snapswitch-lite:v1';

export interface PersistedSnapSwitchLite {
  highScore: number;
  difficulty: Difficulty;
  soundEnabled: boolean;
  particlesEnabled: boolean;
}

export function readPersisted(): Partial<PersistedSnapSwitchLite> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as PersistedSnapSwitchLite;
    return {
      highScore: typeof parsed.highScore === 'number' ? parsed.highScore : 0,
      difficulty: ['low', 'med', 'high'].includes(parsed.difficulty)
        ? parsed.difficulty
        : 'med',
      soundEnabled: typeof parsed.soundEnabled === 'boolean' ? parsed.soundEnabled : true,
      particlesEnabled:
        typeof parsed.particlesEnabled === 'boolean' ? parsed.particlesEnabled : true,
    };
  } catch {
    return {};
  }
}

export function writePersisted(data: PersistedSnapSwitchLite): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore storage errors
  }
}

export function hydrateStore(store: SnapSwitchLiteStore): void {
  const persisted = readPersisted();
  if (persisted.highScore !== undefined) store.setHighScore(persisted.highScore);
  if (persisted.difficulty !== undefined) store.setDifficulty(persisted.difficulty);
  if (persisted.soundEnabled !== undefined) {
    // Direct state patch to avoid toggling semantics
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store as any).soundEnabled = persisted.soundEnabled;
  }
  if (persisted.particlesEnabled !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store as any).particlesEnabled = persisted.particlesEnabled;
  }
}

export function persistStore(store: SnapSwitchLiteStore): void {
  writePersisted({
    highScore: Math.max(store.highScore, store.score),
    difficulty: store.difficulty,
    soundEnabled: store.soundEnabled,
    particlesEnabled: store.particlesEnabled,
  });
}
