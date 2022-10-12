const express = require("express")
const  path  = require("path")
const fs = require("fs-extra")

var app = express() 

app.get("/" , function(request, response) {
    console.log("Someone is visiting us!")
    
    response.send("Welcome to my boring site. This is not even html, just text.")

})

app.get("/about", function(request, response){
    console.log("Someone is visiting us in about!")
    
    response.status(200).sendFile("./about.html", { root: "C:/Users/ulfur.stigsson/Documents/GitHub/Projekt & Utmaningar WSP/express-server" })
})

app.get("/lbs", function(request, response){
    console.log("Someone is visiting us in lbs!")
    
    response.send("<h1>lbs is a nice school!</h1> <p>den bästa med lbs är:</p> <ul><li>Lärare</li><li>Vänner</li></ul>")
})

app.listen(3000, function(){
    console.log("Server started on port 3000. Press Ctrl + C to close it.")    
})