document.querySelector(".nav_menu").addEventListener("click", animateNav);

var linea1 = document.querySelector(".linea1_nav");
var linea2 = document.querySelector(".linea2_nav");
var linea3 = document.querySelector(".linea3_nav");

function animateNav(params) {
  linea1.classList.toggle("active_linea1_nav");
  linea2.classList.toggle("active_linea2_nav");
  linea3.classList.toggle("active_linea3_nav");
}
