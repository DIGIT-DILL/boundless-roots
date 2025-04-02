// JavaScript to toggle the nav menu on hamburger click
document.getElementById("hamburger").addEventListener("click", function() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active"); // Toggle the 'active' class to show/hide the menu
});
