// layout-loader.js

document.addEventListener("DOMContentLoaded", () => {
  // Cargar header
  fetch("../../components/html/header.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
    });

  // Cargar navbar
  fetch("../../components/html/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector(".nabvars").innerHTML = data;
    });

  // Cargar footer
  fetch("../../components/html/footer.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });
});
