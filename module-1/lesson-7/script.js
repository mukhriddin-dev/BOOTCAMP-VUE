let menu = document.querySelector('.nav__menu'),
    nav__list = document.querySelector(".nav__list");

    
menu.addEventListener('click', () => {
    nav__list.classList.toggle('swipe')
})