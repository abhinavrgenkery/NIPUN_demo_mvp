# NIPUN — National Industry Placement & Upskilling Network
## Official Brand Identity & Design System Specification

---

## Brand & Style

This design system serves a mission-critical trifecta: university leaders, enterprise hiring directors, and ambitious candidates advancing their careers. It bridges public institutional authority with the agile clarity of modern EdTech and enterprise SaaS.

### Personality & Tone
- **Institutional Gravitas:** Grounded, rigorously structured, and policy-compliant without appearing bureaucratic or stagnant.
- **Architectural Precision:** Every layout, alignment, and data visual communicates high evidentiary standards, verified milestones, and trust.
- **Upward Momentum:** Forward-looking, optimistic, and catalytic, celebrating human potential and tangible economic mobility.

### Design Movement: Modern Institutional Corporate
The visual strategy integrates crisp Corporate Modernism with calibrated EdTech accessibility:
- Pure surfaces with razor-sharp 1px internal bounding boxes.
- Architectural typographic contrast pairing institutional heavy weights with generous, highly-legible body rhythm.
- Purposeful chromatic coding: administrative stability (Deep Blue), technical innovation (Teal), verified attainment (Green), and urgent opportunity (Amber).

---

## Colors & Tokens

The system uses a deliberate, high-clarity palette tuned for complex governance dashboards, high-volume applicant matrices, and enterprise partner directories.

### Primary Roles
| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `primary` | `#00264b` / `#123c69` | Primary Brand Deep Blue. Anchors primary headers, authoritative actions, national certification seals, and foundational navigation bars. |
| `primary-container` | `#123c69` | Container fill for prominent interactive surfaces and active states. |
| `secondary` | `#006781` / `#0e7490` | Modern Teal. Applied to active technical streams, upskilling metrics, interactive tab states, progress meters, and sub-system highlights. |
| `secondary-container` | `#8fdfff` | Container accent for highlighted chips, metric callouts, and badge backgrounds. |
| `tertiary` / `accent` | `#382000` / `#f59e0b` | Bright Amber. Reserved for urgent placement notices, pending verification alerts, active hiring drives, and focal calls-to-action. |
| `success` | `#16a34a` | Verified Green. Signals validated credential authenticity, secured job placements, upward salary differentials, and passed assessments. |
| `error` | `#ba1a1a` | Critical alerts, expired postings, validation errors. |

### Surface & Background Tokens
| Token | Hex Value | Description |
| :--- | :--- | :--- |
| `background` | `#f8f9ff` | Toned Ice Blue canvas. Eliminates glaring white viewport fatigue in enterprise workflows. |
| `surface` | `#f8f9ff` | Base surface tone. |
| `surface-container-lowest` | `#ffffff` | Pure White. Strictly dedicated to elevated component surfaces, data tiles, and form blocks. |
| `surface-container-low` | `#eff4ff` | Secondary background for section alternating and grouped modules. |
| `surface-container` | `#e6eeff` | Subtle divider container surface. |
| `surface-container-high` | `#dce9ff` | Header notification bars, sovereign institutional banners. |
| `surface-container-highest`| `#d5e3fc` | High-contrast chips, subtle outline pills. |
| `on-surface` | `#0d1c2e` | Slate 900. High-density typographic contrast for critical tabular data, body text, and titles. |
| `on-surface-variant` | `#43474f` / `#475569` | Slate 600. Contextual descriptions, secondary meta-labels, timestamps, and breadcrumbs. |
| `outline` | `#737780` | High-emphasis structural boundaries. |
| `outline-variant` | `#c3c6d0` / `#e2e8f0`| Slate 200. Systematic 1px structural framing for cards, input outlines, and divider rules. |

---

## Typography

Typographic scale is constructed by combining the geometric confidence of **Plus Jakarta Sans** for displays, headers, and UI anchors with the neutral, hyper-legible neutrality of **Inter** for extended body copy and dense tables.

| Role | Font Family | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-lg` | Plus Jakarta Sans | 48px | 800 | 56px | `-0.02em` |
| `display-lg-mobile` | Plus Jakarta Sans | 32px | 800 | 40px | `-0.02em` |
| `headline-xl` | Plus Jakarta Sans | 36px | 700 | 44px | `-0.02em` |
| `headline-xl-mobile` | Plus Jakarta Sans | 26px | 700 | 34px | `-0.01em` |
| `headline-lg` | Plus Jakarta Sans | 28px | 700 | 36px | `-0.015em` |
| `headline-md` | Plus Jakarta Sans | 22px | 600 | 30px | `-0.01em` |
| `headline-sm` | Plus Jakarta Sans | 18px | 600 | 26px | `0em` |
| `body-lg` | Inter | 18px | 400 | 28px | `normal` |
| `body-md` | Inter | 15px | 400 | 24px | `normal` |
| `body-sm` | Inter | 13px | 400 | 20px | `normal` |
| `label-lg` | Plus Jakarta Sans | 14px | 600 | 20px | `0.01em` |
| `label-md` | Plus Jakarta Sans | 12px | 600 | 16px | `0.02em` |
| `label-caps` | Plus Jakarta Sans | 11px | 700 | 16px | `0.06em` |

### Typographic Rules
- **Headlines & Metric Figures**: Always set in Plus Jakarta Sans with tighter tracking (`-0.01em` to `-0.02em`) to convey editorial prestige and structure.
- **Body Rhythm**: All narrative passages, candidate summaries, and corporate program descriptions utilize Inter with an explicit `line-height: 1.6` multiplier to maximize scan-readiness across high-density sessions.
- **Micro-Labels & Metadata**: Apply `label-caps` in uppercase styling with `letter-spacing: 0.06em` for institutional acronyms, cohort tracking badges, and workflow status indicators.

---

## Layout & Spacing

The layout is built on a responsive 12-column structural grid system anchored by an 8pt architectural rhythm (with a 4pt sub-grid for icons and compact UI controls).

### Layout Grid Architecture
- **Desktop (≥ 1280px)**: 12 columns, max-width `1280px` (`80rem`), centered, `24px` (`1.5rem`) gutters, `32px` outer boundary margins.
- **Tablet (768px – 1279px)**: 8 columns, fluid width, `20px` gutters, `24px` horizontal page padding. Side navigation rails collapse into an expandable drawer.
- **Mobile (< 768px)**: 4 columns, fluid width, `16px` (`1rem`) gutters, `16px` outer page margins. Metrics grids reflow to single-column or 2-column paired cards.

### Spacing Tokens
- `space-xxs`: `0.25rem` (4px)
- `space-xs`: `0.5rem` (8px)
- `space-sm`: `0.75rem` (12px)
- `space-md`: `1rem` (16px)
- `space-lg`: `1.5rem` (24px)
- `space-xl`: `2rem` (32px)
- `space-2xl`: `3rem` (48px)
- `space-3xl`: `4rem` (64px)

---

## Elevation & Depth

Visual hierarchy uses physical boundaries reinforced by soft, blue-tinted ambient occlusion rather than heavy drop shadows. Every card maintains crisp separation against the `#F4F8FC` canvas.

- **Tier 0 (Canvas Base)**: `#F4F8FC`. Flat, structural foundation layer.
- **Tier 1 (Resting Cards & Modules)**: Background `#FFFFFF`, border `1px solid #E2E8F0`, shadow `0 1px 3px 0 rgba(18, 60, 105, 0.04), 0 1px 2px -1px rgba(18, 60, 105, 0.03)`.
- **Tier 2 (Hover States & Active Units)**: Background `#FFFFFF`, border `1px solid #CBD5E1`, shadow `0 10px 15px -3px rgba(18, 60, 105, 0.07), 0 4px 6px -4px rgba(18, 60, 105, 0.04)`. Elevates slightly with a `-2px` Y-axis transition.
- **Tier 3 (Modals, Overlays & Flyouts)**: Background `#FFFFFF`, border `1px solid #E2E8F0`, shadow `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`. Accompanied by a backdrop blur scrim: `rgba(15, 23, 42, 0.45)` with `backdrop-filter: blur(4px)`.

---

## Shapes & Radii

- **Base Elements (`rounded`, 0.25rem / 4px)**: Checkboxes, table row selectors, inline data tags, and micro-indicators.
- **Components (`rounded-lg`, 0.5rem / 8px)**: Standard buttons, text form inputs, dropdown selectors, alert banners, and standard data cards.
- **Containers (`rounded-xl`, 0.75rem / 12px)**: Primary modal dialogues, comprehensive analytical dashboard sections, and elevated verified profile views.
- **Pill Exceptions (`rounded-full`, 9999px)**: Solely applied to status chips, verified partner credentials, and candidate trajectory tags.

---

## Component Guidelines

### Buttons
- **Primary Action**: Background `#123C69`, text `#FFFFFF`, radius `8px`, font Plus Jakarta Sans 600. Hover: `#0D2E51`. Active: `#0A233F`. Focus: `0 0 0 3px rgba(18, 60, 105, 0.25)`.
- **Secondary Action (Upskill/Action)**: Background `#0E7490`, text `#FFFFFF`, radius `8px`. Hover: `#0B5E75`.
- **Outline / Institutional**: Background `#FFFFFF`, text `#123C69`, border `1px solid #E2E8F0`, radius `8px`. Hover: background `#F8FAFC`, border `#CBD5E1`.
- **Accent Action**: Background `#F59E0B`, text `#0F172A` (weight 700), radius `8px`. Hover: `#D97706`, text `#FFFFFF`.

### Badges & Chips
- **Verified Enterprise Partner**: Background `#F0FDFA`, text `#0F766E`, border `1px solid #99F6E4`, radius `9999px`.
- **Milestone & Placement Status**: Background `#F0FDF4`, text `#15803D`, border `1px solid #BBF7D0`, radius `9999px`.
- **Pending / Action Required**: Background `#FFFBEB`, text `#B45309`, border `1px solid #FDE68A`, radius `9999px`.
- **Category / Skill Tags**: Background `#F1F5F9`, text `#475569`, border `1px solid #E2E8F0`, radius `4px`.
