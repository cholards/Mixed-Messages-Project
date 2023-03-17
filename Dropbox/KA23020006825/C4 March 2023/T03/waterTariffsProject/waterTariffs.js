let waterUsage = Number(prompt("Enter the number of litres of water used"));
let levelBill
if (waterUsage <= 6) {
    let levelBill = 15.73;
    let totalBill = levelBill * waterUsage;
    console.log(`Your total bill is R${totalBill.toFixed(2)}`)
} else if (waterUsage > 6 && waterUsage <= 10.5) {
    let levelBill = 22.38;
    let totalBill = levelBill * waterUsage;
    console.log(`Your total bill is R${totalBill.toFixed(2)}`)
} else if (waterUsage > 10.5 && waterUsage <= 35) {
    let levelBill = 31.77;
    let totalBill = levelBill * waterUsage;
    console.log(`Your total bill is R${totalBill.toFixed(2)}`)
} else if (waterUsage > 35) {
    let levelBill = 69.76;
    let totalBill = levelBill * waterUsage;
    console.log(`Your total bill is R${totalBill.toFixed(2)}`)
} else {
    console.log(`That is not a valid input. Please check again and enter the correct number of liters of water used`)
}