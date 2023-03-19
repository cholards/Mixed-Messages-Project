let waterUsage = Number(prompt("Enter the number of litres of water used")); // Accept user input
let levelBill // Define the variable to be use to multiply the input. This varible will be declared based on each condition

// Define the amount to charge for each step of usage
let levelOneBill = 15.73;
let levelTwoBill = 22.38;
let levelThreeBill = 31.77;
let levelFourBill = 69.76;

// Conditions for calculating the actual bill for each step
if (waterUsage <= 6) {
    let result = levelOneBill * waterUsage;
    console.log(`Your total bill is R${result.toFixed(2)}`)
} else if (waterUsage > 6 && waterUsage <= 10.5) {
    let result = (levelOneBill * 6) + (levelTwoBill * (waterUsage - 6));
    console.log(`Your total bill is R${result.toFixed(2)}`)
} else if (waterUsage > 10.5 && waterUsage <= 35) {
    let result = (levelOneBill * 6) + (levelTwoBill * 4.5) + (levelThreeBill * (waterUsage - 10.5));
    console.log(`Your total bill is R${result.toFixed(2)}`)
} else if (waterUsage > 35) {
    let result = (levelOneBill * 6) + (levelTwoBill * 4.5) + (levelThreeBill * 24.5) + (levelFourBill * (waterUsage - 35));
    console.log(`Your total bill is R${result.toFixed(2)}`)
} else {
    console.log(`That is not a valid input. Please check again and enter the correct number of liters of water used`) // Default condition to be used if no other condition is met
}