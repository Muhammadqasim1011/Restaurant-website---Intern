var header = document.querySelector("header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 300) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const overlayIcons = document.querySelectorAll(".image-overlay i");

    overlayIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const imageSrc = this.parentElement.previousElementSibling.src;
            window.open(imageSrc, "_blank");
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navItem = document.querySelector('.nav-item');

    // Function to close navbar
    function closeNavbar() {
        menuIcon.classList.remove('bx-x');
        navItem.classList.remove('active');
    }

    // Toggle navbar on menu icon click
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('bx-x');
        navItem.classList.toggle('active');
    });

    // Close navbar on window scroll
    window.addEventListener('scroll', closeNavbar);

    // Close navbar on nav item link click
    const navLinks = document.querySelectorAll('.nav-item li a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
    });
});
