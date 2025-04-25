// Product data (mock database)
const products = [
    { id: "1", name: "Mix Chocolates (Large Box)", price: 16000, image: "./img/e8605c04946d0003e110e6e3642b72a6.png", quantity: "49 pcs", description: "A luxurious box of assorted chocolates, perfect for gifting." },
    { id: "2", name: "Mix Chocolates (Medium Box)", price: 12000, image: "./img/10cc5cef3a3795f9feeda1954258e0c0.png", quantity: "25 pcs", description: "A medium-sized box of assorted chocolates." },
    { id: "3", name: "Mix Chocolates (Mini Box)", price: 13000, image: "./img/0e44c85c95bd23e293342b0753ea1dad-2.png", quantity: "30 pcs", description: "A mini box of assorted chocolates." },
    { id: "4", name: "Milagro Diffuser", price: 5000, image: "./img/26c8f0284f058665486a1b780873c7a0-1.png", quantity: "9 pcs", description: "A premium diffuser with a luxurious scent." },
    { id: "5", name: "Mix Coins Box", price: 19000, image: "./img/048e6c0ae8f9b15fbad711837c44f479-1.png", quantity: "50 pcs", description: "A box of assorted chocolate coins." },
    { id: "6", name: "Luxury Macaron Box", price: 27000, image: "./img/mask-group.png", quantity: "38 pcs", description: "A box of luxury macarons in various flavors." },
    { id: "7", name: "Mix Chocolates (Large Box)", price: 19000, image: "./img/e8605c04946d0003e110e6e3642b72a6.png", quantity: "49 pcs", description: "A luxurious box of assorted chocolates, perfect for gifting." },
    { id: "8", name: "Mix Chocolates (Medium Box)", price: 12000, image: "./img/10cc5cef3a3795f9feeda1954258e0c0.png", quantity: "25 pcs", description: "A medium-sized box of assorted chocolates." },
    { id: "9", name: "Mix Chocolates (Mini Box)", price: 13000, image: "./img/0e44c85c95bd23e293342b0753ea1dad-2.png", quantity: "30 pcs", description: "A mini box of assorted chocolates." },
    { id: "10", name: "Milagro Diffuser", price: 5000, image: "./img/26c8f0284f058665486a1b780873c7a0-1.png", quantity: "9 pcs", description: "A premium diffuser with a luxurious scent." },
    { id: "11", name: "Mix Coins Box", price: 19000, image: "./img/048e6c0ae8f9b15fbad711837c44f479-1.png", quantity: "50 pcs", description: "A box of assorted chocolate coins." },
    { id: "12", name: "Luxury Macaron Box", price: 27000, image: "./img/mask-group.png", quantity: "38 pcs", description: "A box of luxury macarons in various flavors." },
    { id: "13", name: "Mix Chocolates (Large Box)", price: 16000, image: "./img/e8605c04946d0003e110e6e3642b72a6.png", quantity: "49 pcs", description: "A luxurious box of assorted chocolates, perfect for gifting." },
    { id: "14", name: "Mix Chocolates (Medium Box)", price: 9600, image: "./img/10cc5cef3a3795f9feeda1954258e0c0.png", quantity: "25 pcs", description: "A medium-sized    description: A medium-sized box of assorted chocolates." },
    { id: "15", name: "Mix Chocolates (Mini Box)", price: 4000, image: "./img/0e44c85c95bd23e293342b0753ea1dad-2.png", quantity: "9 pcs", description: "A mini box of assorted chocolates." },
    { id: "16", name: "Milagro Diffuser", price: 10400, image: "./img/26c8f0284f058665486a1b780873c7a0-1.png", quantity: "30 pcs", description: "A premium diffuser with a luxurious scent." },
    { id: "17", name: "Mix Coins Box", price: 15200, image: "./img/048e6c0ae8f9b15fbad711837c44f479-1.png", quantity: "50 pcs", description: "A box of assorted chocolate coins." },
    { id: "18", name: "Luxury Macaron Box", price: 21600, image: "./img/mask-group.png", quantity: "38 pcs", description: "A box of luxury macarons in various flavors." }
];

document.addEventListener('DOMContentLoaded', function() {
    // Common elements across pages
    const notifyModal = document.getElementById('notifyModal');
    const closeModalBtns = document.querySelectorAll('.shop-close-modal');
    const notifyBtns = document.querySelectorAll('.shop-btn-notify');
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    const categoryLinks = document.querySelectorAll('.shop-category-link');
    const productCards = document.querySelectorAll('.shop-product-card');
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Shop Page: Notify Me Modal
    if (notifyModal) {
        notifyBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const productCard = this.closest('.shop-product-card');
                const productId = productCard.getAttribute('data-id');
                const productName = productCard.getAttribute('data-name');
                document.getElementById('productId').value = productId;
                console.log(`Opening Notify Me for Product ID: ${productId}, Name: ${productName}`);
                openModal(notifyModal);
            });
        });

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                closeModal(notifyModal);
            });
        });

        notifyModal.addEventListener('click', function(e) {
            if (e.target === notifyModal) {
                closeModal(notifyModal);
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal(notifyModal);
            }
        });

        const notifyForm = document.getElementById('notifyForm');
        if (notifyForm) {
            notifyForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const phone = document.getElementById('phone').value;
                const email = document.getElementById('email').value;
                const productId = document.getElementById('productId').value;

                if (!firstName || !lastName || !phone || !email || !productId) {
                    alert('Veuillez remplir tous les champs');
                    return;
                }

                const notificationData = {
                    productId: productId,
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                    email: email
                };

                console.log('Notification Request:', notificationData);

                notifyForm.reset();
                document.getElementById('productId').value = '';
                closeModal(notifyModal);
                alert('Merci ! Vous serez notifié lorsque le produit sera disponible.');
            });
        }
    }

    // Shop Page: Wishlist Functionality
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.shop-product-card');
            const productId = productCard.getAttribute('data-id');
            const productName = productCard.getAttribute('data-name');
            const productPrice = productCard.getAttribute('data-price');
            const productImage = productCard.getAttribute('data-image');

            const index = wishlist.findIndex(item => item.id === productId);

            if (index === -1) {
                wishlist.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage
                });
                this.classList.add('active');
            } else {
                wishlist.splice(index, 1);
                this.classList.remove('active');
            }

            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        });
    });

    // Shop Page: Category Filtering
    if (categoryLinks.length > 0) {
        categoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                categoryLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                const category = this.getAttribute('data-category');
                filterProducts(category);
            });
        });

        productCards.forEach(card => {
            card.classList.add('visible');
        });

        wishlist.forEach(item => {
            const favoriteBtn = document.querySelector(`.shop-product-card[data-id="${item.id}"] .favorite-btn`);
            if (favoriteBtn) {
                favoriteBtn.classList.add('active');
            }
        });
    }

    // Wishlist Page: Render Wishlist
    const wishlistGrid = document.querySelector('.shop-wishlist-grid');
    if (wishlistGrid) {
        renderWishlist();
    }

    // Cart Page: Render Cart
    const cartItemsContainer = document.querySelector('.cart-items');
    if (cartItemsContainer) {
        renderCart();
    }

    // Product Details Page: Load Product Data
    if (window.location.pathname.includes('product-details.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = products.find(p => p.id === productId);

        if (product) {
            document.getElementById('productImage').src = product.image;
            document.getElementById('productTitle').textContent = product.name;
            document.getElementById('productPrice').textContent = `${formatPrice(product.price)} KD`;
            document.getElementById('productDescription').textContent = product.description;
        }

        const addToCartBtn = document.getElementById('addToCartBtn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function() {
                const quantity = parseInt(document.getElementById('quantity').value);
                const index = cart.findIndex(item => item.id === productId);

                if (index === -1) {
                    cart.push({
                        id: productId,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity: quantity
                    });
                } else {
                    cart[index].quantity += quantity;
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Produit ajouté au panier !');
            });
        }

        const decreaseBtn = document.querySelector('.quantity-btn.decrease');
        const increaseBtn = document.querySelector('.quantity-btn.increase');
        const quantityInput = document.getElementById('quantity');

        decreaseBtn.addEventListener('click', function() {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
            }
        });

        increaseBtn.addEventListener('click', function() {
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
        });
    }

    // Common Functions
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.classList.add('visible');
                }, 10);
            } else {
                card.classList.remove('visible');
                card.classList.add('hidden');
            }
        });
    }

    function renderWishlist() {
        wishlistGrid.innerHTML = '';

        if (wishlist.length === 0) {
            wishlistGrid.innerHTML = '<p>Votre liste de souhaits est vide.</p>';
            return;
        }

        wishlist.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'shop-product-card';
            productElement.setAttribute('data-id', product.id);
            productElement.innerHTML = `
                <div class="shop-product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="favorite-btn active">
                        <img src="./img/heart-1.png" class="wishlist-icon-" alt="Wishlist">
                    </button>
                </div>
                <div class="shop-product-info">
                    <h3 class="shop-product-title">${product.name}</h3>
                    <div class="shop-product-meta">
                        <span class="shop-product-quantity"></span>
                        <span class="shop-product-price">
                            <span class="shop-current-price">${formatPrice(product.price)} KD</span>
                        </span>
                    </div>
                    <a href="product-details.html?id=${product.id}" class="shop-btn shop-btn-add-cart">ADD TO BAG</a>
                </div>
            `;
            wishlistGrid.appendChild(productElement);

            const favoriteBtn = productElement.querySelector('.favorite-btn');
            favoriteBtn.addEventListener('click', function() {
                const productId = productElement.getAttribute('data-id');
                removeFromWishlist(productId);
            });
        });
    }

    function renderCart() {
        const cartItems = document.querySelector('.cart-items');
        const subtotalElement = document.querySelector('.cart-subtotal-amount');
        const totalElement = document.querySelector('.cart-total-amount');

        cartItems.innerHTML = '';

        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Votre panier est vide.</p>';
            subtotalElement.textContent = '0.000 KD';
            totalElement.textContent = '1.000 KD';
            return;
        }

        const subtotal = cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);

        const delivery = 1000;
        const total = subtotal + delivery;

        subtotalElement.textContent = `${formatPrice(subtotal)} KD`;
        totalElement.textContent = `${formatPrice(total)} KD`;

        cart.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'cart-item';
            productElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${product.name}</h3>
                    <div class="cart-item-price">${formatPrice(product.price)} KD</div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                            <input type="text" value="${product.quantity}" readonly>
                            <button class="quantity-btn increase" data-id="${product.id}">+</button>
                        </div>
                        <button class="cart-remove-btn" data-id="${product.id}">Remove</button>
                    </div>
                </div>
            `;
            cartItems.appendChild(productElement);

            const decreaseBtn = productElement.querySelector('.decrease');
            const increaseBtn = productElement.querySelector('.increase');
            const removeBtn = productElement.querySelector('.cart-remove-btn');

            decreaseBtn.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                updateCartItemQuantity(productId, -1);
            });

            increaseBtn.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                updateCartItemQuantity(productId, 1);
            });

            removeBtn.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                removeFromCart(productId);
            });
        });
    }

    function updateCartItemQuantity(productId, change) {
        const index = cart.findIndex(item => item.id === productId);

        if (index !== -1) {
            cart[index].quantity += change;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    }

    function removeFromCart(productId) {
        const index = cart.findIndex(item => item.id === productId);

        if (index !== -1) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    }

    function removeFromWishlist(productId) {
        const index = wishlist.findIndex(item => item.id === productId);

        if (index !== -1) {
            wishlist.splice(index, 1);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            renderWishlist();

            const favoriteBtn = document.querySelector(`.shop-product-card[data-id="${productId}"] .favorite-btn`);
            if (favoriteBtn) {
                favoriteBtn.classList.remove('active');
            }
        }
    }

    function formatPrice(price) {
        return (price / 1000).toFixed(3);
    }

    // Cart Page: Checkout Button
    const checkoutBtn = document.querySelector('.shop-btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            alert('Redirection vers la page de paiement...');
        });
    }
});