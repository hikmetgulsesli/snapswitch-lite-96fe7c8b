export type Difficulty = 'low' | 'med' | 'high';

export interface Obstacle {
  id: string;
  lane: number;
  position: number;
}

export interface Shard {
  id: string;
  lane: number;
  position: number;
}

export interface SnapSwitchLiteState {
  // Meta / routing
  screen: 'gameplay' | 'settings';
  // Runtime
  lane: number;
  playerPosition: number;
  obstacles: Obstacle[];
  shards: Shard[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  gameOver: boolean;
  tick: number;
  // Settings
  difficulty: Difficulty;
  soundEnabled: boolean;
  particlesEnabled: boolean;
  // Persisted
  highScore: number;
}

export interface SnapSwitchLiteActions {
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  restartGame: () => void;
  tickGame: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  setDifficulty: (difficulty: Difficulty) => void;
  toggleSound: () => void;
  toggleParticles: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  saveSettings: () => void;
  resetPreferences: () => void;
  setHighScore: (highScore: number) => void;
}

export interface SnapSwitchLiteStore extends SnapSwitchLiteState, SnapSwitchLiteActions {
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => SnapSwitchLiteState;
}

const LANES = 3;
const SPAWN_DISTANCE = 120;
const PLAYER_Z = 0;

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function spawnObstacle(tick: number, difficulty: Difficulty): Obstacle {
  const lane = Math.floor(Math.random() * LANES);
  const speed = difficulty === 'low' ? 1.2 : difficulty === 'med' ? 1.8 : 2.6;
  return {
    id: uid(),
    lane,
    position: SPAWN_DISTANCE + tick * speed + Math.random() * 40,
  };
}

function spawnShard(tick: number, difficulty: Difficulty): Shard {
  const lane = Math.floor(Math.random() * LANES);
  const speed = difficulty === 'low' ? 1.2 : difficulty === 'med' ? 1.8 : 2.6;
  return {
    id: uid(),
    lane,
    position: SPAWN_DISTANCE + tick * speed + 20 + Math.random() * 40,
  };
}

export function createSnapSwitchLiteStore(
  initial: Partial<SnapSwitchLiteState> = {},
): SnapSwitchLiteStore {
  const state: SnapSwitchLiteState = {
    screen: 'gameplay',
    lane: 1,
    playerPosition: PLAYER_Z,
    obstacles: [],
    shards: [],
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
    ...initial,
  };

  const listeners = new Set<() => void>();
  const emit = () => listeners.forEach((l) => l());

  let nextState = { ...state };

  const get = () => nextState;

  const set = (patch: Partial<SnapSwitchLiteState>) => {
    nextState = { ...nextState, ...patch };
    emit();
  };

  const actions: SnapSwitchLiteActions = {
    startGame: () => {
      set({
        lane: 1,
        playerPosition: PLAYER_Z,
        obstacles: [spawnObstacle(0, nextState.difficulty)],
        shards: [spawnShard(0, nextState.difficulty)],
        score: 0,
        energy: 100,
        lives: 3,
        paused: false,
        gameOver: false,
        tick: 0,
      });
    },
    pauseGame: () => set({ paused: true }),
    resumeGame: () => set({ paused: false }),
    restartGame: () => {
      actions.startGame();
    },
    tickGame: () => {
      if (nextState.paused || nextState.gameOver) return;
      const tick = nextState.tick + 1;
      const speed =
        nextState.difficulty === 'low'
          ? 1.2
          : nextState.difficulty === 'med'
            ? 1.8
            : 2.6;
      const step = speed * 0.5;

      let obstacles = nextState.obstacles
        .map((o) => ({ ...o, position: o.position - step }))
        .filter((o) => o.position > -10);

      let shards = nextState.shards
        .map((s) => ({ ...s, position: s.position - step }))
        .filter((s) => s.position > -10);

      if (obstacles.length < 3 && Math.random() < 0.03) {
        obstacles = [...obstacles, spawnObstacle(tick, nextState.difficulty)];
      }
      if (shards.length < 2 && Math.random() < 0.02) {
        shards = [...shards, spawnShard(tick, nextState.difficulty)];
      }

      let score = nextState.score;
      let energy = nextState.energy;
      let lives = nextState.lives;

      // Collision / collection
      const playerLane = nextState.lane;
      const hitObstacle = obstacles.some(
        (o) => o.lane === playerLane && o.position <= 4 && o.position >= -2,
      );
      if (hitObstacle) {
        energy = Math.max(0, energy - 20);
        lives = Math.max(0, lives - 1);
        obstacles = obstacles.filter(
          (o) => !(o.lane === playerLane && o.position <= 4 && o.position >= -2),
        );
      }

      const collectedShardIndex = shards.findIndex(
        (s) => s.lane === playerLane && s.position <= 3 && s.position >= -2,
      );
      if (collectedShardIndex >= 0) {
        score += 10;
        energy = Math.min(100, energy + 5);
        shards = shards.filter((_, i) => i !== collectedShardIndex);
      }

      const gameOver = lives <= 0 || energy <= 0;

      set({
        tick,
        obstacles,
        shards,
        score,
        energy,
        lives,
        gameOver,
        playerPosition: nextState.playerPosition + step * 0.1,
      });
    },
    moveLeft: () => {
      if (nextState.paused || nextState.gameOver) return;
      set({ lane: Math.max(0, nextState.lane - 1) });
    },
    moveRight: () => {
      if (nextState.paused || nextState.gameOver) return;
      set({ lane: Math.min(LANES - 1, nextState.lane + 1) });
    },
    setDifficulty: (difficulty: Difficulty) => set({ difficulty }),
    toggleSound: () => set({ soundEnabled: !nextState.soundEnabled }),
    toggleParticles: () =>
      set({ particlesEnabled: !nextState.particlesEnabled }),
    openSettings: () => set({ screen: 'settings', paused: true }),
    closeSettings: () => set({ screen: 'gameplay', paused: false }),
    saveSettings: () => {
      // Handled by repo persistence hook; this action marks intent.
      set({ screen: 'gameplay', paused: false });
    },
    resetPreferences: () =>
      set({
        difficulty: 'med',
        soundEnabled: true,
        particlesEnabled: true,
      }),
    setHighScore: (highScore: number) => set({ highScore }),
  };

  const store = {
    ...state,
    ...actions,
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot() {
      return get();
    },
  } as SnapSwitchLiteStore;

  return store;
}
