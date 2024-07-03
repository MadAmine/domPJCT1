function adjustQuantity(button, change) {
    const quantitySpan = button.parentElement.querySelector('span');
    let quantity = parseInt(quantitySpan.textContent);
    quantity += change;
    if (quantity < 1) quantity = 1;
    quantitySpan.textContent = quantity;

    updateTotalPrice();
}

function removeItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateTotalPrice();
}

function toggleLike(button) {
    button.classList.toggle('liked');
}

function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity-control span').textContent);
        totalPrice += price * quantity;
    });
    document.querySelector('.total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}