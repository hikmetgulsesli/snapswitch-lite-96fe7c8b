// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - SnapSwitch Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { CornerDownLeft, Gamepad2, Pause, RefreshCw, Settings, Trophy } from "lucide-react";


export type GameplaySnapswitchLiteActionId = "pause-1" | "refresh-2" | "settings-3" | "restart-4" | "gameplay-1" | "achievements-2" | "leaderboards-3" | "settings-4";

export interface GameplaySnapswitchLiteProps {
  actions?: Partial<Record<GameplaySnapswitchLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplaySnapswitchLite({ actions, runtime }: GameplaySnapswitchLiteProps) {
  void runtime;
  return (
    <>
      {/* Global Scanline Effect */}
      <div className="fixed inset-0 scanlines z-[999]"></div>
      {/* TopAppBar (from JSON) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-hud-safe-area h-20 backdrop-blur-xl bg-surface/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] bg-transparent text-primary">
      <div className="flex items-center">
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-black text-primary drop-shadow-[0_0_8px_rgba(0,219,233,0.4)]">
                      SnapSwitch Lite
                  </h1>
      </div>
      <div className="flex gap-4 items-center">
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-variant/30 border border-outline-variant/30 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(0,219,233,0.6)] transition-colors active:scale-95 duration-75 text-on-surface-variant" type="button" aria-label="Pause" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-variant/30 border border-outline-variant/30 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(0,219,233,0.6)] transition-colors active:scale-95 duration-75 text-on-surface-variant" type="button" aria-label="Refresh" data-action-id="refresh-2" onClick={actions?.["refresh-2"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-variant/30 border border-outline-variant/30 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(0,219,233,0.6)] transition-colors active:scale-95 duration-75 text-on-surface-variant" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (from JSON) - Hidden on mobile per system prompt responsive rules */}
      <nav className="hidden md:flex fixed right-0 top-0 h-full z-[100] flex-col py-8 w-72 bg-surface-container-lowest/90 border-l border-outline-variant backdrop-blur-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.8)]">
      <div className="px-6 mb-8 mt-20">
      <h2 className="font-label-mono text-label-mono text-on-surface opacity-70 tracking-widest uppercase">System Menu</h2>
      <p className="font-label-mono text-label-mono text-on-surface-variant opacity-50 mt-1 text-[10px]">v1.0.4-lite</p>
      </div>
      <div className="flex flex-col gap-2 font-label-mono text-label-mono">
      {/* Active Tab */}
      <a className="flex items-center gap-4 bg-primary/10 text-primary border-r-4 border-primary px-6 py-4 hover:bg-surface-variant/50 hover:text-primary transition-colors active:translate-x-1 duration-200" href="#" data-action-id="gameplay-1" onClick={(event) => { event.preventDefault(); actions?.["gameplay-1"]?.(); }}>
      <Gamepad2 aria-hidden={true} focusable="false" />
      <span>Gameplay</span>
      </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-variant/50 hover:text-primary transition-colors active:translate-x-1 duration-200" href="#" data-action-id="achievements-2" onClick={(event) => { event.preventDefault(); actions?.["achievements-2"]?.(); }}>
      <Trophy aria-hidden={true} focusable="false" />
      <span>Achievements</span>
      </a>
      <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-variant/50 hover:text-primary transition-colors active:translate-x-1 duration-200" href="#" data-action-id="leaderboards-3" onClick={(event) => { event.preventDefault(); actions?.["leaderboards-3"]?.(); }}>
      <Trophy aria-hidden={true} focusable="false" />
      <span>Leaderboards</span>
      </a>
      <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-variant/50 hover:text-primary transition-colors active:translate-x-1 duration-200" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Canvas Area */}
      <main className="h-screen w-full pt-20 md:pr-72 flex flex-col items-center justify-center relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 2px 2px, #00dbe9 1px, transparent 0)", backgroundSize: "32px 32px"}}></div>
      {/* HUD: Core Stats */}
      <div className="absolute top-24 left-0 w-full flex flex-col items-center z-10 px-margin-mobile md:px-margin-desktop">
      <div className="flex items-end gap-6 mb-4">
      <div className="flex flex-col items-center backdrop-blur-md bg-surface-variant/20 border border-outline-variant/30 px-6 py-3 rounded-xl neon-glow-primary">
      <span className="font-label-mono text-label-mono text-primary/70 mb-1 tracking-widest uppercase">Score</span>
      <span className="font-display-score-mobile text-display-score-mobile md:font-display-score md:text-display-score text-primary">084,290</span>
      </div>
      <div className="flex flex-col items-center backdrop-blur-md bg-surface-variant/20 border border-outline-variant/30 px-4 py-2 rounded-lg">
      <span className="font-label-mono text-label-mono text-secondary/70 mb-1 tracking-widest uppercase">Level</span>
      <span className="font-headline-lg-mobile text-headline-lg-mobile text-secondary">04</span>
      </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full max-w-md h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-primary to-secondary w-[65%] shadow-[0_0_10px_rgba(0,219,233,0.5)]"></div>
      </div>
      </div>
      {/* Side Panel: Recent Pulses */}
      <div className="absolute left-margin-desktop top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-10">
      <div className="font-label-mono text-label-mono text-primary/50 uppercase tracking-widest mb-2 border-b border-primary/20 pb-2">Recent Pulses</div>
      <div className="flex items-center gap-3 backdrop-blur-md bg-surface-container-low/50 px-3 py-2 border border-outline-variant/30 rounded">
      <div className="w-2 h-2 rounded-full bg-secondary neon-glow-secondary"></div>
      <span className="font-label-mono text-label-mono text-on-surface">+500</span>
      </div>
      <div className="flex items-center gap-3 backdrop-blur-md bg-surface-container-low/50 px-3 py-2 border border-outline-variant/30 rounded">
      <div className="w-2 h-2 rounded-full bg-secondary neon-glow-secondary"></div>
      <span className="font-label-mono text-label-mono text-on-surface">+250</span>
      </div>
      <div className="flex items-center gap-3 backdrop-blur-md bg-surface-container-low/50 px-3 py-2 border border-outline-variant/30 rounded opacity-50">
      <div className="w-2 h-2 rounded-full bg-primary neon-glow-primary"></div>
      <span className="font-label-mono text-label-mono text-on-surface">+100</span>
      </div>
      </div>
      {/* The Playfield */}
      <div className="relative w-full max-w-[280px] h-[614px] flex justify-between mt-12 z-10" id="playfield">
      {/* Left Rail */}
      <div className="w-[2px] h-full bg-outline-variant/30 rail-active relative">
      {/* Blocker on Left */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-4 h-16 bg-error neon-glow-error rounded-sm"></div>
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-4 h-24 bg-error neon-glow-error rounded-sm"></div>
      </div>
      {/* The Switch Player (Currently on Right Rail) */}
      <div className="absolute top-[80%] right-[-7px] w-4 h-20 bg-primary rounded-sm neon-glow-primary z-20 cursor-pointer transition-colors duration-100 ease-out hover:brightness-125" id="player-switch">
      {/* Inner core highlight */}
      <div className="absolute inset-0 bg-white/30 w-1/2 mx-auto rounded-sm"></div>
      </div>
      {/* Right Rail */}
      <div className="w-[2px] h-full bg-outline-variant/30 rail-active relative">
      {/* Blocker on Right */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-4 h-12 bg-error neon-glow-error rounded-sm"></div>
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-4 h-20 bg-error neon-glow-error rounded-sm"></div>
      </div>
      {/* Center dividing line (subtle) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/10 border-dashed border-l border-outline-variant/20"></div>
      </div>
      {/* Bottom Controls / Contextual Hint */}
      <div className="absolute bottom-margin-mobile md:bottom-margin-desktop left-0 w-full flex justify-center gap-6 z-10 px-margin-mobile md:px-margin-desktop">
      <button className="backdrop-blur-md bg-surface-container-high/80 border border-outline-variant/50 text-on-surface px-6 py-3 rounded-lg font-label-mono text-label-mono flex items-center gap-2 hover:bg-surface-variant hover:text-primary transition-colors" type="button" data-action-id="restart-4" onClick={actions?.["restart-4"]}>
      <CornerDownLeft className="text-[18px]" aria-hidden={true} focusable="false" />
                      RESTART
                  </button>
      <div className="hidden md:flex items-center gap-3 backdrop-blur-md bg-surface-container-high/40 border border-outline-variant/30 px-6 py-3 rounded-lg font-label-mono text-label-mono text-on-surface-variant opacity-70">
      <span>Press</span>
      <div className="px-2 py-1 bg-surface-variant rounded border border-outline-variant text-on-surface">SPACE</div>
      <span>to Switch</span>
      </div>
      </div>
      </main>
      
    </>
  );
}
