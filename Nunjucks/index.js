const express = require("express")
const app     = express()
const njk     = require("nunjucks")

njk.configure(
    "views",
    {
        express: app
    }
)

app.get("/", (req,res) => res.render("index.njk"))

app.get(
    "/:word",
    (req,res) => res.render(
        "word.njk",
        {
            word       : req.params.word,
            wordLength : req.params.word.length
        }
    )
)


app.listen(12345, () => console.log("Server has been started!"))