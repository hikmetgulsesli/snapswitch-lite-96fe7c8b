import {
  createSnapSwitchLiteStore,
  type SnapSwitchLiteStore,
} from '../features/snapswitch-lite/snapswitch-lite.store';
import { createGameRuntime, type GameRuntime } from '../game/game-runtime';
import { hydrateStore, persistStore } from '../features/snapswitch-lite/snapswitch-lite.repo';

export interface TestBridge {
  store: SnapSwitchLiteStore;
  runtime: GameRuntime;
  mount: () => void;
  unmount: () => void;
}

export function createTestBridge(initial?: Partial<SnapSwitchLiteStore>): TestBridge {
  const store = createSnapSwitchLiteStore(initial);
  hydrateStore(store);
  const runtime = createGameRuntime(store);

  const mount = () => {
    runtime.start();
  };

  const unmount = () => {
    persistStore(store);
    runtime.stop();
  };

  return { store, runtime, mount, unmount };
}

export type { SnapSwitchLiteStore };
