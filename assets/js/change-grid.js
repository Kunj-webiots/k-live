/*=====================
    Grid Change Js
  ==========================*/
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

document.querySelector(".grid-option .grid-btn").addEventListener("click", function () {
    document.querySelector(".product-list-section").classList.remove("list-style");
});

document.querySelector(".grid-option .list-btn").addEventListener("click", function () {
    document.querySelector(".product-list-section").classList.add("list-style");
});

document.querySelector('.grid-btn').addEventListener('click', function (e) {
    var productSection = document.querySelector(".product-list-section");
    productSection.classList.remove("row-cols-xxl-5", "row-cols-xxl-4", "row-cols-xl-3",
        "row-cols-lg-2", "row-cols-md-3", "row-cols-2", "list-style");
    productSection.classList.add("row-cols-xxl-4", "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3",
        "row-cols-2");
});

// document.querySelector('.five-grid').addEventListener('click', function (e) {
//     var productSection = document.querySelector(".product-list-section");
//     productSection.classList.remove("list-style");
//     productSection.classList.add("row-cols-xxl-5", "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3",
//         "row-cols-2");
// });

var contentwidth = window.innerWidth || document.documentElement.clientWidth;
if (contentwidth < 1199) {
    document.querySelector(".grid-options ul .grid-btn").classList.add("active");
}
if (contentwidth < 1399) {
    document.querySelector(".grid-options ul .three-grid").classList.add("active");
}