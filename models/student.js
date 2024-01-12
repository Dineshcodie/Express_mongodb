const mongoose=require('mongoose')
const StudentSchema=new mongoose.Schema(
    {
        "name":{type:String,required:true},
        "age":{type:Number,required:true}
    })
    //student refers to single student document name
    //collection name -> students
    //documents name -> student
    //structure -> {name:'..',age:20}
    module.exports=mongoose.model('student',StudentSchema)