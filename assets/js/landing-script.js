/*-----------------------------------------------------------------------------------

    Template Name:Kartify - Multipurpose Ecommerce Template
    Template URI: https://themes.pixelstrap.com/kartify
    Author: Pixelstrap
    Author URL: https://themeforest.net/user/pixelstrap

----------------------------------------------------------------------------------- */
/* 01 Slider js */
/* 02 Tooltip js */
/* 03 sticky header js */
/* 04 Tap to top js */
/* 05 Custom Cursor js */
/* 06 Header scrollspy js  */


/*====================
 01. Slider js
=======================*/
var serviceSlider = new Swiper(".service-slider", {
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        enabled: true,
        delay: 0,
        pauseOnMouseEnter: false,
        disableOnInteraction: true,
    },
    freeMode: false,
    speed: 10500,
    freeModeMomentum: false,
    breakpoints: {
        0: {
            slidesPerView: 1.4,
            spaceBetween: 15,
        },
        665: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        990: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});
var pagesSlider = new Swiper(".pages-slider", {
    slidesPerView: 4.5,
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        enabled: true,
        delay: 0,
        pauseOnMouseEnter: false,
        disableOnInteraction: true,
    },
    freeMode: false,
    speed: 10500,
    freeModeMomentum: false,
    breakpoints: {
        0: {
            slidesPerView: 1.8,
            spaceBetween: 15,
        },
        665: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        990: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

/*====================
 02. Tooltip js
=======================*/
document.addEventListener('DOMContentLoaded', function () {
    function myFunction(e) {
        var x = e.clientX;
        var y = e.clientY;
        var tooltip = document.getElementById("tooltip");

        var offsetX = 0;
        var offsetY = -100;

        tooltip.style.left = (x + offsetX) + "px";
        tooltip.style.top = (y + offsetY) + "px";
        tooltip.style.display = "block";

        var tooltipText = e.target.getAttribute("data-tooltip");

        if (!tooltipText) {
            tooltip.style.opacity = 0;
            return;
        }

        if (tooltipText !== null) {
            tooltip.innerHTML = tooltipText;
            tooltip.style.opacity = 1;
        } else {
            tooltip.innerHTML = "No tooltip text";
        }
    }

    document.querySelectorAll('.hoverable').forEach(function (element) {
        element.addEventListener('mousemove', myFunction);
        element.addEventListener('mouseleave', function () {
            document.getElementById("tooltip").style.display = "none";
        });
    });
});


/*====================
 03. sticky header js
=======================*/
const header = document.querySelector("header");
const toggleClass = "sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});


/*====================
  04. Tap to top js
=======================*/
const btn = document.querySelector(".scroll");

btn.addEventListener("click", function () {
    scroll(0, 200);
});

window.onscroll = function showHide() {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        btn.style.transform = "scale(1)";
    } else {
        btn.style.transform = "scale(0)";
    }
};

function scroll(target, duration) {
    if (duration <= 0) {
        return;
    }
    let difference = target - document.documentElement.scrollTop;
    let speed = (difference / duration) * 10;
    setTimeout(function () {
        document.documentElement.scrollTop += speed;
        if (document.documentElement.scrollTop == target) {
            return;
        }
        scroll(target, duration - 10);
    }, 10);
}


/*=====================
  05. Custom Cursor js
==========================*/
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = {
    x: 0,
    y: 0
};
const cursorBorderPos = {
    x: 0,
    y: 0
};

document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        if (item.dataset.cursor === "pointer") {
            cursorBorder.style.backgroundColor = "rgba(236, 137,81, .3)";
            cursorBorder.style.setProperty("--size", "calc(34px + (50 - 34) * ((100vw - 320px) / (1920 - 320)))");
        }
    });
    item.addEventListener("mouseout", (e) => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "25px");
    });
});


/*=====================
   06. Header scrollspy js 
==========================*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.remove("active");
        }

    });
}

/*=====================
  WOW Js
==========================*/
new WOW().init();


/*=====================
   07. Resize js 
==========================*/
$(window).on('load', function () {
    $(window).trigger('resize');
});

/*=====================
   08. Smooth Scrolling Js 
==========================*/
const lenis = new Lenis({
    autoRaf: true,
});

/*=====================
   09. Counter Js 
==========================*/
if ("IntersectionObserver" in window) {
    let counterObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let counter = entry.target;

                let text = counter.innerText.replace(/[^\d]/g, "");
                let target = parseInt(text, 10);

                if (isNaN(target) || target === 0) {
                    counterObserver.unobserve(counter);
                    return;
                }

                let hasPlus = /\+$/.test(counter.innerText.trim());
                let step = target / 200;
                let current = 0;

                let timer = setInterval(function () {
                    current += step;
                    counter.innerText = Math.floor(current).toLocaleString() + (hasPlus ? "+" : "");

                    if (Math.floor(current) >= target) {
                        clearInterval(timer);
                        counter.innerText = target.toLocaleString() + (hasPlus ? "+" : "");
                    }
                }, 10);

                counterObserver.unobserve(counter);
            }
        });
    });

    let counters = document.querySelectorAll(".counter");
    counters.forEach(function (counter) {
        counterObserver.observe(counter);
    });
}