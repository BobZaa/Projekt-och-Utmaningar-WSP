const express    = require("express")
const server     = express()
const https      = require("https")
const bodyParser = require("body-parser")


server.use(bodyParser.urlencoded({extended:true}))

server.get("/", function(req,res){
    res.sendFile(__dirname+"/weatherForm.html")
})

server.post("/", function(req,res){
    const city   = req.body.cityName
    const APIkey = "1fa3f2ec11cade165921496be31818ee"
    const units  = "metric"
    const url    = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${APIkey}#`

    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData        = JSON.parse(data)
            console.log(weatherData)
            const name               = weatherData.name
            const temperature        = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
    
            console.log(`Temperature in ${name} is ${temperature}C`)
            res.write("<h1> Thank you for using our services. Your request has been answered </h1>")

            res.write(`<h1> Temperature in ${name} is ${temperature}C</h1>`)  
                
            res.write(`<h1> The weather is ${weatherDescription} </h1>`)
            res.send
        })    
    })
})



server.listen(12345, () => console.log("Server has started!"))
