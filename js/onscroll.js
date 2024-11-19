document.addEventListener("DOMContentLoaded", () => {
  window.onscroll = function () {
    scrollFunction();
  };
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    document.getElementById("backToTopBtn").style.display = "block";
  else document.getElementById("backToTopBtn").style.display = "none";
}

function scrollToTop() {
  const scrollToTopBtn = document.documentElement || document.body;
  scrollToTopBtn.scrollIntoView({
    behavior: "smooth",
  });
}
