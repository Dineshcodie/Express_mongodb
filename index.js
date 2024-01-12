const express=require('express')
const cors=require('cors');
const  connectDB  = require('./controllers/util/database');
const studentRouter=require('../Express_mongodb_demo/routes/student_routes')
const bookRouter=require('../Express_mongodb_demo/routes/book_routes')
const userRouter=require('../Express_mongodb_demo/routes/user-routes');
const blogRouter=require('../Express_mongodb_demo/routes/blog_routes');
const errorhandler = require('./middleware/error/errorhandler');
const app=express();
app.use(express.json())
app.use(cors())
app.use('/student',studentRouter)
app.use('/book',bookRouter)
app.use('/user',userRouter)
app.use('/blog',blogRouter)
app.use(errorhandler)
const start=async()=>{
    try{
        const connect=await connectDB()
        console.log(connect)
        app.listen(8081,()=>{
            console.log('server is listening at port number 8081')
    })
}catch(err){
    console.log(err)
}
}
start()