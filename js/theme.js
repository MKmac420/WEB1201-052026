const toggleBtn = document.getElementById("toggle-theme-button");

// 1. Check for saved user preference on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (toggleBtn) toggleBtn.textContent = "☀️ Light Mode";
}

// 2. Handle button clicks
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark"); // Save preference
        } else {
            toggleBtn.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light"); // Save preference
        }
    });
}
