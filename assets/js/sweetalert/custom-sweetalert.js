/*=====================
    Sweet-Alert Js
==========================*/
// (function () {
//   // Select all elements with the "common-alert" class
//   const alertButtons = document.querySelectorAll(".common-alert,.wishlist-alert");

//   const alertMessages = {
//     "common-alert": "Successfully added to your bag!",
//     "wishlist-alert": "Added to your wishlist!",
//   };
//   // Add event listener to each button
//   alertButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       // Initialize Swal Toast
//       const Toast = Swal.mixin({
//         toast: true,
//         position: "top-end",
//         showConfirmButton: false,
//         timer: 10000000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.onmouseenter = Swal.stopTimer;
//           toast.onmouseleave = Swal.resumeTimer;
//         },
//       });

//       // Show success notification
//       Toast.fire({
//         icon: "success",
//         title: "Successfully added to your bag!",
//       });
//     });
//   });
// })();

(function () {
  // Select all elements with the relevant alert classes
  const alertButtons = document.querySelectorAll(".common-alert, .wishlist-alert");

  // Define messages for each class
  const alertMessages = {
    "common-alert": "Successfully added to your bag!",
    "wishlist-alert": "Added to your wishlist!",
  };

  // Add event listener to each button
  alertButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Determine the message based on the class of the clicked button
      let alertMessage = "Default message"; // Fallback message
      for (const [className, message] of Object.entries(alertMessages)) {
        if (button.classList.contains(className)) {
          alertMessage = message;
          break;
        }
      }

      // Initialize Swal Toast
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      // Show success notification with the appropriate message
      Toast.fire({
        icon: "success",
        title: alertMessage,
      });
    });
  });
})();
