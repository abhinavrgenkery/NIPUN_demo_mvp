# NIPUN — National Industry Placement & Upskilling Network
### Live Competition Prototype MVP (Exported from Google Stitch `projects/15141067284103482666`)

Welcome to the **NIPUN Prototype MVP**. NIPUN is a digital public workforce platform connecting universities, students, and enterprise recruiters with competency-mapped frameworks and verified credentials.

---

## 🏆 Competition Pitch & Live Demonstration

For judges and presenters, visit the **[Competition Pitch Guide](file:///c:/Users/Abhinav/Documents/NGA/competition-guide.html)**:
- **1-Minute Elevator Pitch**: The curriculum-industry alignment crisis in higher education.
- **3-Minute Live Click Script**: Step-by-step presentation sequence showing cross-role real-time workflows.
- **Top Control Banner**: Integrated across all pages to instantly switch between the 3 demo users and trigger simulated live events.

### 🎭 Pre-Seeded Demo Personas
1. **🎓 Student Persona**: `Aarav Sharma` (Final Year B.Tech CSE, IIT Delhi, NSQF Level 7, AI/Cloud specialist).
   - *Key Actions*: One-click Instant Apply with cryptographic passport, take 1-minute skill benchmark, track interview scheduling.
2. **🏢 Enterprise Recruiter Persona**: `Priya Nair` (Head of Campus Talent, Tata Digital / TelcoX Cloud).
   - *Key Actions*: Review candidate match scores, advance applicants in ATS pipeline, post new industrial roles.
3. **🏛️ Institution Director Persona**: `Prof. K. Raman` (Dean of Placements, IIT Delhi).
   - *Key Actions*: Track real-time placement velocity, syllabus alignment against GCC tech stacks, monitor consortium nodes.

---

## 🚀 Quick Navigation Catalog

Every screen is fully functional, styled with Tailwind CSS, Google Fonts (**Plus Jakarta Sans** and **Inter**), and Material Symbols. A floating switcher (`✦ Screens (11)`) and the top demo control bar are included across all pages.

| Screen | File | Target Viewport | Key Features |
| :--- | :--- | :--- | :--- |
| **Pitch Guide** | [`competition-guide.html`](file:///c:/Users/Abhinav/Documents/NGA/competition-guide.html) | Desktop | Live pitch script, interactive persona cards, judging criteria alignment |
| **Landing Page** | [`index.html`](file:///c:/Users/Abhinav/Documents/NGA/index.html) | Desktop | Hero, sovereign trust badge, NSQF framework tiers, partner logos, statistics |
| **Student Dashboard** | [`student-dashboard.html`](file:///c:/Users/Abhinav/Documents/NGA/student-dashboard.html) | Desktop | Live readiness score (88% → 94%), active interview banner, recommended roles |
| **Opportunities Catalog** | [`opportunities.html`](file:///c:/Users/Abhinav/Documents/NGA/opportunities.html) | Desktop | Live apply buttons, dynamic search & filtering, displays newly posted roles |
| **Applicant Pipeline** | [`applicant-pipeline.html`](file:///c:/Users/Abhinav/Documents/NGA/applicant-pipeline.html) | Desktop | Reactive ATS table, live stage dropdowns (`Shortlisted`, `Interview`, `Accepted`) |
| **Post Opportunity** | [`post-opportunity.html`](file:///c:/Users/Abhinav/Documents/NGA/post-opportunity.html) | Desktop | Employer posting form that publishes roles dynamically to the live catalog |
| **Student Portfolio** | [`student-portfolio.html`](file:///c:/Users/Abhinav/Documents/NGA/student-portfolio.html) | Desktop | Verified student dossier, cryptographic credential hash audit, digital seal |
| **Institution Analytics** | [`institution-analytics.html`](file:///c:/Users/Abhinav/Documents/NGA/institution-analytics.html) | Desktop | University leader portal, cohort placement velocity, salary differentials |
| **Node Directory** | [`node-directory.html`](file:///c:/Users/Abhinav/Documents/NGA/node-directory.html) | Desktop | National directory of 2,400+ federated institutional and regional nodes |
| **Design System Spec** | [`design-system.html`](file:///c:/Users/Abhinav/Documents/NGA/design-system.html) | Desktop | Visual interactive guide of brand colors, typography scales, components |
| **Mobile Experience** | [`mobile-preview.html`](file:///c:/Users/Abhinav/Documents/NGA/mobile-preview.html) | Mobile | Responsive layout optimized for mobile student workflows |

---

## 🎨 Design System & Tokens

Detailed specifications are available in:
- 📖 [**`DESIGN_SYSTEM.md`**](file:///c:/Users/Abhinav/Documents/NGA/DESIGN_SYSTEM.md): Complete guidelines for color roles, elevation tiers, shapes, button states, and 12-column grid layout.
- ⚙️ [**`stitch-project.json`**](file:///c:/Users/Abhinav/Documents/NGA/stitch-project.json): Raw Stitch project schema, screen instances, and theme parameters.

### Core Brand Colors
- **Primary Brand**: `#123C69` (Deep Blue)
- **Secondary**: `#0E7490` (Modern Teal)
- **Accent**: `#F59E0B` (Bright Amber)
- **Success / Verified**: `#16A34A` (Verified Green)
- **Background**: `#F8F9FF` (Ice Blue Canvas)
- **Surface**: `#FFFFFF` (Pure White)

---

## 📦 Assets & Screenshots

- **Brand Logo (Vector SVG)**: [`assets/nipun-logo.svg`](file:///c:/Users/Abhinav/Documents/NGA/assets/nipun-logo.svg)
- **Candidate Headshot**: [`assets/candidate-headshot.png`](file:///c:/Users/Abhinav/Documents/NGA/assets/candidate-headshot.png)
- **State & Presentation Engine**:
  - [`assets/demo-store.js`](file:///c:/Users/Abhinav/Documents/NGA/assets/demo-store.js): Reactive client-side storage engine
  - [`assets/demo-banner.js`](file:///c:/Users/Abhinav/Documents/NGA/assets/demo-banner.js): Global presentation switcher bar
  - [`assets/nav-switcher.js`](file:///c:/Users/Abhinav/Documents/NGA/assets/nav-switcher.js): Floating screen selector
- **High-Res Screenshots**: Stored in [`screenshots/`](file:///c:/Users/Abhinav/Documents/NGA/screenshots/)

---

## 💻 How to Run Locally

Simply open [`competition-guide.html`](file:///c:/Users/Abhinav/Documents/NGA/competition-guide.html) or [`index.html`](file:///c:/Users/Abhinav/Documents/NGA/index.html) in your browser:

```powershell
# Directly launch in browser:
Start-Process competition-guide.html
```

Or start a local web server:
```powershell
python -m http.server 3000
```
Then visit: `http://localhost:3000/competition-guide.html`
