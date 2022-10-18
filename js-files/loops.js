/* The for loop takes 3 statements inside its parenthesis. The first is called 
initialExpression which is an initialised variable. The second is the condition
and the loop will continue while this statement is true or equal to true. The third
and final statement is called the incrementExpression. Typically we use the increment
operator 'i+' and then decide by how much we want to increment i by.
Then inside the brackets we can create 1 or more statements which will be
executed while the for loops condition is true. */

// for (let i = 0; i < 5; i++) {
//     console.log("Hello World!")
// }


/* A while loop requires a condition inside of the parenthesis. While this condition
is true, the code inside the loop will continue to run. Inside the condition, we 
are saying while the value of loading "0" is less than 100, print this message 
and then add 1 to loading. */


let loading = 0

while(loading < 100) {
    console.log("Website is still loading");

    loading++;
}