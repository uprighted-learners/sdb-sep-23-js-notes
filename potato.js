function potatoPoem() {
    let count = 0    
    while (count < 100) {
        count += 1
        if (count == 8) {
            console.log("More!")
        } else if (count == 4) {
            console.log(`${count}!`)
        } else {
            console.log(`${count} potato`)
        }
    }
}

// potatoPoem()

function poemNoWhile() {
    for (i = 0; i < 10; i++) {
        i == 8 ? console.log("More!")
            : i == 4 ? console.log(`${i}!`)
            : console.log(`${i} potato`)
    }
}

poemNoWhile()