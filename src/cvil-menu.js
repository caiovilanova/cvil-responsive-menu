/*
**
CREATED AT 2022-06-10
BY: CAIO VILANOVA - caiovilanova.com - github.com/caiovilanova
NAV BAR AND RESPONSIVE MENU
**
*/

const navbar = document.querySelector('.navbar');
const menuButton = document.querySelector('.navbar-button');
const menuList = document.querySelector('.navbar-list');

menuButton.addEventListener('click', function() {
    navbar.classList.toggle('navbar-mobile-active');
    menuList.classList.toggle('navbar-list-mobile-active');  
    document.body.classList.toggle('noScrolling');
});