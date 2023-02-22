import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';
const ids = [];

function deleteData(urlApi) {
  return fetch(urlApi,  {
    method: 'DELETE'
  });
}

async function travesura() {
  for await (let id of ids) {
    deleteData(`${API}/products/${id}`)
.then(response => response.json())
.then(response => console.log(response));
  }
}

travesura();
