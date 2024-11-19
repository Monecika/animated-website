document.addEventListener("DOMContentLoaded", () => {
  const accordionButtons = document.querySelectorAll(".accordion-button");
  const acoimg = document.querySelectorAll(".accordion-button img");

  accordionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const collapse = button.parentElement.nextElementSibling;

      accordionButtons.forEach((otherButton, otherIndex) => {
        if (otherButton !== button) {
          const otherCollapse = otherButton.parentElement.nextElementSibling;
          otherCollapse.style.maxHeight = null;
          acoimg[otherIndex].src = "images/icon/plus.png";
          acoimg[otherIndex].style.transform = "rotate(0deg)";
          otherButton.style.background = "#fff";
        }
      });

      if (collapse.style.maxHeight) {
        collapse.style.maxHeight = null;
        acoimg[index].src = "images/icon/plus.png";
        acoimg[index].style.transform = "rotate(90deg)";
        button.style.background = "#fff";
      } else {
        collapse.style.maxHeight = collapse.scrollHeight + "px";
        acoimg[index].src = "images/icon/menus.png";
        acoimg[index].style.transform = "rotate(180deg)";
        button.style.backgroundColor = "#c1b0b5";
      }
    });
  });

  // footer
  const fom = document.getElementById("footer-form");
  const footerMessage = document.getElementById("footer-message");

  fom.addEventListener("submit", (event) => {
    event.preventDefault();
    footerMessage.innerHTML = "~ Form Submitted successfully";
    footerMessage.style.display = "flex";
    fom.reset();
    setTimeout(() => {
      footerMessage.style.display = "none";
    }, 3000);
  });
});

// side bar start
function openNav() {
  manipulateNav("0px");
}

function closeNav() {
  manipulateNav("-320px");
}

function manipulateNav(value) {
  const sidePanel = document.getElementById("sidePanel");
  sidePanel.style.left = value;
}

// searchbar

function open_search() {
  const searchpanel = document.getElementById("search-bar");
  searchpanel.style.height = "100vh";
  searchpanel.style.borderRadius = "0";
}

function close_search() {
  const searchpanel = document.getElementById("search-bar");
  searchpanel.style.height = "0";
  searchpanel.style.borderTopLeftRadius = "100%";
  searchpanel.style.borderTopRightRadius = "100%";
}

// right sidebar
function open_right() {
  manipulateRight("0");
}

function close_right() {
  manipulateRight("-355px");
}

function manipulateRight(value) {
  const sidepar = document.getElementById("right_side");
  sidepar.style.right = value;
}

// portfolio gallary tab
function open_img(evt, cityName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) tablinks[i].classList.remove("active");

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
