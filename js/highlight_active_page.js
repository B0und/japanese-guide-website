document.addEventListener("DOMContentLoaded", function () {
  var $page = location.pathname;
  const matches = document.querySelectorAll(
    "a.navbar__menu--links, a.sidebar-container__links"
  );
  matches.forEach(function (link) {
    var $link = "/" + link.getAttribute("href");
    if ($page.endsWith($link)) {
      link.classList.add("active-page");
    } else {
      link.classList.remove("active-page");
    }
    if (!$page.endsWith(".html")) {
      matches[0].classList.add("active-page");
    }
  });
});
