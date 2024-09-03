document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginLink = document.getElementById("login-link");
    const userInfo = document.getElementById("user-info");
    const welcomeMessage = document.getElementById("welcome-message");
    const logoutButton = document.getElementById("logout-button");
    const finalLogoutButton = document.getElementById("final-logout-button");

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;

            // Store the username and logged-in state
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("username", username);

            window.location.href = "index.html"; // Redirect to the main page
        });
    }

    // Update the login link and user info if logged in
    const loggedIn = localStorage.getItem("loggedIn");
    const username = localStorage.getItem("username");

    if (loggedIn && username) {
        if (loginLink) {
            loginLink.textContent = "Logged In";
            loginLink.href = "#"; // Prevents redirect to the login page
        }

        if (userInfo) {
            welcomeMessage.textContent = `Welcome, ${username}!`;
            userInfo.style.display = "block"; // Show the user info section
        }

        if (logoutButton) {
            logoutButton.addEventListener("click", function() {
                window.location.href = "welcome.html"; // Redirect to welcome page
            });
        }
    }

    // Handle final logout on the welcome page
    if (finalLogoutButton) {
        finalLogoutButton.addEventListener("click", function() {
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("username");
            window.location.href = "index.html"; // Redirect back to main page
        });
    }
});



