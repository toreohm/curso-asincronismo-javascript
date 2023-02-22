/*La declaración de función async define una función asíncrona, la cual devuelve un 
objeto AsyncFunction (valor de retorno); Un objeto AsyncFunction, que representa una 
función asíncrona que ejecuta el código contenido dentro de la función.
Cuando se llama a una función async, esta devuelve un elemento Promise. 
Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. 
Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.
Una función async puede contener una expresión await, la cual pausa la ejecución 
de la función asíncrona y espera la resolución de la Promise pasada y, a continuación,
reanuda la ejecución de la función async y devuelve el valor resuelto.
En la instrucción return, el valor de retorno de una async function queda implícitamente 
dentro de un Promise.resolve.*/
let valor;
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Promsesa resuelta"), 2000)
      : reject(new Error("Promesa rechazada"));
  });
};

const anotherFn = async () => {
  const result = await fnAsync();
  console.log(result);
  console.log("Inside async function");
  return result;
};

console.log('Before');
anotherFn()
.then(result => { 
  valor = result; 
  console.log("valor retornado async func:", valor);
})
.catch(error => {
  valor = error;
  console.log("valor retornado async func: ", valor);
});
console.log('After');
