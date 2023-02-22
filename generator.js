function* gen() {
  let i = 0;
  yield i++;
  yield i++;
  yield i++;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//Otro ejemplo con un array

function* iterable(array) {
  for (let index in array) {
    yield array[index];
  }
}

const it = iterable([1,2,3,4,5,6,7]);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Ejemplo de mdn con yield*

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20