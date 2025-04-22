$(document).ready(function () {
  $(".event").click(function () {
    // If clicked event is already expanded, collapse it
    if ($(this).hasClass("expanded")) {
      $(this).removeClass("expanded");
    } else {
      $(".event").removeClass("expanded"); // Collapse others
      $(this).addClass("expanded"); // Expand current
    }
  });
});
