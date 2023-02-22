import fetch from 'node-fetch';
//const fetch = require('node-fetch');
const API = 'https://api.escuelajs.co/api/v1';
let productsResponse;

function fetchData(urlApi) {
  return fetch(urlApi);
}

fetchData(`${API}/products`)
//Al método .then() se le pasa una función callback donde su parámetro response es el objeto de respuesta de la petición que hemos realizado.
  .then(response => response.json())  
//The return value of the first .then() is A Promise that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number…
  .then(products => {
    console.log(products[0]);
    productsResponse = [...products];
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(error => console.warn(error))
  .finally(() => {
    console.log("productsResponse: ", productsResponse);
    console.log(productsResponse.length);
    ids = productsResponse.map(obj => obj.id);
});

  