/* 
    ? Conditionals and Logic Gates
    * conditional statement checks if an expression is truthy
    * the expression must always resolve to true
    * if it's truthy, a code within a statement executes
    * if it's falsey, nothing happens unless we specify otherwise
    
    ? Expressions vs Statements
    * Expression
        * unprocessed value grouped using the ( )
        * evaluated to be truthy
        * can be empty
        TODO: Expressions evaluate
    * Statements
        * keyword
        * expression
        * and code block
        TODO: Statements evaluate and execute code block when invoked
        ! Conditional is an example of a statement
*/

/* 
    ? If Statement
    * checks if something is true and executes the code
*/

let lightSwitch = "on";
console.log("The value of the lightSwitch variable is", Boolean(lightSwitch));
if (lightSwitch === "on") {
	// (expr) must resolve to true for the code to run
	console.log("The light is on");
}

/* 
    ? Else If Statement
    * allows us to add additional condition(s) if the prior one has not been satisfied
*/

let temp = 52;

if (temp >= 80) {
	console.log("It's very hot out");
} else if (temp >= 70) {
	console.log("A very nice day");
}

/* 
    ? Else Statement
    * if all else fails, execute this code
*/

if (temp >= 100) {
	console.log("Inferno");
} else {
	console.log("It's some other temperature");
}

/* 
    ? SYNTAX:

    if (conditionIsTrue) {
        execute this code block
    } else if (conditionIsTrue) {
        execute this code block
    } else {
        execute this code block
    }
*/

/* 
    ? Logical Operators NOT AND OR
    * OR Operator ( || )
        * true if one of the conditions is true
        * ex: I wil be happy if I go to the movies OR eat dinner
        * (dinner & movies = true)
        * (no dinner & movies = true)
        * (dinner & no movies = true)
        * (no dinner & no movies = false)
    * AND Operator ( && )
        * true if both conditions are true
        * ex: I will be happy if I go to the mvoies AND eat dinner
        * (dinner and movies = true)
        * (no dinner and movies = false)
        * (dinner and no movies = false)
        * (no dinner and no movies = false)
    * NOT operator ( ! or in expression by != )
        * flips the logical expression
*/

// ? NOT Example
lightSwitch = 0;

if (!lightSwitch) {
	console.log("The light switch is off");
}

lightSwitch = "off";

if (lightSwitch != "on") {
	console.log("This light switch is off");
}

// ? AND OR Example

let sensor = "inactive";
let alarm = true;

if (sensor == "active" || alarm) {
	console.log("The alarm may be on");
} else if (sensor == "inactive" && alarm) {
	console.log("Your sensor is likely broken");
} else if (sensor == "inactive" && !alarm) {
	console.log("The alarm is likely off");
}

/* 
    ! Challenge
    * create an age variable with a number between 0-82
    * check if the age is under 16, say they can't drive
    * if the age is betweetn 16 & 18, say they can drive but not drink
    * if the age is between 18 & 21, they can vote but not drink
    * if the age is over 21, they can drink
    ! Spicey mode
    * how would you handle if a user inputs not a number? ex: "potato" as age
*/

let age = 20

// if (age < 16) {
//     console.log("cannot drive")
// } else if (age < 18) {
//     console.log("user can drive but not drink")
// } else if (age < 21) {
//     console.log("user can vote but not drink")
// } else if (age >= 21) {
//     console.log("partayyy")
// } else {
//     console.log("invalid input yo. do you know how to count?!")
// }

if (age < 16) {
    console.log("cannot drive")
}
if (age < 18) {
    console.log("user can drive but not drink")
}
if (age < 21) {
    console.log("user can vote but not drink")
}
if (age >= 21) {
    console.log("partayyy")
} else {
    console.log("invalid input yo. do you know how to count?!")
}

/* 
    ! Important Thought
    * if you want your condition to display any possible match, create separate if statements
    * if you want your condition to display ONE EXACT match, chain your conditional statements
*/

