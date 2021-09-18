// **Ways to make a function:

// **Regular Function
// function doctorize (firstName) {
//   return `Dr. ${firstName}`
// }

// **Anon Function (doesn't work in this format)
// function (firstName) {
//   return `Dr. ${firstName}`
// }

// **Function Expression - NOT HOISTED FUNCTION
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// }

/* eslint-disable*/
// **Arrow function
// They are anonymous functions
// Do not have their own scope for "this"

// *Convert a Function to an Arrow Function by performing the following steps:
// *Step 1:
// function inchToCM(inches) {
//     const cm = inches * 2.54;
//     return cm;
// }

// >>>>>>>>>>>

// Firstly you can just return the variable just to shorten it
// function inchToCM(inches) {
//* return inches * 2.54;
// }

// *Step 2: Convert to an Anonymous Function
// const inchToCM = function(inches) {
// return inches * 2.54;
// };

// *Step 3: Now we can begin changing to Arrow Function
// Delete function keyword and add in the fat arrow
// const inchToCM = (inches) => {
//     return inches * 2.54;
//     };

// *Step 4: Change to an Implicit Return
// Delete return keyword as well as curly brackets
// This leaves an extra semicolon, so delete that as well
// const inchToCM = (inches) => inches * 2.54;

// *Final product:
// const inchToCM = (inches) => inches * 2.54;

// *BONUS
// If you only have one parameter then you actually don't need the parens
// So, with only one parameter the following is valid
const inchToCM = inches => inches * 2.54;

// *EXAMPLE FUNCTION
// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

const add = (a, b = 3) => a + b;

// *ADVANCED USES 

//* Returning an Object

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

// *How to convert this function to an object?
// *Step 1: Anonymize the Function
// const makeABaby = (first, last) => {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

// *Step 2: Simply return the object
// const makeABaby = (first, last) => {
//     return {
//         name: `${first} ${last}`,
//         age: 0
//     }
// }

// To simplify let's put everything on one line
// const makeABaby = (first, last) => {return {name: `${first} ${last}`, age: 0}}

// In the case of an object taking away the return keyword and the brackets will cause an error
// Javascipt will not be able to tell if it is curly braces for an object or function
// The following code
// const makeABaby = (first, last) => {name: `${first} ${last}`, age: 0}
// will through this error "Uncaught SyntaxError: Unexpected token ':'"


// The way around this to allow Javascript to interprete this correctly is to through parens around the object
// const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0})

// *IIFE (Immediately Invoked Function Expression)

// So we have below an anonymous function again which we know does not work like this
// function() {
//     console.log("Running the Anon function")
// }
// It throws this error: "Uncaught SyntaxError: Function statements require a function name"

// *So what can we do to get Javascript to recognize this as a valid function?
// Use parenthesis!
//**THIS IS ACTUALL STILL NOT WORKING SO MAYBE AFTER CLOSURE VIDEO I CAN FIX IT...
// (function() {
//     console.log("Running the Anon function");
//     return `You are cool and you are ${age} years old`;
// })(20);

// Method: A function that exists within an object
// Example:
const wes = {
    name: 'Wes Bos',
    sayHi: function() {
    console.log('Hey Wes');
    return 'Wahsup?';
    }, // <= Notice the comma here...

// Method - Shorthand
    yellHi() {
        console.log('HEY WES!');
    }, // <= and here.  Functions within an object (aka Methods)

// Arrow Function Method
    whisperHi: () => {
        console.log('hi wes');
    }
}

// *Callback Functions - Functions passed into another function as an argument
// *Click Callback
const button = document.querySelector('.clickMe');
console.log(button);

function handleClick() {
    console.log('Great Clicking!!');
}

button.addEventListener('click', handleClick);

// *OR you can do the same thing this way Anonymous Function
button.addEventListener('click', function() {
    console.log('Nice Job!!!');
});

// *Timer Callback
// With a previously declared function...
setTimeout(wes.yellHi, 1000);

// Or with an anonymous function
setTimeout(function() {
    console.log('Done! Time to eat.')
}, 999.99999999999999999);
