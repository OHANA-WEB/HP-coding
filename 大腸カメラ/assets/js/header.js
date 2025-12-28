document.addEventListener("DOMContentLoaded", function () {
  var hamButton = document.querySelector(".hamburger");
  var hamMenu = document.querySelector(".ham-menu-container");

  if (!hamButton || !hamMenu) return;

  function openMenu() {
    hamButton.classList.add("is-active");
    hamMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    hamButton.classList.remove("is-active");
    hamMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    if (hamMenu.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamButton.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking outside the drawer
  document.addEventListener("click", function (e) {
    if (!hamMenu.classList.contains("is-open")) return;
    var clickedInsideMenu =
      hamMenu.contains(e.target) || hamButton.contains(e.target);
    if (!clickedInsideMenu) {
      closeMenu();
    }
  });

  // Close on ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // Close on navigating via any link inside the menu
  hamMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });
});
