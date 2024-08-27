// Arithmetic Operators
let num1 = 20;
let num2 = 5;

console.log('Addition (+):', num1 + num2);
console.log('Subtraction (-):', num1 - num2);
console.log('Multiplication (*):', num1 * num2);
console.log('Division (/):', num1 / num2);
console.log('Modulo (%):', num1 % num2);
console.log('Exponent (**):', num1 ** num2);

// P | E | MD | AS
console.log('Mixed Operations:', (5 + 3) * 2);

// String Concatenation (+)
console.log('Hello' + ' ' + 'World');

let greeting = "What's up";
let myName = 'Mr. ' + 11;
console.log(typeof myName);
console.log(greeting + ', ' + myName + '?'); //When you add a number to string, number is converted to a string

// Comparision Operators

// Loose Equal to '==' : Checks if two values are equal
console.log('Equal to (==):', 5 == 5);
console.log('Equal to (==):', 5 == '5');

// Strict Equal to '===' : Checks if values and data types are the same
console.log('Equal to (===):', 5 === 5);
console.log('Equal to (===):', 5 === '5');

// Loose Not Equal to '!=' : Checks if two values are not equal
console.log('Not Equal to (!=):', 5 != 5);
console.log('Not Equal to (!=):', 5 != '5');

// Strict Not Equal to '!==' : Checks if values or data types are not the same
console.log('Not Equal to (!==):', 5 !== 5);
console.log('Not Equal to (!==):', 5 !== '5');

// Greater Than and Greater Than or Equal to
console.log('Greater Than (>):', 5 > 3); //Exclusive
console.log('Greater Than or Equal To (>=):', 5 >= 3); //Inclusive

// Less Than and Less Than or Equal to
console.log('Less Than (<):', 3 < 5); //Exclusive
console.log('Less Than or Equal To (<=):', 3 <= 5); //Inclusive

// Logical Operators
/* 
  AND - &&
  OR - ||
  NOT - !
*/

let sunny = true;
let warm = false;

// AND - Both sides are true == true
console.log('Is it sunny AND warm?', sunny && warm); // FALSE (T && F)

// OR - At least one side is true
console.log('Is it sunny AND warm?', sunny || warm); // TRUE (T || F)

// ! - Negation operator - flips the value;
console.log('NOT sunny: ', !sunny); //!true == false

// Assignment Operators
// Assigning values to variables (=)
let num3 = 10;
let num4 = 5;

// Addition Assignment
num3 += num4;
console.log("The new value of num3 is: ", num3);

// Subtraction Assignment
num3 -= num4;
console.log("The new value of num3 is: ", num3);

// Multiplication Assignment
num3 *= num4;
console.log("The new value of num3 is: ", num3);

// Division Assignment
num3 /= num4;
console.log("The new value of num3 is: ", num3);

// Exponent Assignment
num3 **= num4;
console.log("The new value of num3 is: ", num3);
