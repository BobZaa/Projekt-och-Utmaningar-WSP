class Animal {
    #name = ""
    
    constructor (name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }
}

const dogzaa = new Animal("DogZaa! (tm)")
const beluska = new Animal("beloska")

console.log(dogzaa.getName())
console.log(beluska.getName())
