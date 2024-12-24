const userModel = require("../model/userModel")

exports.insertuser =async (t)=>
{
    let user = new userModel(
        {
            username:t.username,
            pwd:t.pwd,
            email:t.email,
            contactno:t.contactno

        }
    )
  let msg ="user not added"
   await user.save()
    .then(()=>msg="user added")
    return msg
    
}
exports.checkLogin = async(email,pwd)=>
{
    let conditon ={email:email,pwd:pwd}
    let data = await userModel.find(conditon)
    if(data.length>0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
exports.deleteuser = async (name)=>
{
    let t = {username:name}
    let msg = "user not delted"

    await userModel.deleteOne(t).
    then(()=>msg = "user deleted ")
    return msg ;

}
exports.updateuser = async (name)=>
{
    let t  = {username:name}
    let s = {status:'complete'}

    let msg = "user status not updated";
    await userModel.updateOne(t,{$set:s})
    .then(()=>msg = "record updated")
    return msg
}
exports.getallusers =async ()=>
{
let data = await userModel.find();
return data;
}