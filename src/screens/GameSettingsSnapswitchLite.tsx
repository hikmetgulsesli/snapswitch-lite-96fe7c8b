// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - SnapSwitch Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { X } from "lucide-react";


export type GameSettingsSnapswitchLiteActionId = "close-1" | "low-2" | "med-3" | "high-4" | "back-to-game-5" | "save-changes-6" | "reset-preferences-7";

export interface GameSettingsSnapswitchLiteProps {
  actions?: Partial<Record<GameSettingsSnapswitchLiteActionId, () => void>>;

}

export function GameSettingsSnapswitchLite({ actions }: GameSettingsSnapswitchLiteProps) {
  return (
    <>
      {/* Decorative blurred background overlay for the modal effect */}
      <div className="absolute inset-0 bg-surface/40 backdrop-blur-sm z-0"></div>
      {/* Main Settings Modal */}
      <div className="glass-panel neon-border w-full max-w-lg rounded-xl p-8 z-10 flex flex-col gap-8 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] relative mx-margin-mobile md:mx-0">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-outline-variant pb-4">
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary drop-shadow-[0_0_8px_rgba(0,219,233,0.4)]">
                      SYSTEM SETTINGS
                  </h1>
      <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" type="button" aria-label="Close" data-action-id="close-1" onClick={actions?.["close-1"]}>
      <X  style={{fontVariationSettings: "'FILL' 0"}} className="text-[32px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-8">
      {/* Difficulty Slider */}
      <div className="flex flex-col gap-4">
      <label className="font-label-mono text-label-mono text-primary uppercase tracking-widest">Difficulty Core</label>
      <div className="grid grid-cols-3 gap-2">
      <button className="bg-surface-variant/50 border border-outline-variant text-on-surface-variant rounded py-2 font-label-mono text-label-mono hover:bg-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="low-2" onClick={actions?.["low-2"]}>
                              Low
                          </button>
      <button className="bg-primary/20 border-2 border-primary text-primary rounded py-2 font-label-mono text-label-mono neon-glow-primary" type="button" data-action-id="med-3" onClick={actions?.["med-3"]}>
                              Med
                          </button>
      <button className="bg-surface-variant/50 border border-outline-variant text-on-surface-variant rounded py-2 font-label-mono text-label-mono hover:bg-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="high-4" onClick={actions?.["high-4"]}>
                              High
                          </button>
      </div>
      </div>
      {/* Input Help */}
      <div className="flex flex-col gap-4 bg-surface-container-low/50 p-4 rounded-lg border border-outline-variant/50">
      <label className="font-label-mono text-label-mono text-primary uppercase tracking-widest">Input Matrix</label>
      <ul className="flex flex-col gap-2">
      <li className="flex justify-between items-center">
      <span className="text-on-surface-variant">Switch Dimension</span>
      <div className="flex gap-2">
      <span className="font-label-mono text-label-mono bg-surface-variant px-2 py-1 rounded border border-outline-variant">Space</span>
      <span className="font-label-mono text-label-mono bg-surface-variant px-2 py-1 rounded border border-outline-variant">Click</span>
      </div>
      </li>
      <li className="flex justify-between items-center">
      <span className="text-on-surface-variant">Pause Execution</span>
      <span className="font-label-mono text-label-mono bg-surface-variant px-2 py-1 rounded border border-outline-variant text-center min-w-[32px]">P</span>
      </li>
      <li className="flex justify-between items-center">
      <span className="text-on-surface-variant">Restart Sequence</span>
      <span className="font-label-mono text-label-mono bg-surface-variant px-2 py-1 rounded border border-outline-variant text-center min-w-[32px]">R</span>
      </li>
      </ul>
      </div>
      {/* Audio */}
      <div className="flex flex-col gap-4">
      <label className="font-label-mono text-label-mono text-primary uppercase tracking-widest">Acoustics</label>
      <div className="flex justify-between items-center">
      <span className="text-on-surface">Sound Effects</span>
      <label className="flex items-center cursor-pointer relative">
      <input defaultChecked={true} className="sr-only switch-checkbox" type="checkbox" />
      <div className="w-12 h-6 bg-surface-variant rounded-full border border-outline-variant transition-colors duration-200 ease-in-out"></div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full transition-transform duration-200 ease-in-out pointer-events-none transform translate-x-6 !bg-on-primary"></div>
      </label>
      </div>
      <div className="flex justify-between items-center">
      <span className="text-on-surface">Music Track</span>
      <label className="flex items-center cursor-pointer relative">
      <input className="sr-only switch-checkbox" type="checkbox" />
      <div className="w-12 h-6 bg-surface-variant rounded-full border border-outline-variant transition-colors duration-200 ease-in-out"></div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full transition-transform duration-200 ease-in-out pointer-events-none"></div>
      </label>
      </div>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-outline-variant">
      <div className="flex gap-4">
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface-variant font-label-mono text-label-mono uppercase py-3 rounded hover:bg-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="back-to-game-5" onClick={actions?.["back-to-game-5"]}>
                          Back to Game
                      </button>
      <button className="flex-1 bg-primary text-on-primary font-label-mono text-label-mono font-bold uppercase py-3 rounded neon-glow-primary neon-glow-primary-hover transition-colors active:scale-95 duration-75" type="button" data-action-id="save-changes-6" onClick={actions?.["save-changes-6"]}>
                          Save Changes
                      </button>
      </div>
      <button className="text-error/80 hover:text-error font-label-mono text-label-mono text-center text-sm transition-colors py-2" type="button" data-action-id="reset-preferences-7" onClick={actions?.["reset-preferences-7"]}>
                      RESET PREFERENCES
                  </button>
      </div>
      </div>
      {/* Background decoration elements to enhance the game feel */}
      <div className="absolute bottom-hud-safe-area right-hud-safe-area z-0 opacity-20 pointer-events-none font-display-score text-display-score text-primary">
              00:42.8
          </div>
      <div className="absolute top-hud-safe-area left-hud-safe-area z-0 opacity-20 pointer-events-none font-label-mono text-label-mono text-secondary-fixed">
              MULTIPLIER: x4
          </div>
      
    </>
  );
}
