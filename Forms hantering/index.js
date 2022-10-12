var server  = require("express")
var app     = server()

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req,res) {
    res.sendFile(__dirname+"/form.html")    
})

app.post("/process", function(req,res){
    var colour = req.body.colour

    res.send(`<p> Your favorite color is ${colour} just as mine! Isn't it wonderful? </p>`)
})
  
app.listen(12345, () => console.log("Server has started!")) 