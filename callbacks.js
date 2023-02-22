function sum(num1, num2) {
  return num1 + num2;
}

function calcular(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calcular(5, 5, sum));

//Otro ejercicio

setTimeout(function () {
  console.log("Hola JavaScript");
}, 2000);

function saludar(name) {
  console.log("Hola " + name + "!");
}

setTimeout(saludar, 2000, "Maria");
