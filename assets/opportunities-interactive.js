/**
 * NIPUN — Opportunities Interactive Controller
 */

(function () {
  function init() {
    if (!window.NipunStore) {
      setTimeout(init, 50);
      return;
    }

    const grid = document.querySelector(".grid.grid-cols-1.lg\\:grid-cols-2.xl\\:grid-cols-3") || 
                 document.querySelector(".grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3");

    // 1. Render Newly Posted Roles at top of grid
    const allOpps = window.NipunStore.getOpportunities();
    const newOpps = allOpps.filter((o) => o.isNew);

    if (grid && newOpps.length > 0) {
      newOpps.forEach((opp) => {
        const hasApplied = window.NipunStore.hasApplied(opp.id);
        const card = document.createElement("div");
        card.className = "flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all relative overflow-hidden group border-2 border-secondary/40";
        card.setAttribute("data-opp-id", opp.id);
        card.setAttribute("data-title", opp.title.toLowerCase());
        card.setAttribute("data-company", opp.company.toLowerCase());

        card.innerHTML = `
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary to-[#F59E0B]"></div>
          <div>
            <div class="flex items-start justify-between gap-3 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white shadow-sm font-bold">
                  <span class="material-symbols-outlined text-[24px]">${opp.icon || "rocket_launch"}</span>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center gap-2">
                    <span class="font-label-lg text-label-lg font-bold text-on-surface">${opp.company}</span>
                    <span class="px-1.5 py-0.5 rounded bg-amber-100 text-[#B45309] font-bold text-[10px] uppercase tracking-wider">NEW</span>
                  </div>
                  <span class="font-label-caps text-label-caps text-secondary font-semibold uppercase tracking-wider">${opp.companyType}</span>
                </div>
              </div>
              <div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F0FDF4] text-[#16A34A] font-label-md text-label-md font-bold shadow-xs">
                <span class="material-symbols-outlined text-[16px]">bolt</span>
                <span>${opp.match}% Match</span>
              </div>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2.5 py-0.5 rounded-full bg-surface-container-low text-primary font-label-caps text-[11px] font-bold uppercase">
                ${opp.type}
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-label-caps font-semibold text-[#B45309]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse"></span>
                ${opp.deadline}
              </span>
            </div>
            <h3 class="font-headline-sm text-headline-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
              ${opp.title}
            </h3>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 my-3 py-2 px-3 rounded-lg bg-surface-container-low/70">
              <div class="flex items-center gap-1.5 text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-secondary">payments</span>
                <span class="font-label-lg text-label-lg font-bold">${opp.compensation}</span>
              </div>
              <div class="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                <span class="material-symbols-outlined text-[16px] text-outline">location_on</span>
                <span>${opp.location}</span>
              </div>
            </div>
            <div class="flex flex-col gap-1.5 mb-4">
              <span class="font-label-caps text-label-caps text-outline uppercase tracking-wider">Required Skills</span>
              <div class="flex flex-wrap gap-1.5">
                ${opp.skills.map((s) => `<span class="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#F0FDF4] text-[#15803D] font-label-md text-[12px] font-semibold"><span class="material-symbols-outlined text-[14px]">check</span>${s}</span>`).join("")}
              </div>
            </div>
            <div class="flex items-center justify-between font-label-caps text-[11px] text-outline border-t border-surface-container-low pt-3 mb-4">
              <span class="flex items-center gap-1 text-secondary font-semibold">
                <span class="material-symbols-outlined text-[14px]">verified</span> ${opp.nsqf}
              </span>
              <span>Direct Fast-Track</span>
            </div>
          </div>
          <div class="flex items-center gap-2 pt-2">
            <button class="nipun-apply-btn flex-1 h-10 rounded-xl ${hasApplied ? "bg-[#16A34A] text-white cursor-default" : "bg-primary hover:bg-[#0D2E51] text-on-primary"} font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm transition-all">
              <span class="material-symbols-outlined text-[18px]">${hasApplied ? "check_circle" : "bolt"}</span>
              <span>${hasApplied ? "✓ Applied (Under Review)" : "Instant Apply (Passport Ready)"}</span>
            </button>
          </div>
        `;

        grid.prepend(card);
      });
    }

    // 2. Wire Existing Cards to Opportunities & Apply State
    const existingCards = document.querySelectorAll(".grid.grid-cols-1.lg\\:grid-cols-2.xl\\:grid-cols-3 > div, .grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3 > div");
    
    // Map existing cards to opp ids opp_01, opp_02, opp_03 etc.
    existingCards.forEach((card, idx) => {
      const oppId = `opp_0${idx + 1}`;
      card.setAttribute("data-opp-id", oppId);

      const titleEl = card.querySelector("h3");
      if (titleEl) {
        card.setAttribute("data-title", titleEl.textContent.trim().toLowerCase());
      }
      const companyEl = card.querySelector(".font-label-lg");
      if (companyEl) {
        card.setAttribute("data-company", companyEl.textContent.trim().toLowerCase());
      }

      const applyBtn = card.querySelector("button.bg-primary, button.flex-1");
      if (applyBtn) {
        const hasApplied = window.NipunStore.hasApplied(oppId);
        if (hasApplied) {
          applyBtn.classList.remove("bg-primary", "hover:bg-[#0D2E51]");
          applyBtn.classList.add("bg-[#16A34A]", "text-white");
          applyBtn.innerHTML = `
            <span class="material-symbols-outlined text-[18px]">check_circle</span>
            <span>✓ Applied (Under Review)</span>
          `;
        }

        applyBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (window.NipunStore.hasApplied(oppId)) {
            window.NipunStore.showToast("You have already applied! Track status in Student Dashboard.", "info", "info");
            return;
          }

          const res = window.NipunStore.applyToOpportunity(oppId);
          if (res) {
            applyBtn.classList.remove("bg-primary", "hover:bg-[#0D2E51]");
            applyBtn.classList.add("bg-[#16A34A]", "text-white");
            applyBtn.innerHTML = `
              <span class="material-symbols-outlined text-[18px]">check_circle</span>
              <span>✓ Applied (Under Review)</span>
            `;
          }
        });
      }
    });

    // 3. Wire Search Bar
    const searchInput = document.querySelector('input[placeholder*="Search roles"], input[placeholder*="Search"]');
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const allCards = document.querySelectorAll(".grid.grid-cols-1.lg\\:grid-cols-2.xl\\:grid-cols-3 > div, .grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3 > div");
        allCards.forEach((c) => {
          const t = c.getAttribute("data-title") || "";
          const comp = c.getAttribute("data-company") || "";
          const txt = c.textContent.toLowerCase();
          if (!query || t.includes(query) || comp.includes(query) || txt.includes(query)) {
            c.style.display = "";
          } else {
            c.style.display = "none";
          }
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
