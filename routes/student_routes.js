const express=require('express');
const {createStudent,getAllStudent,updateStudent, deleteStudent}=require('../controllers/studentcontroller');
const authMiddleware = require('../middleware/auth');
const router=express.Router();
router.post('/insert',authMiddleware,createStudent)
router.get('/',getAllStudent)
router.get('/update/:id',authMiddleware,updateStudent)
router.delete('/delete/:id',deleteStudent)
module.exports=router