# DESIGN SYSTEM SPECIFICATION (UISPHERE 2.0)

**Project:** Tekno Krraft 2026 — GDG @ SOA, ITER Chapter  
**Target:** Strict Design System for Web & Event Portal  
**Status:** Canonical & Enforced  

---

## 1. Theme & Color Foundation

### Choice & Justification
- **Selected Palette:** **Matte Dark Charcoal (`#0F0F10`)** with **Off-White text (`#F4F4F5`)**.
- **Rationale:** Aligns with the official dark-mode GDG brand assets (`gdg-logo-dark.svg`, `gdg-logo-stacked-dark.svg`), high-performance developer terminals, and engineering fest conventions. Eliminates eye fatigue and creates strong contrast for code, data badges, and schedule rows.
- **Single Brand Accent:** **`#4285F4`** (Google Developer Group Blue). No competing secondary or tertiary accent hues.

### Color Tokens

| Token Name | Hex / Value | Usage & Context |
| :--- | :--- | :--- |
| `--bg-canvas` | `#0F0F10` | Base canvas background (matte dark charcoal). |
| `--bg-surface-1` | `#18181B` | Primary cards, panels, schedule rows, containers. |
| `--bg-surface-2` | `#202024` | Elevated elements, hovered cards, input backgrounds, active tabs. |
| `--text-primary` | `#F4F4F5` | Main headings, card titles, key metric numbers, active links. |
| `--text-secondary` | `#71717A` | Sub-headlines, descriptions, metadata, inactive tabs, captions. |
| `--text-muted` | `#52525B` | Footnotes, legal disclaimers, disabled states. |
| `--accent` | `#4285F4` | **The SINGLE accent color.** Active indicators, CTA buttons, key highlights. |
| `--accent-hover` | `#3B82F6` | Hover state for accent buttons and links. |
| `--accent-active` | `#2563EB` | Active / pressed state for primary buttons. |
| `--accent-subtle` | `rgba(66, 133, 244, 0.08)` | Chip backgrounds, active schedule row tint, subtle focus rings. |
| `--accent-border` | `rgba(66, 133, 244, 0.25)` | Border on active / focused interactive elements. |
| `--border-subtle` | `#27272A` | Crisp 1px borders across all cards, dividers, and containers. |
| `--border-strong` | `#3F3F46` | Separators on hover, input focus boundaries. |

> **STRICT BAN:** No multi-color neon palettes (no random mixes of cyan, hot pink, purple, lime green). All interactive emphasis must derive exclusively from `--accent` (`#4285F4`).

---

## 2. Gradients & Background Architecture

### Prohibited Patterns
- **STRICTLY PROHIBITED:** Floating multi-color neon blur blobs, glowing orb animations, multi-stop gradient text, and rainbow gradient buttons.

### Permitted Background Treatments
1. **Subtle CSS Dot-Matrix Pattern (5% Opacity):**
   ```css
   .bg-dot-matrix {
     background-color: #0F0F10;
     background-image: radial-gradient(rgba(244, 244, 245, 0.05) 1px, transparent 1px);
     background-size: 24px 24px;
   }
   ```
2. **Subtle 1px Grid Pattern (5% Opacity - Alternative):**
   ```css
   .bg-grid-pattern {
     background-color: #0F0F10;
     background-image: 
       linear-gradient(to right, rgba(244, 244, 245, 0.05) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(244, 244, 245, 0.05) 1px, transparent 1px);
     background-size: 48px 48px;
   }
   ```
3. **Top-Edge Radial Spotlight (At Most ONE per Page, Max 10% Opacity):**
   ```css
   .bg-hero-spotlight {
     background: radial-gradient(
       ellipse 80% 50% at 50% -10%,
       rgba(66, 133, 244, 0.10) 0%,
       rgba(15, 15, 16, 0) 70%
     );
   }
   ```

---

## 3. Typography System

### Font Stack Specifications
* **Headings (H1, H2, H3, H4):** `'Space Grotesk', -apple-system, sans-serif`
  * Weights: `600` (Semi-bold), `700` (Bold)
  * Letter-spacing: `-0.03em`
  * Line-height: `1.05` to `1.15`
  * Purpose: Delivers an assertive, technical, contemporary developer-tool aesthetic.
* **Body Text & General UI:** `'Plus Jakarta Sans', -apple-system, sans-serif`
  * Weights: `400` (Regular), `500` (Medium), `600` (Semi-bold)
  * Letter-spacing: `-0.01em`
  * Line-height: `1.5` to `1.6`
  * Purpose: Optimized for readability in dark mode without stroke erosion.
* **Metadata, Dates, Badges & Tags:** `'JetBrains Mono', monospace`
  * Size: `12px` (fixed)
  * Text-transform: `uppercase`
  * Letter-spacing: `0.05em` (tracking wide)
  * Weight: `500` / `600`
  * Line-height: `1.0` to `1.2`
  * Purpose: Terminal-like precision for timestamps, difficulty levels, and room codes.

### Font Bans
> **EXPLICITLY BANNED:** `Inter`, `Roboto`, `Arial`. Do not load, import, or fallback to these generic typefaces.

### Hierarchy Scale

| Level | Font Family | Size | Weight | Tracking | Leading |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | `Space Grotesk` | 56px – 64px | 700 | `-0.03em` | `1.05` |
| **H2 Section** | `Space Grotesk` | 32px – 40px | 700 | `-0.03em` | `1.10` |
| **H3 Card** | `Space Grotesk` | 20px – 24px | 600 | `-0.025em`| `1.20` |
| **H4 Subtitle** | `Space Grotesk` | 16px – 18px | 600 | `-0.02em` | `1.30` |
| **Body Large** | `Plus Jakarta Sans` | 16px – 18px | 400/500 | `-0.01em` | `1.55` |
| **Body Regular**| `Plus Jakarta Sans` | 14px – 15px | 400/500 | `normal` | `1.50` |
| **Body Small** | `Plus Jakarta Sans` | 13px | 400 | `normal` | `1.45` |
| **Mono Badge** | `JetBrains Mono` | 12px | 600 | `+0.05em` | `1.00` (UPPERCASE) |

---

## 4. Component Sizing, Spacing & Proportions

### Spacing Scale (8px Grid)
All padding, margin, gap, and layout sizing strictly snaps to multiples of `8px`:
- `8px` (`0.5rem`) — Micro gaps, inner icon margins.
- `16px` (`1.0rem`) — Card inner padding (compact), button horizontal gaps.
- `24px` (`1.5rem`) — Standard card padding, grid gutters.
- `32px` (`2.0rem`) — Large container padding, block separation.
- `40px` (`2.5rem`) — Medium component spacing.
- `48px` (`3.0rem`) — Input and button standard target heights.
- `64px` (`4.0rem`) — Desktop navigation bar height, medium section padding.
- `96px` (`6.0rem`) — Primary vertical section padding (`py-24`).

### Navigation Bar
- **Desktop Height:** Exactly `64px` (`h-16`).
- **Mobile Height:** Exactly `56px` (`h-14`).
- **Position:** Sticky top with backdrop blur (`rgba(15, 15, 16, 0.85)` + `backdrop-filter: blur(12px)`).
- **Border:** 1px solid `#27272A` on the bottom edge.

### Buttons & Inputs
- **Height:** Standardized to **`44px – 48px`** (strictly enforced).
- **Padding Ratio:** **1:2 Vertical-to-Horizontal ratio**.
  - Example (48px height): `py-3 px-6` (`12px` top/bottom, `24px` left/right).
  - Example (44px height): `py-2.5 px-5` (`10px` top/bottom, `20px` left/right).
- **Primary Button Styling:**
  - Solid background: `#4285F4` (NO gradients).
  - Text: `#FFFFFF`, `Plus Jakarta Sans`, weight 600.
  - Border: None.
  - Hover: `#3B82F6` (smooth 150ms ease transition).
- **Secondary Button Styling:**
  - Background: `#18181B`.
  - Border: 1px solid `#27272A`.
  - Text: `#F4F4F5`, `Plus Jakarta Sans`, weight 500.
  - Hover: Background `#202024`, Border `#3F3F46`.
- **Form Inputs:**
  - Height: `44px` or `48px`.
  - Background: `#18181B`.
  - Border: 1px solid `#27272A`.
  - Text: `#F4F4F5`. Placeholder: `#71717A`.
  - Focus Ring: 1px solid `#4285F4` with `0 0 0 1px #4285F4` (crisp, zero fuzzy spread).

### Progress & Divider Bars
- **Height:** Strictly **`6px – 8px`** (`h-1.5` to `h-2`).
- **Track Base:** Solid `#27272A`.
- **Progress Fill:** Solid `#4285F4`.
- **Dividers:** 1px solid `#27272A` (`w-full` or `h-full`).

### Border-Radius Discipline
To prevent awkward mismatched corners, outer and inner radii follow mathematical nesting:
- Outer Cards / Bento Containers: **`12px`** (`rounded-xl`).
- Nested Controls / Inner Elements: **`8px`** (`rounded-lg`).
  *Formula:* $R_{\text{inner}} = \max(0, R_{\text{outer}} - \text{padding})$. For a 12px outer card with 4px inner inset, inner radius is 8px.
- Progress Bars & Small Badges: **`6px`** or consistent **`8px`**.
- Primary & Action Buttons: Matching **`8px`** for a cohesive structural feel.

---

## 5. Layout Architecture & Anti-Patterns

### Vertical Cadence
- **Section Padding:** Strictly **`py-24` (`96px`)** on desktop, **`py-16` (`64px`)** on mobile.
- **Section Headers:** Clean left-aligned or centered overline (`JetBrains Mono`, 12px, tracking 0.05em) + H2 (`Space Grotesk`, -0.03em) + short description (`#71717A`).

### Elevation by Crisp 1px Borders
- **PROHIBITED:** Heavy blur drop-shadows, glow filters, or fuzzy cards.
- **ENFORCED:** Cards, tabs, headers, and modals rely on crisp **1px solid `#27272A`** borders with flat elevated surface tones (`#18181B` / `#202024`). Depth is achieved through contrast, not blur.

### Card Grids: Zero Generic 3-Column Icon Grids
> **STRICT BAN:** No standard cookie-cutter 3-column cards with a generic centered icon, 3-word title, and 2-sentence filler text.

#### Approved Layout Alternatives:
1. **Asymmetric 4-Tile Bento Grid (Stats & Overview):**
   - High-density layout pairing a 2-column wide featured metric with stacked compact telemetry units.
2. **Horizontal Schedule Strip Cards:**
   - Full-width row cards (`p-4 sm:p-5`) featuring time block in `JetBrains Mono` on the left, session details and speaker metadata in the center, and clear action pills on the right.
3. **Split Detail View (Tracks & Workshops):**
   - Left-column sticky syllabus overview and track navigator; right-column detailed breakdown of modules, prerequisites, and registration actions.
4. **Structured Data Rows (FAQ & Details):**
   - Full-width expandable accordion strips with explicit 1px divider lines and clean typographic hierarchy.

---

## 6. Implementation Reference Tokens (Tailwind / CSS)

```css
:root {
  /* Colors */
  --color-canvas: #0F0F10;
  --color-surface-1: #18181B;
  --color-surface-2: #202024;
  --color-text-primary: #F4F4F5;
  --color-text-secondary: #71717A;
  --color-text-muted: #52525B;
  --color-accent: #4285F4;
  --color-accent-hover: #3B82F6;
  --color-accent-active: #2563EB;
  --color-border: #27272A;
  --color-border-hover: #3F3F46;

  /* Typography */
  --font-heading: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Sizing */
  --nav-height-desktop: 64px;
  --nav-height-mobile: 56px;
  --control-height: 48px;
  --bar-height: 6px;
  --radius-card: 12px;
  --radius-control: 8px;
}
```

---

**This design system is strictly enforced for all UI components, pages, and layouts in the UISPHERE 2.0 codebase.**
