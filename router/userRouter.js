const express = require("express")
const router = express.Router();
const userController = require("../controller/userController");
const upload=require("../forMulter")
router.post("/",async (req,res)=>
{
  let m =await userController.insertuser(req.body);
    res.send(m);
})
router.put("/profile",upload.single('img'),async(req,res)=>
{
    // app.post('/profile', upload.single('avatar'),
    //  function (req, res) {
        console.log(req.file.filename)
        res.send("saved");
    // let m = await  userController.addprofile(req.body);
    // res.send("updated")
})
router.post("/login",async (req,res)=>
{
    let r =await userController.checkLogin(req.body.email,req.body.pwd)
    res.send(r)
})
router.get("/", async (req,res)=>
{
    let d = await userController.getallusers();
    res.send(d)
})
router.delete("/",async(req,res)=>
{
    let msg = await userController.deleteuser(req.body.name)
    res.send(msg);
})
router.put("/",async(req,res)=>
{
    
    let msg = await userController.updateuser(req.body.name)
    res.send(msg);
})
module.exports = router;