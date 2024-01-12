const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    "username":{type:String,require:true},
    "email":{type:String,require:true,unique:true},
    "password":{type:String,required:true},
    "role":{type:String,required:true,enum:['admin','user']}
})
//role -Admin /User
module.exports=mongoose.model('User',UserSchema)