// const rangeInput = document.querySelectorAll(".range-input input"),
//     priceInput = document.querySelectorAll(".price-input input"),
//     range = document.querySelector(".slider .progress");
// let priceGap = 1000;

// priceInput.forEach((input) => {
//     input.addEventListener("input", (e) => {
//         let minPrice = parseInt(priceInput[0].value),
//             maxPrice = parseInt(priceInput[1].value);

//         if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
//             if (e.target.className === "input-min") {
//                 rangeInput[0].value = minPrice;
//                 range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
//             } else {
//                 rangeInput[1].value = maxPrice;
//                 range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//             }
//         }
//     });
// });
// rangeInput.forEach((input) => {
//     input.addEventListener("input", (e) => {
//         let minVal = parseInt(rangeInput[0].value),
//             maxVal = parseInt(rangeInput[1].value);

//         if (maxVal - minVal < priceGap) {
//             if (e.target.className === "range-min") {
//                 rangeInput[0].value = maxVal -
//                     priceGap;
//             } else {
//                 rangeInput[1].value = minVal + priceGap;
//             }
//         } else {
//             priceInput[0].value = minVal;
//             priceInput[1].value = maxVal;
//             range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//             range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//         }
//     });
// });








{/* <script> */ }
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const rangeFill = document.querySelector(".range-fill");

function updateRange() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal > maxVal - 500) {
        minRange.value = maxVal - 500;
        minVal = maxVal - 500;
    }

    if (maxVal < minVal + 500) {
        maxRange.value = minVal + 500;
        maxVal = minVal + 500;
    }

    minPrice.textContent = `$${minVal}`;
    maxPrice.textContent = `$${maxVal}`;

    let percent1 = (minVal / minRange.max) * 100;
    let percent2 = (maxVal / maxRange.max) * 100;
    rangeFill.style.left = percent1 + "%";
    rangeFill.style.right = (100 - percent2) + "%";
}

minRange.addEventListener("input", updateRange);
maxRange.addEventListener("input", updateRange);

updateRange();
{/* </script> */ }