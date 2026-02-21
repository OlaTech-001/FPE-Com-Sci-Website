// // alert ("You are welcome to Computer Science Depatment")


// Mobile navigation toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Simple contact form validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const email = form.querySelector("input[type='email']").value;
    if (!email.includes("@")) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
}

//  WELCOME MODAL (SHOW ON EVERY RELOAD)
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('welcomeModal');
  const btn = document.getElementById('welcomeBtn');

  // Always show modal on page load
  if (modal) {
    modal.style.display = 'flex';
  }

  // Close button
  if (btn) {
    btn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});

