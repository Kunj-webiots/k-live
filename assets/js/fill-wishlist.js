/*=====================
    Fill Wishlist Js
==========================*/
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // Attach a click event listener to the entire document
    document.addEventListener("click", (event) => {
      const target = event.target;

      // Check if the clicked element is the line heart icon
      if (target.classList.contains("ri-heart-3-line")) {
        target.style.display = "none"; // Hide the line heart icon
        target.nextElementSibling.style.display = "inline"; // Show the fill heart icon
      }

      // Check if the clicked element is the fill heart icon
      if (target.classList.contains("ri-heart-3-fill")) {
        target.style.display = "none"; // Hide the fill heart icon
        target.previousElementSibling.style.display = "inline"; // Show the line heart icon
      }
    });
  });
})();
