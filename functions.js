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

function sayHello() {
    return "Hello September Cohort"
}

let holdingFunctionReturn = sayHello()

console.log(holdingFunctionReturn)

function greetLearner(learner) {
    return `Welcome to my class, ${learner}`
}

console.log(greetLearner("Paul"))
console.log(greetLearner("Julia"))
console.log(greetLearner("Brandon"))
console.log(greetLearner("Isaiah"))
console.log(greetLearner())

function addNums(num1, num2) {
    return num1 + num2
}

console.log(addNums(17, 5))

