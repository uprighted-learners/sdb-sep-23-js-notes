/* 
    ? Functions
    * a block of reusable code. It can:
    * take in parameters (doors to the inside of your fx)
    * perform an action
    * return a result
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming through the parameter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    ? There are two types of functions
        * function declaration
            * are hoisted
        * function expression
            * are not hoisted
    
    ? Syntax:

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }

*/

// ? Function Declaration

function sayHello() {
    return "Hello September Cohort"
}

let holdingFunctionReturn = sayHello()

// console.log(holdingFunctionReturn)

function greetLearner(learner) {
    return `Welcome to my class, ${learner}`
}

// console.log(greetLearner("Paul"))
// console.log(greetLearner("Julia"))
// console.log(greetLearner("Brandon"))
// console.log(greetLearner("Isaiah"))
// console.log(greetLearner())

function addNums(num1, num2) {
    return num1 + num2
}

// console.log(addNums(17, 5))

/* 
    ? Function Expression
    * utilizes a variable as a placeholder

    ? Syntax:

    let identifier = function(params) {
        code block
        return statement
    }
*/

let nameAge = function(name, age) {
    return `Your name is ${name} and you're ${age} years old.`
}

// console.log(nameAge("Dan", 28))

/* 
    ! Challenge
    * create a function that will give you a result of a quadratic formula based on all necessary inputs
    * check if the data type is a Number. If not, return "please use whole numbers only"
    * The formula for quadratic formula is (-b+-sqrt(b**2 - 4*a*c))/2a
*/

let quadraticFormula = function(a, b, c) {
    let sqrtResult = Math.sqrt(b**2 - 4 * a * c)
    if (isNaN(sqrtResult)) {
        return "Please make sure you use whole numbers which result in a positive discriminant"
    } else {
        let addResult = (-b + sqrtResult) / 2 * a
        let subResult = (-b - sqrtResult) / 2 * a
        return `The solution is ${addResult} and ${subResult}`
    }
}

// console.log(quadraticFormula(1, -11, 24))

/* 
    ? Arrow Functions
    * introduced in ES6
    * concise way of writing functions
    * part of the fx expression family
    * do not bind to .this or super (more on that in Classes)
*/

/* 
    ? Concise Body Arrow Functions
    * can only have no or one parameter
    * code block must not have { }
    * return statement must be implicit
*/

let greetEveryone = () => `Hello everyone`
// console.log(greetEveryone())

let greetMD = drName => `Hello, Dr. ${drName}`
// console.log(greetMD("Max"))

/* 
    ? Block Body Arrow Functions
    * can have as many params as you want
    * allows the use of explicit return statement
*/

let concatenateStr = (str1, str2) => {
    if (typeof str1 === "string" && typeof str2 === "string") {
        return str1 + str2
    } else {
        return "You can only pass string values as arguments"
    }
}

console.log(concatenateStr("Brandon", "Hoffey"));

// ? Immediately Invoked Function Expression (IIFE)

(function() {
    console.log("IIFE")
})()

/* 
    ! Pythagoream Theorem Challenge
    * right angle triangle has three sides
    * the longest side c is calculated by taking the sum of:
    * a**2 + b**2
    * The formula is ass follows c = sqrt(a **2 + b ** 2)
    * Create a function taht takes the two triangle sides
    * Returns the hypothenuse
    * Use a block body arrow function
*/

const pythagoreanTheorem = (a, b) => {
    const result = typeof a != "number" || typeof b != "number"
        ? `Please enter a valid number`
        : Math.sqrt(a ** 2 + b ** 2)
    return result

    // if (typeof a != "number" || typeof b != "number") {
    //     return `Please enter a valid number`
    // } else {
    //     return Math.sqrt(a **2 + b**2)
    // }
}

/* 
    TODO: HINT - Ternaries are expressions, not statements
    * they need to be "caught" in their entirety into a separate placeholder (variable)
    * then that variable can be returned for the function to return something other than undefined
*/

console.log(pythagoreanTheorem(5, 3))