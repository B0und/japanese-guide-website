document.addEventListener("DOMContentLoaded", function () {
  var page = location.pathname;
  const matches = document.querySelectorAll("a.navbar__menu--links, a.sidebar-container__links");
  matches.forEach((link) => {
    var link_end = link.getAttribute("href");
    var link_end = link_end.split("/");
    var link_end = link_end[link_end.length - 1];
    var link_end = "/" + link_end;

    if (page.endsWith(link_end)) {
      link.classList.add("active-page");
    } else {
      link.classList.remove("active-page");
    }
    if (!page.endsWith(".html")) {
      matches[0].classList.add("active-page");
    }
  });
});
