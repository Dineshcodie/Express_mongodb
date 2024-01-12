const express=require('express')
const createBlog=require('../controllers/blogcontroller')
const authMiddleware=require('../middleware/auth')
const router=express.Router()
router.post('/',authMiddleware,createBlog);