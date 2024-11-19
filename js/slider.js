let items;
let slider;
let currentIndex = 0;
let totalItems;
let visibleItems = 4;

document.addEventListener("DOMContentLoaded", () => {
  slider = document.querySelector(".team-slider");
  items = document.querySelectorAll(".team-img");
  totalItems = items.length;

  updateVisibleItems();
  startSliding();

  document
    .querySelector(".team-slider-wrapper")
    .addEventListener("mouseenter", stopSliding);

  document
    .querySelector(".team-slider-wrapper")
    .addEventListener("mouseleave", startSliding);

  window.addEventListener("resize", updateVisibleItems);
});

function updateVisibleItems() {
  visibleItems = window.innerWidth < 980 ? 3 : 4;
  currentIndex = 0;
  slider.style.transform = `translateX(0%)`;
}

function startSliding() {
  slideInterval = setInterval(slide, 2500);
}

function stopSliding() {
  clearInterval(slideInterval);
}

function slide() {
  if (currentIndex === totalItems - visibleItems) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  const offset = -currentIndex * (100 / visibleItems);
  slider.style.transform = `translateX(${offset}%)`;
}
