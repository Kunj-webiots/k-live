// /*=====================
//     Quantity Js
//   ==========================*/
// // document.querySelectorAll(".qty-btn-plus").forEach(function (buttonPlus) {
// //   buttonPlus.addEventListener("click", function () {
// //     var inputQty = this.closest(".qty-container").querySelector(".input-qty");
// //     inputQty.value = Number(inputQty.value) + 1;
// //   });
// // });

// // document.querySelectorAll(".qty-btn-minus").forEach(function (buttonMinus) {
// //   buttonMinus.addEventListener("click", function () {
// //     var inputQty = this.closest(".qty-container").querySelector(".input-qty");
// //     var amount = Number(inputQty.value);
// //     if (amount > 1) {
// //       inputQty.value = amount - 1;
// //     }
// //   });
// // });

// // ==========================

// // Function to check if the cart is empty and display the empty-cart message
// // function checkEmptyCart() {
// //   const productBoxes = document.querySelectorAll(".vertical-product-box");
// //   const emptyCartMessage = document.querySelector("li.empty-cart");

// //   // Show or hide the empty cart message
// //   if (productBoxes.length === 0) {
// //     console.log(productBoxes.length === 0, "dsfsf");
// //     emptyCartMessage.style.display = "block";
// //   } else {
// //     emptyCartMessage.style.display = "none";
// //   }
// // }

// // // Increment quantity button
// // document.querySelectorAll(".qty-btn-plus").forEach(function (buttonPlus) {
// //   buttonPlus.addEventListener("click", function () {
// //     var qtyContainer = this.closest(".qty-container");
// //     var inputQty = qtyContainer.querySelector(".input-qty");
// //     var minusButton = qtyContainer.querySelector(".qty-btn-minus");
// //     var trashButton = qtyContainer.querySelector(".btn-trash");
// //     var closeButton = this.closest(".vertical-product-box")?.querySelector(".close-button");

// //     // Increment the quantity
// //     if (inputQty) {
// //       inputQty.value = Number(inputQty.value) + 1;

// //       // Show minus button and hide trash button if quantity > 1
// //       if (Number(inputQty.value) > 1) {
// //         if (minusButton) minusButton.style.display = "inline-block";
// //         if (trashButton) trashButton.style.display = "none";

// //         // Ensure the close button is visible when quantity > 1
// //         if (closeButton) closeButton.style.display = "block";
// //       }
// //     }
// //   });
// // });

// // // Decrement quantity button
// // document.querySelectorAll(".qty-btn-minus").forEach(function (buttonMinus) {
// //   buttonMinus.addEventListener("click", function () {
// //     var qtyContainer = this.closest(".qty-container");
// //     var inputQty = qtyContainer.querySelector(".input-qty");
// //     var minusButton = qtyContainer.querySelector(".qty-btn-minus");
// //     var trashButton = qtyContainer.querySelector(".btn-trash");
// //     var closeButton = this.closest(".vertical-product-box")?.querySelector(".close-button");

// //     if (inputQty) {
// //       var amount = Number(inputQty.value);

// //       // Decrement the quantity if greater than 1
// //       if (amount > 1) {
// //         inputQty.value = amount - 1;
// //       }

// //       // Show trash button and hide minus button if quantity is 1
// //       if (Number(inputQty.value) === 1) {
// //         if (minusButton) minusButton.style.display = "none";
// //         if (trashButton) trashButton.style.display = "inline-block";

// //         // Hide the close button when quantity is 1
// //         if (closeButton) closeButton.style.display = "none";
// //       }
// //     }
// //   });
// // });

// // // Trash button to remove a product
// document.querySelectorAll(".btn-trash").forEach(function (trashButton) {
//   trashButton.addEventListener("click", function () {
//     var productBox = this.closest(".vertical-product-box");

//     // Remove the product box from the DOM
//     if (productBox) {
//       productBox.remove();
//       checkEmptyCart(); // Check if the cart is empty
//     }
//   });
// });

// // // Close button to remove a product
// // document.querySelectorAll(".close-button").forEach(function (closeButton) {
// //   closeButton.addEventListener("click", function () {
// //     var productBox = this.closest(".vertical-product-box");

// //     // Remove the product box from the DOM
// //     if (productBox) {
// //       productBox.remove();
// //       checkEmptyCart(); // Check if the cart is empty
// //     }
// //   });
// // });

// // // Initial check for an empty cart (in case the page loads without products)
// // checkEmptyCart();

// // =====================
// // Function to check if the cart is empty and display the empty-cart message
// function checkEmptyCart() {
//   const productBoxes = document.querySelectorAll(".cart-offcanvas:not(.wishlist-offcanvas) .vertical-product-box");
//   const emptyCartMessage = document.querySelector(".empty-cart");

//   // Show or hide the empty cart message
//   if (productBoxes.length === 0) {
//     emptyCartMessage.style.display = "block";
//   } else {
//     emptyCartMessage.style.display = "none";
//   }
// }

// // Increment quantity button
// document.querySelectorAll(".qty-btn-plus").forEach(function (buttonPlus) {
//   buttonPlus.addEventListener("click", function () {
//     var qtyContainer = this.closest(".qty-container");
//     var inputQty = qtyContainer.querySelector(".input-qty");
//     var minusButton = qtyContainer.querySelector(".qty-btn-minus");
//     var trashButton = qtyContainer.querySelector(".btn-trash");
//     var closeButton = this.closest(".cart-offcanvas:not(.wishlist-offcanvas) .vertical-product-box")?.querySelector(".close-button");

//     // Increment the quantity
//     if (inputQty) {
//       inputQty.value = Number(inputQty.value) + 1;

//       // Show minus button and hide trash button if quantity > 1
//       if (Number(inputQty.value) > 1) {
//         if (minusButton) minusButton.style.display = "inline-block";
//         if (trashButton) trashButton.style.display = "none";

//         // Ensure the close button is visible when quantity > 1
//         if (closeButton) closeButton.style.display = "block";
//       }
//     }
//   });
// });

// // Decrement quantity button
// document.querySelectorAll(".qty-btn-minus").forEach(function (buttonMinus) {
//   buttonMinus.addEventListener("click", function () {
//     var qtyContainer = this.closest(".qty-container");
//     var inputQty = qtyContainer.querySelector(".input-qty");
//     var minusButton = qtyContainer.querySelector(".qty-btn-minus");
//     var trashButton = qtyContainer.querySelector(".btn-trash");
//     var closeButton = this.closest(".cart-offcanvas:not(.wishlist-offcanvas) .vertical-product-box")?.querySelector(".close-button");

//     if (inputQty) {
//       var amount = Number(inputQty.value);

//       // Decrement the quantity if greater than 1
//       if (amount > 1) {
//         inputQty.value = amount - 1;
//       }

//       // Show trash button and hide minus button if quantity is 1
//       if (Number(inputQty.value) === 1) {
//         if (minusButton) minusButton.style.display = "none";
//         if (trashButton) trashButton.style.display = "inline-block";

//         // Hide the close button when quantity is 1
//         if (closeButton) closeButton.style.display = "none";
//       }
//     }
//   });
// });

// // Trash button to remove a product
// document.querySelectorAll(".btn-trash").forEach(function (trashButton) {
//   trashButton.addEventListener("click", function () {
//     var productBox = this.closest(".cart-offcanvas:not(.wishlist-offcanvas) .vertical-product-box");

//     // Remove the product box from the DOM
//     if (productBox) {
//       productBox.remove();
//       checkEmptyCart(); // Check if the cart is empty
//     }
//   });
// });

// // Close button to remove a product
// document.querySelectorAll(".close-button").forEach(function (closeButton) {
//   closeButton.addEventListener("click", function () {
//     var productBox = this.closest(".cart-offcanvas:not(.wishlist-offcanvas) .vertical-product-box");

//     // Remove the product box from the DOM
//     if (productBox) {
//       productBox.remove();
//       checkEmptyCart(); // Check if the cart is empty
//     }
//   });
// });

// // Initial check for an empty cart (in case the page loads without products)
// checkEmptyCart();

// /*=====================
//     Qty Price Counter Js
// ==========================*/
// document.addEventListener('DOMContentLoaded', function () {
//   const totalPriceElement = document.getElementById('total-price');
//   const progressBar = document.querySelector('.progress-bar');

//   function updateTotal() {
//     const cartItems = document.querySelectorAll('.cart-product-box .vertical-product-box');
//     let total = 0;
//     let itemCount = 0;

//     cartItems.forEach(item => {
//       const quantityInput = item.querySelector('.input-qty');
//       const itemPrice = parseFloat(item.getAttribute('data-price')) || 0;

//       if (quantityInput) {
//         const quantity = parseInt(quantityInput.value) || 1;
//         total += quantity * itemPrice;
//         itemCount += quantity;
//       }
//     });

//     totalPriceElement.textContent = `$${(Math.round(total * 100) / 100).toFixed(2)}`;

//     const progressValue = Math.min(itemCount * 10, 100); // Example calculation
//     if (progressBar) {
//       progressBar.style.width = `${progressValue}%`;

//       progressBar.classList.remove('bg-red', 'bg-yellow', 'bg-green');
//       if (progressValue <= 30) {
//         progressBar.classList.add('bg-red');
//       } else if (progressValue <= 70) {
//         progressBar.classList.add('bg-yellow');
//       } else {
//         progressBar.classList.add('bg-green');
//       }

//       // If the progress reaches 100%, add the 'show' class and remove it after 5 seconds
//       if (progressValue === 100) {
//         progressBar.classList.add('show');
//         setTimeout(() => {
//           progressBar.classList.remove('show');
//         }, 5000); // Remove after 5 seconds
//       }
//     }

//     if (cartItems.length === 0) {
//       totalPriceElement.textContent = `$0.00`;
//     }
//   }

//   function setupCartItem(item) {
//     const decrementButton = item.querySelector('.qty-btn-minus');
//     const incrementButton = item.querySelector('.qty-btn-plus');
//     const trashButton = item.querySelector('.btn-trash');
//     const quantityInput = item.querySelector('.input-qty');
//     const priceElement = item.querySelector('.product-content .price');

//     // if (!decrementButton || !incrementButton || !trashButton || !quantityInput || !priceElement) {
//     //   console.warn("Some elements are missing in a cart item, skipping...");
//     //   return;
//     // }

//     const itemPrice = parseFloat(priceElement.textContent.replace('$', '')) || 0;
//     item.setAttribute('data-price', itemPrice);

//     // decrementButton.addEventListener('click', () => {
//     //   let quantity = parseInt(quantityInput.value) || 1;
//     //   if (quantity > 1) {
//     //     quantity -= 0;
//     //     quantityInput.value = quantity;
//     //     updateTotal();
//     //   }
//     // });

//     // incrementButton.addEventListener('click', () => {
//     //   let quantity = parseInt(quantityInput.value) || 1;
//     //   quantity += 0;
//     //   quantityInput.value = quantity;
//     //   updateTotal();
//     // });

//     decrementButton.addEventListener('click', () => {
//       let quantity = parseInt(quantityInput.value) || 1;
//       if (quantity > 1) {
//         quantityInput.value = quantity - 1;
//         updateTotal();
//       }
//     });

//     incrementButton.addEventListener('click', () => {
//       let quantity = parseInt(quantityInput.value) || 1;
//       quantityInput.value = quantity + 1;
//       updateTotal();
//     });

//     trashButton.addEventListener('click', () => {
//       item.remove();
//       updateTotal();
//     });
//   }

//   document.querySelectorAll('.cart-product-box .vertical-product-box').forEach(setupCartItem);

//   updateTotal();
// });





// document.addEventListener('DOMContentLoaded', function () {
//   const totalPriceElement = document.getElementById('total-price');
//   const progressBar = document.querySelector('.cart-offcanvas .progress-bar');

//   function updateTotal() {
//     const cartItems = document.querySelectorAll('.cart-product-box .vertical-product-box');
//     let total = 0;
//     let itemCount = 0;

//     cartItems.forEach(item => {
//       const quantityInput = item.querySelector('.input-qty');
//       const itemPrice = parseFloat(item.getAttribute('data-price')) || 0;

//       if (quantityInput) {
//         const quantity = parseInt(quantityInput.value) || 1;
//         total += quantity * itemPrice;
//         itemCount += quantity;
//       }
//     });

//     totalPriceElement.textContent = `$${(Math.round(total * 100) / 100).toFixed(2)}`;

//     if (!progressBar) {
//       console.error("Progress bar not found!");
//       return;
//     }

//     const progressValue = itemCount > 0 ? Math.min(itemCount * 10, 100) : 0;
//     progressBar.style.width = `${progressValue}%`;

//     progressBar.classList.remove('bg-red', 'bg-yellow', 'bg-green');
//     if (progressValue <= 30) {
//       progressBar.classList.add('bg-red');
//     } else if (progressValue <= 70) {
//       progressBar.classList.add('bg-yellow');
//     } else {
//       progressBar.classList.add('bg-green');
//     }

//     if (progressValue === 100) {
//       progressBar.classList.add('show');
//       setTimeout(() => {
//         progressBar.classList.remove('show');
//       }, 5000);
//     }

//     if (cartItems.length === 0) {
//       totalPriceElement.textContent = `$0.00`;
//     }
//   }

//   function setupCartItem(item) {
//     const decrementButton = item.querySelector('.cart-offcanvas .qty-btn-minus');
//     const incrementButton = item.querySelector('.cart-offcanvas .qty-btn-plus');
//     const trashButton = item.querySelector('.cart-offcanvas .btn-trash');
//     const quantityInput = item.querySelector('.cart-offcanvas .input-qty');
//     const priceElement = item.querySelector('.cart-offcanvas .product-content .price');

//     if (!decrementButton || !incrementButton || !trashButton || !quantityInput || !priceElement) {
//       // console.clear("Some elements are missing in a cart item, skipping...");
//       return;
//     }

//     const itemPrice = parseFloat(priceElement.textContent.replace('$', '')) || 0;
//     item.setAttribute('data-price', itemPrice);

//     decrementButton.addEventListener('click', () => {
//       let quantity = parseInt(quantityInput.value) || 1;
//       if (quantity > 1) {
//         quantity -= 1;
//         quantityInput.value = quantity;
//         updateTotal();
//       }
//     });

//     incrementButton.addEventListener('click', () => {
//       let quantity = parseInt(quantityInput.value) || 1;
//       quantity += 1;
//       quantityInput.value = quantity;
//       updateTotal();
//     });

//     trashButton.addEventListener('click', () => {
//       item.remove();
//       updateTotal();
//     });
//   }

//   document.querySelectorAll('.cart-product-box .vertical-product-box').forEach(setupCartItem);
//   updateTotal();
// });


document.addEventListener('DOMContentLoaded', function () {
  const totalPriceElement = document.getElementById('total-price');
  const progressBar = document.querySelector('.cart-offcanvas .progress-bar');

  function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-product-box .vertical-product-box');
    let total = 0;
    let itemCount = 0;

    cartItems.forEach(item => {
      const quantityInput = item.querySelector('.input-qty');
      const itemPrice = parseFloat(item.getAttribute('data-price')) || 0;

      if (quantityInput) {
        const quantity = parseInt(quantityInput.value) || 1;
        total += quantity * itemPrice;
        itemCount += quantity;
      }
    });

    totalPriceElement.textContent = `$${(Math.round(total * 100) / 100).toFixed(2)}`;

    const progressValue = Math.min(itemCount * 10, 100);
    if (progressBar) {
      progressBar.style.width = `${progressValue}%`;

      progressBar.classList.remove('bg-red', 'bg-yellow', 'bg-green');
      if (progressValue <= 30) {
        progressBar.classList.add('bg-red');
      } else if (progressValue <= 70) {
        progressBar.classList.add('bg-yellow');
      } else {
        progressBar.classList.add('bg-green');
      }

      if (progressValue === 100) {
        progressBar.classList.add('show');
        setTimeout(() => {
          progressBar.classList.remove('show');
        }, 5000);
      }
    }

    if (cartItems.length === 0) {
      totalPriceElement.textContent = `$0.00`;
    }
  }

  function checkEmptyCart() {
    const productBoxes = document.querySelectorAll(".cart-offcanvas:not(.wishlist-offcanvas) .vertical-product-box");
    const emptyCartMessage = document.querySelector(".empty-cart");

    if (emptyCartMessage) {
      emptyCartMessage.style.display = productBoxes.length === 0 ? "block" : "none";
    }
  }

  function setupCartItem(item) {
    const decrementButton = item.querySelector('.qty-btn-minus');
    const incrementButton = item.querySelector('.qty-btn-plus');
    const trashButton = item.querySelector('.btn-trash');
    const closeButton = item.querySelector('.close-button');
    const quantityInput = item.querySelector('.input-qty');
    const priceElement = item.querySelector('.product-content .price');

    const itemPrice = parseFloat(priceElement.textContent.replace('$', '')) || 0;
    item.setAttribute('data-price', itemPrice);

    if (incrementButton) {
      incrementButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value) || 1;
        quantityInput.value = quantity + 1;

        if (quantityInput.value > 1) {
          if (decrementButton) decrementButton.style.display = "inline-block";
          if (trashButton) trashButton.style.display = "none";
          if (closeButton) closeButton.style.display = "block";
        }

        updateTotal();
      });
    }

    if (decrementButton) {
      decrementButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value) || 1;
        if (quantity > 1) {
          quantityInput.value = quantity - 1;

          if (quantityInput.value == 1) {
            if (decrementButton) decrementButton.style.display = "none";
            if (trashButton) trashButton.style.display = "inline-block";
            if (closeButton) closeButton.style.display = "none";
          }

          updateTotal();
        }
      });
    }

    if (trashButton) {
      trashButton.addEventListener('click', () => {
        item.remove();
        checkEmptyCart();
        updateTotal();
      });
    }

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        item.remove();
        checkEmptyCart();
        updateTotal();
      });
    }
  }

  // Attach logic to each cart item
  document.querySelectorAll('.cart-product-box .vertical-product-box').forEach(setupCartItem);

  // Initial state
  checkEmptyCart();
  updateTotal();
});