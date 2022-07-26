let nav = document.querySelector(".navigation");
let navUser = document.querySelector(".user-navigation");
let mainHeaderToggle = document.querySelector(".main-header__toggle");

mainHeaderToggle.addEventListener("click", function () {
  if (nav.classList.contains("navigation--closed") && navUser.classList.contains("user-navigation--closed")) {
    nav.classList.remove("navigation--closed");
    nav.classList.add("navigation--opened");
    navUser.classList.remove("user-navigation--closed");
    navUser.classList.add("user-navigation--opened");
    mainHeaderToggle.classList.remove("main-header__toggle--closed");
    mainHeaderToggle.classList.add("main-header__toggle--opened");
  } else {
    nav.classList.add("navigation--closed");
    nav.classList.remove("navigation--opened");
    navUser.classList.add("user-navigation--closed");
    navUser.classList.remove("user-navigation--opened");
    mainHeaderToggle.classList.add("main-header__toggle--closed");
    mainHeaderToggle.classList.remove("main-header__toggle--opened");
  }
});
