"use strict";


let them = document.querySelector('#them'),
    header = document.querySelector('header');

them.addEventListener('input', (e) => {
    localStorage.setItem('them', e.target.checked);
    changeMode()
})


function changeMode() {

    let mode = localStorage.getItem('them');

    if (mode === 'true') {
        document.body.style.cssText = "background-color:#202C36; color:#fff;"
        header.style.cssText = "background-color:#2B3844; color:#fff;"

    } else {
        document.body.style.cssText = "background-color:#F2F2F2; color:#000;"
        header.style.cssText = "background-color:#ffff; color:#000;"
    }
}

changeMode()



// ---------------------------- DYNAMIC CARDS ----------------------------


let baseURL = "https://restcountries.com/v2/all";

let wrapperCards = document.querySelector('.card__wrapper');



const getAllCountries = async () => {

    wrapperCards.innerHTML = `<span class="loader"></span>`;

    try {
        const response = await fetch(baseURL);
        const result = await response.json();

        if (response.status === 200) {
                renderCards(result)
        } 

    } catch (err) {
        console.log("Error message " + err)
    }
}

getAllCountries()



// ---------------------- render cards ----------------------------



function renderCards(cards) {

    wrapperCards.innerHTML = ``;

    cards.forEach(element => {

        const card = createElement('div', 'rounded-[5px] shadow-lg bg-white max-w-sm w-[264px] h-[336px]', `
    
              <a href="#!">
                <img
                  class="rounded-t-lg w-full h-[160px]"
                  src="${element.flags.svg}"
                  alt="img"
                />
              </a>

              <div class="p-6 pb-7">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  ${element.name}
                </h5>

                <ul class="list-none">
                  <li><strong>Population:</strong> ${element.population}</li>
                  <li><strong>Region:</strong> ${element.region}</li>
                  <li><strong>Capital:</strong> ${element.capital || "not-found"}</li>
                </ul>
              </div>
    
        `);

        wrapperCards.append(card)

    });
}



