// What makes arrow functions so great is how they redefine the usage of the 
// this keyword as apposed to normal functions.

class Person {
    constructor(name) {
        this.name = name
    }

    // Arrow function syntax
    // By using an arrow function, the 'this' keyword does not get redefined 
    // regardless of where the function is called. This is why this arrow function
    // prints bob. It is much more intuitive to have 'this' defined inside the scope.
    printNameArrow() {
        setTimeout(() => {
            console.log("Arrow:" + this.name)
        }, 100)
    }

    // Regular function syntax
    // Normally this functions defined 'this' based on where the function is called.
    // In the function here, 'this' has global scope because we called the function globally,
    // so at the bottom there. This is why this name function prints undefined.
    printNameFunction() {
        setTimeout(function() {
            console.log("Function:" + this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()