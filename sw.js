var cacheName = "kartify-app";
var filesToCache = [
  "./",
  "./index.html",
  "../assets/css/vendors/bootstrap.css",
  "../assets/css/vendors/bootstrap.rtl.css",
  "../assets/css/vendors/iconsax.css",
  "../assets/css/vendors/lg-thumbnail.css",
  "../assets/css/vendors/lg-zoom.css",
  "../assets/css/vendors/lightgallery.css",
  "../assets/css/vendors/popup.css",
  "../assets/css/vendors/remixicon.css",
  "../assets/css/vendors/sweetalert2.css",
  "../assets/css/vendors/swiper.css",
  "../assets/css/style.css",
  "../assets/js/bootstrap/bootstrap.bundle.js",
  "../assets/js/bootstrap/bootstrap-tooltip.js",
  "../assets/js/bootstrap/bootstrap-validation.js",
  "../assets/js/gsap/gsap.min.js.js",
  "../assets/js/gsap/split-type.js",
  "../assets/js/portfolio/imagesloaded.pkgd.min.js",
  "../assets/js/portfolio/isotop.js",
  "../assets/js/portfolio/masonry.pkgd.min.js",
  "../assets/js/portfolio/material-photo-custom.js",
  "../assets/js/portfolio/material-photo-gallery.min.js",
  "../assets/js/sweetalert/custom-sweetalert.js",
  "../assets/js/sweetalert/sweetalert2.all.min.js",
  "../assets/js/zoom-gallery/lg-thumbnail.umd.js",
  "../assets/js/zoom-gallery/lg-zoom.umd.js",
  "../assets/js/zoom-gallery/lightgallery.umd.js",
  "../assets/js/blog-masonry.js",
  "../assets/js/category-hide-show.js",
  "../assets/js/change-grid.js",
  "../assets/js/color-active.js",
  "../assets/js/compare-remove.js",
  "../assets/js/cookie.js",
  "../assets/js/counter.js",
  "../assets/js/custom-light-gallery.js",
  "../assets/js/custom-light-zoom.js",
  "../assets/js/custom-swiper.js",
  "../assets/js/fill-wishlist.js",
  "../assets/js/filter-sidebar.js",
  "../assets/js/header-remove.js",
  "../assets/js/image-change.js",
  "../assets/js/lazyload.js",
  "../assets/js/load-more.js",
  "../assets/js/masonry.min.js",
  "../assets/js/price-change.js",
  "../assets/js/qty.js",
  "../assets/js/quick-timer.js",
  "../assets/js/range-slider.js",
  "../assets/js/script.js",
  "../assets/js/sticky-cart-bottom.js",
  "../assets/js/swiper.js",
  "../assets/js/theme-setting.js",
  "../assets/js/timer.js",
  "../assets/js/timer-2.js",
  "../assets/js/user-dashboard.js",
  "../assets/js/wishlist-notify.js",
  "../assets/js/zoom.js",
  "../assets/js/zoom-gallery.js",
];

/* Start the service worker and cache all of the app's content */
setTimeout(() => {
  self.addEventListener("install", function (e) {
    e.waitUntil(
      caches.open(cacheName).then(function (cache) {
        return cache.addAll(filesToCache);
      })
    );
    self.skipWaiting();
  });
}, 500);