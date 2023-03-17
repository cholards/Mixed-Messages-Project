// PLEASE ENSURE YOU OPEN THIS FILE IN VS Code otherwise you will not be able to read it.


// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript. 
// Comments can be placed anywhere in JavaScript code and the computer ignores them -- they are intended to be read by humans. 
// Any line with a // in front of it is a comment.
/* If you want to add a long comment that spans across several lines,
then you would use a multi-line comment. As you can see, a multi-line
comment starts with a /* and ends with */
// Please read all the comments in this example file and all others.


// ============ While loop  ============
// This loop will keep repeating while the condition is true, with the condition being checked before each iteration.. 

// ============ Example 1  ============
console.log("Example of a while loop with the format 'while (i < 10)':");
let i = 0;

while (i < 10) {
    console.log("The number is " + i);
    if (i < 9) {
        console.log("The value for i is now: " + i);
        console.log("The condition (i < 10) is, therefore, still TRUE so this loop will run again!");
    } else {
        console.log("The value for i is now: " + i);
        console.log("The condition (i < 10) will be FALSE with the next test so this loop will now terminate!!");
        console.log("GOODBYE");
    }
    i++;
}
console.log();


// ============ Do While Loop ============
// This loop will keep repeating while the condition is true, with the condition only being checked after each iteration. 

// ============ Example 2 ============
console.log("Example of a do while loop:");
let j = 0;

do {
    console.log("The number is " + j);
    j++;
} while (j < 10);
console.log();


// ============ For loop ============
// This loop will keep repeating for a predetermined number of times. 

// ============ Example 3 ============
console.log("Example of a for loop 'for (l = 0; l < 5; l++)':");
for (let l = 0; l < 5; l++) {
    console.log("The number is " + l);
}
console.log();


//=============Nested Loop =====================
/*The following code will output a rectangle of *s.
The dimensions of the rectangle are determined by the variables
numRows (which stores the number of rows that will be printed) and 
numColumns (which stores the number of columns that will be printed) */

// ============ Example 4 ============
let numRows = 5;
let numColumns = 10;
let strRowOutput = "";

for (let row = 1; row <= numRows; row++) {
    for (let column = 1; column <= numColumns; column++) {
        strRowOutput += "*";
    }
    console.log(strRowOutput);
    strRowOutput = "";
}
console.log();

/*The following code will output a rectangle of *s similar to the one created above
BUT instead of having a solid pattern printed, we want to only print the border of the 
rectangle. E.g. output should be 
**********
*        *
*        *
*        *
********** 

instead of 

**********
**********
**********
**********
**********

*/

for (let row = 1; row <= numRows; row++) {
    for (let column = 1; column <= numColumns; column++) {
        if (
            row === 1 ||
            row === numRows ||
            column === 1 ||
            column === numColumns
            ) {
            //Notice how we make use of the OR logical operator here.
            strRowOutput += "*";
        } 
        else {
            strRowOutput += " ";
        }
    }
    console.log(strRowOutput);
    strRowOutput = "";
}


// ****************** END OF EXAMPLE CODE ********************* 
