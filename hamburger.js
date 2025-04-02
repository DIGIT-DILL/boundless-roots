// Add this in a <script> tag at the bottom of your HTML or in a separate .js file
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Toggle hamburger menu
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Toggle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector("a");
        link.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Prevent link navigation
                dropdown.classList.toggle("active");
            }
        });
    });
});