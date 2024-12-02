document.getElementById("shop").addEventListener("click", function(event) {
    event.preventDefault();  

    let dropdown = document.getElementById("dropdownMenu");

    
    if (dropdown.style.display=="none") {
        dropdown.style.display="flex"  ; 
    } else {
        dropdown.style.display="none"   
    }
});

const slider = document.querySelector(".product-slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", () => {
    slider.scrollBy({ left: -200, behavior: "smooth" });
});

nextButton.addEventListener("click", () => {
    slider.scrollBy({ left: 200, behavior: "smooth" });
});


document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        
        const product = button.closest(".product");
        const name = product.querySelector("h3").textContent;
        const price = product.querySelector("p").textContent;
        const image = product.querySelector("img").src;

        
        let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

     
        cartItems.push({ name, price, image });

        
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

        
        updateCartCount();
    });
});

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    cartCount.textContent = cartItems.length;
}


document.addEventListener("DOMContentLoaded", updateCartCount);