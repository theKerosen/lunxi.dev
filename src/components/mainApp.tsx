import AOS from "aos";
import "aos/dist/aos.css";
import * as bootstrap from "bootstrap";

function collapseNavbar() {
  const mainNav = document.querySelector("#mainNav");

  if (mainNav) {
    const navCollapse = mainNav.querySelector(".navbar-collapse");
    if (navCollapse) {
      const collapse = new bootstrap.Collapse(navCollapse, {
        toggle: false,
      });
      const navItems = navCollapse.querySelectorAll("a");
      for (const item of navItems) {
        item.addEventListener("click", () => {
          collapse.hide();
        });
      }
    }
    const scrollTop =
      window.scrollY ??
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

    if (scrollTop > 100) {
      mainNav.classList.add("navbar-shrink");
    } else {
      mainNav.classList.remove("navbar-shrink");
    }
  }
}

export default function mainApp() {
  window.innerWidth < 768 &&
    Array.from(document.querySelectorAll("[data-bss-disabled-mobile]")).forEach(
      (element) => {
        if (element instanceof HTMLElement) {
          element.classList.remove("animated");
          element.removeAttribute("data-bss-hover-animate");
          element.removeAttribute("data-aos");
        }
      }
    );
  AOS.init();
  Array.from(document.querySelectorAll("[data-bss-hover-animate]")).forEach(
    (element) => {
      element.addEventListener("mouseenter", (event) => {
        if (event.target instanceof HTMLElement) {
          event.target.classList.add(
            "animated",
            event.target.dataset.bssHoverAnimate as string
          );
        }
      });
      element.addEventListener("mouseleave", (event) => {
        if (event.target instanceof HTMLElement) {
          event.target.classList.remove(
            "animated",
            event.target.dataset.bssHoverAnimate as string
          );
        }
      });
    }
  );
  const scrollToTopElement = document.querySelector(".scroll-to-top");
  if (scrollToTopElement instanceof HTMLElement) {
    window.addEventListener("scroll", () => {
      const scrollOffset = window.scrollY;
      scrollToTopElement.style.display = scrollOffset > 100 ? "block" : "none";
    });
  }
  collapseNavbar();
  document.addEventListener("scroll", collapseNavbar);
}
