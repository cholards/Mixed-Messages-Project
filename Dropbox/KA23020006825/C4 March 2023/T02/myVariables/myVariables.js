// Create variables
let myFirstNumber = 6;
let mySecondNumber = 5;
let myFirstString = "Hello";
let mySecondString = "This is another string";
let myBoolean = true;

//Out put Math operator and Concatenation
let multiplying = myFirstNumber * mySecondNumber;
console.log(multiplying);
let concatStrings = myFirstString + mySecondString;
console.log(concatStrings);


/* Using template literals to
 output a multiline string */
console.log(`The boolean is: ${myBoolean}
The first number is: ${myFirstNumber}
The second number is: ${mySecondNumber}
6 x 5 = ${myFirstNumber * mySecondNumber}
The first string is: ${myFirstString}
The second string is: ${mySecondString}!
These two together make: ${myFirstString} ${mySecondString}!`);