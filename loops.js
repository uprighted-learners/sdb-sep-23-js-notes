/* 
    ? Loops
    * allow us to execute a block of code repeatedly until an exit condition has been met
*/

/* 
    ? Traditional For Loop

    ? Syntax
    for (start; stop; step) {
        code block to execute
    }

    * iterator - (ex: i) value that is a placeholder for our loop
    * iterable - ("ex: longWord") value we can iterate/loop over
*/

for (let i = 0; i < 10; i = i + 1) {
    console.log(i)
}

// ? Infinite Loop - a loop without a stop condition
// for (let i = 0;; i++) {
//     console.log(i)
// }

let longWordEN = "supercalifragilisticecpialidocious"
console.log(longWordEN.length)

for (let index = 0; index < longWordEN.length; index = index + 1) {
    console.log(`Index: ${index} Letter: ${longWordEN[index]}`)
}

/* 
    ? For-in Loop
    * allows us to seek an index value of an iterable against a condition
    * do not require an index number
    * do not require a stop statement
*/

let longWordDE = "kraftfahrzeughaftplichtversicherung"

for (i in longWordDE) {
    console.log(`Index: ${i} Letter: ${longWordDE[i]}`)
}

/* 
    ? For-of Loop
    * allows us to seek iterable value against a condition
*/

let longWordPL = "konstantynopolitanczykowianeczka"

for (i of longWordPL) {
    console.log(i)
}

/* 
    ? for-of & for-in difference
    * for in allows to loop over items that are not an array
    * for of works on indexed items only
*/

/* 
    ! Challenges
    1
    * Create a variable with a sentence
    * Loop over the variable
    * If a letter is a vowel, increment count, print it
    * At the end, you should have a list of vowels and the total vowel count
    2
    * Reverse a string
    
*/
console.log("----------------------------------------")
let word = "It's nice to meet you"

let count = 0
for (ltr of word) {
    if (ltr == "a" || ltr == "e" || ltr == "u" || ltr == "o" || ltr == "i") {
        console.log(ltr)
        // count = count + 1
        // count++
        count += 1
    }
}
console.log(`Total amount of vowels is: ${count}`)

let name = "Brandon"

for (let i = name.length - 1; i >= 0; i = i - 1) {
    console.log(name[i])
}

/* 
    ? While Loop
    * executes a statement inside of a code block
    * it does so as long as a while condition evaluates to true
    
    ? Syntax
    while(true) {
        do this until false
    }
*/

// while (true) {
//     console.log("Infinite Loop Yo!")
// }

let loopCount = 0

while (loopCount <= 100) {
    console.log(loopCount)
    loopCount += 1
}

/* 
    ? Do While Loop
    * executes code in the do section while a condition remains true
    ! If you like your instructor, you will spare him from aneurysm and NOT use it pls
*/

let doCount = 0

do {
    console.log(doCount)
    doCount += 1
} while (doCount <= 100)