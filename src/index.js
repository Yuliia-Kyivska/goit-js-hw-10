import './css/styles.css';

const DEBOUNCE_DELAY = 300;



const BASE_URL = `https://restcountries.com/v3.1/name/`;

function fetchCountries(name='Ukraine') {
  return fetch(
    `${BASE_URL}${name}?fields=name.official,capital,population,flags,languages`
  )
    .then(response => {
      if (!response) {
        throw new Error(response.statusTexr);
      }
      return response.json();
    })
    .catch(error => "Oops, there is no country with that name");
}


fetchCountries()