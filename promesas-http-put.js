import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function putData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "New Product Course-example 2 updated",
  "description": "This is an update with method PUT using fetch"
};

putData(`${API}/products/261`, data)
.then(response => response.json())
.then(data => console.log("data: ", data));