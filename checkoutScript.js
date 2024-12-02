document.addEventListener("DOMContentLoaded", () => {
    
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    const cartSummary = document.getElementById("cart-summary");

    if (cartItems.length === 0) {
        cartSummary.innerHTML = "Your cart is empty.";
    } else {
        let totalPrice = 0;
        cartItems.forEach(item => {
            cartSummary.innerHTML += `<p>${item.name} - ${item.price}</p>`;
            totalPrice += parseFloat(item.price.replace('$', '').replace('€', ''));
        });
        cartSummary.innerHTML += `<p>Total: €${totalPrice.toFixed(2)}</p>`;
    }

    
    const paymentMethod = document.getElementById("payment-method");
    const visaInfo = document.getElementById("visa-info");
    const paypalInfo = document.getElementById("paypal-info");

    paymentMethod.addEventListener("change", () => {
        if (paymentMethod.value === "visa" || paymentMethod.value === "mastercard") {
            visaInfo.style.display = "block";
            paypalInfo.style.display = "none";
        } else if (paymentMethod.value === "paypal") {
            visaInfo.style.display = "none";
            paypalInfo.style.display = "block";
        }
    });

   
    const paymentForm = document.getElementById("payment-form");
    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const selectedPaymentMethod = paymentMethod.value;
        if (selectedPaymentMethod === "paypal") {
            alert("Redirecting to PayPal...");
           
        } else {
            const cardNumber = document.getElementById("card-number").value;
            const expiryDate = document.getElementById("expiry-date").value;
            const cvv = document.getElementById("cvv").value;
            alert(`Card Info: ${cardNumber}, Expiry: ${expiryDate}, CVV: ${cvv}`);
        }
    });
});

document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    
  
    const paymentMethod = document.getElementById("payment-method").value;

    if (paymentMethod) {
        
        alert("Faleminderit! Porosia juaj është kryer me sukses përmes " + paymentMethod + ". Ju do të merrni një email me detajet e porosisë.");

        
        window.location.href = "thank-you.html"; 
    } else {
        alert("Ju lutem zgjidhni metodën e pagesës.");
    }
});
