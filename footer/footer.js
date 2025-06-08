document.addEventListener("DOMContentLoaded", function () {
  fetch("footer/footer")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
