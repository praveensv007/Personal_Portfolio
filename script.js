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
const roles = [
    {
        text: "Java Full Stack Developer",
        color: "#00E676"   // Green
    },
    {
        text: "Java Developer",
        color: "#FF9800"   // Orange
    },
    {
        text: "Frontend Developer",
        color: "#03A9F4"   // Blue
    },
    {
        text: "Backend Developer",
        color: "#E91E63"   // Pink
    },
    {
        text: "Software Developer",
        color: "#9C27B0"   // Purple
    }
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const current = roles[roleIndex];

    typing.style.color = current.color;

    if(!deleting){

        typing.textContent = current.text.substring(0,charIndex++);

    }else{

        typing.textContent = current.text.substring(0,charIndex--);

    }

    let speed = deleting ? 50 : 100;

    if(!deleting && charIndex > current.text.length){

        deleting = true;
        speed = 1500;

    }

    if(deleting && charIndex < 0){

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;

    }

    setTimeout(type,speed);

}

type();