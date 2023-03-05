// toggle icon
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});
// toggle icon

// scroll section active link
let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // if condition
    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  // sticky navbar

  // remove toggle and navbar links when scroll
  menuIcon.classList.remove("fa-times");
  navBar.classList.remove("active");
};

// scroll Reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(".home-img,.services-container,.team-box,.contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1,.about-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p,.about-content", {
  origin: "right",
});

// typed js
const typed = new Typed(".multiple-text", {
  strings: [
    "Magia Team",
    "Hamdy Mohamed",
    "Abdallh elzayat",
    "Hessien Nasser",
    "Magdey Elsayed",
  ],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
