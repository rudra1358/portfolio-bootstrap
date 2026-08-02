// Bootstrap's navbar-toggler (data-bs-toggle="collapse") already handles opening
// and closing the mobile menu, so the old manual toggleMenu() function is gone.
// The one bit of behavior Bootstrap doesn't give you for free: closing the menu
// automatically after a link is tapped.
document.addEventListener("DOMContentLoaded", function () {
  var navMenu = document.getElementById("navMenu");
  var navLinks = navMenu.querySelectorAll(".nav-link");
  var collapseInstance = bootstrap.Collapse.getOrCreateInstance(navMenu, { toggle: false });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("show")) {
        collapseInstance.hide();
      }
    });
  });
});
