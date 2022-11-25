import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = `https://restcountries.com/v3.1/name/`;

function fetchCountries(name) {
  return fetch(
    `${BASE_URL}${name}?fields=name.official,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        notFound()
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(data => console.log(data))
    .catch(error => console.log(error));
}


function notFound() {
  Notify.failure('Oops, there is no country with that name');
}

fetchCountries()

  
