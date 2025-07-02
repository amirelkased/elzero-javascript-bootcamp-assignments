// Add Variables Here
let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log(numberOne, numberTwo); // Normal Concatenate => 1020
console.log(numberOne + "" + numberTwo); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020

console.log(numberTwo + "\n" + numberOne); // Normal Concatenate => 20\n10
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}\n${numberOne}`); // Template Literals Way => 20\n10);
/*
  Template Literals Way
  20
  10
*/