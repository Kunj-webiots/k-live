/*-----------------------------------------------------------------------------------

 Template Name: Kartify
 Template URI: themes.pixelstrap.com/Kartify
 Description: This is E-commerce website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */

/*====================
   01. Tap To Tap js
=======================*/
var scrollToTopBtn = document.querySelector(".tap-top-button");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.1) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

/*====================
   02. Sticky header js
=======================*/
const header = document.querySelector("header");
const toggleClass = "sticky-header";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 300) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

/*====================
03. Dropdown Filter js
=======================*/
document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
  element.addEventListener("click", function (event) {
    var a = event.target.closest("a");
    var getSampling = a.textContent;
    var dropdownToggle = event.target.closest(".dropdown-menu").previousElementSibling;
    dropdownToggle.querySelector("span").textContent = getSampling;
  });
});

/*====================
   01. Ratio js
=======================*/
window.addEventListener("load", () => {
  const bgImg = document.querySelectorAll(".bg-img");
  for (i = 0; i < bgImg.length; i++) {
    let bgImgEl = bgImg[i];
    /* Optional Class Add */
    if (bgImgEl.classList.contains("bg-top")) {
      bgImgEl.parentNode.classList.add("b-top");
    } else if (bgImgEl.classList.contains("bg-bottom")) {
      bgImgEl.parentNode.classList.add("b-button");
    } else if (bgImgEl.classList.contains("bg-center")) {
      bgImgEl.parentNode.classList.add("b-center");
    } else if (bgImgEl.classList.contains("bg-left")) {
      bgImgEl.parentNode.classList.add("b-left");
    } else if (bgImgEl.classList.contains("bg-right")) {
      bgImgEl.parentNode.classList.add("b-right");
    }

    /* Lazyload Class Add */
    if (bgImgEl.classList.contains("blur-up")) {
      bgImgEl.parentNode.classList.add("blur-up", "lazyload");
    }

    /* Size Class Add */
    if (bgImgEl.classList.contains("bg_size_content")) {
      bgImgEl.parentNode.classList.add("b_size_content");
    }

    /* Ratio Style */
    bgImgEl.parentNode.classList.add("bg-size");
    const bgSrc = bgImgEl.src;
    bgImgEl.style.display = "none";
    bgImgEl.parentNode.setAttribute(
      "style",
      `
            background-image: url(${bgSrc});
            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;
            display: block;
        `
    );
  }
});

/*====================
   02. Open Search Bar js
=======================*/
const div = document.getElementById("searchOffcanvas");
const div2 = document.getElementById("overlay");
const addBtn = document.getElementById("searchClick");
const removeBtn = document.getElementById("close-btn");

addBtn.addEventListener("click", () => {
  div.classList.add("show");
  div2.classList.add("show");
});

removeBtn.addEventListener("click", () => {
  div.classList.remove("show");
  div2.classList.remove("show");
});

/*=====================
    Wishlist Box Remove Js
  ==========================*/
// document.addEventListener('DOMContentLoaded', function () {
const productList = document.querySelector('.wishlist-offcanvas .product-box-list');

productList.addEventListener('click', function (event) {
  const btn = event.target.closest('.wishlist-btn');
  if (!btn) return;

  const li = btn.closest('li');
  if (!li) return;

  // Check if this is the last item before removing
  const remainingItems = productList.querySelectorAll('.wishlist-offcanvas .product-box-list li');
  const isLastItem = remainingItems.length === 1;

  // Remove the product li
  li.remove();

  // If it was the last item, insert noDataContainer in its place
  if (isLastItem) {
    const noData = document.createElement('li');
    noData.innerHTML = `
      <div class="no-data" id="noDataContainer">
        <svg>
          <use xlink:href="./assets/images/wishlist-no-data.svg#no-data"></use>
        </svg>
          <p>No products in the wishlist.</p>
      </div>
  `;
    productList.appendChild(noData);
  }
});

// });

// function hideProductBox(button) {
//   var productBox = button.parentNode;
//   productBox.style.display = "none";
// }

// document.querySelectorAll(".close-button").forEach((btn) => {
//   btn.addEventListener("click", function () {
//     // closest <li> ne remove karse
//     const li = this.closest("li");
//     if (li) {
//       li.remove();
//     }
//   });
// });


// function checkEmptyList() {
//   const productList = document.querySelector(".product-box-list");
//   const emptyMessage = document.querySelector(".empty-message");

//   if (productList.children.length === 0) {
//     emptyMessage.style.display = "block";
//   } else {
//     emptyMessage.style.display = "none";
//   }
// }

// // remove logic
// document.querySelectorAll(".close-button").forEach((btn) => {
//   btn.addEventListener("click", function () {
//     const li = this.closest("li");
//     if (li) {
//       li.remove();
//       checkEmptyList(); // check after removing
//     }
//   });
// });

// // initial check
// checkEmptyList();


function checkEmptyList() {
  const productList = document.querySelector(".product-box-list");
  const emptyMessage = document.querySelector(".empty-message");

  if (productList.children.length === 0) {
    productList.style.display = "none"; // spacing remove
    emptyMessage.style.display = "block";
  } else {
    productList.style.display = "block";
    emptyMessage.style.display = "none";
  }
}

// remove logic
document.querySelectorAll(".close-button").forEach((btn) => {
  btn.addEventListener("click", function () {
    const li = this.closest("li");
    if (li) {
      li.remove();
      checkEmptyList(); // check after removing
    }
  });
});

// initial check
checkEmptyList();



// Wait for the DOM to load
// document.addEventListener("DOMContentLoaded", function () {
// Select all close buttons
// const closeButtons = document.querySelectorAll(".close-button");

// closeButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     // Traverse to the closest <li> ancestor and remove it
//     const listItem = button.closest("li");
//     if (listItem) {
//       listItem.remove();
//     }
//   });
// });
// });

// // Check if all products are hidden
// function productQuantityRemove() {
//   let productBox = document.querySelectorAll(".cart-offcanvas:not(.wishlist-offcanvas) li .vertical-product-box");
//   let hiddenProductBox = document.querySelectorAll(".cart-offcanvas:not(.wishlist-offcanvas) li .vertical-product-box.row-remove.row-remove");

//   // Show empty cart message if all products are hidden
//   if (productBox.length === hiddenProductBox.length) {
//     document.querySelector(".empty-cart").classList.add("show");
//   }
// }

// // Select all product boxes
// const productList = document.querySelectorAll(".cart-offcanvas:not(.wishlist-offcanvas) li .vertical-product-box");
// const productList_array = Array.from(productList);

// // Add event listener to delete buttons
// productList_array.forEach((item) => {
//   let DeleteProduct = item.querySelector(".close-button");
//   DeleteProduct.addEventListener("click", (event) => {
//     item.classList.add("row-remove");
//     productQuantityRemove();
//   });
// });

/*=====================
    Change Website Title Js
  ==========================*/
var title = document.title;

window.addEventListener("focus", function () {
  document.title = title;
});

window.addEventListener("blur", function () {
  document.title = "Come Back :(";
});

// var contentWidth = window.innerWidth;
// if (contentWidth < 576) {
//   var footerTitle = document.querySelectorAll(".footer-title");
//   footerTitle.forEach(function (title) {
//     var span = document.createElement("span");
//     span.className = "according-menu float-end";
//     span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
//     title.querySelector("h4").appendChild(span);

//     title.addEventListener("click", function () {
//       footerTitle.forEach(function (item) {
//         item.classList.remove("active");
//         var span = item.querySelector("span");
//         span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
//       });

//       var footerContact = document.querySelector(".footer-list");
//       var footerContain = document.querySelector(".footer-list");
//       var nextElement = this.nextElementSibling;

//       if (nextElement.style.display === "none" || nextElement.style.display === "") {
//         this.classList.add("active");
//         var span = this.querySelector("span");
//         span.innerHTML = '<i class="ri-arrow-up-s-line"></i>';
//         footerContact.style.display = "flex";
//         footerContain.style.display = "flex";
//         nextElement.style.display = "flex";
//       } else {
//         var span = this.querySelector("span");
//         span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
//         footerContact.style.display = "none";
//         footerContain.style.display = "none";
//         nextElement.style.display = "none";
//       }
//     });
//   });

//   var footerContact = document.querySelector(".footer-list");
//   var footerContain = document.querySelector(".footer-list");
//   footerContact.style.display = "none";
//   footerContain.style.display = "none";
// } else {
//   var footerContact = document.querySelector(".footer-list");
//   var footerContain = document.querySelector(".footer-list");
//   footerContact.style.display = "block";
//   footerContain.style.display = "block";
// }

let accordionEnabled = false; // flag

function enableAccordion() {
  const footerTitle = document.querySelectorAll(".footer-title");
  const footerLists = document.querySelectorAll(".footer-list");

  footerTitle.forEach(function (title) {
    if (!title.querySelector(".according-menu")) {
      const span = document.createElement("span");
      span.className = "according-menu float-end";
      span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
      title.querySelector("h4").appendChild(span);

      title.addEventListener("click", function () {
        footerTitle.forEach(function (item) {
          item.classList.remove("active");
          const span = item.querySelector(".according-menu");
          if (span) span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
          if (item.nextElementSibling) item.nextElementSibling.style.display = "none";
        });

        const nextElement = this.nextElementSibling;
        if (nextElement && (nextElement.style.display === "none" || nextElement.style.display === "")) {
          this.classList.add("active");
          const span = this.querySelector(".according-menu");
          if (span) span.innerHTML = '<i class="ri-arrow-up-s-line"></i>';
          nextElement.style.display = "flex";
        } else if (nextElement) {
          const span = this.querySelector(".according-menu");
          if (span) span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
          nextElement.style.display = "none";
        }
      });
    }
  });

  footerLists.forEach(list => (list.style.display = "none"));
  accordionEnabled = true;
}

function disableAccordion() {
  const footerTitle = document.querySelectorAll(".footer-title");
  const footerLists = document.querySelectorAll(".footer-list");

  footerTitle.forEach(function (title) {
    title.classList.remove("active");
    const span = title.querySelector(".according-menu");
    if (span) span.remove(); // remove arrow icons
  });

  footerLists.forEach(list => (list.style.display = "block"));
  accordionEnabled = false;
}

function handleFooter() {
  if (window.innerWidth <= 575) {
    if (!accordionEnabled) enableAccordion(); // only enable once
  } else {
    if (accordionEnabled) disableAccordion(); // only disable once
  }
}

// run once at load
handleFooter();

// run on resize
window.addEventListener("resize", handleFooter);


// var notifiWishlist = document.querySelector(".notifi-wishlist");
// notifiWishlist.addEventListener("click", function () {
//     var options = {
//         icon: "fa fa-check",
//         title: "Success!",
//         message: "Item Successfully added in wishlist",
//     };
//     var settings = {
//         element: "body",
//         position: null,
//         type: "info",
//         allow_dismiss: true,
//         newest_on_top: false,
//         showProgressbar: true,
//         placement: {
//             from: "top",
//             align: "right",
//         },
//         offset: 20,
//         spacing: 10,
//         z_index: 1031,
//         delay: 5000,
//         animate: {
//             enter: "animated fadeInDown",
//             exit: "animated fadeOutUp",
//         },
//         icon_type: "class",
//         template: '<div data-notify="container" class="col-xxl-3 col-lg-5 col-md-6 col-sm-7 col-12 alert alert-{0}" role="alert">' +
//             '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
//             '<span data-notify="icon"></span> ' +
//             '<span data-notify="title">{1}</span> ' +
//             '<span data-notify="message">{2}</span>' +
//             '<div class="progress" data-notify="progressbar">' +
//             '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
//             "</div>" +
//             '<a href="{3}" target="{4}" data-notify="url"></a>' +
//             "</div>",
//     };

//     $.notify(options, settings);
// });

/*=====================
    header Dropdown Js
==========================*/
// document.querySelectorAll(".dropdown-menu li a").forEach(function (link) {
//     link.addEventListener("click", function () {
//         var a = this.closest("a");
//         var getSampling = a.textContent.trim();
//         // var getImage = a.querySelector('img').getAttribute('src');

//         var dropdownToggle = this.closest(".dropdown-menu").previousElementSibling;
//         dropdownToggle.querySelector('span').textContent = getSampling;
//         // dropdownToggle.querySelector('img').setAttribute("src", getImage);
//     });
// });

/*=====================
    Switch Authentication Js
==========================*/
// let myPopup = document.querySelector(".login-box");
// let btnClose = document.querySelector(".next-button");
// let myPopup2 = document.querySelector(".signup-box");
// let btnClose2 = document.querySelector(".next-button2");
// // let forgotPass = document.querySelector(".forgot-password-box");
// // let btnClose3 = document.querySelector(".next-button2");

// setTimeout(poPup, 2000);
// setTimeout(poPup2, 2000);

// function poPup() {
//   myPopup.style.display = "block";
//   myPopup2.style.display = "none";
// }

// btnClose.onclick = function () {
//   myPopup.style.display = "none";
//   myPopup2.style.display = "block";
// };

// function poPup2() {
//   myPopup.style.display = "block";
//   myPopup2.style.display = "none";
// }

// btnClose2.onclick = function () {
//   myPopup.style.display = "block";
//   myPopup2.style.display = "none";
// };

// // function forgotPass() {
// //   myPopup.style.display = "block";
// //   myPopup2.style.display = "none";
// // }

// // btnClose3.onclick = function () {
// //   myPopup.style.display = "block";
// //   myPopup2.style.display = "none";
// // };




let myPopup = document.querySelector(".login-box");
let btnClose = document.querySelector(".next-button");
let myPopup2 = document.querySelector(".signup-box");
let btnClose2 = document.querySelector(".next-button2");
let authForgotPass = document.querySelector(".forgot-password-box");
let forgotBtn = document.querySelector(".forgot-pass");
let cancelBtn = document.querySelector(".cancel-btn");

setTimeout(poPup, 2000);
setTimeout(poPup2, 2000);
// setTimeout(authForgotPass, 2000);

function poPup() {
  myPopup.style.display = "block";
  myPopup2.style.display = "none";
  authForgotPass.style.display = "none";
}

btnClose.onclick = function () {
  authForgotPass.style.display = "none";
  myPopup.style.display = "none";
  myPopup2.style.display = "block";
};

function poPup2() {
  authForgotPass.style.display = "none";
  myPopup.style.display = "block";
  myPopup2.style.display = "none";
}

btnClose2.onclick = function () {
  authForgotPass.style.display = "none";
  myPopup.style.display = "block";
  myPopup2.style.display = "none";
};

forgotBtn.onclick = function () {
  authForgotPass.style.display = "block"
  myPopup.style.display = "none";
  myPopup2.style.display = "none";
};

cancelBtn.onclick = function () {
  authForgotPass.style.display = "none"
  myPopup.style.display = "block";
  myPopup2.style.display = "none";
};

/*=====================
    Open Select Option Js
==========================*/
const viewBtns = document.querySelectorAll(".select-btn");
const selectBoxes = document.querySelectorAll(".select-option-box");
const closeBtns = document.querySelectorAll(".close-btn");

viewBtns.forEach((viewBtn, index) => {
  viewBtn.addEventListener("click", () => {
    selectBoxes[index].classList.add("show");
  });
});

closeBtns.forEach((closeBtn, index) => {
  closeBtn.addEventListener("click", () => {
    selectBoxes[index].classList.remove("show");
  });
});

/*=====================
  change text js
==========================*/
const changeTexts = document.querySelectorAll(".add-cart-btn");

changeTexts.forEach((changeText) => {
  changeText.addEventListener("click", function () {
    changeText.textContent = "Added Cart";
    changeText.classList.add("show"); // ✅ "show" class add thase
  });
});


// const changeTexts = document.querySelectorAll(".add-cart-btn");

// changeTexts.forEach((changeText) => {
//   changeText.addEventListener("click", function () {
//     changeText.textContent = "Added Cart";
//   });
// });


/*=====================
  size list active add remove js
==========================*/
const sizeLinks = document.querySelectorAll(".size-list li a");

sizeLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    sizeLinks.forEach((l) => l.classList.remove("active"));

    this.classList.add("active");
  });
});



/*=====================
    Open Search Box Suggestion Js
==========================*/
const searchInputBox = document.getElementById("searchInputBox");
const resultBox1 = document.getElementById("resultBox");
const overlay = document.getElementById("searchOverlay");

searchInputBox.addEventListener("click", () => {
  resultBox1.classList.add("show");
  overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
  resultBox1.classList.remove("show");
  overlay.classList.remove("show");
});

/*=====================
    Empty Cart Js
==========================*/
// function CheckProductQuantity() {
//   let AllProducts = document.getElementsByClassName("table-row");
//   let HiddenProducts = document.getElementsByClassName("row-remove");
//   if (AllProducts.length == HiddenProducts.length) {
//     document.querySelector(".empty-card").classList.add("show");
//   }
// }

// const product_details = document.getElementsByClassName("table-row");
// const product_details_array = Array.from(product_details); // Convert to array

// product_details_array.forEach((item) => {
//   let DeleteButton = item.querySelector(".remove-row");
//   DeleteButton.addEventListener("click", (event) => {
//     item.classList.add("row-remove");
//     CheckProductQuantity();
//   });
// });


function CheckProductQuantity() {
  let AllProducts = document.getElementsByClassName("table-row");
  if (AllProducts.length === 0) {
    document.querySelector(".empty-card").classList.add("show");
  }
}

const product_details = document.getElementsByClassName("table-row");
const product_details_array = Array.from(product_details); // Convert to array

product_details_array.forEach((item) => {
  let DeleteButton = item.querySelector(".remove-row");
  DeleteButton.addEventListener("click", (event) => {
    item.remove(); // tr completely remove thayi jase
    CheckProductQuantity();
  });
});


/*=====================
    Disable Inspect Js
==========================*/
// document.addEventListener(
//     "keydown",
//     function () {
//         if (event.keyCode == 123) {
//             alert(
//                 "This function has been disabled to prevent you from stealing my code!"
//             );
//             return false;
//         } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//             alert(
//                 "This function has been disabled to prevent you from stealing my code!"
//             );
//             return false;
//         } else if (event.ctrlKey && event.keyCode == 85) {
//             alert(
//                 "This function has been disabled to prevent you from stealing my code!"
//             );
//             return false;
//         }
//     },
//     false
// );

// if (document.addEventListener) {
//     document.addEventListener(
//         "contextmenu",
//         function (e) {
//             alert(
//                 "This function has been disabled to prevent you from stealing my code!"
//             );
//             e.preventDefault();
//         },
//         false
//     );
// } else {
//     document.attachEvent("oncontextmenu", function () {
//         alert(
//             "This function has been disabled to prevent you from stealing my code!"
//         );
//         window.event.returnValue = false;
//     });
// }







/*=====================
    Recent Product Show Js
==========================*/
// const box = document.querySelector('.recent-product-box');
// const closeBtn = document.querySelector('.recent-close');
// const timerElement = document.querySelector('.recent-content .timer');

// const products = [
//   {
//     imageSrc: './assets/images/product/1.png',
//     productName: 'Smart Watch Series X3',
//     productLink: 'product-color.html',
//     price: '239.00',
//     originalPrice: '250.00'
//   },
//   {
//     imageSrc: './assets/images/product/23.png',
//     productName: 'BlackBerry Keyone BBB100-7 64gb unlocked gSM',
//     productLink: 'product-color.html',
//     price: '1920.00',
//     originalPrice: '2000.00'
//   },
//   {
//     imageSrc: './assets/images/product/30.png',
//     productName: 'Canon EOS 1500D DSLR Camera Body+ 18-55 mm',
//     productLink: 'product-color.html',
//     price: '199.00',
//     originalPrice: '252.00'
//   },
//   {
//     imageSrc: './assets/images/product/27.png',
//     productName: 'Motorola Moto X4 32GB Unlocked Smartphone',
//     productLink: 'product-color.html',
//     price: '1220.00',
//     originalPrice: '1269.00'
//   },
//   {
//     imageSrc: './assets/images/product/34.png',
//     productName: 'Shears Kitchen Spoone 6 Piece Set with Wooden Block',
//     productLink: 'product-color.html',
//     price: '1209.00',
//     originalPrice: '1225.00'
//   },
//   {
//     imageSrc: './assets/images/product/31.png',
//     productName: 'Pro Healthy Lifestyle Edible Oil 5 litre Jar | Saffola Gold Refined Oil',
//     productLink: 'product-color.html',
//     price: '1920.00',
//     originalPrice: '2000.00'
//   },
//   {
//     imageSrc: './assets/images/product/35-1.png',
//     productName: 'Herschel Leather duffle bag in brown color',
//     productLink: 'product-color.html',
//     price: '670.00',
//     originalPrice: '900.00'
//   },
//   {
//     imageSrc: './assets/images/product/26.png',
//     productName: 'EvoFox Game Box 32 GB with Asphalt 8 ',
//     productLink: 'product-color.html',
//     price: '130.00',
//     originalPrice: '153.00'
//   }
// ];

// let currentIndex = 0;

// function getRandomDelay(minSeconds, maxSeconds) {
//   const min = minSeconds * 1000;
//   const max = maxSeconds * 1000;
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomTimeText() {
//   const minutes = Math.floor(Math.random() * 61); // 0 to 60 minutes
//   if (minutes === 0) return "Just now";
//   if (minutes === 1) return "1 minute ago";
//   if (minutes < 60) return `${minutes} minutes ago`;
//   return "An hour ago";
// }

// function updateRecentProduct(product) {
//   if (!box) return;

//   // Update content
//   const img = box.querySelector('img');
//   const link = box.querySelector('.recent-content a');
//   const priceTag = box.querySelector('.price');

//   if (img) img.src = product.imageSrc;
//   if (link) {
//     link.textContent = product.productName;
//     link.href = product.productLink;
//   }
//   if (priceTag) {
//     priceTag.innerHTML = `$${product.price} <del>$${product.originalPrice}</del>`;
//   }

//   // Set random timer text
//   if (timerElement) {
//     timerElement.textContent = getRandomTimeText();
//   }

//   // Show box
//   box.classList.add('active');

//   // Remove active class after 7–8s
//   const removeDelay = getRandomDelay(7, 8);
//   setTimeout(() => {
//     box.classList.remove('active');

//     // Schedule next product after 8–9s
//     const nextDelay = getRandomDelay(8, 9);
//     setTimeout(() => {
//       currentIndex = (currentIndex + 1) % products.length;
//       updateRecentProduct(products[currentIndex]);
//     }, nextDelay);
//   }, removeDelay);
// }

// // Close button
// if (closeBtn && box) {
//   closeBtn.addEventListener('click', () => {
//     box.classList.remove('active');
//   });
// }

// // Start cycle after random 8–9s
// const initialDelay = getRandomDelay(8, 9);
// setTimeout(() => {
//   updateRecentProduct(products[currentIndex]);
// }, initialDelay);





// setTimeout(function () {
//   const box = document.querySelector('.recent-product-box');
//   const closeBtn = document.querySelector('.recent-close');
//   if (!box || !closeBtn) return;

//   closeBtn.addEventListener('click', function () {
//     box.classList.remove('active');
//   });

//   setInterval(function () {
//     box.classList.add('active');

//     setTimeout(function () {
//       box.classList.remove('active');
//     }, 8000);
//   }, 8000);
// }, 7500);



// function updateRecentProduct({ imageSrc, productName, productLink, price, originalPrice }) {
//   const box = document.querySelector('.recent-product-box');
//   if (!box) return;

//   // Update image
//   const img = box.querySelector('img');
//   if (img) img.src = imageSrc;

//   // Update link and product name
//   const link = box.querySelector('.recent-content a');
//   if (link) {
//     link.textContent = productName;
//     link.href = productLink;
//   }

//   // Update price and original price
//   const priceTag = box.querySelector('.price');
//   if (priceTag) {
//     priceTag.innerHTML = `$${price} <del>$${originalPrice}</del>`;
//   }
// }

// // Example usage
// window.addEventListener('DOMContentLoaded', function () {
//   setTimeout(function () {
//     updateRecentProduct({
//       imageSrc: './assets/images/product/2.png',
//       productName: 'Wireless Headphones Z2',
//       productLink: 'product-color.html',
//       price: '199.00',
//       originalPrice: '220.00'
//     });
//   }, 3000); // Change product after 3 seconds
// });



// const box = document.querySelector('.recent-product-box');
// const closeBtn = document.querySelector('.recent-close');

// const products = [
//   {
//     imageSrc: './assets/images/product/1.png',
//     productName: 'Smart Watch Series X3',
//     productLink: 'product-color.html',
//     price: '239.00',
//     originalPrice: '250.00'
//   },
//   {
//     imageSrc: './assets/images/product/2.png',
//     productName: 'Wireless Headphones Z2',
//     productLink: 'product-color.html',
//     price: '199.00',
//     originalPrice: '220.00'
//   },
//   {
//     imageSrc: './assets/images/product/3.png',
//     productName: 'Bluetooth Speaker M5',
//     productLink: 'product-color.html',
//     price: '149.00',
//     originalPrice: '180.00'
//   }
// ];

// let currentIndex = 0;

// function updateRecentProduct(product) {
//   if (!box) return;

//   // Update image
//   const img = box.querySelector('img');
//   if (img) img.src = product.imageSrc;

//   // Update name & link
//   const link = box.querySelector('.recent-content a');
//   if (link) {
//     link.textContent = product.productName;
//     link.href = product.productLink;
//   }

//   // Update price
//   const priceTag = box.querySelector('.price');
//   if (priceTag) {
//     priceTag.innerHTML = `$${product.price} <del>$${product.originalPrice}</del>`;
//   }

//   // Show box
//   box.classList.add('active');

//   // Remove active after 2s
//   setTimeout(() => {
//     box.classList.remove('active');
//   }, 8000);
// }

// // Close button click
// if (closeBtn && box) {
//   closeBtn.addEventListener('click', () => {
//     box.classList.remove('active');
//   });
// }

// // Initial delay 8s
// setTimeout(() => {
//   updateRecentProduct(products[currentIndex]);
//   currentIndex = (currentIndex + 1) % products.length;

//   // Repeat every 5s
//   setInterval(() => {
//     updateRecentProduct(products[currentIndex]);
//     currentIndex = (currentIndex + 1) % products.length;
//   }, 5000);
// }, 8000); // <== Updated to 8 seconds


// const box = document.querySelector('.recent-product-box');
// const closeBtn = document.querySelector('.recent-close');
// const timerElement = document.querySelector('.recent-content .timer');

// const products = [
//   {
//     imageSrc: './assets/images/product/1.png',
//     productName: 'Smart Watch Series X3',
//     productLink: 'product-color.html',
//     price: '239.00',
//     originalPrice: '250.00'
//   },
//   {
//     imageSrc: './assets/images/product/2.png',
//     productName: 'Wireless Headphones Z2',
//     productLink: 'product-color.html',
//     price: '199.00',
//     originalPrice: '220.00'
//   },
//   {
//     imageSrc: './assets/images/product/3.png',
//     productName: 'Bluetooth Speaker M5',
//     productLink: 'product-color.html',
//     price: '149.00',
//     originalPrice: '180.00'
//   }
// ];

// let currentIndex = 0;
// let timerInterval;
// let minutesPassed = 0;

// function getRandomDelay(minSeconds, maxSeconds) {
//   const min = minSeconds * 1000;
//   const max = maxSeconds * 1000;
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function resetTimer() {
//   if (!timerElement) return;

//   minutesPassed = 0;
//   timerElement.textContent = "Just now";

//   if (timerInterval) clearInterval(timerInterval);

//   timerInterval = setInterval(() => {
//     minutesPassed++;
//     timerElement.textContent = `${minutesPassed} minute${minutesPassed > 1 ? 's' : ''} ago`;
//   }, 60000); // 60 seconds
// }

// function updateRecentProduct(product) {
//   if (!box) return;

//   // Update image, link, price
//   const img = box.querySelector('img');
//   const link = box.querySelector('.recent-content a');
//   const priceTag = box.querySelector('.price');

//   if (img) img.src = product.imageSrc;
//   if (link) {
//     link.textContent = product.productName;
//     link.href = product.productLink;
//   }
//   if (priceTag) {
//     priceTag.innerHTML = `$${product.price} <del>$${product.originalPrice}</del>`;
//   }

//   // Reset and start the timer
//   resetTimer();

//   // Show box
//   box.classList.add('active');

//   // Remove after random 7–8 seconds
//   const removeDelay = getRandomDelay(7, 8);
//   setTimeout(() => {
//     box.classList.remove('active');

//     // Show next product after random 8–9 seconds
//     const nextDelay = getRandomDelay(8, 9);
//     setTimeout(() => {
//       currentIndex = (currentIndex + 1) % products.length;
//       updateRecentProduct(products[currentIndex]);
//     }, nextDelay);
//   }, removeDelay);
// }

// // Close button
// if (closeBtn && box) {
//   closeBtn.addEventListener('click', () => {
//     box.classList.remove('active');
//   });
// }

// // Start first product after 8–9 seconds
// const initialDelay = getRandomDelay(8, 9);
// setTimeout(() => {
//   updateRecentProduct(products[currentIndex]);
// }, initialDelay);







// // window.addEventListener('DOMContentLoaded', function () {
// //   const box = document.querySelector('.recent-product-box');
// //   const closeBtn = document.querySelector('.recent-close');

// //   const products = [
// //     {
// //       imageSrc: './assets/images/product/1.png',
// //       productName: 'Smart Watch Series X3',
// //       productLink: 'product-color.html',
// //       price: '239.00',
// //       originalPrice: '250.00'
// //     },
// //     {
// //       imageSrc: './assets/images/product/2.png',
// //       productName: 'Wireless Headphones Z2',
// //       productLink: 'product-color.html',
// //       price: '199.00',
// //       originalPrice: '220.00'
// //     },
// //     {
// //       imageSrc: './assets/images/product/3.png',
// //       productName: 'Bluetooth Speaker M5',
// //       productLink: 'product-color.html',
// //       price: '149.00',
// //       originalPrice: '180.00'
// //     }
// //   ];

// //   let currentIndex = 0;

// //   function getRandomDelay(minSeconds, maxSeconds) {
// //     const min = minSeconds * 1000;
// //     const max = maxSeconds * 1000;
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// //   }

// //   function updateRecentProduct(product) {
// //     if (!box) return;

// //     // Update content
// //     const img = box.querySelector('img');
// //     const link = box.querySelector('.recent-content a');
// //     const priceTag = box.querySelector('.price');

// //     if (img) img.src = product.imageSrc;
// //     if (link) {
// //       link.textContent = product.productName;
// //       link.href = product.productLink;
// //     }
// //     if (priceTag) {
// //       priceTag.innerHTML = `$${product.price} <del>$${product.originalPrice}</del>`;
// //     }

// //     // Add 'active' class
// //     box.classList.add('active');

// //     // Remove after random 7–8 seconds
// //     const removeDelay = getRandomDelay(7, 8);
// //     setTimeout(() => {
// //       box.classList.remove('active');

// //       // Schedule the next product after 8–9 seconds
// //       const nextDelay = getRandomDelay(8, 9);
// //       setTimeout(() => {
// //         currentIndex = (currentIndex + 1) % products.length;
// //         updateRecentProduct(products[currentIndex]);
// //       }, nextDelay);

// //     }, removeDelay);
// //   }

// //   // Handle close button
// //   if (closeBtn && box) {
// //     closeBtn.addEventListener('click', () => {
// //       box.classList.remove('active');
// //     });
// //   }

// //   // Start initial cycle after random 8–9s
// //   const initialDelay = getRandomDelay(8, 9);
// //   setTimeout(() => {
// //     updateRecentProduct(products[currentIndex]);
// //   }, initialDelay);
// // });