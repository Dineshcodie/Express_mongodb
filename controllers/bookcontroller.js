const book = require('../models/book');

const createBook=async (req,res)=>{
    try{
        const stu=await book.create(req.body);
        res.status(201).json(stu)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}
module.exports={createBook}