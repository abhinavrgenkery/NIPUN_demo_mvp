/**
 * NIPUN — Applicant Pipeline (ATS) Interactive Controller
 */

(function () {
  function init() {
    if (!window.NipunStore) {
      setTimeout(init, 50);
      return;
    }

    const tbody = document.querySelector("tbody");
    const apps = window.NipunStore.getApplications();

    function renderTable(filterStage = "all", searchQuery = "") {
      if (!tbody) return;

      const filtered = apps.filter((app) => {
        const matchesStage = filterStage === "all" || app.stage.toLowerCase() === filterStage.toLowerCase();
        const matchesSearch =
          !searchQuery ||
          app.candidateName.toLowerCase().includes(searchQuery) ||
          app.candidateCollege.toLowerCase().includes(searchQuery) ||
          (app.candidateRoll && app.candidateRoll.toLowerCase().includes(searchQuery)) ||
          app.company.toLowerCase().includes(searchQuery);
        return matchesStage && matchesSearch;
      });

      tbody.innerHTML = "";

      if (filtered.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="7" class="py-12 text-center text-slate-400 font-body-sm">
              <span class="material-symbols-outlined text-4xl mb-2 text-slate-300">person_search</span>
              <p>No candidates match the selected filter criteria.</p>
            </td>
          </tr>
        `;
        return;
      }

      filtered.forEach((app, index) => {
        const tr = document.createElement("tr");
        tr.className = "hover:bg-surface-container-low/60 transition-colors group border-b border-surface-container-low/50";

        let stageClass = "bg-secondary-container text-on-secondary-container";
        if (app.stage === "accepted") stageClass = "bg-[#F0FDF4] text-[#15803D]";
        if (app.stage === "interview") stageClass = "bg-[#EFF6FF] text-[#1D4ED8]";
        if (app.stage === "rejected") stageClass = "bg-[#FEF2F2] text-[#B91C1C]";
        if (app.stage === "applied") stageClass = "bg-surface-container text-on-surface-variant";

        const initials = app.candidateName
          .split(" ")
          .map((n) => n[0])
          .join("")
          .substring(0, 2);

        tr.innerHTML = `
          <td class="py-space-md px-space-md text-center align-middle">
            <input class="w-4 h-4 rounded bg-surface accent-primary cursor-pointer" type="checkbox"/>
          </td>
          <td class="py-space-md px-space-md align-middle">
            <div class="flex items-center gap-space-sm">
              <div class="relative">
                <div class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-on-primary-fixed font-bold">
                  ${initials}
                </div>
                <span class="material-symbols-outlined absolute -bottom-1 -right-1 text-secondary text-[16px] bg-surface-container-lowest rounded-full" title="Cryptographically Verified Identity">verified</span>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-space-xs">
                  <span class="font-headline-sm text-headline-sm text-primary font-bold truncate">${app.candidateName}</span>
                  <span class="px-1.5 py-0.5 rounded font-label-caps text-label-caps bg-surface-container text-on-surface-variant">AIR ${index + 12}</span>
                </div>
                <p class="text-on-surface-variant font-medium truncate text-xs">${app.candidateCollege}</p>
                <p class="font-label-caps text-label-caps text-outline tracking-wider uppercase text-[10px]">
                  ROLL: ${app.candidateRoll || "21114029"} • APPLIED ${app.appliedDate}
                </p>
                ${app.interviewDate ? `<p class="text-[11px] font-semibold text-[#1D4ED8] flex items-center gap-1 mt-0.5"><span class="material-symbols-outlined text-[13px]">calendar_clock</span> ${app.interviewDate}</p>` : ""}
              </div>
            </div>
          </td>
          <td class="py-space-md px-space-md align-middle">
            <div class="inline-flex flex-col">
              <div class="inline-flex items-center gap-1 px-space-xs py-1 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm font-bold">
                <span class="material-symbols-outlined text-[16px]">radar</span>
                <span>${app.candidateMatch}%</span>
              </div>
              <span class="font-label-caps text-label-caps text-secondary font-semibold mt-1">Exceptional Fit</span>
            </div>
          </td>
          <td class="py-space-md px-space-md align-middle">
            <div class="flex flex-wrap gap-1 max-w-sm">
              <span class="inline-flex items-center gap-1 px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-md text-label-md font-medium">
                <span class="material-symbols-outlined text-[14px] text-secondary">check_circle</span>Go
              </span>
              <span class="inline-flex items-center gap-1 px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-md text-label-md font-medium">
                <span class="material-symbols-outlined text-[14px] text-secondary">check_circle</span>Kubernetes
              </span>
              <span class="inline-flex items-center gap-1 px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-md text-label-md font-medium">
                <span class="material-symbols-outlined text-[14px] text-secondary">check_circle</span>gRPC
              </span>
            </div>
          </td>
          <td class="py-space-md px-space-md align-middle">
            <div class="flex flex-col">
              <span class="font-label-md text-label-md text-on-surface font-semibold">${app.nsqfScore}</span>
              <span class="font-body-sm text-body-sm text-secondary flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">military_tech</span>
                Capstone Grade A+
              </span>
              <span class="font-label-caps text-label-caps text-outline uppercase tracking-wider font-mono text-[11px]">Hash: ${app.certHash || "#8f92..c1a"}</span>
            </div>
          </td>
          <td class="py-space-md px-space-md align-middle">
            <div class="relative inline-block">
              <select class="app-stage-select appearance-none h-8 pl-space-xs pr-6 rounded-lg font-label-md text-label-md font-semibold ${stageClass} cursor-pointer focus:outline-none transition-all shadow-xs" data-app-id="${app.id}">
                <option value="applied" ${app.stage === "applied" ? "selected" : ""}>Applied</option>
                <option value="shortlisted" ${app.stage === "shortlisted" ? "selected" : ""}>Shortlisted</option>
                <option value="interview" ${app.stage === "interview" ? "selected" : ""}>Interview</option>
                <option value="accepted" ${app.stage === "accepted" ? "selected" : ""}>Accepted (Offer)</option>
                <option value="rejected" ${app.stage === "rejected" ? "selected" : ""}>Rejected</option>
              </select>
              <span class="material-symbols-outlined pointer-events-none absolute right-1 top-2 text-[14px]">expand_more</span>
            </div>
          </td>
          <td class="py-space-md px-space-md align-middle text-right">
            <a href="student-portfolio.html" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container hover:bg-primary hover:text-white transition-colors text-outline" title="Inspect Verifiable Dossier">
              <span class="material-symbols-outlined text-[18px]">visibility</span>
            </a>
          </td>
        `;

        tbody.appendChild(tr);
      });

      // Wire Stage Changes
      document.querySelectorAll(".app-stage-select").forEach((select) => {
        select.addEventListener("change", (e) => {
          const appId = e.target.getAttribute("data-app-id");
          const newStage = e.target.value;
          window.NipunStore.updateApplicationStage(appId, newStage);
          renderTable(filterStage, searchQuery);
          updateMetrics();
        });
      });
    }

    function updateMetrics() {
      const all = window.NipunStore.getApplications();
      const appliedCount = all.filter((a) => a.stage === "applied").length;
      const shortlistedCount = all.filter((a) => a.stage === "shortlisted" || a.stage === "interview").length;
      const acceptedCount = all.filter((a) => a.stage === "accepted").length;

      // Update counters if elements exist
      const metricNumbers = document.querySelectorAll(".font-display-lg");
      if (metricNumbers.length >= 4) {
        metricNumbers[0].textContent = all.length;
        metricNumbers[1].textContent = Math.round(all.length * 0.95);
        metricNumbers[2].textContent = shortlistedCount;
        metricNumbers[3].innerHTML = `${acceptedCount} <span class="text-headline-md text-outline font-normal">/ 2</span>`;
      }
    }

    // Wire Status Filter Buttons
    const filterButtons = document.querySelectorAll(".flex.items-center.gap-1.overflow-x-auto button");
    let currentFilter = "all";
    let currentQuery = "";

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => {
          b.className = "px-space-sm py-1.5 rounded-lg bg-surface text-on-surface-variant hover:bg-surface-container font-label-md text-label-md whitespace-nowrap transition-colors";
        });
        btn.className = "px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm";

        const text = btn.textContent.toLowerCase();
        if (text.includes("shortlisted")) currentFilter = "shortlisted";
        else if (text.includes("applied")) currentFilter = "applied";
        else currentFilter = "all";

        renderTable(currentFilter, currentQuery);
      });
    });

    // Wire Search Input
    const searchInput = document.querySelector('input[placeholder*="Search applicant"]');
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        currentQuery = e.target.value.toLowerCase().trim();
        renderTable(currentFilter, currentQuery);
      });
    }

    renderTable();
    updateMetrics();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
