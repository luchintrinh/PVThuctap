// Hiêu ứng hover vào biểu tượng menu

let menuIcon = document.querySelector(".navbar-icon");
let menu = document.querySelector("#sidebar ul");
let icon = menuIcon.querySelector("i");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  if (!menu.classList.contains("hidden")) {
    icon.classList.add("fa-xmark");
    icon.classList.remove("fa-bars");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
