// PLEASE ENSURE YOU OPEN THIS FILE IN VS Code otherwise you will not be able to read it.


// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript. 
// Comments can be placed anywhere in JavaScript code and the computer ignores them -- they are intended to be read by humans. 
// Any line with a // in front of it is a comment.
/* If you want to add a long comment that spans across several lines,
then you would use a multi-line comment. As you can see, a multi-line
comment starts with a /* and ends with */
// Please read all the comments in this example file and all others.


// ============ Example 1 ============
/*The JavaScript below should look familiar.
Here we declare variables called name and age and assign them values.
We then use the alert() method to display a message (using the variables). */
let name1 = "Nkosi";
let age1 = 25;
alert("Hello World! I'm " + name1 + " I am " + age1 + " years old.");
console.log("Hello World! I'm " + name1 + " I am " + age1 + " years old.");


// ============ Example 2 ============
/* Notice that again we declare variables called name and age.
This time we also have 2 additional variables though: yearOfBith and thisYear. 
We use a predefined method called Date().getFullYear() to get the current year. This method
gets the year from your computer's date and time settings. 
See more about this method here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

We then calculate how old a person is by subtracting the year they were born in from the current year. */

const name2 = "Bethany";
const yearOfBirth2 = 1994;
const thisYear2 = new Date().getFullYear();
const age2 = thisYear2 - yearOfBirth2;
alert("Hello World! I'm " + name2 + " I am " + age2 + " years old.");
console.log("Hello World! I'm " + name2 + " I am " + age2 + " years old.");


// ============ Example 3 ============
/*Consider the code below. Here we want the same functionality as used in the previous example.
Instead of just displaying the name and age of one person though, we want to display the information for several people.

We could code this solution as shown below. If you comment out this code, you'll see that this works BUT
a good programmer would look at this and think, "This seems very inefficient! We're just writing the same code over and over again!" */

/*
let name3 = "Bethany";
let yearOfBirth3 = 1994;
const thisYear3 = new Date().getFullYear();
let age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Timothy";
yearOfBirth3 = 2000;
age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Jack";
yearOfBirth3 = 1986;
age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Eric";
yearOfBirth3 = 1991;
age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
*/


// ============ Example 4 ============
/*One way to make our code more effiecient is to use functions. As you have read in the PDF, a function is just a block of code.
If you look at the code above, we basically do 2 key tasks: 1)calculate the person's age and then 2) display the message. We can write the functionality 
in a functions that could be reused. For example, we could write a function called 'calculateAge' as shown below. To calculate the age, 
our function needs to know the year in which the person was born. We therefore create a parameter called birthYear. */

function calculateAge(birthYear) {
    const thisYear = new Date().getFullYear();
    const age = thisYear - birthYear;
    return age;
}

/*We could also create a function called displayMessage that will be passed the name and age
of a person and displays an appropriate message as shown below. */
function displayMessage(name, age){
    alert("Hello World! I'm " + name + " I am " + age + " years old.");
    console.log("Hello World! I'm " + name + " I am " + age + " years old.");
}

/* To execute the code contained in the functions we simply call them as often as we like as shown
below. Notice how we pass different values to the function each time. */
displayMessage("Bethany", calculateAge(1994));
displayMessage("Timothy", calculateAge(2000));
displayMessage("Jack", calculateAge(1986));
displayMessage("Eric", calculateAge(1991));

/*Compare the code we have written here to the code in the comment. Do you see that both pieces of code
do the same task but using functions is more effective because we only write the logic for each task once? */


//************* END OF EXAMPLE CODE *****************