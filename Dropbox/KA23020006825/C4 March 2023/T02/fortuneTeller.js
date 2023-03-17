// Declaring variables to use for fortune telling
let userMotherFirstName = prompt("What is your mother's first name?");
let userStreet = prompt("What is the name of the street you grew up on?");
let userfavColor = prompt("What is your favourite colour as a child?");
let userAge = Number(prompt("What is current age?")); // Cast age input to number
let userMagicNumber = Number(prompt("Choose a number between 1 and 10")); // Cast magic number input to number

// Output all user inputs to string using variables for fortune telling
console.log(`
In ${userMagicNumber} years you are going to meet your best friend named ${userMotherFirstName} ${userStreet}.
You will get married in ${Math.round(userAge/userMagicNumber)} years and have ${Math.round(userAge%userMagicNumber)} children.
In ${Math.round(userAge - userMagicNumber)} years you are going to dye your hair ${userfavColor}.
`)