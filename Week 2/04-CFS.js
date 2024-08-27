// Conditional Statements

// if - else if - else
let temperature = 30;
if (temperature < 0) {
  console.log("IT'S TOO COLD!");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
  console.log("It's pretty warm.");
} else {
  console.log("It's hot outside.");
}

// switch
let day = 'Saturday';

switch (day) {
  case 'Monday':
    console.log('This is the start of the week.');
    break;
  case 'Friday':
    console.log('The end of the week.');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Happy Weekends!');
    break;
  default:
    console.log('It is a regular day.');
}

// Looping Statements

// for
for (let i = 0; i < 5; i++) {
  console.log('for loop count:', i + 1);
}

// while
let count = 0;
while (count < 5) {
  console.log('while loop count:', count + 1);
  count++;
}

let username = '';
while (username == '') {
  username = prompt('Enter your username: ');

  if (username == '') {
    alert('Please enter your username!');
  }
}
alert("Hi, " + username);

// do-while
let counter = 0;
do {
  console.log("Do-while count:", counter + 1);
  counter++;
}while (counter < 5);

