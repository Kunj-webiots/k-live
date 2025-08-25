// lightGallery(document.getElementById('lightgallery'), {
//     plugins: [lgZoom, lgThumbnail],
//     // speed: 500,
//     // animateThumb: true,
//     // hash: true,
//     // zoomFromOrigin: false,
//     selector: '.item',
//     // allowMediaOverlap: true,
//     // toggleThumb: true,
//     // thumbnail: true,
// });


// lightGallery(document.getElementById('portfolioGallery'), {
//     // animateThumb: true,
//     // speed: 500,
//     // appendSubHtmlTo: '.portfolio-content',
//     // slideDelay: 400,
//     // customSlideName: true,

// });




// const lgContainer = document.getElementById('portfolioGallery');
// const inlineGallery = lightGallery(lgContainer, {
//     container: lgContainer,
//     dynamic: true,
//     // Turn off hash plugin in case if you are using it
//     // as we don't want to change the url on slide change
//     hash: false,
//     // Do not allow users to close the gallery
//     closable: false,
//     // Add maximize icon to enlarge the gallery
//     showMaximizeIcon: true,
//     // Append caption inside the slide item
//     // to apply some animation for the captions (Optional)
//     appendSubHtmlTo: '.portfolio-content',
//     // Delay slide transition to complete captions animations
//     // before navigating to different slides (Optional)
//     // You can find caption animation demo on the captions demo page
//     slideDelay: 400,
//     dynamicEl: [
//         {
//             src: './assets/images/inner-page/portfolio/2.jpg',
//             thumb: './assets/images/inner-page/portfolio/2.jpg',
//             subHtml: `<div class="lightGallery-captions">
//                 <h4>Caption 1</h4>
//                 <p>Description of the slide 1</p>
//             </div>`,
//         },
//         {
//             src: './assets/images/inner-page/portfolio/1.jpg',
//             thumb: './assets/images/inner-page/portfolio/1.jpg',
//             subHtml: `<div class="lightGallery-captions">
//                 <h4>Caption 2</h4>
//                 <p>Description of the slide 2</p>
//             </div>`,
//         },
//         // ...
//     ],
// });

// // Since we are using dynamic mode, we need to programmatically open lightGallery
// inlineGallery.openGallery();
