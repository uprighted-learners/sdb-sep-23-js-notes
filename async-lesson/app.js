/* 
    ? Promises
    * an object that may produce a singular value in the future

    ? Three States
    * Pending (unfinished)
    * Fulfilled (complete value result)
    * Rejected (error)
    
    * Promises allow other code to execute without having to wait for their completion
*/

function standard() {
    return "No promises here"
}

console.log(standard())

function promiseFx() {
    return new Promise((resolve, reject) => {
        // reject("Rejected promise lies here")
        setTimeout(() => {
            resolve("After 3 seconds, it resolves")
        }, 3000);
        // resolve("Resolved promise lies here")
    })
}

// console.log(promiseFx())

// ? In order to get tangible data out of a Promise object, we must resolve it

promiseFx()
    .then(msg => console.log(msg))
    // resolver that executes a function when a promise has been fulfilled
    .catch(err => console.log(err))
    // executes a fx when a promise has been rejected (error handling)
    .finally(() => console.log("This code runs after promise is done"))
console.log("Code after the promise")

/* 
    ? Asynchronous Functions
    * introduced in ES7
    * alternative to writing promises
    * a function that returns a promise object
    * allows us to resolve or reject a promise
    
    ? Syntax
    async function myFx() { }
    const myFx = async function() { }
    const myFx = async () => { }
*/

async function asyncFx() {
    return "Hello learners!"
}

console.log(asyncFx())

// ? How do we get values out of asyncs then?!?!?!

// * 1. use a resolver
asyncFx().then(msg => console.log(msg))
// * 2. use an await keyword inside of another async function

/* 
    ? Await Keyword
    * can be utilized only inside of an async function
    * tells JS we must wait on promise returning fx before moving on
*/

async function start() {
    // waits for resultion of a promise
    const result = await asyncFx()
    console.log(result)
    console.log("Code runs after await b/c await maintains order")
}

start()