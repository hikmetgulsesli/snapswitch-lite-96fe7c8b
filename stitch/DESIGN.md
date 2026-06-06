---
name: SnapSwitch Lite
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#fff3d2'
  on-secondary: '#3a3000'
  secondary-container: '#fdd400'
  on-secondary-container: '#6f5c00'
  tertiary: '#fff3f2'
  on-tertiary: '#680008'
  tertiary-container: '#ffcec9'
  on-tertiary-container: '#c10018'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffe170'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#930010'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-score:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.05em
  display-score-mobile:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 30px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  hud-safe-area: 24px
---

## Brand & Style
The design system is engineered for high-velocity interaction and instant visual feedback. It targets a competitive gaming audience that values precision and mechanical clarity. The aesthetic merges **Minimalism** with **Glassmorphism**, stripping away unnecessary UI chrome to keep the player focused on the "Switch" mechanic.

The emotional response should be one of "controlled chaos"—a dark, immersive environment where neon elements pop with hyper-clarity. The UI feels deterministic; every action has a clear, glowing reaction, reinforcing the player's sense of agency in a fast-paced environment.

## Colors
This design system utilizes a high-contrast dark palette to maximize the "neon" effect of functional elements.
- **Primary (Electric Cyan):** Used for the player character, the "Switch" action, and active state indicators.
- **Secondary (Pulse Yellow):** Reserved for rewards, collectibles, and progress milestones.
- **Tertiary (Warning Red):** Used exclusively for blockers, hazards, and "Game Over" states.
- **Neutral (Deep Charcoal/Navy):** The background layer (`#0A0C10`) provides deep immersion, while lighter variations are used for glassmorphic surfaces.

All interactive elements must maintain a high contrast ratio against the dark background to ensure visibility during high-speed gameplay.

## Typography
The typography strategy separates functional UI from game-state data. 
- **Geist** is used for bold, impactful headers and menu titles, providing a sharp, technical edge.
- **Inter** handles all body copy and instructional text for maximum readability.
- **JetBrains Mono** is utilized for the HUD, including scores, timers, and multipliers. The monospaced nature prevents "digit jumping" during rapid score updates, ensuring the UI feels stable and precise.

For mobile, display scores scale down to 32px to ensure the HUD does not obscure the central gameplay area.

## Layout & Spacing
The layout follows a **Fluid Grid** model designed to keep the action centered. 
- **The Gameplay Zone:** A central vertical column that adapts to the screen aspect ratio, ensuring hazards are always visible.
- **The HUD Layer:** Elements are anchored to the "Safe Area" corners (24px from edges).
- **Spacing Rhythm:** Based on a 4px baseline. Use 16px (4 units) for standard grouping and 32px (8 units) for section separation.

On mobile, margins are tighter (20px) to maximize the field of play, while desktop layouts utilize generous 40px margins to prevent the UI from feeling stretched.

## Elevation & Depth
Depth is created through **Glassmorphism** and light emission rather than traditional shadows.
- **Surface Layer:** UI panels use a semi-transparent background (10-15% opacity) with a high-intensity `backdrop-filter: blur(12px)`.
- **Glowing Borders:** Instead of shadows, active elements use a 1px inner stroke and an outer 4px-8px "glow" (box-shadow) using the primary or secondary color at 40% opacity.
- **Layering:** Level 1 (Background) is solid; Level 2 (HUD Panels) is blurred glass; Level 3 (Active Buttons/Player) is high-luminance neon.

## Shapes
This design system uses a **Rounded** (0.5rem) shape language to balance the aggressive tech aesthetic with a modern, premium feel. 
- **Containers:** 0.5rem (8px) base radius.
- **Large HUD elements:** 1rem (16px) radius for a softer, integrated look.
- **Interactive Buttons:** Always use the base 8px radius to maintain a distinct, clickable appearance.
- **Hazards:** Sharp 0px corners are reserved exclusively for blockers/hazards to subconsciously signal "danger" to the player.

## Components
- **Buttons:** High-contrast cyan fills for primary actions. On hover/active states, the button should emit a "pulse" glow.
- **HUD Chips:** Glassmorphic capsules containing monospaced labels for "Time" and "Multiplier."
- **Progress Bars:** Thin, 4px height bars. The fill should be a gradient from the primary color to the secondary color to show momentum.
- **Input Fields:** Minimalist outlines that glow primary cyan when focused.
- **Cards (Post-Game):** Translucent glass panels with large monospaced scores and secondary-colored "New High Score" badges.
- **Switch Toggle:** A custom component for the "SnapSwitch" mechanic—a high-speed animated toggle that flashes white upon state change before settling into the primary cyan.