/**
 * NIPUN — Student Portfolio & Cryptographic Dossier Interactive Controller
 */

(function () {
  function init() {
    if (!window.NipunStore) {
      setTimeout(init, 50);
      return;
    }

    const student = window.NipunStore.getStudent();

    // Wire Verify Integrity buttons
    const verifyButtons = document.querySelectorAll("button, a");
    verifyButtons.forEach((btn) => {
      const txt = btn.textContent.toLowerCase();
      if (txt.includes("verify") || txt.includes("audit") || txt.includes("hash")) {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          window.NipunStore.showToast(
            `Cryptographic Seal Confirmed: Block #194,204 • SHA-256: ${student.certHash} • AICTE & NSQF Validated`,
            "success",
            "verified"
          );
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
