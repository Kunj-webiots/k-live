// var filterButton = document.querySelectorAll(".filter-button");
// var backButton = document.querySelectorAll(".back-button");
// var bgOverlay = document.querySelectorAll(".bg-overlay");
// var leftBox = document.querySelectorAll(".left-box");
// var sortByButton = document.querySelectorAll(".sort-by-button");
// var topFilterMenu = document.querySelectorAll(".top-filter-menu");

// filterButton.forEach(function (button) {
//   button.addEventListener("click", function () {
//     bgOverlay.forEach(function (element) {
//       element.classList.add("show");
//     });
//     leftBox.forEach(function (element) {
//       element.classList.add("show");
//     });
//   });
// });

// function closeOverlay() {
//   bgOverlay.forEach(function (element) {
//     element.classList.remove("show");
//   });
//   leftBox.forEach(function (element) {
//     element.classList.remove("show");
//   });
// }

// backButton.forEach(function (button) {
//   button.addEventListener("click", closeOverlay);
// });

// bgOverlay.forEach(function (element) {
//   element.addEventListener("click", closeOverlay);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   sortByButton.forEach(function (button) {
//     button.addEventListener("click", function () {
//       topFilterMenu.forEach(function (element) {
//         element.classList.toggle("show");
//       });
//     });
//   });
// });

var filterButton = document.querySelectorAll(".filter-button");
var backButton = document.querySelectorAll(".back-button");
var bgOverlay = document.querySelectorAll(".bg-overlay");
var leftBox = document.querySelectorAll(".left-box");
var leftSidebarBox = document.querySelectorAll(".left-sidebar-box");
var sortByButton = document.querySelectorAll(".sort-by-button");
var topFilterMenu = document.querySelectorAll(".top-filter-menu");

filterButton.forEach(function (button) {
  button.addEventListener("click", function () {
    // Adding "show" class to bgOverlay and leftBox/leftSidebarBox
    bgOverlay.forEach(function (element) {
      element.classList.add("show");
    });

    // Here you can choose which class to apply based on your logic
    leftBox.forEach(function (element) {
      element.classList.add("show");
    });

    // You can also add the left-sidebar-box class if required
    leftSidebarBox.forEach(function (element) {
      element.classList.add("show");
    });
  });
});

function closeOverlay() {
  bgOverlay.forEach(function (element) {
    element.classList.remove("show");
  });

  leftBox.forEach(function (element) {
    element.classList.remove("show");
  });

  leftSidebarBox.forEach(function (element) {
    element.classList.remove("show");
  });
}

backButton.forEach(function (button) {
  button.addEventListener("click", closeOverlay);
});

bgOverlay.forEach(function (element) {
  element.addEventListener("click", closeOverlay);
});

document.addEventListener("DOMContentLoaded", function () {
  sortByButton.forEach(function (button) {
    button.addEventListener("click", function () {
      topFilterMenu.forEach(function (element) {
        element.classList.toggle("show");
      });
    });
  });
});
