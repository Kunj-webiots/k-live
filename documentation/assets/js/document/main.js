document.addEventListener("DOMContentLoaded", function () {
	"use strict";

	// Mode toggle
	var modeButton = document.querySelector(".mode");
	if (modeButton) {
		modeButton.addEventListener("click", function () {
			var icon = document.querySelector('.mode i');
			icon.classList.toggle("ri-moon-line");
			icon.classList.toggle("ri-sun-line");
			document.body.classList.toggle("dark-only");
		});
	}

	// Toggle sidebar
	var toggleSidebarButton = document.querySelector(".toggle-sidebar");
	if (toggleSidebarButton) {
		toggleSidebarButton.addEventListener("click", function () {
			document.querySelector('.left-sidebar').classList.toggle("open");
			document.querySelector('.sidebar-overlay').classList.add("show");
		});
	}

	var sidebarCloseButton = document.querySelector(".sidebar-close");
	if (sidebarCloseButton) {
		sidebarCloseButton.addEventListener("click", function () {
			document.querySelector('.left-sidebar').classList.remove("open");
		});
	}

	// Sidebar menu toggle
	var sidebarButton = document.querySelector(".sidebar-button");
	if (sidebarButton) {
		sidebarButton.addEventListener("click", function () {
			document.querySelector(".bg-overlay").classList.add("show");
			document.querySelector(".left-sidebar").classList.add("show");
		});
	}

	document.querySelectorAll(".button-close, .bg-overlay").forEach(function (element) {
		element.addEventListener("click", function () {
			document.querySelector(".bg-overlay").classList.remove("show");
			document.querySelector(".left-sidebar").classList.remove("show");
		});
	});

	// Font size adjustment
	var decreaseButton = document.querySelector(".decrease");
	if (decreaseButton) {
		decreaseButton.addEventListener("click", function () {
			document.querySelector('.content').classList.add("font-decrease");
			document.querySelector('.content').classList.remove("font-increase");
		});
	}

	var increaseButton = document.querySelector(".increase");
	if (increaseButton) {
		increaseButton.addEventListener("click", function () {
			document.querySelector('.content').classList.add("font-increase");
			document.querySelector('.content').classList.remove("font-decrease");
		});
	}

	var resetButton = document.querySelector(".reset");
	if (resetButton) {
		resetButton.addEventListener("click", function () {
			document.querySelector('.content').classList.remove("font-decrease");
			document.querySelector('.content').classList.remove("font-increase");
		});
	}
});
