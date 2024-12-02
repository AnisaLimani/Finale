document.getElementById("shop").addEventListener("click", function(event) {
    event.preventDefault();  

    let dropdown = document.getElementById("dropdownMenu");

    
    if (dropdown.style.display=="none") {
        dropdown.style.display="flex"  ; 
    } else {
        dropdown.style.display="none"   
    }
});




const products = [];
for (let i = 1; i <= 45; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,  
        price: `$${(i * 5) % 50 + 10}`, 
        image: `images/Sh${i}.webp` 
    });
}

const productsPerPage = 9; 
let currentPage = 1; 


function displayProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";  

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    currentProducts.forEach(product => {
        const productCard = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="h33">${product.name}</h3>
                <p class="p33">${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
        cartItems.push(product);  
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));  
        updateCartCount();  
    }
}


function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    cartCount.textContent = cartItems.length;  
}

function setupPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ""; 

    const totalPages = Math.ceil(products.length / productsPerPage); 

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("a");
        button.innerText = i;
        button.href = "#";
        button.onclick = (e) => {
            e.preventDefault();
            currentPage = i; 
            displayProducts(); 
            setupPagination(); 
        };
        pagination.appendChild(button);
    }
}


displayProducts();
setupPagination();
updateCartCount();  

const communityContainer = document.querySelector('.community-container');

communityContainer.addEventListener('mouseenter', () => {
  communityContainer.style.transition = 'transform 1s ease';
  communityContainer.style.transform = 'translateX(-50%)';
});

communityContainer.addEventListener('mouseleave', () => {
  communityContainer.style.transition = 'transform 1s ease';
  communityContainer.style.transform = 'translateX(0)';
});


