// MOBILE NAVIGATION
const navBtn = document.querySelector(".nav-btn");
const header = document.querySelector(".header");
navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
});

// NAVIGATION
const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href.startsWith("#") && href !== "#") {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-item")) {
      header.classList.toggle("nav-active");
    }
  });
});

// STICKY NAVIGATION
const body = document.body;
const hero = document.querySelector(".section-hero");
const heroObserver = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) body.classList.add("sticky");
  if (entry.isIntersecting) body.classList.remove("sticky");
};
const observer = new IntersectionObserver(heroObserver, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
observer.observe(hero);

// DISPLAY CURRENT YEAR FOOTER
const yearEl = document.querySelector(".year");
const year = new Date().getFullYear();
console.log(year);
yearEl.textContent = year;

// Revealing sections
const secObserve = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("hidden");
    observer.unobserve(entry.target);
  });
};

const allSections = document.querySelectorAll(".section");
console.log(allSections);
const sectionObserver = new IntersectionObserver(secObserve, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  section.classList.add("hidden");
  sectionObserver.observe(section);
});
