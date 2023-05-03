// Come back to top while refresh

// window.onload = function () {
//     window.scrollTo(0, 0);
// }

// Variables

let
    fullBody = document.body,
    headerSection = document.getElementById('header'),
    burger = document.getElementById('burger'),
    navMenu = document.getElementById('nav-menu');


// Burger Toggle

burger.addEventListener('click', toggleBurger);

function toggleBurger() {
    if (navMenu.style.transform === "translateX(200px)") {
        navMenu.style.transform = "translateX(0)"
    }
    else {
        navMenu.style.transform = "translateX(200px)"
    }
    // if (navMenu.style.transform === 'translateX(200px)') {
    //     console.log('translateX: ');
    // } else {
    //     console.log('error');
    // }
}

// Change Glider Content


// On Scrolling body


fullBody.onscroll = function () {

    // Change Header Style on Scrolling
    if (window.scrollY == 0) {
        headerSection.classList.remove('black-bg');
    }
    if (window.scrollY > 0) {
        headerSection.classList.add('black-bg');
    }
}