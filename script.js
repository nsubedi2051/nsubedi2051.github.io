document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const email = "your@email.com";
  const copyBtn = document.getElementById("copyEmail");
  const toast = document.getElementById("toast");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(email).then(() => {
        toast.textContent = "Copied!";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2000);
      });
    });
  }

  const img = document.querySelector(".profile img");
  if (img) {
    img.addEventListener("error", () => {
      img.style.display = "none";
    });
  }
});
