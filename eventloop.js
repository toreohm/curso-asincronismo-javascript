/*Podemos observar que primero van las promesas, y al final los setTimeOut; el “culpable” 
de que salga en ese orden, es el componente Job Queue… 
Cuando el motor de JavaScript no tiene tareas, el event loop le va a dar prioridad al componente
de Job queue (al resultado de funciones asíncronas) y después al callback queue.*/

console.log('Hello!');

setTimeout(function timeout3000(){
    console.log('Hello from the setTimeOut => 3000ms');
}, 3000);

setTimeout(function timeout0(){
    console.log('Hello from the setTimeOut => 0ms');
}, 0);

for(let x=0; x <= 5 ; x++) {
    console.log('Hello for!!', x);
}

let promise = new Promise(function(resolve, reject) {
   resolve();
});

promise.then(function(resolve) {
   console.log('Hello from the Promise => 1st');
})
.then(function(resolve) {
   console.log('Hello from the Promise => 2nd');
});

console.log('Goodbye!!');

