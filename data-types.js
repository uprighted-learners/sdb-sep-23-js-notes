console.log("Hello world!");

/* 
    ? JavaScript
    * found in 1996 by Brandon Eich
    * client-side language (runs in the browser)
    * interpreted language, not compiled
    * first-class-function -- functions are treated like any other variable
    * functional language
    * object-oriented language
    * prototype-based
    * imperative
    * weakly typed (dynamic)
    * multi-paradigm language
    * ECMAScript -- organization setting language standards
*/

/* 
    ? Comments
    * blocks of code that are not being interpreted
    * denoted by // for single-line
    * denoted by /* for multi-line
    * comments are read but not executed
    * as learners, it helps us with note taking
    * as devs, it documents our code making it more maintainable
    * cmd/ctrl + / for single-line
    * optn/alt + shift + a for multi-line
*/

/* 
    ? Console object
    * give us access to the browser or node's debugging console
    * allows the developer to view output from their program
*/

2 + 2; // runs but doesn't show in the console
console.log(2 + 2); // shows in the console

/* 
    ? JS Data Types:
        Primitive
            * string
            * number
            * boolean
            * null
            * undefined
            * Not a Number (NaN)
        Reference
            * array
            * object
            * Map
            * Set
*/

/* 
    ? Strings
    * primitive data type representing characters
    * enclosed in '', "", or ``
    
    Examples:
*/

console.log("This is a text");
console.log("This is also a text");
console.log(`This is text using string interpolation backticks`);
// String representation of a number
console.log("2023");

// We can concatenate different strings (add them together)
console.log("I'm Paul" + "and I'm 26 years old");

// Strings are indexed starting from zero (0)
// Index value goes between [ ]
// ! Strings are immutable (cannot be changed)
console.log("Porschedoppelkupplungsgetriebe"[5]);

/* 
    ? String Interpolation (` `)
    * a process of including space for an expression
    Syntax:
        `string ${ expression } string`
*/

console.log(`My name is Paul and I am ${20 + 6} years old.`);
console.log("My name is Paul and I am " + (20 + 6) + " years old.");

/* 
    ? String Methods
    * .length
    * slice()
    * .toUpperCase()
    * .toLowerCase()
*/

console.log("Kraftfahrzeughapsflichverersirscherung".length);

console.log("Niemczyk".toUpperCase());
console.log("Paul Niemczyk".slice(0, 4));
console.log("Paul Niemczyk".indexOf("N"));

// Multi-line strings - using escape character "\n"
console.log("Paul Niemczyk, \n 123 Main St \n 312 555 0808");

/* 
    ? Checking data types using typeof operator
*/

console.log(typeof "1990");

/* 
    ? Numbers
    * any integer or decimal
*/

console.log(25);
console.log(3.14);
console.log(typeof 1776);
console.log(0.2 + 0.1);
console.log(Number.MAX_SAFE_INTEGER);

/* 
    ? Booleans
    * binary value
    * either true (on) or false (off)
    * Examples of falsey values:
        * 0
        * undefined
        * null
        * NaN
        * ""
*/

console.log(true);
console.log(false);
console.log(2 == 2);
console.log(2 == 5);

// Boolean() interface returns whether value is truthy or falsey
console.log(Boolean(1)); // returns true
console.log(Boolean(0)); // returns false
console.log(Boolean("")); // returns false
console.log(Boolean(null)); // returns false
console.log(Boolean(undefined)); // returns false

/* 
    ? Type Coercion
    * JS is a weakly typed programming language (duck typed)
    * doesn't require data type definition
    * comparison operator (==) performs type coercion before resolving expression
        * will check values but NOT data types
    * we can use strict equality (===) to avoid type coercion
        * will check values AND data types
*/

console.log(2 == 2);
console.log(2 == "2", typeof 2, typeof "2");
console.log(2 === "2");

/* 
    ? Not a Number (NaN)
    * triggered when performing operations with numbers and non-numbers
    * used when performing mathematical computations that don't make sense
    ! know what type coercion is but DO NOT USE IT!
*/

console.log(undefined + 5); // returns NaN

console.log(Math.sqrt(-1)); // returns NaN as sqrt of neg number is iMaginary number

/* 
    ? Null and Undefined
    * null - placeholder for something
    * undefined - lack of existence
    * 0 - ran out of stuff?
*/

console.log(Boolean(null), Boolean(undefined), Boolean(0), Boolean(NaN));

/* 
    ? Operators
    * addition (+)
    * substraction (-)
    * multiplication (*)
    * division (/)
    * exponent (**)
    * dot (.)
    * modulo (%)
    * assignment (=) <- single
    * comparison (==) <- double
    * strict comparison (===) <- triple
    * is not equal to or is strictly not equal to (!=  OR !== ) OR !value
*/

// Dot or Member Access Operator

console.log("dan guertin".length);
console.log("brandon hoffey".toUpperCase());

// Modulo -> remainder of long division
console.log(10 / 2);
console.log(10 % 2 === 0); // true -> divisible by 2
console.log(10 % 3 === 0); // false -> not divisible by 2 (remainder of 1)

// Assignment
let myName = "Paul"; // assigns value of "Paul" (str) to the variable myName
console.log(myName);

// Comparison
console.log(myName == "Paul");

// Strict Comparison
console.log(525 === "525");

// Is Not Equal To ->  flips values

console.log(2 != 2); // returns false (even though it's true; it flips the value)
console.log(!true); // returns false (flips the value)

// Real life example
if (!myName) {
	// Checks if the inverse of this expression is true
	console.log("No name");
} else {
	console.log(myName);
}
