// ? Scope & Hoisting

/* 
    ? Scope
    * used to determined how information in different code blocks can be accessed

    ? Five scope types:
    * Global/window
    * Block
    * Function
    * Module
    * Lexical
*/

/* 
    ? Global Scope
    * outermost scope
    * window object when in client
    * js file when in Node
    * accessible from every other scope
*/

let globalScopeVariable = "This is a global scope variable"

{{{{{{{{{{{{{{{console.log(globalScopeVariable)}}}}}}}}}}}}}}}

/* 
    ? Function Scope
    * accessible only inside of a function
*/

function scope() {
    let fxScopeVariable = "This is a function scope variable"
    console.log(fxScopeVariable)
    console.log(globalScopeVariable)
}

scope()
// console.log(fxScopeVariable) // ReferenceError

/* 
    ? Block Scope
    * anywhere there are { }
*/

{
    let blockScopeVar = "Block scope variable"
    console.log(blockScopeVar)
}

// console.log(blockScopeVar) // Reference Error

/* 
    ? Lexical Scope
    * variables are accessible by their nested position
    * inner fx scope can access outer fx scope
*/

function outerFx() {
    // outer fx scope
    let ofxv = "Outer fx scope variable"

    function innerFx() {
        // inner fx scope
        let ifxv = "Inner fx scope variable"
        console.log(ofxv)
        return ifxv
    }

    return innerFx()
}

console.log(outerFx())

/* 
    ? Module Scope
    * encapsulates objects nested inside of other modules or files
    * allows the use in other files
*/

const capitalize = require("./capitalize")
console.log(capitalize) // Displays function reference from export
console.log(capitalize("pAUl"))

/* 
    ? Hoisting
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice
        * first, it looks for VARiables and fx declarations and hoists them
        * it allocates memory space for those declarations
        * it then executes the code line-by-line
*/

// console.log(myName) // ReferenceError
let myName = "Paul Niemczyk"
console.log(myName)

console.log(age) // Returns undefined
var age = 28
console.log(age) // Returns 28

// ? Function declarations are hoisted
x()
function x() {
    console.log("Function declaration")
}

// y() // ReferenceError
let y = function() {
    console.log("Function expression")
}
// y()

function run() {
    var foo = "foo"
    let bar = "bar"
    var fxVariable = "test"
    console.log(foo, bar)
    {
        var moo = "moo"
        let baz = "baz"
        console.log(moo, baz)
    }
    // console.log(baz) // Reference Error: scoped to immediate block
    console.log(moo) // ? WORKS: scoped to immediate function block
}

run()
// console.log(fxVariable) // ReferenceError

{
    {
        var something = "this is something"
    }
}

console.log(something)
// ? This works because global scope is also considered a function scope

// ! THIS IS BAD! Don't use hoisting to your "benefit"!!!!