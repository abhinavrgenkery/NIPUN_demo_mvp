(function () {
  const screens = [
    { title: "Competition Pitch Guide", file: "competition-guide.html", icon: "assignment", desc: "Live Pitch Script, Personas & Flow Guide" },
    { title: "Landing Page", file: "index.html", icon: "home", desc: "National Placement & Upskilling Platform" },
    { title: "Student Dashboard", file: "student-dashboard.html", icon: "dashboard", desc: "Overview, Readiness & Roadmap" },
    { title: "Opportunities Catalog", file: "opportunities.html", icon: "work", desc: "Browse Internships & Programs" },
    { title: "Applicant Pipeline", file: "applicant-pipeline.html", icon: "group", desc: "Candidate Evaluation & ATS" },
    { title: "Post Opportunity", file: "post-opportunity.html", icon: "post_add", desc: "Employer Listing & Verification Form" },
    { title: "Student Portfolio", file: "student-portfolio.html", icon: "badge", desc: "Verified Public Dossier & Credentials" },
    { title: "Institution Analytics", file: "institution-analytics.html", icon: "analytics", desc: "Placement Metrics & Skill Trends" },
    { title: "Node Directory", file: "node-directory.html", icon: "hub", desc: "State & University Federated Nodes" },
    { title: "Design System", file: "design-system.html", icon: "palette", desc: "Brand Identity & Design Token Spec" },
    { title: "Mobile Preview", file: "mobile-preview.html", icon: "smartphone", desc: "Responsive Mobile Screen View" }
  ];

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // Create UI elements
  const container = document.createElement("div");
  container.id = "nipun-stitch-nav-root";
  container.innerHTML = `
    <style>
      #nipun-nav-btn {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 99999;
        display: flex;
        align-items: center;
        gap: 8px;
        background: #123C69;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 9999px;
        box-shadow: 0 4px 14px rgba(18, 60, 105, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.2);
        cursor: pointer;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        font-size: 13px;
        font-weight: 600;
        transition: all 0.2s ease;
        user-select: none;
      }
      #nipun-nav-btn:hover {
        background: #0d2e51;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(18, 60, 105, 0.45);
      }
      #nipun-nav-btn .pill-badge {
        background: #F59E0B;
        color: #0F172A;
        font-size: 10px;
        font-weight: 700;
        padding: 2px 6px;
        border-radius: 9999px;
        margin-left: 4px;
      }
      #nipun-nav-modal-backdrop {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.55);
        backdrop-filter: blur(6px);
        z-index: 99998;
        align-items: center;
        justify-content: center;
        padding: 16px;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      }
      #nipun-nav-modal {
        background: #ffffff;
        border-radius: 16px;
        width: 100%;
        max-width: 680px;
        max-height: 85vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25);
        border: 1px solid #E2E8F0;
        animation: nipunFadeIn 0.18s ease-out;
      }
      @keyframes nipunFadeIn {
        from { opacity: 0; transform: scale(0.96); }
        to { opacity: 1; transform: scale(1); }
      }
      .nipun-modal-header {
        padding: 16px 20px;
        background: #F8FAFC;
        border-bottom: 1px solid #E2E8F0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nipun-modal-header h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        color: #123C69;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .nipun-modal-close {
        background: none;
        border: none;
        cursor: pointer;
        color: #64748B;
        font-size: 20px;
        padding: 4px;
        border-radius: 6px;
        display: flex;
        align-items: center;
      }
      .nipun-modal-close:hover {
        background: #E2E8F0;
        color: #0F172A;
      }
      .nipun-modal-body {
        padding: 16px;
        overflow-y: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 10px;
      }
      .nipun-screen-card {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid #E2E8F0;
        text-decoration: none;
        color: inherit;
        background: #FFFFFF;
        transition: all 0.15s ease;
      }
      .nipun-screen-card:hover {
        border-color: #0E7490;
        background: #F0FDFA;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(14, 116, 144, 0.08);
      }
      .nipun-screen-card.active {
        border-color: #123C69;
        background: #EFF6FF;
        box-shadow: 0 0 0 2px rgba(18, 60, 105, 0.15);
      }
      .nipun-card-icon {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: #E2E8F0;
        color: #123C69;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .nipun-screen-card.active .nipun-card-icon {
        background: #123C69;
        color: #FFFFFF;
      }
      .nipun-screen-card:hover .nipun-card-icon {
        background: #0E7490;
        color: #FFFFFF;
      }
      .nipun-card-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .nipun-card-title {
        font-size: 14px;
        font-weight: 700;
        color: #0F172A;
      }
      .nipun-card-desc {
        font-size: 12px;
        color: #64748B;
        line-height: 1.35;
      }
      .nipun-modal-footer {
        padding: 12px 20px;
        background: #F8FAFC;
        border-top: 1px solid #E2E8F0;
        font-size: 12px;
        color: #64748B;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    </style>

    <div id="nipun-nav-btn" title="Click to browse all screens">
      <span style="font-size: 16px;">✦</span>
      <span>Screens</span>
      <span class="pill-badge">10</span>
    </div>

    <div id="nipun-nav-modal-backdrop">
      <div id="nipun-nav-modal">
        <div class="nipun-modal-header">
          <h3>
            <span style="font-size: 18px;">🏛️</span>
            NIPUN — National Placement Network Screens
          </h3>
          <button class="nipun-modal-close" id="nipun-nav-close-btn">&times;</button>
        </div>
        <div class="nipun-modal-body">
          ${screens
            .map(
              (s) => `
            <a href="${s.file}" class="nipun-screen-card ${currentPath === s.file ? "active" : ""}">
              <div class="nipun-card-icon">
                <span class="material-symbols-outlined" style="font-size: 20px;">${s.icon}</span>
              </div>
              <div class="nipun-card-info">
                <div class="nipun-card-title">${s.title} ${currentPath === s.file ? '<span style="font-size: 10px; color:#123C69; font-weight:700;">(Current)</span>' : ""}</div>
                <div class="nipun-card-desc">${s.desc}</div>
              </div>
            </a>
          `
            )
            .join("")}
        </div>
        <div class="nipun-modal-footer">
          <span>Exported from Google Stitch Project: <b>NIPUN Brand Design System</b></span>
          <span>Press <b>Esc</b> to close</span>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  const btn = document.getElementById("nipun-nav-btn");
  const backdrop = document.getElementById("nipun-nav-modal-backdrop");
  const closeBtn = document.getElementById("nipun-nav-close-btn");

  function openNav() {
    backdrop.style.display = "flex";
  }
  function closeNav() {
    backdrop.style.display = "none";
  }

  btn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeNav();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
})();
