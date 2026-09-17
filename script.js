/* ===== Portfolio interactions ===== */

// ---------- Falling Sharingan ----------
const orbsContainer = document.getElementById("petals");
const orbCount = window.innerWidth < 768 ? 10 : 18;
for (let i = 0; i < orbCount; i++) {
  const orb = document.createElement("div");
  orb.className = "sharingan";
  const size = 16 + Math.random() * 26;
  orb.style.width = size + "px";
  orb.style.height = size + "px";
  orb.style.left = Math.random() * 100 + "vw";
  orb.style.animationDuration = 9 + Math.random() * 12 + "s";
  orb.style.animationDelay = -Math.random() * 20 + "s";
  orbsContainer.appendChild(orb);
}

// ---------- Typewriter effect ----------
const phrases = [
  "Junior Developer",
  "CS Undergraduate",
  "Believe It! (Dattebayo!)",
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
