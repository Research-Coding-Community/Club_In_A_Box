const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector("#sidebar");
const navLinks = [...document.querySelectorAll(".side-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const pageLinks = [...document.querySelectorAll('a[href]:not([href^="#"])')];

pageLinks.forEach((link) => {
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

menuButton?.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) {
      return;
    }

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-20% 0px -65% 0px",
    threshold: [0.1, 0.35, 0.6]
  }
);

sections.forEach((section) => observer.observe(section));
