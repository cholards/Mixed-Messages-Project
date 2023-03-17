// PLEASE ENSURE YOU OPEN THIS FILE IN VS Code otherwise you will not be able to read it.


// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript. 
// Comments can be placed anywhere in JavaScript code and the computer ignores them -- they are intended to be read by humans. 
// Any line with a // in front of it is a comment.
/* If you want to add a long comment that spans across several lines,
then you would use a multi-line comment. As you can see, a multi-line
comment starts with a /* and ends with */
// Please read all the comments in this example file and all others.


// ============ Logical Operators ============
// These are used in conjunction with comparison operators and/or boolean variables. 

// ============ Example 1 ============
// We use && to mean "and", where both conditions must be true.
let age = 18;
let licence = false; 

if (age >= 18 && licence) {     // writing "licence" here is shorthand for "licence == true"
    console.log("Congratulations! You are old enough to drive and you have a licence! You can drive!");
}
else {
    console.log("Sorry, you have not met all the requirements of being able to drive.");
}


// ============ Example 2 ============
// We use || to mean "or", where only one condition must be true.

let stationery = "pen";
if (stationery == "pen" || "pencil") { 
    console.log("You have enough stationery to write the exam.");
}
else {
    console.log("You do not have sufficient stationery to write the exam.");
}


// ============ Switch Conditional ============

// ============ Example 3 ============

console.log("Example of a switch statement:");

let num = 4;

switch (num) {
    case 0:
        console.log("zero");
        break;

    case 1:
        console.log("one");
        break;

    case 2:
        console.log("two");
        break;

    case 3:
        console.log("three");
        break;

    case 4:
        console.log("four");
        break;

    default:
        console.log("unknown");
        break;
}

// ============ Example 4 ============
//The  switch statement could easily be re-written using if... else if ..else statements as shown below

if (num === 0) {
    console.log("zero");
} else if (num === 1) {
    console.log("one");
} else if (num === 2) {
    console.log("two");
} else if (num === 3) {
    console.log("three");
} else if (num === 4) {
    console.log("four");
} else {
    console.log("unknown");
}