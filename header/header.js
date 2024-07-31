fetch("header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;

    addHeaderFunctionality();
  })
  .catch((error) => {
    console.error("Error fetching header", error);
  });

function addHeaderFunctionality() {
  const links = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (
      (currentPage === "" && linkPage === "index.html") ||
      linkPage === currentPage
    ) {
      link.classList.add("active1");
    }
  });

  // Mobile
  const navLinks = document.querySelectorAll(".nav-link");
  const navMenu = document.getElementById("nav-menu");
  const menuOpen = document.getElementById("menu-icon-open");
  const menuClose = document.getElementById("menu-icon-close");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => {
        link.classList.remove("active1");
      });

      this.classList.add("active1");

      toggleMenu();
    });
  });

  menuOpen.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);

  function toggleMenu() {
    const displayStyle = navMenu.style.display === "block" ? "none" : "block";
    navMenu.style.display = displayStyle;
    menuOpen.style.display = displayStyle === "none" ? "inline-block" : "none";
    menuClose.style.display =
      displayStyle === "block" ? "inline-block" : "none";
  }
}
