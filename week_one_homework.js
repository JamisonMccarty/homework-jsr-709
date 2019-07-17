// Jamison McCarty
// Homework 1
// JSR-709

/* Section 1 */
/* Terms */

// 1.  Define Control Flow in your own terms.
// Control flow is how a program executes it's logic/functions and the flow and order in which it does so.


// 2. What is the difference between const and let and var? Please limit your answer to no more than three short sentences
// Const, Let, and Var are all used to declare variables. Const is immutable, whereas let and var are both mutable meaning
// that they can be reassigned and have their value changed through mathematical operators or otherwise


/* Section 2 */
/* Boolean Expressions */
  // const a = 4;
  // const b = 53;
  // const c = 57;
  // const d = 16;
  // const e = 'Kevin';

//a < b;
//c > d;
//'Name' === 'Name';
//a + b === c;
//a * a === d;
//e === 'Kevin';
//48 !== '48';

/* Section 3 */
/* For Loops */

/* Define a For Loop in your own terms. */

// a For loop is a piece of logic that will iterate through and execute code for a set amount
// of iterations as set by its initial condition, end condition and set iterator value.

/* For Loop 1 */
// Write a for loop that will console.log the numbers 0 to 999.

for (let i =0; i<=999; i++){
  console.log(i);
}

/* For Loop Control Panel */
// The first part of the control panel is: initial condition
// The second part of the control panel is: while condition
// The third part of the control panel is: iterator


/* For Loop 2 */
/* For Loop in Reverse */
// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse.
// Console.log a countdown from 999 to 0.

for (let i =999; i>=0; i--){
  console.log(i);
}

/* For Loop 3 */
// Write a for loop that uses concatenation to send a message to the console as well as the current value of i.
// The loop should run from 1 to 10.

for (let i=1; i<=10; i++){
  console.log("The value of i is: "+i + " out of 10");
}

/* For Loop 4 */
// Write a for loop that prints the numbers 1 - 5

for (let i=1; i<=5; i++){
  console.log(i);
}

/* For Loop 5 */
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// I was a little confused by the wording of the prompt so I wrote 2 loops

// for (let i=0; i<=10; i++){
//   console.log(i*9);
// }

// or

for (let i=0; i<=10; i++){
  console.log(i + " * 9 = " + i*9);
}

/* For Loop 6 */
// Print out the odd numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to the odd number that says: "is an odd number".

for (let i=1; i<=100; i+=2){
  console.log(i + " is an odd number");
}

/* For Loop 7 */
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five. Example Output:
// I found a 5. High five! I found a 10. High five!

for (let i=0; i<=100; i+=5){
  console.log("I found a " + i + ". High Five!");
}

/* Part 5 Control Flow */
/* Control Flow 1 */

// Declare a variable flavor and assign it the value to "chocolate".
let flavor = "chocolate";

// Declare a variable numberScoops and assign it the value 3.
let numberScoops = 3;

// Declare a variable outsideTemperature and assign it the value 75.
let outsideTemperature = 75;

// Declare a variable price and assign it the value 3.5.
let price = 3.5;

// Log each variable to the console and hit "Run" in the "Console" panel to make sure
// everything is set up correctly. Example: console.log(flavor); (then hit run)


// If the price is less than or equal to 3.5 OR
  // outsideTemperature is greater than 90
  // log "Buy that ice cream cone!!" to the console

// Else if the price is less than or equal to 4.5 AND
// outsideTemperature is greater than or equal to 70 AND
// flavor is equal to "chocolate" AND
// numberScoops is greater than 1
    // log "Ice cream does sound nice right now." to the console

// Else
    // log "No ice cream today." to the console.

if (price <= 3.5 || outsideTemperature > 90){
  console.log("Buy that ice cream cone!!");
} else if (price <= 4.5 && outsideTemperature >= 70 && flavor === "chocolate" && numberScoops > 1){
  console.log("Ice cream does sound nice right now.");
} else {
  console.log("No ice cream today.");
}

/* Control Flow 2 */

// The Farm

let animal = "cow";
if (animal = "cow"){
  console.log("mooooo");
} else {
  console.log("Hey, you're not a cow!");
}

// Driver's Ed

let age = 16;
if (age >= 16){
  console.log("Here are the keys");
} else {
  console.log("Sorry, you're too young");
}
