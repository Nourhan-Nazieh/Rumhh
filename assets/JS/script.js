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

  // ================SECTION(3)===============
  document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const mainImageUploader = document.querySelector('.main-image-uploader');
  const thumbUploader = document.querySelectorAll('.thumb-uploader');
  const uploadedImagesContainer = document.querySelector('.uploaded-images');

  // Main image uploader click
  if (mainImageUploader && fileInput) {
    mainImageUploader.addEventListener('click', () => fileInput.click());
  }

  // Thumbnail uploaders click
  if (thumbUploader.length > 0 && fileInput) {
    thumbUploader.forEach((thumb) => {
      thumb.addEventListener('click', () => fileInput.click());
    });
  }

  // Image upload preview
  if (fileInput && uploadedImagesContainer) {
    fileInput.addEventListener('change', (event) => {
      const files = event.target.files;
      uploadedImagesContainer.innerHTML = ''; // clear old previews

      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.classList.add('img-thumbnail', 'me-2', 'mb-2');
          img.style.maxWidth = '100px';
          uploadedImagesContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
      });
    });
  }
});


//  <======= Pillar 3=========>


document.addEventListener("DOMContentLoaded", function () {
    const toggleItems = document.querySelectorAll(".toggle-item");

    toggleItems.forEach((item) => {
      const checkbox = item.querySelector("input[type='checkbox']");

      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          // Remove active from all
          toggleItems.forEach((el) => el.classList.remove("active"));
          // Add active to current
          item.classList.add("active");
        } else {
          // Remove active from current if turned off
          item.classList.remove("active");
        }
      });
    });
  });

  // <!-- /* ================= START Contact Us Section (11) ================= */ -->
  const staticImage = document.getElementById("staticImage");
  const lottieAnim = document.getElementById("lottieAnim");

  let showingImage = true;

  setInterval(() => {
    if (showingImage) {
      staticImage.style.opacity = 0;
      lottieAnim.style.opacity = 1;
    } else {
      staticImage.style.opacity = 1;
      lottieAnim.style.opacity = 0;
    }
    showingImage = !showingImage;
  }, 5000); // كل 5 ثواني يتبدل