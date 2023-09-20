/* 
    ! FizzBuzz
    * count from 0 to a 100
    * if a number is divisble by 3, print Fizz
    * if a number is divisible by 5, print Buzz
    * if a number is divisble by 3 & 5, print FizzBuzz
    * if it's neither, print the number
    ! Spicey Mode
    * wrap your FizzBuzz in a fx which will take two params start and stop
    * it will execute your FizzBuzz based on that start and stop value
*/

// TODO: HINT - least common occurence goes first (helps with logic flow)


function fizzBuzz(start, stop) {
    for (let i = start; i <= stop; i++) {
        if (i % 15 === 0) {
            console.log("Fizz Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

// fizzBuzz(20, 125)

function fbWhile(start, stop) {
    let count = start
    while (count <= stop) {
        if (count % 15 === 0) {
            console.log("Fizz Buzz")
        } else if (count % 3 === 0) {
            console.log("Fizz")
        } else if (count % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(count)
        }
        count++
    }
}

fbWhile(0, 100)