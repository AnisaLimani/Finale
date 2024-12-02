document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const clearCartButton = document.getElementById("clear-cart");
    const totalPriceContainer = document.getElementById("cart-total");

    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    
    function displayCartItems() {
        cartItemsContainer.innerHTML = "";

        if (cartItems.length === 0) {
            emptyCartMessage.style.display = "block";
            totalPriceContainer.style.display = "none"; 
            return;
        }

        emptyCartMessage.style.display = "none";
        totalPriceContainer.style.display = "block"; 

        let totalPrice = 0; 

        cartItems.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <div class="cart-item-details">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" style="width: 100px; height: 100px; object-fit: cover;">
                    <div>
                        <p><strong>${item.name}</strong></p>
                        <p>${item.price}</p>
                    </div>
                </div>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);

            totalPrice += parseFloat(item.price.replace('€', '').replace('$', '')); 
        });

        totalPriceContainer.textContent = `€${totalPrice.toFixed(2)}`; 

        
        document.querySelectorAll(".remove-item").forEach((button) => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                removeItemFromCart(index);
            });
        });
    }

    
    function removeItemFromCart(index) {
        cartItems.splice(index, 1);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        displayCartItems();
        updateCartCount(); 
    }

    
    function updateCartCount() {
        const cartCount = document.getElementById("cart-count");
        cartCount.textContent = cartItems.length;
    }

    clearCartButton.addEventListener("click", () => {
        cartItems = [];
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        displayCartItems();
        updateCartCount();  
    });

    displayCartItems();
    updateCartCount();  
});


document.getElementById("buy-cart").addEventListener("click", () => {
    
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    if (cartItems.length > 0) {
        window.location.href = "checkout.html"; 
    } else {
        alert("Your cart is empty!");
    }
});
