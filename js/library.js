document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
});

function initAnimations() {
  const elements = document.querySelectorAll("[data-anim]");

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animType = element.getAttribute("data-anim");
        const duration = element.getAttribute("data-duration") || "1s";
        const delay = element.getAttribute("data-delay") || "0s";

        element.style.animationDuration = duration;
        element.style.animationDelay = delay;

        if (animType === "zoom_in") element.classList.add("zoom_in");
        else if (animType === "fade_up") element.classList.add("fade_up");
        else if (animType === "fade_down") element.classList.add("fade_down");
        else if (animType === "fade_right") element.classList.add("fade_right");
        else if (animType === "fade_left") element.classList.add("fade_left");
        else if (animType === "morph1") element.classList.add("morph1");
        else if (animType === "morph2") element.classList.add("morph2");
        else if (animType === "morph3") element.classList.add("morph3");
        else if (animType === "morph4") element.classList.add("morph4");

        element.addEventListener(
          "animationend",
          () => {
            element.classList.remove(
              "zoom_in",
              "fade_up",
              "fade_down",
              "fade_right",
              "fade_left"
            );
          },
          { once: true }
        );
      }
    });
  }, observerOptions);

  elements.forEach((element) => observer.observe(element));
}
