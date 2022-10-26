const X = 5
const Y = 7

function sum(arg1 , arg2) {
    return arg1 + arg2     
}

function product(arg1, arg2) {
    return arg1 * arg2
}

function modulus(arg1, arg2) {
    return arg1 % arg2
}

const sumXY = sum(X, Y)
const productXY = product(X,Y)
const modulusXY = modulus(X,Y)
const modulusYX = modulus(Y,X)

console.log(`${X} plus ${Y} är lika med ${sumXY}.`)
console.log(`${X} gånger ${Y} är lika med ${productXY}.`)
console.log(`Resten av ${X} delat med ${Y} är ${modulusXY}.`)
console.log(`Resten av ${Y} delat med ${X} är ${modulusYX}.`)