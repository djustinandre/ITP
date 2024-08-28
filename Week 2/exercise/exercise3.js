// Exercise 3 - Calculate Power

let base = 3;
let exponent = 3;

function exponentiation(b, e) {
  let result = 1;
  let count = 0;
  while (count < e) {
    result *= b;
    count++;
  }
  return result;
}

console.log(exponentiation(base, exponent));
