const Blog=require('../models/blog')
const User=require('../models/User')
const createBlog=async(req,res)=>{
    const blog=req.body;
    const user=req.user
    console.log(user)
    try{
        const userId=await User.findOne({'email':user.email})
        blog.author=userId;
        const createBlog=await Blog.create(blog)
        res.status(200).json(createBlog)
    }catch(err){
        res.status(500).json(err)
    
    }
}
module.exports={createBlog}