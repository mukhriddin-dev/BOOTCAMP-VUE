"use strict";

const modalWindow = document.querySelector('.modal-window'),
      modalContent = document.querySelector('.modal-content'),
      signUpBtn = document.querySelector('.register-btn'),
      closeBtn = document.querySelector('.close-btn');


signUpBtn.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
})


window.addEventListener('click', (e) => {
    console.log(e.target.classList.contains('modal-window'));
    if (e.target.classList.contains('modal-window')) {
        // modalContent.classList.toggle('shaker');
        modalWindow.classList.add('hidden');
    }
})



