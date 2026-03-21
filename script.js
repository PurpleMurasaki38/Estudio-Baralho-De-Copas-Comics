const revealElements = document.querySelectorAll(".reveal");
const backToTop = document.getElementById("backToTop");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();

  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

window.addEventListener("load", revealOnScroll);

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}