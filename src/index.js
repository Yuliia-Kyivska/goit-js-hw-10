import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const BASE_URL = `https://restcountries.com/v3.1/name/`;
const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  evt.preventDefault();
  countryName = evt.target.value.trim();
  
    if (data.length > 10) {
           manyCountrys(data)
    } else if(data.length <= 10 & data.length > 1) {
      createCantryList(data)
    } else if(data.length = 1) {
      createCantryCard(data)
    }
  }
   fetchCountries(countryName).then(data).catch(err => console.log(err));
  
  
  function manyCountrys() {
  Notify.info('Too many matches found. Please enter a more specific name.');
} 

function createCantryList() {
   
 }

function createCantryCard() {
  
}

