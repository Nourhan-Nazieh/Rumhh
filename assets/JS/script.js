

// Pass
document.querySelector("form").addEventListener("submit", function (e) {
  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;
  if (newPass !== confirmPass) {
    e.preventDefault();
    alert("كلمة المرور غير متطابقة");
  }
});

  // ===========Scroll==============
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

//     <!-- START Call to Action Section -->

