// Ensure the form popup is hidden on page load (default)
$(document).ready(function () {
  $(".form-popup-bg").removeClass("is-visible"); // Ensure popup is hidden initially
});

// Open the form popup when "Contact" link is clicked
$("#btnOpenForm").on("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  $(".form-popup-bg").addClass("is-visible"); // Show the popup by adding 'is-visible'
});

// Close the form popup when clicking the "X" button or outside the form
$(".form-popup-bg").on("click", function (event) {
  if (
    $(event.target).is(".form-popup-bg") || // Clicking outside the form container
    $(event.target).is("#btnCloseForm") // Clicking the close button
  ) {
    event.preventDefault(); // Prevent default behavior
    $(".form-popup-bg").removeClass("is-visible"); // Hide the popup by removing 'is-visible'
  }
});
