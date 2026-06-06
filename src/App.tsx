import { useEffect, useMemo, useRef, useState } from 'react';
import {
  GameplaySnapswitchLite,
  GameSettingsSnapswitchLite,
} from './screens';
import type {
  GameplaySnapswitchLiteActionId,
  GameSettingsSnapswitchLiteActionId,
} from './screens';
import { createSnapSwitchLiteStore, type SnapSwitchLiteStore } from './features/snapswitch-lite/snapswitch-lite.store';
import { createGameRuntime } from './game/game-runtime';
import { hydrateStore, persistStore } from './features/snapswitch-lite/snapswitch-lite.repo';

declare global {
  interface Window {
    app?: {
      state: SnapSwitchLiteStore;
      actions: Pick<
        SnapSwitchLiteStore,
        | 'startGame'
        | 'pauseGame'
        | 'resumeGame'
        | 'restartGame'
        | 'tickGame'
        | 'moveLeft'
        | 'moveRight'
        | 'setDifficulty'
        | 'toggleSound'
        | 'toggleParticles'
        | 'openSettings'
        | 'closeSettings'
        | 'saveSettings'
        | 'resetPreferences'
      >;
    };
  }
}

export default function App() {
  const storeRef = useRef<SnapSwitchLiteStore | null>(null);
  const runtimeRef = useRef<ReturnType<typeof createGameRuntime> | null>(null);
  const [, forceRender] = useState(0);

  if (!storeRef.current) {
    storeRef.current = createSnapSwitchLiteStore();
    hydrateStore(storeRef.current);
  }
  const store = storeRef.current;

  if (!runtimeRef.current) {
    runtimeRef.current = createGameRuntime(store);
  }
  const runtime = runtimeRef.current;

  useEffect(() => {
    runtime.start();
    const unsub = store.subscribe(() => forceRender((n) => n + 1));
    return () => {
      unsub();
      persistStore(store);
      runtime.stop();
    };
  }, [store, runtime]);

  useEffect(() => {
    window.app = {
      state: store,
      actions: {
        startGame: store.startGame.bind(store),
        pauseGame: store.pauseGame.bind(store),
        resumeGame: store.resumeGame.bind(store),
        restartGame: store.restartGame.bind(store),
        tickGame: store.tickGame.bind(store),
        moveLeft: store.moveLeft.bind(store),
        moveRight: store.moveRight.bind(store),
        setDifficulty: store.setDifficulty.bind(store),
        toggleSound: store.toggleSound.bind(store),
        toggleParticles: store.toggleParticles.bind(store),
        openSettings: store.openSettings.bind(store),
        closeSettings: store.closeSettings.bind(store),
        saveSettings: store.saveSettings.bind(store),
        resetPreferences: store.resetPreferences.bind(store),
      },
    };
  }, [store]);

  const gameplayActions = useMemo<
    Partial<Record<GameplaySnapswitchLiteActionId, () => void>>
  >(
    () => ({
      'pause-1': store.pauseGame,
      'refresh-2': store.restartGame,
      'settings-3': store.openSettings,
      'restart-4': store.restartGame,
      'gameplay-1': store.startGame,
      'achievements-2': () => {},
      'leaderboards-3': () => {},
      'settings-4': store.openSettings,
    }),
    [store],
  );

  const settingsActions = useMemo<
    Partial<Record<GameSettingsSnapswitchLiteActionId, () => void>>
  >(
    () => ({
      'close-1': store.closeSettings,
      'low-2': () => store.setDifficulty('low'),
      'med-3': () => store.setDifficulty('med'),
      'high-4': () => store.setDifficulty('high'),
      'back-to-game-5': store.closeSettings,
      'save-changes-6': () => {
        store.saveSettings();
        persistStore(store);
      },
      'reset-preferences-7': store.resetPreferences,
    }),
    [store],
  );

  const runtimeView = {
    player: {
      lane: store.lane,
      position: store.playerPosition,
    },
    obstacles: store.obstacles,
    shards: store.shards,
    score: store.score,
    energy: store.energy,
    lives: store.lives,
    paused: store.paused,
  };

  return (
    <div
      data-setfarm-root="snapswitch-lite"
      data-testid="setfarm-app-root"
      className="relative h-screen w-full overflow-hidden"
    >
      {store.screen === 'gameplay' ? (
        <GameplaySnapswitchLite
          actions={gameplayActions}
          runtime={runtimeView}
        />
      ) : (
        <GameSettingsSnapswitchLite actions={settingsActions} />
      )}
    </div>
  );
}
