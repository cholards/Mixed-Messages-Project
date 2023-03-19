// Accept user input
let userInputOne = prompt("Input an uppercase letter, a lowercase letter or a number");

// Check inputs to determine if it is Upercase, lowercase or number
if (Number.isInteger(Number(userInputOne))) {
    console.log(`${userInputOne} is a number.`)
} else if (userInputOne.toUpperCase() === userInputOne.toLowerCase()) {
    console.log(`${userInputOne} is not a letter or number.`)
} else if (userInputOne == userInputOne.toUpperCase()) {
    console.log(`${userInputOne} is an uppercase letter.`)
} else if (userInputOne == userInputOne.toLowerCase()) {
    console.log(`${userInputOne} is a lowercase letter.`)
} else {
    console.log("Cannot process your input") // define what happens if non of the conditions is met
}