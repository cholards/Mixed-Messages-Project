
let name = "Tim";
    let surname = " Jones";     // Compilation error; incorrect space indentation, needs to be in line with 'name' and 'age'
age = 21;       // Compilation error; keyword 'let' not used to create the variable

let fullMessage = name + surname +  is  + age + " years old."    // Runtime error; 'age' needs to be cast with String()
                                                                // Compilation error; 'is' is under the wrong syntax, needs to be within " " 
                                                                // Logical error; fullMessage does not have appropriate spacing requiring: + " " +
                                                                // Compilation error; semicolon needed at the end of the line
console.log fullMessage;    // Compilation error; brackets needed around fullMessage
