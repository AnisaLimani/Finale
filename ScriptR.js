document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

   
    if (password !== confirmPassword) {
        document.getElementById("error-message").textContent = "Passwords do not match!";
        document.getElementById("error-message").style.display = "block";
        return;
    }

   
    document.getElementById("success-message").style.display = "block";
    document.getElementById("error-message").style.display = "none";

    
    document.getElementById("register-form").reset();
});
