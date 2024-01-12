const student=require('../models/student');
const CustomeApiError = require('../middleware/error/customApiError');

const createStudent=async (req,res)=>{
    try{
        const stu=await student.create(req.body);
        res.status(201).json(stu)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}
    const getAllStudent=async (req,res)=>{
        try{
            const students=await student.find();
            res.status(200).json(students)
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
}
const updateStudent=async(req,res,next)=>{
    const studentId=req.params.id;
    try{
        console.log(req.body);

        const updateStud=await student.findByIdAndUpdate(studentId,req.body,{new:true});
        if(!updateStud)
          next(new CustomeApiError(`cannot be updated..${studentId} doesnt exists..`,400))
          else
        res.status(200).json(updateStud)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
};

const deleteStudent=async(req,res)=>{
    const studentId=req.params.id;
    try{
        await student.deleteOne({_id:studentId})
        res.status(200).json({"message":"Deleted Successfully..."})
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}
module.exports={createStudent,getAllStudent,updateStudent,deleteStudent}

