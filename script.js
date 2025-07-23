// Mobile Menu Management
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

const closeMobileMenu = () => {
  burger.classList.remove("active");
  mobileMenu.classList.remove("active");
};

// Toggle mobile menu
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking on links or outside
document.addEventListener("click", (e) => {
  if (
    e.target.closest(".mobile-menu a") ||
    (!burger.contains(e.target) && !mobileMenu.contains(e.target))
  ) {
    closeMobileMenu();
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Navbar background on scroll with throttling
let isScrolling = false;
const navbar = document.querySelector(".navbar");

const updateNavbar = () => {
  navbar.style.backgroundColor =
    window.scrollY > 100 ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.9)";
  isScrolling = false;
};

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    requestAnimationFrame(updateNavbar);
    isScrolling = true;
  }
});
