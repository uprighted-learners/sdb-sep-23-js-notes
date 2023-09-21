function createAccount(initial) {
    return initial
}

let paulsChecking = createAccount(1000)

console.log(paulsChecking)

function deposit(amt, acct) {
    if (amt > 0) {
        acct += amt
        console.log("Current balance", acct)
    } else {
        console.log("Enter positive number")
    }
}

// deposit(100, paulsChecking)

function withdraw(amt, acct) {
    if (amt <= 0) {
        console.log("Incorrect amount")
    }
    if (amt > acct) {
        console.log("Insufficient balance")
    } else {
        acct -= amt
        console.log("Current balance", acct)
    }
}

// withdraw(1100, paulsChecking)

function checkBalance(acct) {
    console.log("Current balance", acct)
}

checkBalance(paulsChecking)
