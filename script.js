document.addEventListener("DOMContentLoaded", () => {
  // 🌟 Navbar Glow on Scroll
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 2px 10px rgba(212,175,55,0.3)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // 💫 Scroll-triggered Fade-in Animation
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
// Navbar glow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.style.boxShadow = window.scrollY > 50 ? "0 2px 10px rgba(212,175,55,0.3)" : "none";
});

// Fade-in scroll animation
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach((fader) => appearOnScroll.observe(fader));

// Image spin effect on click
const spinImages = document.querySelectorAll(".spin-img");
spinImages.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.add("clicked");
    setTimeout(() => img.classList.remove("clicked"), 800);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 🌟 Navbar Glow on Scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 2px 10px rgba(212,175,55,0.3)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // 💫 Scroll-triggered Fade-in + Slide Animation
  const faders = document.querySelectorAll(".fade-in");
  const slidersLeft = document.querySelectorAll(".slide-in-left");
  const slidersRight = document.querySelectorAll(".slide-in-right");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((el) => appearOnScroll.observe(el));
  slidersLeft.forEach((el) => appearOnScroll.observe(el));
  slidersRight.forEach((el) => appearOnScroll.observe(el));
});


