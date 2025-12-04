// Fake enroll logic (client-only)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    const successBox = document.getElementById("successBox");
  
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        successBox.style.display = "block";
  
        form.querySelectorAll("input, select, button").forEach(el => {
          if (el.type !== "submit") el.disabled = true;
        });
      });
    }
  });
  