"use strict";



// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')


let them = document.querySelector("#them"),
  header = document.querySelector("header");

them.addEventListener("input", (e) => {
  localStorage.setItem("them", e.target.checked);
  changeMode();
});

function changeMode() {
  let mode = localStorage.getItem("them");
  if (mode === "true") {
    document.body.style.cssText = "background-color:#202C36; color:#fff;";
    header.style.cssText = "background-color:#2B3844; color:#fff;";
  } else {
    document.body.style.cssText = "background-color:#F2F2F2; color:#000;";
    header.style.cssText = "background-color:#ffff; color:#000;";
  }
}

changeMode();

// ---------------------------- DYNAMIC CARDS ----------------------------

let baseURL = "https://restcountries.com/v2/all";
let filterURL = "https://restcountries.com/v2/region";
let searchURL = "https://restcountries.com/v2/name";
let mode = localStorage.getItem("them");

let wrapperCards = document.querySelector(".card__wrapper");
let select = document.querySelector("#region");

const getAllCountries = async () => {
  wrapperCards.innerHTML = `<span class="loader"></span>`;

  try {
    const response = await fetch(baseURL);
    const result = await response.json();

    if (response.status === 200) {
      renderCards(result);
      filterRegion(result);
    }
  } catch (err) {
    console.log("Error message: " + err);
  }
};

getAllCountries();

// ---------------------- render cards ----------------------------

function renderCards(cards) {
  wrapperCards.innerHTML = ``;

  cards.forEach((element) => {
    const card = createElement(
      "div",
      `rounded-[5px] shadow-lg dark:bg-black max-w-sm w-[264px] h-[336px] text-gray-500 dark:text-red-600 `,
      `
    
              <a href="#!">
                <img
                  class="rounded-t-lg w-full h-[160px]"
                  src="${element.flags.svg}"
                  alt="img"
                />
              </a>

              <div class="p-6 pb-7">
                <h5 class="text-xl font-medium mb-2">
                  ${element.name}
                </h5>

                <ul class="list-none">
                  <li><strong>Population:</strong> ${element.population}</li>
                  <li><strong>Region:</strong> ${element.region}</li>
                  <li><strong>Capital:</strong> ${element.capital || "not-found"
      }</li>
                </ul>
              </div>
        `
    );

    wrapperCards.append(card);
  });
}

// ------------------- dynamic select option    ---------------

function filterRegion(data) {
  const region = [];

  data.forEach((item) => {
    if (!region.includes(item.region)) {
      region.push(item.region);
    }
  });

  region.sort();
  region.forEach((item) => {
    const option = createElement("option", "item", item);
    select.append(option);
  });
}

async function fetchRegions(region) {
  wrapperCards.innerHTML = `<span class="loader"></span>`;
  const respons = await fetch(`${filterURL}/${region}`);
  const result = await respons.json();
  renderCards(result);
}

select.addEventListener("change", (e) => {
  wrapperCards.innerHTML = ``;
  fetchRegions(e.target.value);
});

// ------------------- dynamic select option    ---------------

// // ------------------- search    ---------------

async function searchCountries(country) {
  wrapperCards.innerHTML = `<span class="loader"></span>`;
  try {
    const response = await fetch(`${searchURL}/${country}`);
    const result = await response.json();

    if (response.status === 200) {
      renderCards(result);
    } else {
      wrapperCards.innerHTML = `<h1 class="uppercase text-4xl text-red-600 text-center"> Bunday davlat topilmadi ! </h1>`;
    }
  } catch (err) {
    console.log(err);
  }
}

let searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", (e) => {
  if (e.target.value.trim().length > 0) {
    wrapperCards.innerHTML = ``;
    searchCountries(e.target.value);
  } else {
    searchInput.setAttribute("placeholder", "Please enter a country name");
    getAllCountries();
  }
});

//  ------------------ cards -------------------------------- 




let card = document.querySelector('.card');


console.log(card)



