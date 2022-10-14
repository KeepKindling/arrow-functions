/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Named function with multiple parameters
function sum(a, b) {
    return a + b;
}

// The fat arrow denotes that on the left is the parameters, the arrow denotes that 
// This is a function since we no longer use the function keyword and that inside of the brackets
// we put the actual function syntax that we are going to be using.
let sum2 = (a, b) => {
    return a + b;
}

// We can also remove the return keyword, the brackets and then move it all into one line.
// This means that everything after the arrow is assumed to be returned.
// This makes for much cleaner looking code
let sum3 = (a, b) => a + b;



// Named function with one parameter
function isPositive(number) {
    return number => 0;
}

// Because this function only has one parameter, we can completely
// remove the parenthesis around the parameter. 
let isPositive2 = (number) => number >= 0;


// Named function with no parameters
function randomNumber() {
    return Math.random
}

// Since there is no parameter, we just leave the parenthesis empty.
// Overall this keeps everything clean and easy to understand.
let randomNumber2 = () => Math.random


// A function with no name - An anonymous function
document.addEventListener('click', function() {
    console.log('Click')
})

// All we do here for an anonymous function is remove the function keyword
// and brackets and then add in the fat arrow after the empty parenthesis.
document.addEventListener('click', () => console.log('Click'))