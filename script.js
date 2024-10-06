document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.cart-item');
        const quantityElement = item.querySelector('.item-quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.cart-item');
        const quantityElement = item.querySelector('.item-quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
        }
    });
});

document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.cart-item');
        item.remove();
        updateTotal();
    });
});

document.querySelectorAll('.like').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent);
        const quantity = parseInt(item.querySelector('.item-quantity').textContent);
        total += price * quantity;
    });
    document.getElementById('total').textContent = `Total : ${total.toFixed(2)} €`;
}

// Initial calculation
updateTotal();
