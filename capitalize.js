let capitalize = str => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

console.log(capitalize("menenDEz"))

module.exports = capitalize