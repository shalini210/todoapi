const mongoose = require("mongoose")
const schema = mongoose.Schema({
    username:String,
    pwd :String,
    email:String,
    contactno:String
})
const user = new mongoose.model("user",schema);
module.exports = user;