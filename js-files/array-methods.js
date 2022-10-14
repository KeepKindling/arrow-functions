// The filter method allows you to filter arrays to grab things based on
// specific parameters. Here we filter all items that are equal to or less
// than 100 and add them into a new array called filteredItems.

// We return true or false for each item. If it is true, then it is in the
// new array. If it is false, then it is not added to the new array.

//const items = [
    //{ name: "Bike",     price: 100 },
    //{ name: "TV",       price: 200 },
    //{ name: "Album",    price: 10  },
    //{ name: "Book",     price: 5   },
    //{ name: "Phone",    price: 500 },
    //{ name: "Computer", price: 1000},
    //{ name: "Keyboard", price: 25  }
//]

//const filteredItems = items.filter((item) => {
    //return item.price <= 100
//})

//console.log(filteredItems)


// With the map method, we can grab every item that is related to the parameter
// we specify. Below we use map on two const called itemNames and itemPrices.
// The map method sorts the array by Names and then sorts again for price.
// It's very useful for collecting large groups of objects.

//const items = [
    //{ name: "Bike",     price: 100 },
    //{ name: "TV",       price: 200 },
    //{ name: "Album",    price: 10  },
    //{ name: "Book",     price: 5   },
    //{ name: "Phone",    price: 500 },
    //{ name: "Computer", price: 1000},
    //{ name: "Keyboard", price: 25  }
//]

//const itemNames = items.map((item) => {
    //return item.name
//})

//console.log(itemNames)

//const itemPrices = items.map((item) => {
    //return item.price
//})

//console.log(itemPrices)


// The find method will return the very first item that it finds inside the
// array that returns true for the statement that is passed in the find function
//const items = [
    //{ name: "Bike",     price: 100 },
    //{ name: "TV",       price: 200 },
    //{ name: "Album",    price: 10  },
    //{ name: "Book",     price: 5   },
    //{ name: "Phone",    price: 500 },
    //{ name: "Computer", price: 1000},
    //{ name: "Keyboard", price: 25  }
//]

//const foundItem = items.find((item) => {
    //return item.name === "Computer"
//})

//console.log(foundItem)


// the forEach method loops through every object inside of the array based
// the parameter specified inside of the function. The syntax here is much
// simpler when compared to a long for loop. 
//const items = [
    //{ name: "Bike",     price: 100 },
    //{ name: "TV",       price: 200 },
    //{ name: "Album",    price: 10  },
    //{ name: "Book",     price: 5   },
    //{ name: "Phone",    price: 500 },
    //{ name: "Computer", price: 1000},
    //{ name: "Keyboard", price: 25  }
//]

//items.forEach((item) => {
    //console.log(item.name)
//})


// Using the 'some' method here checks the array for items with a price 
// equal to or less than 100. If it at least one item returns true, it 
// will print true in the console. It is a good method to check for 
// ANY of a certain parameter.
// const items = [
//     { name: "Bike",     price: 100 },
//     { name: "TV",       price: 200 },
//     { name: "Album",    price: 10  },
//     { name: "Book",     price: 5   },
//     { name: "Phone",    price: 500 },
//     { name: "Computer", price: 1000},
//     { name: "Keyboard", price: 25  }
// ]

// const hasInexpesniveItems = items.some((item) => {
//     return item.price <= 100
// })

// console.log(hasInexpesniveItems)


// The 'every' method checks that every iteration meets a certain
// parameter otherwise it will display false. Below we check that 
// 'every' item has a price less than 2000 which returns true.
// const items = [
//     { name: "Bike",     price: 100 },
//     { name: "TV",       price: 200 },
//     { name: "Album",    price: 10  },
//     { name: "Book",     price: 5   },
//     { name: "Phone",    price: 500 },
//     { name: "Computer", price: 1000},
//     { name: "Keyboard", price: 25  }
// ]

// const hasInexpesniveItems = items.every((item) => {
//     return item.price <= 2000
// })

// console.log(hasInexpesniveItems)


// the 'reduce' method works differently as it runs an operation on 
// each item inside of the array and returning a combination of 
// all the different operations.

// This method takes an item and a property (currentTotal) inside the nested 
// parenthesis and also a second parameter inside the outer parenthesis
// which is zero as it is our starting point. 

// We return the price of the item inside the brackets and add 
// it to the currentTotal variable. The array that the operation
// iterates through must be the second argument inside the function.
// const items = [
//     { name: "Bike",     price: 100 },
//     { name: "TV",       price: 200 },
//     { name: "Album",    price: 10  },
//     { name: "Book",     price: 5   },
//     { name: "Phone",    price: 500 },
//     { name: "Computer", price: 1000},
//     { name: "Keyboard", price: 25  }
// ]

// const total = items.reduce((currentTotal, item) => {
//     return item.price + currentTotal
// }, 0)

// console.log(total)


// The 'includes' method does not use a function. It simply checks that 
// whatever is passed inside the methods parenthesis is included in the array
// that was called. In this case it checks that 2 is inside the items array.
// True if it does but false if it does not.
const items = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2)

console.log(includesTwo)




