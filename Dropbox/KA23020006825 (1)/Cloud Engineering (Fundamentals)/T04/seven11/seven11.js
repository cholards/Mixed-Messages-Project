let userInput = Number(prompt("Enter any number")); // Accept user input and cast it to a number

// Declare the varibles to store logic for comparing outcomes. Note: Results booleans
let nonZero = userInput <= 0; // true. To ensure number is non-zero
let divisibleBySeven = userInput % 7 === 0; // true
let divisibleByEleven = userInput % 11 === 0; // true
let divisibleByBoth = userInput % 7 === 0 && userInput % 11 === 0; //true
let notDivisible = userInput % 7 !== 0 || userInput % 11 !== 0; //true


// Using "Switch" determine the conditions to check if each logic evaluates to true and output statements
switch (true) {
    case nonZero:
        console.log(`${userInput} is not a valid input. Please enter an number greater than 1`)
        break
    case divisibleByBoth:
        console.log(`${userInput} is divisible by both 7 and 11.`)
        break
    case divisibleBySeven:
        console.log(`${userInput} is divisible by 7.`)
        break
    case divisibleByEleven:
        console.log(`${userInput} is divisible by 11.`)
        break
    case notDivisible:
        console.log(`${userInput} is divisible by neither 7 nor 11.`)
        break
    default:
        console.log("There seems to be something wrong with your input value. Please try again") // Default statement when non of the conditions is met
}