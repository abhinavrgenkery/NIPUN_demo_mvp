/**
 * NIPUN — National Industry Placement & Upskilling Network
 * Competition Presentation Demo Control Banner
 */

(function () {
  function initBanner() {
    if (!window.NipunStore) {
      setTimeout(initBanner, 50);
      return;
    }

    const currentRole = window.NipunStore.getCurrentRole();
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // Adjust body padding so banner doesn't cover top navigation
    document.body.style.paddingTop = "48px";

    const banner = document.createElement("div");
    banner.id = "nipun-demo-control-banner";
    banner.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 48px;
      background: #0B1727;
      color: #FFFFFF;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      font-size: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      user-select: none;
    `;

    const studentUser = window.NipunStore.getStudent();
    const employerUser = window.NipunStore.getEmployer();
    const adminUser = window.NipunStore.getAdmin();

    banner.innerHTML = `
      <style>
        .nipun-demo-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s ease;
          border: 1px solid transparent;
          text-decoration: none;
        }
        .nipun-role-pill {
          background: rgba(255, 255, 255, 0.08);
          color: #94A3B8;
        }
        .nipun-role-pill:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
        }
        .nipun-role-pill.active {
          background: #123C69;
          color: #FFFFFF;
          border-color: #0E7490;
          box-shadow: 0 0 0 1px #0E7490;
        }
        .nipun-action-dropdown {
          position: relative;
          display: inline-block;
        }
        .nipun-dropdown-content {
          display: none;
          position: absolute;
          right: 0;
          top: 100%;
          margin-top: 6px;
          background: #0D1C2E;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          min-width: 240px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          z-index: 100000;
          overflow: hidden;
          padding: 6px 0;
        }
        .nipun-dropdown-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          color: #CBD5E1;
          font-size: 12px;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .nipun-dropdown-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }
      </style>

      <!-- Left: Logo & Competition Tag -->
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="display: inline-flex; align-items: center; gap: 5px; background: #123C69; color: #8FDFFF; padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 11px; letter-spacing: 0.04em;">
          <span>🏛️</span> NIPUN DEMO
        </span>
        <span style="color: #94A3B8; font-weight: 500;" class="hidden sm:inline">
          Competition Prototype Mode
        </span>
      </div>

      <!-- Center: 3 Role Personas -->
      <div style="display: flex; align-items: center; gap: 6px;">
        <button id="pill-student" class="nipun-demo-btn nipun-role-pill ${currentRole === "student" ? "active" : ""}">
          <span>🎓</span>
          <span>Student</span>
          <span style="font-size: 10px; opacity: 0.8; font-weight: normal;">(Aarav)</span>
        </button>

        <button id="pill-employer" class="nipun-demo-btn nipun-role-pill ${currentRole === "employer" ? "active" : ""}">
          <span>🏢</span>
          <span>Employer</span>
          <span style="font-size: 10px; opacity: 0.8; font-weight: normal;">(Priya)</span>
        </button>

        <button id="pill-admin" class="nipun-demo-btn nipun-role-pill ${currentRole === "admin" ? "active" : ""}">
          <span>🏛️</span>
          <span>University</span>
          <span style="font-size: 10px; opacity: 0.8; font-weight: normal;">(Prof. Raman)</span>
        </button>
      </div>

      <!-- Right: Demo Quick Actions & Pitch Guide -->
      <div style="display: flex; align-items: center; gap: 8px;">
        <div class="nipun-action-dropdown">
          <button id="nipun-actions-btn" class="nipun-demo-btn" style="background: #F59E0B; color: #0F172A; font-weight: 700;">
            <span>⚡</span>
            <span>Live Flow Actions</span>
            <span style="font-size: 10px;">▼</span>
          </button>
          <div id="nipun-dropdown-menu" class="nipun-dropdown-content">
            <div style="padding: 4px 14px; font-size: 10px; font-weight: 700; color: #94A3B8; text-transform: uppercase;">Simulate Live Event</div>
            <a class="nipun-dropdown-item" id="act-interview-invite">
              <span>📅</span>
              <span>Send Interview Invite to Aarav</span>
            </a>
            <a class="nipun-dropdown-item" id="act-shortlist">
              <span>📋</span>
              <span>Shortlist Aarav for TelcoX</span>
            </a>
            <a class="nipun-dropdown-item" id="act-offer">
              <span>🎉</span>
              <span>Issue Job Offer Letter</span>
            </a>
            <div style="height: 1px; background: rgba(255,255,255,0.1); margin: 4px 0;"></div>
            <a class="nipun-dropdown-item" id="act-skill-test">
              <span>⭐</span>
              <span>Take Skill Benchmark (+6% Score)</span>
            </a>
            <a class="nipun-dropdown-item" href="student-portfolio.html">
              <span>📜</span>
              <span>View Verified Public Dossier</span>
            </a>
            <a class="nipun-dropdown-item" href="post-opportunity.html">
              <span>✍️</span>
              <span>Post New Opportunity</span>
            </a>
            <div style="height: 1px; background: rgba(255,255,255,0.1); margin: 4px 0;"></div>
            <a class="nipun-dropdown-item" id="act-reset-data" style="color: #F87171;">
              <span>🔄</span>
              <span>Reset Demo State (Clean Slate)</span>
            </a>
          </div>
        </div>

        <a href="competition-guide.html" class="nipun-demo-btn" style="background: rgba(255, 255, 255, 0.1); color: #FFFFFF; border-color: rgba(255,255,255,0.2);">
          <span>📋</span>
          <span class="hidden md:inline">Pitch Guide</span>
        </a>
      </div>
    `;

    document.body.prepend(banner);

    // Wire Persona Switchers
    document.getElementById("pill-student").addEventListener("click", () => {
      window.NipunStore.setCurrentRole("student");
      if (currentPath !== "student-dashboard.html" && currentPath !== "opportunities.html" && currentPath !== "student-portfolio.html") {
        window.location.href = "student-dashboard.html";
      } else {
        window.location.reload();
      }
    });

    document.getElementById("pill-employer").addEventListener("click", () => {
      window.NipunStore.setCurrentRole("employer");
      if (currentPath !== "applicant-pipeline.html" && currentPath !== "post-opportunity.html") {
        window.location.href = "applicant-pipeline.html";
      } else {
        window.location.reload();
      }
    });

    document.getElementById("pill-admin").addEventListener("click", () => {
      window.NipunStore.setCurrentRole("admin");
      if (currentPath !== "institution-analytics.html" && currentPath !== "node-directory.html") {
        window.location.href = "institution-analytics.html";
      } else {
        window.location.reload();
      }
    });

    // Wire Dropdown Menu
    const actionsBtn = document.getElementById("nipun-actions-btn");
    const dropdownMenu = document.getElementById("nipun-dropdown-menu");

    actionsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isVisible = dropdownMenu.style.display === "block";
      dropdownMenu.style.display = isVisible ? "none" : "block";
    });

    document.addEventListener("click", () => {
      dropdownMenu.style.display = "none";
    });

    // Dropdown Actions
    document.getElementById("act-interview-invite").addEventListener("click", () => {
      const apps = window.NipunStore.getApplications();
      const aaravApp = apps.find((a) => a.candidateId === "usr_student_01");
      if (aaravApp) {
        window.NipunStore.updateApplicationStage(
          aaravApp.id,
          "interview",
          "Scheduled: Tomorrow at 11:30 AM IST (Virtual Technical Panel)"
        );
        setTimeout(() => {
          if (currentPath === "student-dashboard.html" || currentPath === "applicant-pipeline.html") {
            window.location.reload();
          }
        }, 500);
      }
    });

    document.getElementById("act-shortlist").addEventListener("click", () => {
      const apps = window.NipunStore.getApplications();
      const aaravApp = apps.find((a) => a.candidateId === "usr_student_01");
      if (aaravApp) {
        window.NipunStore.updateApplicationStage(aaravApp.id, "shortlisted");
        setTimeout(() => {
          if (currentPath === "student-dashboard.html" || currentPath === "applicant-pipeline.html") {
            window.location.reload();
          }
        }, 500);
      }
    });

    document.getElementById("act-offer").addEventListener("click", () => {
      const apps = window.NipunStore.getApplications();
      const aaravApp = apps.find((a) => a.candidateId === "usr_student_01");
      if (aaravApp) {
        window.NipunStore.updateApplicationStage(aaravApp.id, "accepted");
        setTimeout(() => {
          if (currentPath === "student-dashboard.html" || currentPath === "applicant-pipeline.html") {
            window.location.reload();
          }
        }, 500);
      }
    });

    document.getElementById("act-skill-test").addEventListener("click", () => {
      openSkillAssessmentModal();
    });

    document.getElementById("act-reset-data").addEventListener("click", () => {
      if (confirm("Reset demo data to initial competition baseline?")) {
        window.NipunStore.reset();
        setTimeout(() => window.location.reload(), 400);
      }
    });
  }

  // Rapid Skill Assessment Modal for Live Pitch Demonstration
  function openSkillAssessmentModal() {
    let modal = document.getElementById("nipun-skill-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "nipun-skill-modal";
      modal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.65);
        backdrop-filter: blur(8px);
        z-index: 100001;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      `;

      modal.innerHTML = `
        <div style="background: #ffffff; border-radius: 16px; width: 100%; max-width: 540px; box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.3); border: 1px solid #E2E8F0; overflow: hidden; animation: nipunFadeIn 0.2s ease-out;">
          <div style="padding: 16px 20px; background: #123C69; color: #FFFFFF; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="material-symbols-outlined" style="color: #8FDFFF;">verified</span>
              <h3 style="margin: 0; font-size: 15px; font-weight: 700;">NSQF Level 7 • Live Micro-Benchmark</h3>
            </div>
            <button style="background: none; border: none; color: #FFFFFF; cursor: pointer; font-size: 20px;" onclick="document.getElementById('nipun-skill-modal').style.display='none'">&times;</button>
          </div>
          <div style="padding: 20px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
              <span style="background: #EFF6FF; color: #123C69; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase;">
                Distributed Systems Domain
              </span>
              <span style="color: #64748B; font-size: 12px;">Candidate: Aarav Sharma (IIT Delhi)</span>
            </div>
            <p style="font-size: 14px; font-weight: 600; color: #0F172A; line-height: 1.5; margin-bottom: 16px;">
              Q: Under high write concurrency in an in-memory replicated cluster, how do you prevent split-brain while sustaining linearizable reads?
            </p>
            <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
              <label style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 1.5px solid #123C69; background: #F0FDFA; cursor: pointer;">
                <input type="radio" name="quiz_opt" checked style="accent-color: #123C69;">
                <span style="font-size: 13px; color: #0F172A; font-weight: 500;">
                  Raft / Paxos consensus quorum lease reads with epoch term verification
                </span>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 1px solid #E2E8F0; background: #FFFFFF; cursor: pointer;">
                <input type="radio" name="quiz_opt" style="accent-color: #123C69;">
                <span style="font-size: 13px; color: #64748B;">
                  Eventual consistency with round-robin client DNS failover
                </span>
              </label>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #E2E8F0; pt: 16px; padding-top: 16px;">
              <span style="font-size: 12px; color: #64748B; display: flex; align-items: center; gap: 4px;">
                <span class="material-symbols-outlined" style="font-size: 16px; color: #16A34A;">lock</span>
                Proctored by National Skill Registry
              </span>
              <button id="nipun-submit-quiz-btn" style="background: #123C69; color: #FFFFFF; font-family: inherit; font-size: 13px; font-weight: 700; padding: 10px 20px; border-radius: 10px; border: none; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                <span>Submit & Cryptographically Verify</span>
                <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById("nipun-submit-quiz-btn").addEventListener("click", () => {
        modal.style.display = "none";
        window.NipunStore.boostStudentReadiness(6);
        setTimeout(() => {
          const currentPath = window.location.pathname.split("/").pop() || "index.html";
          if (currentPath === "student-dashboard.html" || currentPath === "student-portfolio.html") {
            window.location.reload();
          }
        }, 800);
      });
    }

    modal.style.display = "flex";
  }

  // Initialize once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBanner);
  } else {
    initBanner();
  }
})();
