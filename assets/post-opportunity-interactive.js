/**
 * NIPUN — Post Opportunity Interactive Controller
 */

(function () {
  function init() {
    if (!window.NipunStore) {
      setTimeout(init, 50);
      return;
    }

    const publishButtons = document.querySelectorAll("button");
    let publishBtn = null;

    publishButtons.forEach((b) => {
      if (b.textContent.toLowerCase().includes("publish") || b.textContent.toLowerCase().includes("post")) {
        publishBtn = b;
      }
    });

    if (publishBtn) {
      publishBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const titleInput = document.querySelector('input[value*="Distributed Systems"], input[type="text"]');
        const title = titleInput ? titleInput.value : "Cloud Platform & Distributed Systems Intern";

        const stipendInput = document.querySelector('input[value*="45,000"]');
        const compensation = stipendInput ? `₹${stipendInput.value}` : "₹45,000 – 60,000 / month";

        const employer = window.NipunStore.getEmployer();

        const newOpp = window.NipunStore.addOpportunity({
          title: title,
          company: employer ? employer.company : "Tata Digital / TelcoX Cloud",
          compensation: compensation,
          location: "Bengaluru (Hybrid)",
          type: "Full-Time • Direct Fast-Track",
          nsqf: "NSQF Level 7 Validated",
          skills: ["Go", "Kubernetes", "Distributed DBs", "Linux Internals"]
        });

        publishBtn.innerHTML = `
          <span class="material-symbols-outlined text-sm animate-spin">sync</span>
          <span>Publishing to National Grid...</span>
        `;
        publishBtn.disabled = true;

        setTimeout(() => {
          window.location.href = "opportunities.html";
        }, 900);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
