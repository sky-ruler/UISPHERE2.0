# Contributing to UISPHERE 2.0 (Tekno Krraft 2026)

Thank you for your interest in contributing to the **Tekno Krraft 2026** event portal for Google Developer Group (GDG) @ SOA, ITER Chapter.

---

## 🛠 Local Development Setup

1. **Fork and Clone the Repository:**
   ```bash
   git clone https://github.com/sky-ruler/UISPHERE2.0.git
   cd UISPHERE2.0
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Local Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Run Unit Tests:**
   ```bash
   npm test
   ```

5. **Verify Production Build:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🎨 Design System Compliance (`DESIGN.md`)

All contributions **must** strictly conform to `DESIGN.md`:
- **Color Discipline:** The single accent color is `#4285F4` (Google Developer Group Blue). Multi-color neon palettes, random gradients, or hot pinks are strictly banned.
- **Surface Elevation:** Use crisp 1px solid borders (`var(--border-subtle)`) and elevated surfaces (`#18181B` / `#202024`). Heavy fuzzy blur shadows are prohibited.
- **Typography:**
  - Headings: `Space Grotesk`
  - Body: `Plus Jakarta Sans`
  - Metadata / Badges / Timers: `JetBrains Mono`
  - *Strict Ban:* Do not import or fall back to `Inter`, `Roboto`, or `Arial`.
- **Spacing Scale:** All spacing, margins, and layout padding must snap to the 8px grid (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).

---

## 📋 Pull Request Guidelines

1. Create a descriptive feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Ensure all unit tests pass:
   ```bash
   npm test
   ```
3. Ensure TypeScript compiles without errors:
   ```bash
   npm run build
   ```
4. Commit using [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` for new capabilities
   - `fix:` for bug fixes
   - `docs:` for documentation updates
   - `style:` for CSS / design system adjustments
   - `refactor:` for code cleanups
5. Open a Pull Request against the `main` branch.
