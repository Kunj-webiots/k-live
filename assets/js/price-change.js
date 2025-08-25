document.querySelectorAll('.price-check').forEach(checkbox => {
    checkbox.addEventListener('click', updatePrice);
});

// Function to update the total price
function updatePrice() {
    let total = 0;
    document.querySelectorAll('.price-check').forEach(checkbox => {
        if (checkbox.checked) {
            const span = checkbox.nextElementSibling.querySelector('span');
            total += parseFloat(span.innerHTML.replace('$', ''));
        }
    });
    document.getElementById('price').innerHTML = `$${total.toFixed(2)}`;
}

updatePrice();