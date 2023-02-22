let cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if(cows > 10) {
    resolve(`Enough number of cows: ${cows}`);
  } else {
    reject(`Not enough number of cows: ${cows}`);
  }
});

countCows
.then(result => console.log(result), error => console.log(error))
.finally(() => console.log("Finally..."));
