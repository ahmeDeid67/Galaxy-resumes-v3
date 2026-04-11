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

  if (window.location.pathname === "/") {
    links[0].classList.add("active1"); // Home link
  }

  links.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if ((currentPage === "" && linkPage === "") || linkPage === currentPage) {
      link.classList.add("active1");
    }
  });

  const navLinks = document.querySelectorAll(".nav-link");
  const navMenu = document.getElementById("nav-menu");
  const menuOpen = document.getElementById("menu-icon-open");
  const menuClose = document.getElementById("menu-icon-close");
  console.log(menuOpen);

  // 🔹 Set active based on current page (Home included)
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active1");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active1"));
      this.classList.add("active1");
      toggleMenu();
    });
  });

  function toggleMenu() {
    const isActive = navMenu.classList.toggle("active");
    menuOpen.style.display = isActive ? "none" : "inline-block";
    menuClose.style.display = isActive ? "inline-block" : "none";
  }

  menuOpen.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);
}
