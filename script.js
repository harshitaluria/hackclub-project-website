// =========================
// Smart Skeleton Loader
// =========================

const connection =
  navigator.connection ||
  navigator.mozConnection ||
  navigator.webkitConnection;

const isSlow =
  connection &&
  (
    connection.effectiveType === "2g" ||
    connection.effectiveType === "slow-2g"
  );

if(isSlow){

  window.addEventListener("load", () => {

    setTimeout(() => {

      document.getElementById("loader").style.display = "none";

      document
        .getElementById("content")
        .classList.remove("hidden");

    }, 1500);

  });

}else{

  document.getElementById("loader").style.display = "none";

  document
    .getElementById("content")
    .classList.remove("hidden");
}

// =========================
// Reveal on Scroll
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((element) => {

    const boxTop = element.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();

// =========================
// Smooth Card Interaction
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;

  });

});

// =========================
// Smooth Scrolling Performance
// =========================

document.body.style.scrollBehavior = "smooth";

// Reduce lag on scroll
window.addEventListener(
  "scroll",
  () => {},
  { passive: true }
);

// =========================
// Hamburger Dropdown Menu Toggle
// =========================

const menuToggle = document.querySelector('.menu-toggle');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav-links a');

// Open/Close menu interaction
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navOverlay.classList.toggle('open');
});

// Auto-close overlay when clicking any of the internal section anchors
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    navOverlay.classList.remove('open');
  });
});
