import {
  createSnapSwitchLiteStore,
  type SnapSwitchLiteStore,
} from '../features/snapswitch-lite/snapswitch-lite.store';

export function createTestStore(
  overrides: Parameters<typeof createSnapSwitchLiteStore>[0] = {},
): SnapSwitchLiteStore {
  return createSnapSwitchLiteStore({
    lane: 1,
    score: 0,
    energy: 100,
    lives: 3,
    paused: false,
    gameOver: false,
    tick: 0,
    difficulty: 'med',
    soundEnabled: true,
    particlesEnabled: true,
    highScore: 0,
    ...overrides,
  });
}

export function createTestStoreWithObstacle(): SnapSwitchLiteStore {
  return createTestStore({
    obstacles: [{ id: 'o1', lane: 1, position: 2 }],
  });
}

export function createTestStoreWithShard(): SnapSwitchLiteStore {
  return createTestStore({
    shards: [{ id: 's1', lane: 1, position: 2 }],
  });
}
