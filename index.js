const express = require("express")
const app = express();
const db = require("./config/dbconfig")
const taskRouter = require("./router/taskRouter")
const cors = require("cors")
const userRouter = require("./router/userRouter")
// enabling CORS for some specific origins only.
let corsOptions = {
    origin : ['http://localhost:3000',
    'http://localhost:5173'],
 }
 
 app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/users",userRouter)
app.use("/task",taskRouter);
app.get("/",(req,res)=>
{
    res.send("use /tasks for task");

})
app.listen(8080,()=>console.log("server running"))