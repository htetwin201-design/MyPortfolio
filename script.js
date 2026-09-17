/* ===== Portfolio interactions ===== */

// ---------- Sakura petals ----------
const petalsContainer = document.getElementById("petals");
const petalCount = window.innerWidth < 768 ? 12 : 22;
for (let i = 0; i < petalCount; i++) {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.textContent = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = 10 + Math.random() * 14 + "px";
  petal.style.animationDuration = 7 + Math.random() * 10 + "s";
  petal.style.animationDelay = Math.random() * 10 + "s";
  petalsContainer.appendChild(petal);
}

// ---------- Typewriter effect ----------
const phrases = [
  "Junior Developer",
  "CS Undergraduate",
  "Web Developer",
  "Anime Fan & Problem Solver",
];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typeEl = document.getElementById("typewriter");

function typeLoop() {
  const current = phrases[phraseIndex];
  typeEl.textContent = current.slice(0, charIndex);
  if (!deleting) {
    if (charIndex < current.length) {
      charIndex++;
      setTimeout(typeLoop, 80);
    } else {
      deleting = true;
      setTimeout(typeLoop, 1600);
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeLoop, 40);
    } else {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeLoop, 400);
    }
  }
}
typeLoop();

// ---------- Scroll reveal ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------- Navbar background on scroll + back-to-top ----------
const navbar = document.getElementById("navbar");
const topBtn = document.getElementById("top-btn");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  topBtn.classList.toggle("hidden", window.scrollY < 400);
});
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------- Mobile menu ----------
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => mobileMenu.classList.add("hidden"))
);
