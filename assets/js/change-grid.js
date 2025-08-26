// /*=====================
//     Grid Change Js
//   ==========================*/
// document.querySelectorAll(".grid-option li").forEach(function (element) {
//     element.addEventListener("click", function () {
//         this.classList.add("active");
//         var siblings = Array.from(this.parentNode.children).filter(function (child) {
//             return child !== this;
//         }, this);
//         siblings.forEach(function (sibling) {
//             sibling.classList.remove("active");
//         });
//     });
// });

// document.querySelector(".grid-option .grid-btn").addEventListener("click", function () {
//     document.querySelector(".product-list-section").classList.remove("list-style");
// });

// document.querySelector(".grid-option .list-btn").addEventListener("click", function () {
//     document.querySelector(".product-list-section").classList.add("list-style");
// });

// document.querySelector('.grid-btn').addEventListener('click', function (e) {
//     var productSection = document.querySelector(".product-list-section");
//     productSection.classList.remove("row-cols-xxl-5", "row-cols-xxl-4", "row-cols-xl-3",
//         "row-cols-lg-2", "row-cols-md-3", "row-cols-2", "list-style");
//     productSection.classList.add("row-cols-xxl-4", "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3",
//         "row-cols-2");
// });

// // document.querySelector('.five-grid').addEventListener('click', function (e) {
// //     var productSection = document.querySelector(".product-list-section");
// //     productSection.classList.remove("list-style");
// //     productSection.classList.add("row-cols-xxl-5", "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3",
// //         "row-cols-2");
// // });

// var contentwidth = window.innerWidth || document.documentElement.clientWidth;
// if (contentwidth < 1199) {
//     document.querySelector(".grid-options ul .grid-btn").classList.add("active");
// }
// if (contentwidth < 1399) {
//     document.querySelector(".grid-options ul .three-grid").classList.add("active");
// }




/*=====================
    Grid Change Js
==========================*/

// Active class toggle
document.querySelectorAll(".grid-option li").forEach(function (element) {
    element.addEventListener("click", function () {
        this.classList.add("active");
        var siblings = Array.from(this.parentNode.children).filter(function (child) {
            return child !== this;
        }, this);
        siblings.forEach(function (sibling) {
            sibling.classList.remove("active");
        });
    });
});

// Function to safely attach event
function safeClick(selector, callback) {
    var el = document.querySelector(selector);
    if (el) {
        el.addEventListener("click", callback);
    }
}

// List view
safeClick(".grid-option .list-btn", function () {
    var productSection = document.querySelector(".product-list-section");
    productSection.classList.add("list-style");
});

// Grid (4 columns default)
safeClick(".grid-option .grid-btn", function () {
    var productSection = document.querySelector(".product-list-section");
    productSection.classList.remove("list-style", "row-cols-xxl-5", "row-cols-xxl-3",
        "row-cols-xxl-4", "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3", "row-cols-2");

    productSection.classList.add("row-cols-xxl-4", "row-cols-xl-3",
        "row-cols-lg-2", "row-cols-md-3", "row-cols-2");
});

// Three grid
safeClick(".grid-option .three-grid", function () {
    var productSection = document.querySelector(".product-list-section");
    productSection.classList.remove("list-style", "row-cols-xxl-5", "row-cols-xxl-4",
        "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3", "row-cols-2");

    productSection.classList.add("row-cols-xl-3",
        "row-cols-lg-2", "row-cols-md-3", "row-cols-2");
});

// Five grid
safeClick(".grid-option .five-grid", function () {
    var productSection = document.querySelector(".product-list-section");
    productSection.classList.remove("list-style", "row-cols-xxl-3", "row-cols-xxl-4",
        "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3", "row-cols-2");

    productSection.classList.add("row-cols-xxl-5", "row-cols-xl-3",
        "row-cols-lg-2", "row-cols-md-3", "row-cols-2");
});

// Responsive default active button
var contentwidth = window.innerWidth || document.documentElement.clientWidth;

if (contentwidth < 1199) {
    var gridBtn = document.querySelector(".grid-options ul .grid-btn");
    if (gridBtn) gridBtn.classList.add("active");
}
if (contentwidth < 1399) {
    var threeGridBtn = document.querySelector(".grid-options ul .three-grid");
    if (threeGridBtn) threeGridBtn.classList.add("active");
}
