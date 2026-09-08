/**
 * NIPUN — National Industry Placement & Upskilling Network
 * Competition Prototype State Engine & Demo Store (localStorage)
 */

(function () {
  const STORAGE_KEY = "nipun_prototype_state_v1";

  const INITIAL_STATE = {
    currentUser: "student", // 'student' | 'employer' | 'admin'
    users: {
      student: {
        id: "usr_student_01",
        name: "Aarav Sharma",
        avatarText: "AS",
        roll: "21114029",
        college: "Indian Institute of Technology, Delhi",
        degree: "B.Tech Computer Science & Engineering",
        sem: "8th Semester",
        readinessScore: 88,
        nsqfLevel: "Level 7",
        certHash: "0x8f92b7c1a4e902f883d1c09b4512e731",
        passportId: "IND-EDU-2026-8819",
        skills: [
          { name: "Go", score: 94, verified: true },
          { name: "Kubernetes", score: 91, verified: true },
          { name: "Distributed DBs", score: 86, verified: true },
          { name: "gRPC", score: 92, verified: true },
          { name: "Cloud Architecture", score: 88, verified: true },
          { name: "Linux Internals", score: 85, verified: false }
        ]
      },
      employer: {
        id: "usr_employer_01",
        name: "Priya Nair",
        avatarText: "PN",
        role: "Head of Campus Talent & University Partnerships",
        company: "Tata Digital / TelcoX Cloud",
        verified: true,
        activeJobsCount: 3
      },
      admin: {
        id: "usr_admin_01",
        name: "Prof. K. Raman",
        avatarText: "KR",
        role: "Dean of Academic Relations & Placement Directorate",
        institution: "IIT Delhi & National Tech Node Consortium",
        nodesManaged: 14
      }
    },
    opportunities: [
      {
        id: "opp_01",
        title: "Distributed Systems Reliability Engineer",
        company: "TelcoX Cloud Infrastructure",
        companyType: "Tier-1 Cloud Provider",
        icon: "dns",
        compensation: "₹16.0 – 20.0 LPA",
        location: "Bengaluru (Hybrid)",
        match: 96,
        type: "Full-Time • Direct Fast-Track",
        deadline: "Closes in 3 days",
        nsqf: "NSQF Level 7 Validated",
        skills: ["Go", "Kubernetes", "gRPC", "Distributed DBs"],
        color: "#123C69"
      },
      {
        id: "opp_02",
        title: "Silicon Architecture & EDA Fellow",
        company: "Bharat Semiconductor Mission / C-DAC",
        companyType: "National Strategic Lab",
        icon: "memory",
        compensation: "₹18.0 – 24.0 LPA",
        location: "Noida / Mohali",
        match: 91,
        type: "Pre-Hire Co-Cohort",
        deadline: "Closes in 5 days",
        nsqf: "NSQF Level 8 Mapped",
        skills: ["Verilog", "RISC-V", "VLSI Design", "Linux"],
        color: "#0E7490"
      },
      {
        id: "opp_03",
        title: "FinTech Infrastructure Fellow & Analyst",
        company: "Krypton Labs / FinTech GCC",
        companyType: "Global Financial Infrastructure",
        icon: "account_balance",
        compensation: "₹14.5 – 18.0 LPA",
        location: "Gurugram / Remote",
        match: 93,
        type: "Direct Fast-Track",
        deadline: "Closes in 4 days",
        nsqf: "NSQF Level 7 Validated",
        skills: ["Java/Go", "Distributed DBs", "High-Concurrency", "AWS"],
        color: "#16A34A"
      },
      {
        id: "opp_04",
        title: "Enterprise AI/ML Platform Engineer",
        company: "National Supercomputing Mission (AIRAWAT)",
        companyType: "Autonomous Government R&D",
        icon: "smart_toy",
        compensation: "₹20.0 – 25.0 LPA",
        location: "Bengaluru / Pune",
        match: 95,
        type: "Apex Fellow",
        deadline: "Closes in 6 days",
        nsqf: "NSQF Level 8 Mapped",
        skills: ["PyTorch", "Distributed Training", "CUDA", "Kubernetes"],
        color: "#123C69"
      },
      {
        id: "opp_05",
        title: "Cloud DevSecOps & Zero Trust Engineer",
        company: "CyberShield Defense Infrastructure",
        companyType: "National Security Partner",
        icon: "security",
        compensation: "₹15.0 – 19.0 LPA",
        location: "Hyderabad",
        match: 89,
        type: "Fast-Track Placement",
        deadline: "Closes in 8 days",
        nsqf: "NSQF Level 7 Validated",
        skills: ["eBPF", "Kubernetes", "Linux Internals", "Terraform"],
        color: "#B45309"
      }
    ],
    applications: [
      {
        id: "app_01",
        opportunityId: "opp_01",
        opportunityTitle: "Distributed Systems Reliability Engineer",
        company: "TelcoX Cloud Infrastructure",
        candidateId: "usr_student_01",
        candidateName: "Aarav Sharma",
        candidateCollege: "IIT Delhi • B.Tech CSE",
        candidateRoll: "21114029",
        candidateMatch: 96,
        nsqfScore: "Passport L7: 94/100",
        appliedDate: "Today, 09:30 AM",
        stage: "interview", // 'applied' | 'shortlisted' | 'interview' | 'accepted' | 'rejected'
        interviewDate: "Tomorrow at 11:30 AM IST (Virtual Technical Panel)",
        certHash: "0x8f92..c1a"
      },
      {
        id: "app_02",
        opportunityId: "opp_01",
        opportunityTitle: "Distributed Systems Reliability Engineer",
        company: "TelcoX Cloud Infrastructure",
        candidateId: "cand_02",
        candidateName: "Aryan Dev Sharma",
        candidateCollege: "IIT Roorkee • B.Tech CSE",
        candidateRoll: "21114032",
        candidateMatch: 94,
        nsqfScore: "Passport L7: 92/100",
        appliedDate: "Yesterday, 04:15 PM",
        stage: "shortlisted",
        interviewDate: null,
        certHash: "0x3c71..e4b"
      },
      {
        id: "app_03",
        opportunityId: "opp_02",
        opportunityTitle: "Silicon Architecture & EDA Fellow",
        company: "Bharat Semiconductor Mission",
        candidateId: "cand_03",
        candidateName: "Sneha Roy",
        candidateCollege: "NIT Trichy • B.Tech ECE",
        candidateRoll: "21109015",
        candidateMatch: 95,
        nsqfScore: "Passport L8: 96/100",
        appliedDate: "2 days ago",
        stage: "accepted",
        interviewDate: "Completed",
        certHash: "0x91d4..8a2"
      },
      {
        id: "app_04",
        opportunityId: "opp_01",
        opportunityTitle: "Distributed Systems Reliability Engineer",
        company: "TelcoX Cloud Infrastructure",
        candidateId: "cand_04",
        candidateName: "Rohan Gupta",
        candidateCollege: "BITS Pilani • B.E. CS",
        candidateRoll: "2021A7PS0042",
        candidateMatch: 88,
        nsqfScore: "Passport L7: 85/100",
        appliedDate: "3 days ago",
        stage: "applied",
        interviewDate: null,
        certHash: "0x5a18..f99"
      }
    ],
    institutionStats: {
      totalRegistered: 1240,
      verifiedProfiles: 1184,
      placedCount: 972,
      placementRate: "78.4%",
      averageCTC: "₹18.2 LPA",
      highestCTC: "₹52.0 LPA",
      activeEnterprisePartners: 142
    },
    notifications: [
      {
        id: "notif_1",
        role: "student",
        text: "TelcoX Cloud shortlisted your application for Distributed Systems Reliability Engineer!",
        time: "10m ago",
        type: "success"
      },
      {
        id: "notif_2",
        role: "employer",
        text: "New application received from Aarav Sharma (IIT Delhi, 96% Match)",
        time: "1h ago",
        type: "info"
      }
    ]
  };

  class DemoStore {
    constructor() {
      this.state = this.loadState();
    }

    loadState() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        console.warn("Error reading localStorage, using initial state:", e);
      }
      this.saveState(INITIAL_STATE);
      return JSON.parse(JSON.stringify(INITIAL_STATE));
    }

    saveState(state) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        window.dispatchEvent(new CustomEvent("nipun-state-change", { detail: state }));
      } catch (e) {
        console.error("Error saving state:", e);
      }
    }

    reset() {
      const fresh = JSON.parse(JSON.stringify(INITIAL_STATE));
      this.state = fresh;
      this.saveState(fresh);
      this.showToast("Demo state reset to initial competition baseline!", "success", "restart_alt");
      return fresh;
    }

    getCurrentRole() {
      return this.state.currentUser || "student";
    }

    setCurrentRole(role) {
      if (["student", "employer", "admin"].includes(role)) {
        this.state.currentUser = role;
        this.saveState(this.state);
        this.showToast(`Switched active persona to ${role.toUpperCase()}`, "info", "person");
      }
    }

    getCurrentUser() {
      return this.state.users[this.getCurrentRole()];
    }

    getStudent() {
      return this.state.users.student;
    }

    getEmployer() {
      return this.state.users.employer;
    }

    getAdmin() {
      return this.state.users.admin;
    }

    getOpportunities() {
      return this.state.opportunities || [];
    }

    addOpportunity(oppData) {
      const newOpp = {
        id: "opp_" + Date.now(),
        title: oppData.title || "Custom Engineering Role",
        company: oppData.company || (this.getEmployer() ? this.getEmployer().company : "Enterprise Partner"),
        companyType: "Corporate Partner",
        icon: oppData.icon || "rocket_launch",
        compensation: oppData.compensation || "₹15.0 – 20.0 LPA",
        location: oppData.location || "Bengaluru / Hybrid",
        match: 94,
        type: oppData.type || "Full-Time • Direct Fast-Track",
        deadline: "Closes in 14 days",
        nsqf: oppData.nsqf || "NSQF Level 7 Validated",
        skills: oppData.skills && oppData.skills.length ? oppData.skills : ["Cloud", "APIs", "Go", "Docker"],
        color: "#123C69",
        isNew: true
      };

      this.state.opportunities.unshift(newOpp);
      this.saveState(this.state);
      this.showToast(`Published opportunity: "${newOpp.title}"`, "success", "check_circle");
      return newOpp;
    }

    getApplications() {
      return this.state.applications || [];
    }

    hasApplied(opportunityId, studentId = "usr_student_01") {
      return this.state.applications.some(
        (a) => a.opportunityId === opportunityId && a.candidateId === studentId
      );
    }

    applyToOpportunity(opportunityId) {
      const student = this.getStudent();
      const opp = this.state.opportunities.find((o) => o.id === opportunityId);
      if (!opp) return false;

      if (this.hasApplied(opportunityId, student.id)) {
        this.showToast("You have already applied for this opportunity!", "warning", "info");
        return false;
      }

      const newApp = {
        id: "app_" + Date.now(),
        opportunityId: opp.id,
        opportunityTitle: opp.title,
        company: opp.company,
        candidateId: student.id,
        candidateName: student.name,
        candidateCollege: student.college + " • " + student.degree,
        candidateRoll: student.roll,
        candidateMatch: opp.match || 95,
        nsqfScore: `Passport ${student.nsqfLevel}: 94/100`,
        appliedDate: "Just now",
        stage: "applied",
        interviewDate: null,
        certHash: student.certHash.substring(0, 10) + ".."
      };

      this.state.applications.unshift(newApp);
      this.saveState(this.state);
      this.showToast(
        `Application submitted to ${opp.company} with NSQF Level 7 Cryptographic Passport!`,
        "success",
        "verified_user"
      );
      return newApp;
    }

    updateApplicationStage(appId, newStage, interviewNotes = null) {
      const app = this.state.applications.find((a) => a.id === appId);
      if (!app) return false;

      app.stage = newStage;
      if (newStage === "interview") {
        app.interviewDate = interviewNotes || "Scheduled: Tomorrow at 11:30 AM IST";
      } else if (newStage === "accepted") {
        app.interviewDate = "Offer Extended: Formal Letter Issued";
      }

      this.saveState(this.state);
      this.showToast(
        `Updated ${app.candidateName} status to "${newStage.toUpperCase()}"`,
        "success",
        "update"
      );
      return app;
    }

    boostStudentReadiness(amount = 6) {
      const student = this.getStudent();
      const oldScore = student.readinessScore;
      student.readinessScore = Math.min(100, student.readinessScore + amount);
      student.certHash = "0x" + Math.random().toString(16).substring(2, 10) + "a7f2";
      this.saveState(this.state);
      this.showToast(
        `AI Proctored Assessment Passed! Readiness increased from ${oldScore}% to ${student.readinessScore}% (NSQF Verified)`,
        "success",
        "military_tech"
      );
      return student.readinessScore;
    }

    showToast(message, type = "info", icon = "info") {
      let container = document.getElementById("nipun-toast-container");
      if (!container) {
        container = document.createElement("div");
        container.id = "nipun-toast-container";
        container.style.cssText = `
          position: fixed;
          top: 64px;
          right: 20px;
          z-index: 100000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          pointer-events: none;
          max-width: 420px;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        `;
        document.body.appendChild(container);
      }

      const toast = document.createElement("div");
      toast.style.cssText = `
        pointer-events: auto;
        display: flex;
        align-items: center;
        gap: 12px;
        background: #0D1C2E;
        color: #FFFFFF;
        padding: 12px 18px;
        border-radius: 12px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.15);
        animation: nipunToastIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        font-size: 13px;
        line-height: 1.4;
      `;

      let iconColor = "#8FDFFF";
      if (type === "success") iconColor = "#4ADE80";
      if (type === "warning") iconColor = "#FBBF24";
      if (type === "error") iconColor = "#F87171";

      toast.innerHTML = `
        <span class="material-symbols-outlined" style="font-size: 22px; color: ${iconColor}; flex-shrink: 0;">${icon}</span>
        <div style="flex: 1;">${message}</div>
        <button style="background: none; border: none; color: #94A3B8; cursor: pointer; font-size: 16px; padding: 2px;" onclick="this.parentElement.remove()">✕</button>
      `;

      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-8px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
      }, 4500);
    }
  }

  // Inject stylesheet for animations
  const style = document.createElement("style");
  style.textContent = `
    @keyframes nipunToastIn {
      from { opacity: 0; transform: translateY(-12px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;
  document.head.appendChild(style);

  window.NipunStore = new DemoStore();
})();
