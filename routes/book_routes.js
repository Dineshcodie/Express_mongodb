const express=require('express');
const {createBook}=require('../controllers/bookcontroller');
const router=express.Router();
router.post('/insert',createBook)
module.exports=router