console.log("(Pancakemaker is booting...")

var readline = require("readline")
var rl = readline.createInterface(
    process.stdin, process.stdout)

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve))
}

class PancakeMaker {
    constructor(eggAmount , flourAmount, milkAmount) {
        this.eggAmount     = eggAmount
        this.milkAmount    = milkAmount
        this.flourAmount   = flourAmount
    }

    calculatePancakes() {
        const possiblePancakeAmounts = [
            8 * this.eggAmount,
            this.flourAmount / 50,
            this.milkAmount / 25
        ]

        const pancakeAmount = Math.min(...possiblePancakeAmounts)

        return pancakeAmount
    }
}

(async () => {
    const eggAmount   = Number(await ask("How many eggs?"))
    const flourAmount = Number(await ask("How much flour?"))
    const milkAmount  = Number(await ask("How much milk?"))

    const pancakeAmount = new PancakeMaker(eggAmount, flourAmount, milkAmount)
    console.log("You can make", pancakeAmount.calculatePancakes(), "pancakes.")

    // NO TOUCH!
    process.exit()
    // No code below here.
})()