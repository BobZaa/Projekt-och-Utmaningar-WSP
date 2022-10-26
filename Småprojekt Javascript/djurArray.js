class Djur {
    constructor(arg1, arg2) {
        this.vanligtNamn  = arg1
        this.latinsktNamn = arg2      
    }
}

let fantastiskaDjur = []
fantastiskaDjur.push(new Djur ("bi","bius honungus"))
fantastiskaDjur.push(new Djur ("jasper (hund)","woof woof"))
fantastiskaDjur.push(new Djur ("dogzaa","dogzer"))

console.log(fantastiskaDjur)