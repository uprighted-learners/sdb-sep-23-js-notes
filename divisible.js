const divisible = (divident, divisor) => {
    return (divident % divisor) === 0 ? true : false
}

// console.log(divisible(6, 3))
// console.log(divisible(5, 2))

const divisibleBool = (divident, divisor) => {
    return !Boolean(divident % divisor)
}

console.log(divisibleBool(6, 3))
console.log(divisibleBool(5, 2))