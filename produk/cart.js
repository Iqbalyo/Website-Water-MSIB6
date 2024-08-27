let cart = [];

// Function to format numbers as Rupiah
function formatRupiah(angka) {
    return `Rp ${angka.toLocaleString('id-ID')}`;
}

// Function to add a product to the cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    showPopup(`Produk "${productName}" telah ditambahkan ke keranjang.`);
    displayCart();
}

// Function to display the cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        const formattedPrice = formatRupiah(item.price);
        li.textContent = `${item.name} - ${formattedPrice}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.className = 'delete-btn'; 
        deleteBtn.onclick = () => removeFromCart(item);

        li.appendChild(deleteBtn);
        cartItems.appendChild(li);
    });
}

// Function to remove an item from the cart
function removeFromCart(item) {
    cart = cart.filter(cartItem => cartItem !== item);
    displayCart();
}

// Function to open the checkout popup
function openCheckoutPopup() {
    const popup = document.getElementById('checkout-popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close the popups
function closePopup() {
    const checkoutPopup = document.getElementById('checkout-popup');
    const generalPopup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    if (checkoutPopup.style.display === 'block') {
        checkoutPopup.style.display = 'none';
    }

    if (generalPopup.style.display === 'block') {
        generalPopup.style.display = 'none';
    }

    overlay.style.display = 'none';
}

// Function to handle the checkout process
function proceedToCheckout() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cod = document.getElementById('cod').checked;
    const dana = document.getElementById('dana').checked;

    if (!name || !phone || !address) {
        alert('Silakan lengkapi semua kolom input.');
        return;
    }

    let paymentMethod = '';
    if (cod) {
        paymentMethod = 'COD';
    } else if (dana) {
        paymentMethod = 'Transfer Dana';
    } else {
        alert('Pilih salah satu metode pembayaran.');
        return;
    }

    // Calculate and format the total price
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    let formattedTotal = formatRupiah(total);

    // Here you could send the checkout info to the server if needed
    let checkoutInfo = {
        name: name,
        phone: phone,
        address: address,
        paymentMethod: paymentMethod,
        total: total
    };

    // Close the checkout popup and display the confirmation
    closePopup();
    showPopup(`Checkout berhasil dengan total belanja: ${formattedTotal}`);
    
    // Clear the cart and update the display
    cart = [];
    displayCart();
}

// Function to display a popup message
function showPopup(message) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const popupContent = document.getElementById('popup-content');
    popupContent.textContent = message;
    popup.style.display = 'block';
    overlay.style.display = 'block';
}
