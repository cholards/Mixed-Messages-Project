// PLEASE ENSURE YOU OPEN THIS FILE IN VS Code otherwise you will not be able to read it.


// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript. 
// Comments can be placed anywhere in JavaScript code and the computer ignores them -- they are intended to be read by humans. 
// Any line with a // in front of it is a comment.
/* If you want to add a long comment that spans across several lines,
then you would use a multi-line comment. As you can see, a multi-line
comment starts with a /* and ends with */
// Please read all the comments in this example file and all others.


// ============ If Conditional ============

// ============ Example 1 ============
console.log("Example of simple if statement:");
let time = 5;

if (time > 0) {
    greeting = "Hello"
    console.log(greeting);
}


// ============= If, Else If, Else Conditional =============

// ============ Example 2 ============

console.log("Example of if...else if.. . else statement:");
if (time < 5) {
    console.log("Early Riser");
} else if (time === 5) {
    console.log("Still early");
} else {
    console.log("Good enough");
}
console.log();


// ============ Example 3 ============

let grade = 66;

if (grade >= 80) {
    console.log("Congratulations! You have an A");
}
else if (grade >= 70){
    console.log("Good job! You have a B");
}
else if (grade >= 60){
    console.log("Keep it up! You have a C");
}
else if (grade >= 50){
    console.log("Try a little harder next time! You have a D");
}
else {
    console.log("Oh No! You have an F");
}

// Run this program to see what outputs, then try changing the value of the grade variable and running it again.

// ============ Example 4 ============
let helloWorld = "Hello World!";
if (helloWorld.length > 6) {
    console.log("This sentence is long!");
}
else if (helloWorld.length > 3) {
    console.log("Slightly more manageable!");
}
else {
    console.log("Easy stuff")
}
        

// ****************** END OF EXAMPLE CODE ********************* 