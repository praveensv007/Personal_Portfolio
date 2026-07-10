document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  // Theme
  const savedTheme = localStorage.getItem("praveen-theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    if (themeToggle) themeToggle.textContent = "☀";
  } else {
    if (themeToggle) themeToggle.textContent = "☾";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light");
      const isLight = body.classList.contains("light");
      localStorage.setItem("praveen-theme", isLight ? "light" : "dark");
      themeToggle.textContent = isLight ? "☀" : "☾";
    });
  }

  // Mobile menu
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      menuToggle.textContent = mobileMenu.classList.contains("open") ? "✕" : "☰";
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));
  }
});