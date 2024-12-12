const express = require("express")
const app = express();
const db = require("./config/dbconfig")
const taskRouter = require("./router/taskRouter")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/task",taskRouter);
app.get("/",(req,res)=>
{
    res.send("use /tasks for task");

})
app.listen(8080,()=>console.log("server running"))