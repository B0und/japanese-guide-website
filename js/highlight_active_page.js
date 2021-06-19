document.addEventListener("DOMContentLoaded", function () {
  var $page = location.pathname;
  console.log($page);
  const matches = document.querySelectorAll(
    "a.navbar__menu--links, a.sidebar-container__links"
  );
  matches.forEach(function (link) {
    var $link = "/" + link.getAttribute("href");
    if ($link == $page) {
      link.classList.add("active-page");
    } else {
      link.classList.remove("active-page");
    }
  });
});
