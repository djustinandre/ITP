// Exercise 3 - Calculate Power

let base = 3;
let exponent = 3;

function raise(b, e) {
  let result = b;
  let count = 1;
  while (count < e) {
    result *= b;
    count++;
  }
  return result;
}

console.log(raise(base, exponent));