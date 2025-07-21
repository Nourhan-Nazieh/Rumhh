// ================== Reset Password Validation ==================
const form = document.getElementById("resetForm");

if (form) {
  form.addEventListener("submit", function (e) {
    const pw1 = document.getElementById("newPassword").value.trim();
    const pw2 = document.getElementById("confirmPassword").value.trim();
    const alert = document.getElementById("passwordMismatch");
    const btn = this.querySelector("button");

    if (pw1 === "" || pw2 === "" || pw1 !== pw2) {
      e.preventDefault();
      if (alert) alert.classList.remove("d-none");
      if (btn) {
        btn.classList.add("btn-error");
        setTimeout(() => {
          btn.classList.remove("btn-error");
        }, 400);
      }
    } else {
      if (alert) alert.classList.add("d-none");
    }
  });
}

// ================== Scroll to Top ==================
window.onload = function () {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
};

// ================== Currency Dropdown ==================
const currencyOptions = document.querySelectorAll('.dropdown-item');
const currencyButton = document.getElementById('currencyDropdown');

if (currencyOptions.length > 0 && currencyButton) {
  currencyOptions.forEach(option => {
    option.addEventListener('click', function () {
      currencyButton.innerHTML = `<i class="fas fa-coins me-2"></i> ${this.textContent}`;
    });
  });
}
// ====================AOS==========================
  AOS.init({
    once: true,
    duration: 1000,
  });


  // ---------
    VanillaTilt.init(document.querySelectorAll(".interactive-img"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
