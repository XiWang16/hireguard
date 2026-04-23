# HireGuard — Design Handoff

## Overview
This package contains a high-fidelity interactive prototype of the HireGuard UI — a multi-agent hiring screening and fairness-audit platform. The design covers the core dashboard, candidate pipeline, background checks, and a collapsible sidebar shell.

## About the Design Files
`HireGuard.html` is a **design reference prototype** built in plain HTML + React (Babel). It is **not production code** — do not copy it directly. Your task is to **recreate these designs inside the existing HireGuard codebase** using the stack defined in `CLAUDE.md`:

- React 19 + TypeScript (strict, no `any`)
- Tailwind CSS 4 (utility classes only — no CSS files)
- TanStack Router for routing
- Zustand for client UI state (sidebar collapse, selected candidate, dark mode)
- Convex `useQuery` / `useMutation` for all real data
- `clsx` for conditional class composition
- Named exports for components; default exports for pages

Open `HireGuard.html` in a browser to interact with the full prototype as a visual reference.

---

## Fidelity
**High-fidelity.** Pixel-level reference. Recreate colors, spacing, typography, transitions, and hover states exactly as shown. Real data from Convex will replace the mock arrays.

---

## Design Tokens

### Colors (CSS custom properties — translate to Tailwind `@theme` in `index.css`)

#### Light mode
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F8F7F5` | Page background |
| `--bg-2` | `#EFEDE9` | Card / sidebar background |
| `--bg-3` | `#E5E2DC` | Input fill, tag background |
| `--fg` | `#141311` | Primary text |
| `--fg-2` | `#6B6860` | Secondary text |
| `--fg-3` | `#9E9B96` | Tertiary text, placeholders |
| `--border` | `rgba(0,0,0,0.08)` | Card borders |

#### Dark mode (class `.dark` on `<html>`)
| Token | Value |
|---|---|
| `--bg` | `#111110` |
| `--bg-2` | `#1A1917` |
| `--bg-3` | `#242220` |
| `--fg` | `#F2F0EB` |
| `--fg-2` | `#9C9A95` |
| `--fg-3` | `#5C5A56` |
| `--border` | `rgba(255,255,255,0.07)` |

#### Semantic colors (same in both modes)
| Token | Value | Usage |
|---|---|---|
| `--accent` | `oklch(0.62 0.12 210)` | Buttons, active nav, links |
| `--accent-dim` | `oklch(0.62 0.12 210 / 0.12)` | Active nav background, chip backgrounds |
| `--green` | `oklch(0.58 0.12 155)` | Pass / low risk |
| `--green-dim` | `oklch(0.58 0.12 155 / 0.12)` | Green chip background |
| `--amber` | `oklch(0.65 0.13 72)` | Medium risk / pending |
| `--amber-dim` | `oklch(0.65 0.13 72 / 0.12)` | Amber chip background |
| `--red` | `oklch(0.58 0.14 22)` | High risk / fail |
| `--red-dim` | `oklch(0.58 0.14 22 / 0.12)` | Red chip background |

### Typography
- **Font family**: `DM Sans` (Google Fonts) — load via `<link>` in `index.html`
- **Mono**: `DM Mono` — for code/ID fields
- Sizes: 11px (labels/tags) · 12px (meta) · 13px (body/nav) · 13.5px (list names) · 14px (base) · 15px (page title) · 18px (detail heading) · 28px (stat values)
- All display text: `letter-spacing: -0.02em` to `-0.04em`
- `-webkit-font-smoothing: antialiased` on `body`

### Spacing & Shape
- Card border-radius: `10px`
- Button / input border-radius: `6px`
- Badge border-radius: `999px`
- Card padding: `18–24px`
- Sidebar width (expanded): `210px` · (collapsed): `58px`
- Topbar height: `54px`

### Shadows
```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04);
--shadow:    0 4px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04);
--shadow-lg: 0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
/* Dark mode: multiply alpha by ~4 */
```

### Transitions
- Default: `200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Slow (entrance): `350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Sidebar width: `350ms` same easing

---

## Screens & Views

### 1. App Shell
**Layout**: full-height flex row — `<aside>` (sidebar) + `<div>` (flex column: topbar + `<main>`).

**Sidebar** (`bg-[--bg-2] border-r border-[--border]`):
- Collapsible: `w-[210px]` expanded → `w-[58px]` collapsed, animated with CSS transition
- Logo row at top: shield icon (accent-colored `10px` radius square `28×28`) + "HireGuard" wordmark
- Collapse/expand toggle button (chevron icon)
- Nav items (see nav list below): active item gets left `2.5px` accent bar + `bg-[--accent-dim]` + accent text color
- User row at bottom: avatar + name + role (hidden when collapsed)

**Nav items** (in order):
1. Dashboard — house icon
2. Candidates — group icon  
3. Checks — shield-check icon
4. Reports — document-chart icon
5. Settings — cog icon

**Topbar** (`h-[54px] bg-[--bg] border-b`):
- Left: current page title `text-[15px] font-medium`
- Right: "New Candidate" primary button + dark-mode toggle + notifications bell (with red dot badge)

**Dark mode toggle**: persisted to `localStorage` key `hg-dark`; default = `prefers-color-scheme`. Toggle adds/removes class `dark` on `<html>`.

---

### 2. Dashboard (`/`)
**Layout**: single column, `gap-24px` between sections.

**Stat cards row** — 4-column grid, `gap-12px`:
| Label | Value | Delta |
|---|---|---|
| Active Candidates | 48 | +12% |
| Checks Completed | 134 | +8% |
| Avg. Risk Score | 72 | +3pts |
| Offers Extended | 6 | +2 |

Each card: `bg-[--bg-2]`, `rounded-[10px]`, `p-[20px_22px]`, label `text-[13px] text-[--fg-2]`, value `text-[28px] font-medium tracking-[-0.03em]`, delta green/red `text-[12px] font-medium`. Entrance: staggered `translateY(12px)→0 + opacity 0→1`, delays `0/60/120/180ms`.

**Two-column row** (`1.3fr 1fr`):

*Recent Candidates card* (`bg-[--bg-2]`):
- Header: "Recent Candidates" + "View all →" (accent link)
- List of last 5 candidates as `CandidateRow` components (see below)

*Live Activity feed card*:
- "Live Activity" header
- List of 5 activity items: colored dot (green/amber/accent) + title + subtitle + relative time

---

### 3. Candidates (`/candidates`)
**Layout**: 2-column grid `1fr 1.6fr`, full height.

**Left — Candidate list**:
- "All Candidates" header + count badge
- Search input with magnifier icon (focus ring: `border-[--accent] shadow-[0_0_0_2px_var(--accent-dim)]`)
- `CandidateRow` for each candidate (see below)

**CandidateRow**:
- Avatar (colored initials circle, hue derived from initials) `36px`
- Name + verified checkmark (accent) + role (secondary)
- Stage badge (right) + Risk badge (right)
- Selected state: `border-l-2 border-[--accent] bg-[--accent-dim]`
- Hover: `bg-[--bg-3]`
- Entrance: staggered `translateX(-8px)→0`, 40ms delay per row

**Right — Candidate detail** (animates `scaleIn` on selection change):
- Avatar `52px` + name + verified icon + role + tag chips
- Score ring: SVG circle progress `52px`, color = green/amber/red by score
- Stage + Risk + Date badges
- Background checks list (6 items, see below)
- "Advance Stage" (accent) + "Flag for Review" (secondary) action buttons

**CheckItem**:
- Icon: checkmark-circle (pass) / x-circle (fail) / clock (pending)
- Label + detail text
- Status badge (right)
- `border-b border-[--border-2]` between items

---

### 4. Checks (`/checks`)
3-column stat row (Running / Completed Today / Flagged) + full check list below.

### 5. Reports / Settings
Placeholder — centered icon + "Coming soon" text.

---

## Interactions & Animations

### Entrance animations (define in Tailwind `@keyframes` or inline)
```css
@keyframes fadeUp   { from { opacity:0; transform:translateY(10px) } to { opacity:1; transform:translateY(0) } }
@keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
@keyframes scaleIn  { from { opacity:0; transform:scale(0.96) } to { opacity:1; transform:scale(1) } }
@keyframes slideInRight { from { opacity:0; transform:translateX(20px) } to { opacity:1; transform:translateX(0) } }
```
Use `animation-fill-mode: both` on all entrance animations.

### Hover states
- Nav items: `bg-[--bg-3] text-[--fg]` on hover
- Primary buttons: `opacity-[0.88] translateY(-1px)` on hover
- Secondary buttons: `translateY(-1px)` on hover
- Icon buttons (topbar): `bg-[--bg-3] scale-[1.05]` on hover
- Score ring: SVG `stroke-dasharray` transitions `0.8s cubic-bezier(0.25,0.46,0.45,0.94)` on mount

---

## State Management (Zustand)

Create `src/stores/uiStore.ts`:
```typescript
interface UIStore {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (v: boolean) => void;
  selectedCandidateId: string | null;
  setSelectedCandidateId: (id: string | null) => void;
  activeNav: 'dashboard' | 'candidates' | 'checks' | 'reports' | 'settings';
  setActiveNav: (v: UIStore['activeNav']) => void;
}
```
`darkMode` syncs to `localStorage` key `hg-dark` and `class="dark"` on `<html>`. **Do not use localStorage directly elsewhere** — per CLAUDE.md, Zustand is the only client state mechanism.

---

## Convex Schema (extend `convex/schema.ts`)

The prototype uses mock data. Map it to real Convex tables:

```typescript
candidates: defineTable({
  name: v.string(),
  role: v.string(),
  stage: v.union(v.literal("Screening"), v.literal("Interview"), v.literal("Review"), v.literal("Offer")),
  riskLevel: v.union(v.literal("low"), v.literal("medium"), v.literal("high")),
  score: v.number(),          // 0–100
  tags: v.array(v.string()),
  verified: v.boolean(),
  appliedAt: v.number(),      // Unix ms
}),

backgroundChecks: defineTable({
  candidateId: v.id("candidates"),
  label: v.string(),
  status: v.union(v.literal("pass"), v.literal("fail"), v.literal("pending")),
  detail: v.string(),
}),

activityLog: defineTable({
  text: v.string(),
  subtext: v.string(),
  type: v.union(v.literal("success"), v.literal("warning"), v.literal("info")),
  createdAt: v.number(),
}),
```

---

## Avatar Color Logic
Avatar hue is derived deterministically from initials:
```typescript
const hue = (initials.charCodeAt(0) * 7 + initials.charCodeAt(1) * 13) % 360;
// bg: oklch(0.62 0.10 {hue} / 0.18)
// border: oklch(0.62 0.10 {hue} / 0.30)
// text: oklch(0.55 0.12 {hue})
```

---

## Assets
- **Shield logo**: inline SVG (see prototype) — a filled shield path + checkmark stroke, both white on accent background
- **Icons**: all Heroicons outline style, `strokeWidth=1.6`, `strokeLinecap/Join=round`. No icon library needed — draw as inline SVG `<path>` elements
- **DM Sans + DM Mono**: load from Google Fonts in `index.html`

---

## Files in This Package
| File | Description |
|---|---|
| `HireGuard.html` | Full interactive hi-fi prototype — open in browser |
| `README.md` | This document |

---

## Implementation Order (suggested)
1. Add DM Sans/Mono to `index.html`
2. Extend `index.css` with `@theme` tokens (colors, shadows, transitions)
3. Build `uiStore.ts` (dark mode, sidebar, nav)
4. Build the `AppShell` layout (sidebar + topbar)
5. Implement `DashboardPage` with stat cards + activity feed (mock data first)
6. Implement `CandidatesPage` (list + detail panel)
7. Implement `ChecksPage`
8. Extend Convex schema; wire `useQuery` to replace mock arrays
9. Add entrance animations via Tailwind `animate-*` utilities or inline styles
