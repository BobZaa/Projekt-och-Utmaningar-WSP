const express    = require("express")
const server     = express()
const njk        = require("nunjucks")
const https      = require("https")
const bodyParser = require("body-parser") 

njk.configure(
    "views", 
    { express : server }
)

server.use(bodyParser.urlencoded({extended: true}))

server.get("/", function(req, res){
    res.render("index.njk")
})

server.post("/results", function(req, res){
    const url = "https://www.deckofcardsapi.com/api/deck/<<new>>/draw/?count=1"
    
    https.get(url, function(response){
        response.on("data", function(data){
            const cardData  = JSON.parse(data)
            const images    = cardData.cards[0].image
            const value     = cardData.cards[0].value
            const suit      = cardData.cards[0].suit
            const remaining = cardData.remaining

            console.log(`You have the ${value} of ${suit}`)

            res.write(`<h1> You have the ${value} of ${suit} </h1>`)
            res.write(`<img src="${images}">`)
            res.write(`There are ${remaining} cards left`)
        })
    })
})

server.listen(12345, () =>  console.log("Server has started!"))