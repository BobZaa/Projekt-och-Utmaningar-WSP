var server  = require("express")
var app     = server()

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req,res) {
    res.sendFile(__dirname+"/index.html")    
})

app.post("/process", function(req,res){
    let value1 = req.body.value1
    let value2 = req.body.value2

    const sum = Number(value1) + Number(value2)

    res.send(`<p> ${value1} + ${value2} = ${sum}. Isn't that wonderful? </p>`)
})
  
app.listen(12345, () => console.log("Server has started!")) 