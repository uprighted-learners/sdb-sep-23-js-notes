function greeter(name) {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    if (name == "Luke skywalker" || name == "Palpatine" || name == "Lord voldemort") {
        console.log(`Go away, ${name}!!!!`)
    } else {
        console.log(`Hello, ${name}`)
    }
}

greeter("luke Skywalker")
greeter("palpatine")
greeter("lord voldemort")
greeter("paul")