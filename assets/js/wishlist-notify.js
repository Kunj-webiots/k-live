// /**=====================
//      Wishlist icon js
// ==========================**/
// const wishlistStates = {};

// document.querySelectorAll('.compare-list li a').forEach((icon, index) => {
//     const iconId = `wishlist-${index}`;
//     wishlistStates[iconId] = false;

//     icon.addEventListener('click', () => {
//         const alertBox = document.getElementById('alertBox');
//         const alertMessage = document.getElementById('alertMessage');
//         const progressBar = document.getElementById('progressBar');

//         if (wishlistStates[iconId]) {
//             alertMessage.textContent = 'Product removed to the wishlist successfully';
//             alertBox.style.borderLeftColor = '#fb3939';
//             icon.classList.remove('show');
//         } else {
//             alertMessage.textContent = 'Product added successfully';
//             alertBox.style.borderLeftColor = '#4caf50';
//             icon.classList.add('show');
//         }

//         wishlistStates[iconId] = !wishlistStates[iconId];

//         alertBox.style.display = 'block';
//         progressBar.style.animation = 'none';
//         progressBar.offsetWidth; // trigger reflow
//         progressBar.style.animation = 'progressBarAnimation 25m linear forwards';

//         setTimeout(() => {
//             alertBox.style.display = 'none';
//         }, 25000000);
//     });
// });











/**=====================
     Wishlist icon js
==========================**/
// const wishlistStates = {};

// document.querySelectorAll('.wishlistProduct').forEach((icon, index) => {
//     const iconId = `wishlist-${index}`;
//     wishlistStates[iconId] = false;

//     icon.addEventListener('click', () => {
//         const alertBox = document.getElementById('alertBox');
//         const alertMessage = document.getElementById('alertMessage');
//         const progressBar = document.getElementById('progressBar');

//         // Update wishlist state
//         if (wishlistStates[iconId]) {
//             alertMessage.textContent = 'Product removed successfully';
//             // alertBox.style.borderLeftColor = '#fb3939';
//             alertBox.classList.add('removed');
//             alertBox.classList.remove('added');
//             icon.classList.remove('show');
//         } else {
//             alertMessage.textContent = 'Product added successfully';
//             alertBox.classList.remove('removed');
//             alertBox.classList.add('added');
//             // alertBox.style.borderLeftColor = '#4caf50';
//             icon.classList.add('show');
//         }

//         wishlistStates[iconId] = !wishlistStates[iconId];

//         // Reset alert box
//         alertBox.style.display = 'block';
//         alertBox.style.opacity = '0';
//         alertBox.style.transform = 'translateY(-20px)';

//         // Animate fade in and slide down
//         let opacity = 0;
//         let translateY = -20;
//         const fadeIn = setInterval(() => {
//             if (opacity < 1) {
//                 opacity += 0.05;
//                 translateY += 1;
//                 alertBox.style.opacity = opacity.toFixed(2);
//                 alertBox.style.transform = `translateY(${translateY}px)`;
//             } else {
//                 clearInterval(fadeIn);
//             }
//         }, 16); // ~60fps

//         // Reset and start progress bar animation (optional)
//         progressBar.style.animation = 'none';
//         progressBar.offsetWidth; // trigger reflow
//         progressBar.style.animation = 'progressBarAnimation 2.5s linear forwards';

//         // Wait 2.5s, then fade out and slide up
//         setTimeout(() => {
//             let opacityOut = 1;
//             let translateOut = 0;
//             const fadeOut = setInterval(() => {
//                 if (opacityOut > 0) {
//                     opacityOut -= 0.05;
//                     translateOut -= 1;
//                     alertBox.style.opacity = opacityOut.toFixed(2);
//                     alertBox.style.transform = `translateY(${translateOut}px)`;
//                 } else {
//                     clearInterval(fadeOut);
//                     alertBox.style.display = 'none';
//                 }
//             }, 16);
//         }, 2500);
//     });
// });




// const wishlistStates = {};

// document.querySelectorAll('.wishlistProduct').forEach((icon, index) => {
//     const iconId = `wishlist-${index}`;
//     wishlistStates[iconId] = false;

//     icon.addEventListener('click', () => {
//         const alertBox = document.getElementById('alertBox');
//         const alertMessage = document.getElementById('alertMessage');
//         const alertImage = docume.getElementById('alertImage');
//         const progressBar = document.getElementById('progressBar');

//         // Get product image
//         const productBox = icon.closest('.product-box');
//         const productImg = productBox.querySelector('.product-image img');
//         const productImgSrc = productImg.getAttribute('src');

//         // Set image in alert box
//         alertImage.setAttribute('src', productImgSrc);

//         // Update message and styles
//         if (wishlistStates[iconId]) {
//             alertMessage.textContent = 'Product removed successfully';
//             alertBox.classList.add('removed');
//             alertBox.classList.remove('added');
//             icon.classList.remove('show');
//         } else {
//             alertMessage.textContent = 'Product added successfully';
//             alertBox.classList.add('added');
//             alertBox.classList.remove('removed');
//             icon.classList.add('show');
//         }

//         wishlistStates[iconId] = !wishlistStates[iconId];

//         // Animate in
//         alertBox.style.display = 'block';
//         alertBox.style.opacity = '0';
//         alertBox.style.transform = 'translateY(-20px)';

//         let opacity = 0;
//         let translateY = -20;
//         const fadeIn = setInterval(() => {
//             if (opacity < 1) {
//                 opacity += 0.05;
//                 translateY += 1;
//                 alertBox.style.opacity = opacity.toFixed(2);
//                 alertBox.style.transform = `translateY(${translateY}px)`;
//             } else {
//                 clearInterval(fadeIn);
//             }
//         }, 16); // 60 FPS

//         // Restart progress bar animation
//         progressBar.style.animation = 'none';
//         progressBar.offsetWidth; // Force reflow
//         progressBar.style.animation = 'progressBarAnimation 2.5s linear forwards';

//         // Animate out after 2.5s
//         setTimeout(() => {
//             let opacityOut = 1;
//             let translateOut = 0;
//             const fadeOut = setInterval(() => {
//                 if (opacityOut > 0) {
//                     opacityOut -= 0.05;
//                     translateOut -= 1;
//                     alertBox.style.opacity = opacityOut.toFixed(2);
//                     alertBox.style.transform = `translateY(${translateOut}px)`;
//                 } else {
//                     clearInterval(fadeOut);
//                     alertBox.style.display = 'none';
//                 }
//             }, 16);
//         }, 2500);
//     });
// });











// Load wishlist states from localStorage or initialize empty
// let wishlistStates = JSON.parse(localStorage.getItem('wishlistStates')) || {};

// // Select all wishlist icons
// document.querySelectorAll('.wishlistProduct').forEach((icon, index) => {
//     const iconId = `wishlist-${index}`;
//     const productBox = icon.closest('.product-box');
//     const productImg = productBox.querySelector('.product-image img');
//     const productImgSrc = productImg.getAttribute('src');

//     // Apply saved state on page load
//     if (wishlistStates[iconId]) {
//         icon.classList.add('show');
//     }

//     icon.addEventListener('click', () => {
//         const alertBox = document.getElementById('alertBox');
//         const alertMessage = document.getElementById('alertMessage');
//         const alertImage = document.getElementById('alertImage');
//         const progressBar = document.getElementById('progressBar');

//         // Set product image in alert
//         alertImage.setAttribute('src', productImgSrc);

//         // Toggle state
//         if (wishlistStates[iconId]) {
//             alertMessage.textContent = 'Product removed successfully';
//             alertBox.classList.add('removed');
//             alertBox.classList.remove('added');
//             icon.classList.remove('show');
//             wishlistStates[iconId] = false;
//         } else {
//             alertMessage.textContent = 'Product added successfully';
//             alertBox.classList.add('added');
//             alertBox.classList.remove('removed');
//             icon.classList.add('show');
//             wishlistStates[iconId] = true;
//         }

//         // Save updated states to localStorage
//         localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates));

//         // Animate alert in
//         alertBox.style.display = 'block';
//         alertBox.style.opacity = '0';
//         alertBox.style.transform = 'translateY(-20px)';

//         let opacity = 0;
//         let translateY = -20;
//         const fadeIn = setInterval(() => {
//             if (opacity < 1) {
//                 opacity += 0.05;
//                 translateY += 1;
//                 alertBox.style.opacity = opacity.toFixed(2);
//                 alertBox.style.transform = `translateY(${translateY}px)`;
//             } else {
//                 clearInterval(fadeIn);
//             }
//         }, 16);

//         // Restart progress bar animation
//         progressBar.style.animation = 'none';
//         progressBar.offsetWidth; // force reflow
//         progressBar.style.animation = 'progressBarAnimation 25m linear forwards';
//         // progressBar.style.animation = 'progressBarAnimation 2.5s linear forwards';

//         // Animate alert out after 2.5s
//         setTimeout(() => {
//             let opacityOut = 1;
//             let translateOut = 0;
//             const fadeOut = setInterval(() => {
//                 if (opacityOut > 0) {
//                     opacityOut -= 0.05;
//                     translateOut -= 1;
//                     alertBox.style.opacity = opacityOut.toFixed(2);
//                     alertBox.style.transform = `translateY(${translateOut}px)`;
//                 } else {
//                     clearInterval(fadeOut);
//                     alertBox.style.display = 'none';
//                 }
//             }, 16);
//         }, 2500000);
//         // }, 2500);
//     });
// });






















// const wishlistStates = JSON.parse(localStorage.getItem('wishlistStates')) || {};

// document.querySelectorAll('.wishlistProduct').forEach((icon, index) => {
//     const iconId = `wishlist-${index}`;
//     const productBox = icon.closest('.product-box');
//     const productName = productBox.querySelector('.product-content h5').textContent;
//     const productImage = productBox.querySelector('.product-image img').src;

//     // Set initial state if not present
//     if (!(iconId in wishlistStates)) {
//         wishlistStates[iconId] = false;
//     }

//     // Reflect initial UI state
//     if (wishlistStates[iconId]) {
//         icon.classList.add('show');
//     }

//     icon.addEventListener('click', () => {
//         const alertBox = document.getElementById('alertBox');
//         const alertMessage = document.getElementById('alertMessage');
//         const progressBar = document.getElementById('progressBar');

//         // Add product name and image to alert box
//         const action = wishlistStates[iconId] ? 'removed' : 'added';
//         const message = wishlistStates[iconId] ? 'Product removed successfully' : 'Product added successfully';
//         alertMessage.innerHTML = `
//             <h4>${message}</h4>
//             <div class="alert-image">
//                 <img src="${productImage}" alt="Product" class="img-fluid"/>
//                 <h5>${productName}</h5>
//             </div>
//         `;

//         alertBox.classList.toggle('removed', wishlistStates[iconId]);
//         alertBox.classList.toggle('added', !wishlistStates[iconId]);
//         icon.classList.toggle('show', !wishlistStates[iconId]);

//         // Toggle state
//         wishlistStates[iconId] = !wishlistStates[iconId];

//         // Save to localStorage
//         localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates));

//         // Show and animate alert
//         alertBox.style.display = 'block';
//         alertBox.style.opacity = '0';
//         alertBox.style.transform = 'translateY(-20px)';

//         let opacity = 0;
//         let translateY = -20;
//         const fadeIn = setInterval(() => {
//             if (opacity < 1) {
//                 opacity += 0.05;
//                 translateY += 1;
//                 alertBox.style.opacity = opacity.toFixed(2);
//                 alertBox.style.transform = `translateY(${translateY}px)`;
//             } else {
//                 clearInterval(fadeIn);
//             }
//         }, 16);

//         // Reset and animate progress bar
//         progressBar.offsetWidth;
//         progressBar.style.animation = 'progressBarAnimation 25m linear forwards';
//         // progressBar.style.animation = 'progressBarAnimation 2.5s linear forwards';

//         // Fade out after 2.5s
//         setTimeout(() => {
//             let opacityOut = 1;
//             let translateOut = 0;
//             const fadeOut = setInterval(() => {
//                 if (opacityOut > 0) {
//                     opacityOut -= 0.05;
//                     translateOut -= 1;
//                     alertBox.style.opacity = opacityOut.toFixed(2);
//                     alertBox.style.transform = `translateY(${translateOut}px)`;
//                 } else {
//                     clearInterval(fadeOut);
//                     alertBox.style.display = 'none';
//                 }
//             }, 16);
//         }, 2500000);
//         // }, 2500);
//     });
// });






// const wishlistStates = JSON.parse(localStorage.getItem('wishlistStates')) || {};

// document.querySelectorAll('.wishlistProduct').forEach((icon, index) => {
//     const iconId = `wishlist-${index}`;
//     const productBox = icon.closest('.product-box');
//     const productName = productBox.querySelector('.product-content h5').textContent;
//     const productImage = productBox.querySelector('.product-image img').src;

//     // Set initial state if not present
//     if (!(iconId in wishlistStates)) {
//         wishlistStates[iconId] = false;
//     }

//     // Reflect initial UI state
//     if (wishlistStates[iconId]) {
//         icon.classList.add('show');
//     }

//     icon.addEventListener('click', () => {
//         const alertBox = document.getElementById('alertBox');
//         const alertMessage = document.getElementById('alertMessage');
//         const progressBar = document.getElementById('progressBar');
//         const removeButton = alertBox.querySelector('.remove-wishlist');
//         const addCartButton = alertBox.querySelector('.add-cart-btn');

//         // Add product name and image to alert box
//         const action = wishlistStates[iconId] ? 'removed' : 'added';
//         const message = wishlistStates[iconId] ? 'Product removed successfully' : 'Product added successfully';
//         alertMessage.innerHTML = `
//                     <h4>${message}</h4>
//                     <div class="alert-image">
//                         <img src="${productImage}" alt="Product" class="img-fluid"/>
//                         <h5>${productName}</h5>
//                     </div>
//                 `;

//         alertBox.classList.toggle('removed', wishlistStates[iconId]);
//         alertBox.classList.toggle('added', !wishlistStates[iconId]);
//         icon.classList.toggle('show', !wishlistStates[iconId]);

//         // Toggle state
//         wishlistStates[iconId] = !wishlistStates[iconId];

//         // Save to localStorage
//         localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates));

//         // Show and animate alert
//         alertBox.style.display = 'block';
//         alertBox.style.opacity = '0';
//         alertBox.style.transform = 'translateY(-20px)';

//         let opacity = 0;
//         let translateY = -20;
//         const fadeIn = setInterval(() => {
//             if (opacity < 1) {
//                 opacity += 0.05;
//                 translateY += 1;
//                 alertBox.style.opacity = opacity.toFixed(2);
//                 alertBox.style.transform = `translateY(${translateY}px)`;
//             } else {
//                 clearInterval(fadeIn);
//             }
//         }, 16);

//         // Reset and animate progress bar
//         progressBar.offsetWidth;
//         progressBar.style.animation = 'progressBarAnimation 25s linear forwards';

//         // Fade out after a long time
//         setTimeout(() => {
//             let opacityOut = 1;
//             let translateOut = 0;
//             const fadeOut = setInterval(() => {
//                 if (opacityOut > 0) {
//                     opacityOut -= 0.05;
//                     translateOut -= 1;
//                     alertBox.style.opacity = opacityOut.toFixed(2);
//                     alertBox.style.transform = `translateY(${translateOut}px)`;
//                 } else {
//                     clearInterval(fadeOut);
//                     alertBox.style.display = 'none';
//                 }
//             }, 16);
//         }, 2500000);

//         // Handle remove wishlist button click
//         removeButton.addEventListener('click', () => {
//             wishlistStates[iconId] = false; // Set wishlist state to false (removed)
//             localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates)); // Update localStorage

//             // Update UI
//             icon.classList.remove('show');
//             removeButton.textContent = 'Add to Wishlist'; // Change button text

//             alertMessage.innerHTML = `
//                         <h4>Product removed wishlist</h4>
//                         <div class="alert-image">
//                             <img src="${productImage}" alt="Product" class="img-fluid"/>
//                             <h5>${productName}</h5>
//                         </div>
//                     `;
//             // Update alert box class
//             alertBox.classList.add('removed');
//             alertBox.classList.remove('added');
//         });

//         // Handle add to cart button click (optional, can be modified to suit your needs)
//         addCartButton.addEventListener('click', () => {
//             console.log(`${productName} added to cart!`);
//         });
//     });
// });
















// const wishlistStates = JSON.parse(localStorage.getItem('wishlistStates')) || {};

// document.querySelectorAll('.wishlistProduct').forEach((icon, index) => {
//     const iconId = `wishlist-${index}`;
//     const productBox = icon.closest('.product-box');
//     const productName = productBox.querySelector('.product-content h5').textContent;
//     const productImage = productBox.querySelector('.product-image img').src;

//     // Set initial state if not present
//     if (!(iconId in wishlistStates)) {
//         wishlistStates[iconId] = false;
//     }

//     // Reflect initial UI state
//     if (wishlistStates[iconId]) {
//         icon.classList.add('show');
//     }

//     let fadeOutTimeout; // Variable to store the timeout reference

//     icon.addEventListener('click', () => {
//         const alertBox = document.getElementById('alertBox');
//         const alertMessage = document.getElementById('alertMessage');
//         const progressBar = document.getElementById('progressBar');
//         const removeButton = alertBox.querySelector('.remove-wishlist');

//         // Add product name and image to alert box
//         const action = wishlistStates[iconId] ? 'removed' : 'added';
//         const message = wishlistStates[iconId] ? 'Product removed successfully' : 'Product added successfully';
//         alertMessage.innerHTML = `
//             <h4>${message}</h4>
//             <div class="alert-image">
//                 <img src="${productImage}" alt="Product" class="img-fluid"/>
//                 <h5>${productName}</h5>
//             </div>
//         `;

//         // Toggle classes based on wishlist state
//         alertBox.classList.toggle('removed', wishlistStates[iconId]);
//         alertBox.classList.toggle('added', !wishlistStates[iconId]);

//         // Toggle the product state (added or removed)
//         icon.classList.toggle('show', !wishlistStates[iconId]);

//         // Toggle state
//         wishlistStates[iconId] = !wishlistStates[iconId];

//         // Save to localStorage
//         localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates));

//         // Show and animate alert
//         alertBox.style.display = 'block';
//         alertBox.style.opacity = '0';
//         alertBox.style.transform = 'translateY(-20px)';

//         let opacity = 0;
//         let translateY = -20;
//         const fadeIn = setInterval(() => {
//             if (opacity < 1) {
//                 opacity += 0.05;
//                 translateY += 1;
//                 alertBox.style.opacity = opacity.toFixed(2);
//                 alertBox.style.transform = `translateY(${translateY}px)`;
//             } else {
//                 clearInterval(fadeIn);
//             }
//         }, 16);

//         // Reset and animate progress bar
//         progressBar.offsetWidth;
//         progressBar.style.animation = 'progressBarAnimation 2.5s linear forwards';

//         // Fade out after 2.5s
//         function startFadeOut() {
//             fadeOutTimeout = setTimeout(() => {
//                 let opacityOut = 1;
//                 let translateOut = 0;
//                 const fadeOut = setInterval(() => {
//                     if (opacityOut > 0) {
//                         opacityOut -= 0.05;
//                         translateOut -= 1;
//                         alertBox.style.opacity = opacityOut.toFixed(2);
//                         alertBox.style.transform = `translateY(${translateOut}px)`;
//                     } else {
//                         clearInterval(fadeOut);
//                         alertBox.style.display = 'none';
//                     }
//                 }, 16);
//             }, 2500); // Start fade out after 2.5s
//         }

//         // Call the function to start fading out
//         startFadeOut();

//         // Stop the fade-out on hover
//         alertBox.addEventListener('mouseenter', () => {
//             clearTimeout(fadeOutTimeout); // Stop fade-out timer
//         });

//         // Restart the fade-out on hover out
//         alertBox.addEventListener('mouseleave', () => {
//             startFadeOut(); // Restart the fade-out timer
//         });

//         // Toggle button text based on state
//         if (wishlistStates[iconId]) {
//             removeButton.textContent = 'Remove Wishlist'; // Change text to "Remove Wishlist"
//         } else {
//             removeButton.textContent = 'Add to Wishlist'; // Change text to "Add to Wishlist"
//         }

//         // Handle remove wishlist button click
//         removeButton.addEventListener('click', () => {
//             // If the product is added to wishlist, remove it
//             if (wishlistStates[iconId]) {
//                 wishlistStates[iconId] = false;
//                 icon.classList.remove('show');
//                 removeButton.textContent = 'Add to Wishlist'; // Update button text
//                 alertBox.classList.remove('added');
//                 alertBox.classList.add('removed');
//                 alertMessage.innerHTML = `
//                     <h4>Product removed wishlist</h4>
//                     <div class="alert-image">
//                         <img src="${productImage}" alt="Product" class="img-fluid"/>
//                         <h5>${productName}</h5>
//                     </div>
//                 `;
//             } else {
//                 wishlistStates[iconId] = true;
//                 icon.classList.add('show');
//                 removeButton.textContent = 'Remove Wishlist'; // Update button text
//                 alertBox.classList.remove('removed');
//                 alertBox.classList.add('added');
//                 alertMessage.innerHTML = `
//                     <h4>Product added wishlist</h4>
//                     <div class="alert-image">
//                         <img src="${productImage}" alt="Product" class="img-fluid"/>
//                         <h5>${productName}</h5>
//                     </div>
//                 `;
//             }

//             // Update localStorage
//             localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates));
//         });
//     });
// });


// const wishlistStates = JSON.parse(localStorage.getItem('wishlistStates')) || {};

// document.querySelectorAll('.wishlistProduct').forEach((icon, index) => {
//     const iconId = `wishlist-${index}`;
//     const productBox = icon.closest('.productMain');
//     const productImage = productBox.querySelector('.productImage').src;
//     const productName = productBox.querySelector('.productName').textContent;

//     // Set initial state if not present
//     if (!(iconId in wishlistStates)) {
//         wishlistStates[iconId] = false;
//     }

//     // Reflect initial UI state
//     if (wishlistStates[iconId]) {
//         icon.classList.add('show');
//     }

//     let fadeOutTimeout; // Variable to store the timeout reference

//     icon.addEventListener('click', () => {
//         const alertBox = document.getElementById('alertBox');
//         const alertMessage = document.getElementById('alertMessage');
//         const progressBar = document.getElementById('progressBar');
//         const removeButton = alertBox.querySelector('.remove-wishlist');

//         // Add product name and image to alert box
//         const action = wishlistStates[iconId] ? 'removed' : 'added';
//         const message = wishlistStates[iconId] ? 'Product removed successfully' : 'Product added successfully';
//         alertMessage.innerHTML = `
//             <h4>${message}</h4>
//             <div class="alert-image">
//                 <img src="${productImage}" alt="Product" class="img-fluid"/>
//                 <h5>${productName}</h5>
//             </div>
//         `;

//         // Toggle classes based on wishlist state
//         alertBox.classList.toggle('removed', wishlistStates[iconId]);
//         alertBox.classList.toggle('added', !wishlistStates[iconId]);

//         // Toggle the product state (added or removed)
//         icon.classList.toggle('show', !wishlistStates[iconId]);

//         // Toggle state
//         wishlistStates[iconId] = !wishlistStates[iconId];

//         // Save to localStorage
//         localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates));

//         // Show and animate alert
//         alertBox.style.display = 'block';
//         alertBox.style.opacity = '0';
//         alertBox.style.transform = 'translateY(-20px)';

//         let opacity = 0;
//         let translateY = -20;
//         const fadeIn = setInterval(() => {
//             if (opacity < 1) {
//                 opacity += 0.05;
//                 translateY += 1;
//                 alertBox.style.opacity = opacity.toFixed(2);
//                 alertBox.style.transform = `translateY(${translateY}px)`;
//             } else {
//                 clearInterval(fadeIn);
//             }
//         }, 16);

//         // Reset and animate progress bar
//         progressBar.offsetWidth;
//         progressBar.style.animation = 'progressBarAnimation 25s linear forwards';

//         // Fade out after 2.5s
//         function startFadeOut() {
//             fadeOutTimeout = setTimeout(() => {
//                 let opacityOut = 1;
//                 let translateOut = 0;
//                 const fadeOut = setInterval(() => {
//                     if (opacityOut > 0) {
//                         opacityOut -= 0.05;
//                         translateOut -= 1;
//                         alertBox.style.opacity = opacityOut.toFixed(2);
//                         alertBox.style.transform = `translateY(${translateOut}px)`;
//                     } else {
//                         clearInterval(fadeOut);
//                         alertBox.style.display = 'none';
//                     }
//                 }, 16);
//             }, 2500); // Start fade out after 2.5s
//         }

//         // Call the function to start fading out
//         startFadeOut();

//         // Stop the fade-out on hover
//         alertBox.addEventListener('mouseenter', () => {
//             clearTimeout(fadeOutTimeout); // Stop fade-out timer
//         });

//         // Restart the fade-out on hover out
//         alertBox.addEventListener('mouseleave', () => {
//             startFadeOut(); // Restart the fade-out timer
//         });

//         // Toggle button text based on state
//         if (wishlistStates[iconId]) {
//             removeButton.textContent = 'Remove Wishlist'; // Change text to "Remove Wishlist"
//         } else {
//             removeButton.textContent = 'Add to Wishlist'; // Change text to "Add to Wishlist"
//         }

//         // Handle remove wishlist button click
//         removeButton.addEventListener('click', () => {
//             // If the product is added to wishlist, remove it
//             if (wishlistStates[iconId]) {
//                 wishlistStates[iconId] = false;
//                 icon.classList.remove('show');
//                 removeButton.textContent = 'Add to Wishlist'; // Update button text
//                 alertBox.classList.remove('added');
//                 alertBox.classList.add('removed');
//                 alertMessage.innerHTML = `
//                     <h4>Product removed from wishlist</h4>
//                     <div class="alert-image">
//                         <img src="${productImage}" alt="Product" class="img-fluid"/>
//                         <h5>${productName}</h5>
//                     </div>
//                 `;
//             } else {
//                 wishlistStates[iconId] = true;
//                 icon.classList.add('show');
//                 removeButton.textContent = 'Remove Wishlist'; // Update button text
//                 alertBox.classList.remove('removed');
//                 alertBox.classList.add('added');
//                 alertMessage.innerHTML = `
//                     <h4>Product added to wishlist</h4>
//                     <div class="alert-image">
//                         <img src="${productImage}" alt="Product" class="img-fluid"/>
//                         <h5>${productName}</h5>
//                     </div>
//                 `;
//             }

//             // Update localStorage
//             localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates));
//         });
//     });

//     // Add event listener for "Add to cart" button
//     const addCartButton = document.querySelector('.alert-box .add-cart-btn');
//     if (addCartButton) {
//         addCartButton.addEventListener('click', () => {
//             // Hide the alert box when Add to Cart is clicked
//             const alertBox = document.getElementById('alertBox');
//             alertBox.style.display = 'none';
//         });
//     }
// });








document.addEventListener("DOMContentLoaded", () => {
    const wishlistStates = JSON.parse(localStorage.getItem('wishlistStates')) || {};

    document.querySelectorAll('.wishlistProduct').forEach((icon, index) => {
        const iconId = `wishlist-${index}`;
        const productBox = icon.closest('.productMain');

        // ✅ Safe queries
        const productImageEl = productBox ? productBox.querySelector('.productImage') : null;
        const productNameEl = productBox ? productBox.querySelector('.productName') : null;

        const productImage = productImageEl ? productImageEl.src : '';
        const productName = productNameEl ? productNameEl.textContent : 'Unknown Product';

        // Set initial state if not present
        if (!(iconId in wishlistStates)) {
            wishlistStates[iconId] = false;
        }

        // Reflect initial UI state
        if (wishlistStates[iconId]) {
            icon.classList.add('show');
        }

        let fadeOutTimeout; // Variable to store the timeout reference

        icon.addEventListener('click', () => {
            const alertBox = document.getElementById('alertBox');
            const alertMessage = document.getElementById('alertMessage');
            const progressBar = document.getElementById('progressBar');
            const removeButton = alertBox ? alertBox.querySelector('.remove-wishlist') : null;

            if (!alertBox || !alertMessage || !progressBar || !removeButton) {
                console.warn("⚠️ Alert box or its children missing in DOM");
                return;
            }

            // Add product name and image to alert box
            const message = wishlistStates[iconId]
                ? 'Product removed successfully'
                : 'Product added successfully';

            alertMessage.innerHTML = `
                <h4>${message}</h4>
                <div class="alert-image">
                    <img src="${productImage}" alt="Product" class="img-fluid"/>
                    <h5>${productName}</h5>
                </div>
            `;

            // Toggle classes based on wishlist state
            alertBox.classList.toggle('removed', wishlistStates[iconId]);
            alertBox.classList.toggle('added', !wishlistStates[iconId]);

            // Toggle the product state (added or removed)
            icon.classList.toggle('show', !wishlistStates[iconId]);

            // Toggle state
            wishlistStates[iconId] = !wishlistStates[iconId];

            // Save to localStorage
            localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates));

            // Show and animate alert
            alertBox.style.display = 'block';
            alertBox.style.opacity = '0';
            alertBox.style.transform = 'translateY(-20px)';

            let opacity = 0;
            let translateY = -20;
            const fadeIn = setInterval(() => {
                if (opacity < 1) {
                    opacity += 0.05;
                    translateY += 1;
                    alertBox.style.opacity = opacity.toFixed(2);
                    alertBox.style.transform = `translateY(${translateY}px)`;
                } else {
                    clearInterval(fadeIn);
                }
            }, 16);

            // Reset and animate progress bar
            progressBar.offsetWidth;
            progressBar.style.animation = 'progressBarAnimation 25s linear forwards';

            // Fade out after 2.5s
            function startFadeOut() {
                fadeOutTimeout = setTimeout(() => {
                    let opacityOut = 1;
                    let translateOut = 0;
                    const fadeOut = setInterval(() => {
                        if (opacityOut > 0) {
                            opacityOut -= 0.05;
                            translateOut -= 1;
                            alertBox.style.opacity = opacityOut.toFixed(2);
                            alertBox.style.transform = `translateY(${translateOut}px)`;
                        } else {
                            clearInterval(fadeOut);
                            alertBox.style.display = 'none';
                        }
                    }, 16);
                }, 2500); // Start fade out after 2.5s
            }

            // Call the function to start fading out
            startFadeOut();

            // Stop the fade-out on hover
            alertBox.addEventListener('mouseenter', () => {
                clearTimeout(fadeOutTimeout);
            });

            // Restart the fade-out on hover out
            alertBox.addEventListener('mouseleave', () => {
                startFadeOut();
            });

            // Toggle button text based on state
            removeButton.textContent = wishlistStates[iconId]
                ? 'Remove Wishlist'
                : 'Add to Wishlist';

            // Handle remove wishlist button click
            removeButton.onclick = () => {
                if (wishlistStates[iconId]) {
                    wishlistStates[iconId] = false;
                    icon.classList.remove('show');
                    removeButton.textContent = 'Add to Wishlist';
                    alertBox.classList.remove('added');
                    alertBox.classList.add('removed');
                    alertMessage.innerHTML = `
                        <h4>Product removed from wishlist</h4>
                        <div class="alert-image">
                            <img src="${productImage}" alt="Product" class="img-fluid"/>
                            <h5>${productName}</h5>
                        </div>
                    `;
                } else {
                    wishlistStates[iconId] = true;
                    icon.classList.add('show');
                    removeButton.textContent = 'Remove Wishlist';
                    alertBox.classList.remove('removed');
                    alertBox.classList.add('added');
                    alertMessage.innerHTML = `
                        <h4>Product added to wishlist</h4>
                        <div class="alert-image">
                            <img src="${productImage}" alt="Product" class="img-fluid"/>
                            <h5>${productName}</h5>
                        </div>
                    `;
                }
                localStorage.setItem('wishlistStates', JSON.stringify(wishlistStates));
            };
        });

        // Add event listener for "Add to cart" button
        const addCartButton = document.querySelector('.alert-box .add-cart-btn');
        if (addCartButton) {
            addCartButton.addEventListener('click', () => {
                const alertBox = document.getElementById('alertBox');
                if (alertBox) {
                    alertBox.style.display = 'none';
                }
            });
        }
    });
});
