// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:


const validateCred = (array) => {

let oddIndexArray= [];
let evenIndexArray= [];
let balIndexArray= [];

for (let i=0; i < array.length; i+=2){
  oddIndexArray.push(array[i])
};

for (let i=1; i < array.length; i+=2){
  evenIndexArray.push(array[i])
};


for (let i=0; i < array.length; i+=2){
  if (array[i] * 2 >= 10) {
    balIndexArray.push(9 - array[i])
  }else{
    balIndexArray.push(array[i])
  }
  
};

let evenIndexArraySum = evenIndexArray.reduce((a, b) => a + b, 0);
let oddIndexArraySum = oddIndexArray.reduce((a, b) => a + b, 0)
let balIndexArraySum = balIndexArray.reduce((a, b) => a + b, 0)

//console.log('odd Index are: ' + oddIndexArray);
//console.log('even Index are: ' + evenIndexArray);
////console.log('odd Index are: ' + balIndexArray)

//console.log(evenIndexArraySum);
//console.log(balIndexArraySum)

let chekerFig = evenIndexArraySum + balIndexArraySum;
//console.log(chekerFig);

if ( chekerFig % 10 === 0) {
 return 'Card is valid'
}else{
  return'Invalid card'
}

};


let nested =[ [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8], [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8], [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5] ]

const findInvalidCred = (ccNestedArray) => {
let resultArray = [];
for (card in ccNestedArray) {
resultArray.push(validateCred(card));
}
return resultArray;
};

//findInvalidCred(nested);


//validateCred(invalid1)


const idInvalidCardCompanies = (arrayOfInvalidNumbers) => {
let companyArray = [];
for (card in arrayOfInvalidNumbers) {
let compCheck = validateCred(card);
if ( compCheck === 'Invalid card' && card[0] === 3){
  companyArray.push('Amex (American Express)')
}else if ( compCheck === 'Invalid card' && card[0] === 4 ) {
   companyArray.push('Visa')
}else if ( compCheck === 'Invalid card' && card[0] === 5 ){
   companyArray.push('Mastercard')
}else if ( compCheck === 'Invalid card' && card[0] === 6 ){
   companyArray.push('Discover')
}else{
   companyArray.push('Company not found')
}
}
console.log(card[0])
console.log(validateCred(card))
//console.log(companyArray)
};


idInvalidCardCompanies(nested);

