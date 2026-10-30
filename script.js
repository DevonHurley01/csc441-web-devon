// Class 15: Step 1: this file is running
console.log("script.js is running");

// Lab 15: Step 2: make each piece stand on its own
// Class 15: Step 2: put this year in the footer
const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Class 15: Step 3: a button that changes the page
const themeButton = document.querySelector("#theme-toggle");


if (themeButton) {

    // Lab 15: Step 4: use the save choice on arrival
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "Light Mode";
    }

    // Lab 15: Step 3: the button says what it will do
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode")

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
}

// Lab 15: Step 5: a button to scroll to the top
const topButton = document.querySelector("#top-button");
if (topButton) {
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}