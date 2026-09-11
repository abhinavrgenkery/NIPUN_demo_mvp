/**
 * NIPUN — Student Dashboard Interactive Controller
 */

(function () {
  function init() {
    if (!window.NipunStore) {
      setTimeout(init, 50);
      return;
    }

    const student = window.NipunStore.getStudent();
    const apps = window.NipunStore.getApplications();
    const AryanApp = apps.find((a) => a.candidateId === "usr_student_01");

    // 1. Update Readiness Score displays
    const scoreEls = document.querySelectorAll(".text-\\[\\#15803D\\]");
    scoreEls.forEach((el) => {
      if (el.textContent.includes("%")) {
        el.textContent = `${student.readinessScore}%`;
      }
    });

    // 2. Render Live Active Interview / Offer Banner if updated
    if (AryanApp && (AryanApp.stage === "interview" || AryanApp.stage === "accepted")) {
      const topSection = document.querySelector("main section") || document.querySelector("main");
      if (topSection) {
        const isOffer = AryanApp.stage === "accepted";
        const banner = document.createElement("div");
        banner.className = `w-full p-4 mb-6 rounded-xl ${isOffer ? "bg-[#F0FDF4] border-2 border-[#16A34A]" : "bg-[#EFF6FF] border-2 border-[#1D4ED8]"} shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4`;
        banner.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl ${isOffer ? "bg-[#16A34A]" : "bg-[#1D4ED8]"} text-white flex items-center justify-center font-bold">
              <span class="material-symbols-outlined text-[26px]">${isOffer ? "workspace_premium" : "event_available"}</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-headline-sm text-sm font-bold ${isOffer ? "text-[#15803D]" : "text-[#1D4ED8]"}">
                  ${isOffer ? "🎉 Official Job Offer Extended!" : "🚀 Direct Technical Interview Scheduled!"}
                </span>
                <span class="px-2 py-0.5 rounded-full ${isOffer ? "bg-[#DCFCE7] text-[#15803D]" : "bg-[#DBEAFE] text-[#1E40AF]"} font-bold text-[10px] uppercase tracking-wider">
                  ${AryanApp.company}
                </span>
              </div>
              <p class="text-xs text-slate-700 mt-0.5 font-medium">
                ${AryanApp.interviewDate || "Scheduled: Tomorrow at 11:30 AM IST (Virtual Technical Panel)"}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 w-full md:w-auto">
            <button onclick="window.NipunStore.showToast('Virtual interview room connection verified. Audio/Video ready.', 'success', 'videocam')" class="px-4 py-2 rounded-lg ${isOffer ? "bg-[#16A34A]" : "bg-[#1D4ED8]"} text-white text-xs font-bold hover:opacity-90 shadow-sm transition-all flex items-center gap-1.5">
              <span class="material-symbols-outlined text-sm">${isOffer ? "download" : "videocam"}</span>
              <span>${isOffer ? "Download Offer Letter" : "Join Virtual Interview"}</span>
            </button>
            <a href="student-portfolio.html" class="px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors">
              View Verified Passport
            </a>
          </div>
        `;
        topSection.parentNode.insertBefore(banner, topSection);
      }
    }

    // 3. Connect Recommended Cards Instant Apply
    const oppCards = document.querySelectorAll(".grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 > div");
    oppCards.forEach((card, idx) => {
      const oppId = `opp_0${idx + 1}`;
      const btn = card.querySelector("button");
      if (btn) {
        const hasApplied = window.NipunStore.hasApplied(oppId);
        if (hasApplied) {
          btn.className = "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#16A34A] text-white font-label-md text-label-md font-semibold cursor-default";
          btn.innerHTML = `<span>Applied</span><span class="material-symbols-outlined text-[16px]">check</span>`;
        }

        btn.addEventListener("click", (e) => {
          e.preventDefault();
          if (window.NipunStore.hasApplied(oppId)) {
            window.NipunStore.showToast("You have already applied to this role!", "info", "info");
            return;
          }
          const res = window.NipunStore.applyToOpportunity(oppId);
          if (res) {
            btn.className = "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#16A34A] text-white font-label-md text-label-md font-semibold cursor-default";
            btn.innerHTML = `<span>Applied</span><span class="material-symbols-outlined text-[16px]">check</span>`;
          }
        });
      }
    });

    // 4. Connect Gap Analysis Link
    const gapLinks = document.querySelectorAll('a[data-path="skill-gap-analysis"]');
    gapLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.NipunStore.showToast("National Curriculum Gap Analysis: 94.8% alignment with Fortune 500 GCC tech stacks.", "info", "balance");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
