
// Function to toggle dark mode
function darkMode() {
    let element = document.body;
    element.classList.toggle("darkmode");

    // Save the current state in localStorage
    if (element.classList.contains("darkmode")) {
        localStorage.setItem("darkmode", "enabled");
    } else {
        localStorage.setItem("darkmode", "disabled");
    }
}

// Check the saved state on page load
window.onload = function() {
    if (localStorage.getItem("darkmode") === "enabled") {
        document.body.classList.add("darkmode");
    }
}

// Add event listener to the button
document.getElementById("darkmode").addEventListener("click", darkMode);


