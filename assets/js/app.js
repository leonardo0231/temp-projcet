// Select mobile menu
const menu = document.querySelector('#mobile_menu');
const menuLink = document.querySelector('.navbar-nav');
const nacLogo = document.querySelector('.navbar-brand');

// Show Mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
}
menu.addEventListener('click', mobileMenu);

