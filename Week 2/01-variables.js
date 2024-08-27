console.log('Hello World! ');

// var - global mutable value
var firstName = 'Myrtile'; // Initializing
firstName = 'Catherine'; // Assigning
console.log('First Name:', firstName);

// let - local mutable value
let lastName = 'Cayanan';
lastName = 'Sarmiento';
console.log('Last Name:', lastName);

// Showcase the difference between let and var
if (true) {
  var email = "johndoe@gmail.com"
  let userName = "johndoe";

  console.log("Email:", email);
  console.log("Username:", userName);
}

console.log("Email:", email); // global
// console.log("Username:", userName); // local  - ERROR

// const
const funds = 0;
// funds = 200; - ERROR
console.log("Funds:", funds);