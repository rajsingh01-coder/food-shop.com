
// Toggle the navigation links when the hamburger icon is clicked
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});

// Close the navbar when a menu item is clicked
const menuItems = document.querySelectorAll('.nav-links li a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.remove('active'); // Remove the 'active' class
    });
});



