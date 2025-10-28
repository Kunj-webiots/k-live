// /*=====================
//    Grid Change JS
// ==========================*/
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

// function safeClick(selector, callback) {
//     var el = document.querySelector(selector);
//     if (el) {
//         el.addEventListener("click", callback);
//     }
// }

// safeClick(".grid-option .list-btn", function () {
//     const productSection = document.querySelector(".product-list-section");
//     if (!productSection) return;

//     const classes = Array.from(productSection.classList);
//     classes.forEach(cls => {
//         if (cls.startsWith("row-cols-")) {
//             productSection.classList.remove(cls);
//         }
//     });

//     productSection.classList.add("row-cols-1");
//     productSection.classList.add("list-style");
// });


// safeClick(".grid-option .grid-btn", function () {
//     var productSection = document.querySelector(".product-list-section");
//     productSection.classList.remove("list-style", "row-cols-xxl-5", "row-cols-xxl-3",
//         "row-cols-xxl-4", "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3", "row-cols-2");

//     productSection.classList.add("row-cols-xxl-4", "row-cols-xl-3",
//         "row-cols-lg-2", "row-cols-md-3", "row-cols-2");
// });

// safeClick(".grid-option .three-grid", function () {
//     var productSection = document.querySelector(".product-list-section");
//     productSection.classList.remove("list-style", "row-cols-xxl-5", "row-cols-xxl-4",
//         "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3", "row-cols-2", "row-cols-xl-4", "row-cols-lg-3");

//     productSection.classList.add("row-cols-xl-3",
//         "row-cols-lg-2", "row-cols-md-3", "row-cols-2");
// });

// safeClick(".grid-option .two-grid", function () {
//     var productSection = document.querySelector(".product-list-section");
//     productSection.classList.remove("list-style", "row-cols-xxl-5", "row-cols-xxl-4",
//         "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3", "row-cols-2");

//     productSection.classList.add("row-cols-2");
// });

// safeClick(".grid-option .five-grid", function () {
//     var productSection = document.querySelector(".product-list-section");
//     productSection.classList.remove("list-style", "row-cols-xxl-3", "row-cols-xxl-4",
//         "row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3", "row-cols-2");

//     productSection.classList.add("row-cols-xxl-5", "row-cols-xl-3",
//         "row-cols-lg-2", "row-cols-md-3", "row-cols-2");
// });

// var contentwidth = window.innerWidth || document.documentElement.clientWidth;

// if (contentwidth < 1199) {
//     var gridBtn = document.querySelector(".grid-options ul .grid-btn");
//     if (gridBtn) gridBtn.classList.add("active");
// }
// if (contentwidth < 1399) {
//     var threeGridBtn = document.querySelector(".grid-options ul .three-grid");
//     if (threeGridBtn) threeGridBtn.classList.add("active");
// }


/*=====================
   Grid Change JS
==========================*/

// Toggle active class between grid options
document.querySelectorAll(".grid-option li").forEach(li => {
    li.addEventListener("click", () => {
        li.classList.add("active");
        li.parentElement.querySelectorAll("li").forEach(sib => {
            if (sib !== li) sib.classList.remove("active");
        });
    });
});

// Safe click utility
const safeClick = (selector, callback) => {
    const el = document.querySelector(selector);
    if (el) el.addEventListener("click", callback);
};

// Helper: remove all row-cols-* classes
const setRowCols = (el, cols) => {
    if (!el) return;
    [...el.classList]
        .filter(c => c.startsWith("row-cols-"))
        .forEach(c => el.classList.remove(c));
    el.classList.add(`row-cols-${cols}`);
};

// Helper: apply grid mode
const applyGrid = (cols, extraClasses = []) => {
    const section = document.querySelector(".product-list-section");
    if (!section) return;

    section.classList.remove("list-style");
    setRowCols(section, cols);
    section.classList.add(...extraClasses);
};

// --- List View (1 column)
safeClick(".grid-option .list-btn", () => {
    const section = document.querySelector(".product-list-section");
    if (!section) return;

    // Remove all row-cols-* and apply row-cols-1
    setRowCols(section, 1);
    section.classList.add("list-style");
});

// --- Grid View (4 columns default)
safeClick(".grid-option .grid-btn", () => {
    applyGrid("xxl-4", ["row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3", "row-cols-2"]);
});

// --- Three Grid
safeClick(".grid-option .three-grid", () => {
    applyGrid("xl-3", ["row-cols-lg-2", "row-cols-md-3", "row-cols-2"]);
});

// --- Two Grid
safeClick(".grid-option .two-grid", () => {
    applyGrid(2);
});

// --- Five Grid
safeClick(".grid-option .five-grid", () => {
    applyGrid("xxl-5", ["row-cols-xl-3", "row-cols-lg-2", "row-cols-md-3", "row-cols-2"]);
});

// --- Responsive defaults
const contentWidth = window.innerWidth || document.documentElement.clientWidth;

if (contentWidth < 1199) {
    document.querySelector(".grid-option .grid-btn")?.classList.add("active");
} else if (contentWidth < 1399) {
    document.querySelector(".grid-option .three-grid")?.classList.add("active");
}
