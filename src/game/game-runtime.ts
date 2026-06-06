import type { SnapSwitchLiteStore } from '../features/snapswitch-lite/snapswitch-lite.store';

export interface GameRuntime {
  store: SnapSwitchLiteStore;
  start: () => void;
  stop: () => void;
  isRunning: () => boolean;
}

const TICK_MS = 1000 / 30; // 30 fps tick for game logic

export function createGameRuntime(store: SnapSwitchLiteStore): GameRuntime {
  let handle: number | null = null;
  let lastTs = 0;

  const loop = (ts: number) => {
    if (handle === null) return;
    if (ts - lastTs >= TICK_MS) {
      store.tickGame();
      lastTs = ts;
    }
    handle = requestAnimationFrame(loop);
  };

  const start = () => {
    if (handle !== null) return;
    store.startGame();
    lastTs = performance.now();
    handle = requestAnimationFrame(loop);
  };

  const stop = () => {
    if (handle !== null) {
      cancelAnimationFrame(handle);
      handle = null;
    }
  };

  const isRunning = () => handle !== null;

  return { store, start, stop, isRunning };
}
