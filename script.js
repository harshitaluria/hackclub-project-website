// =========================
// Skeleton Loader
// =========================

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loader").style.display = "none";

    document
      .getElementById("content")
      .classList.remove("hidden");

  }, 1800);

});

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
