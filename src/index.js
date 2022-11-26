import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');

countryInput.addEventListener(
  'input',
  debounce(onCountryInput, DEBOUNCE_DELAY)
);

function onCountryInput() {
  const name = countryInput.value.trim();
  if (name === '') {
    return (countryList.innerHTML = ''), (countryCard.innerHTML = '');
  }
  fetchCountries(name)
    .then(countries => {
      countryList.innerHTML = '';
      countryCard.innerHTML = '';
      if (countries.length === 1) {
        countryList.insertAdjacentHTML(
          'beforeend',
          createCantryList(countries)
        );
        countryCard.insertAdjacentHTML(
          'beforeend',
          createCantryCard(countries)
        );
      } else if (countries.length >= 10) {
        alertTooManyMatches();
      } else {
        countryList.insertAdjacentHTML(
          'beforeend',
          createCantryList(countries)
        );
      }
    })
    .catch(alertWrongName);
}

function createCantryList(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return `
          <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
              <h2 class="country-list__name">${name.official}</h2>
          </li>
          `;
    })
    .join('');
  return markup;
}
function createCantryCard(countries) {
  const markup = countries
    .map(({ capital, population, languages }) => {
      return `
        <ul class="country-info__list">
            <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(
              languages
            ).join(', ')}</p></li>
        </ul>
        `;
    })
    .join('');
  return markup;
}

function alertTooManyMatches() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}

function alertWrongName() {
  Notify.failure('Oops, there is no country with that name');
}
