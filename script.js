function navigateTo(page) {
    window.location.href = page;
}


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    // 🔹 Login Form Submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            let email = document.getElementById("login-email").value.trim();
            let password = document.getElementById("login-password").value.trim();
            let errorMessage = document.getElementById("login-error");

            let storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
                errorMessage.textContent = "Invalid email or password!";
                return;
            }

            alert("Login Successful!");
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "dashboard.html";
        });
    }

    // 🔹 Signup Form Submission
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("signup-name").value.trim();
            let email = document.getElementById("signup-email").value.trim();
            let password = document.getElementById("signup-password").value.trim();
            let errorMessage = document.getElementById("signup-error");

            if (name === "" || email === "" || password === "") {
                errorMessage.textContent = "All fields are required!";
                return;
            }

            if (password.length < 6) {
                errorMessage.textContent = "Password must be at least 6 characters!";
                return;
            }

            // Store user credentials
            let newUser = { name, email, password };
            localStorage.setItem("user", JSON.stringify(newUser));

            alert("Account created successfully! Redirecting to login...");
            window.location.href = "login.html";
        });
    }
});

// 🔹 Logout Function
function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}

// 🔹 Navigation Function
function navigateTo(page) {
    window.location.href = page;
}


//for Services
document.querySelectorAll('.dropdown-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});
