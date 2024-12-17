const express = require('express')

const upload =require("./forMulter")

const app = express()
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/demo.html")
})


app.post('/profile', upload.single('avatar'), function (req, res) {
    res.send("saved");
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
app.listen(8080,()=>console.log("server running"))