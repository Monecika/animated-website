document.addEventListener("DOMContentLoaded", typeEffect);

const texts = ["Hover to pause", "Remove to watch"];
let index = 0,
  charIndex = 0,
  isDeleting = false;

function typeEffect() {
  const textElement = document.getElementById("animated-text");
  const currentText = texts[index];

  textElement.innerHTML = currentText.slice(
    0,
    (charIndex += isDeleting ? -1 : 1)
  );

  if (!isDeleting && charIndex === currentText.length)
    (isDeleting = true), setTimeout(typeEffect, 1500);
  else if (isDeleting && charIndex === 0)
    (isDeleting = false),
      (index = (index + 1) % texts.length),
      setTimeout(typeEffect, 500);
  else setTimeout(typeEffect, isDeleting ? 50 : 100);
}
