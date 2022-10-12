const bil = {
    namn     : "Fiat 600", 
    fungerar : false, 
    resenärer: ["Mamma", 
        "Kusin Fred"]
}

console.log("Bilmodell:", bil.namn)
console.log("Fungerar bilen?", bil.fungerar)
console.log("Vilka reser i bilen?", bil.resenärer)

console.log()

bil.namn      = "BMW Z4"
bil.fungerar  = true
bil.resenärer = ["Omar min kompis",
    "Petunia min vän",
    "John min kollega"]

console.log("Bilmodell:", bil.namn)
console.log("Fungerar bilen?", bil.fungerar)
console.log("Vilka reser i bilen?", bil.resenärer)