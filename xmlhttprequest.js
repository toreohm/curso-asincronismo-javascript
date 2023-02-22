const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      /*0 - No se ha inicializado
        1 - loading... Aun no se ejecuta send
        2 - Cuando ya se ejecuto el valor de send
        3 - Trabajando con la solicitud...
        4 - Se ha completado la llamada (solicitud)
        Al crear el objeto la propiedad readyState tiene valor 0*/

      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error ' + urlApi);
        return callback(error, null);
      }
    }  
  }
  xhttp.send();
}

fetchData(API + "/products", function (error1, data1) {
  if (error1) {
    console.warn(error1);
    return;
  }
  fetchData(`${API}/products/${data1[2].id}`, function (error2, data2) {
    if (error2) {
      console.warn(error2);
      return;
    }
    fetchData(`${API}/categories/${data2.category?.id}`,function (error3, data3) {
      if (error3) {
        console.warn(error3);
        return;
      }
      console.log(data1[2]);
      console.log(data2.title);
      console.log(data3.name);
      return data3.name;
    });
  });
});
