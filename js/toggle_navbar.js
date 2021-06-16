// delegate event from footer to child element, because it was loaded with .load and the code above doesnt work in this case
// https://api.jquery.com/on/#direct-and-delegated-events
$(function () {
  $(".navbar").on("click", ".navbar__hamburger", function () {
    $(".navbar__menu").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
  });
});
