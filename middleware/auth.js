const jwt=require('jsonwebtoken');
const CustomeApiError = require('./error/customApiError');

const authMiddleware=async (req,res,next)=>{
    const authHeader=req.headers.authorization;
    // if there is no token
    //if there is a token,but it doesn't start with Bearer
    if(!authHeader || !authHeader.startsWith('Bearer')){
     next( new CustomeApiError('Not Authorized',401)) // go to errorhandler
    }
    //take the payload which contains the data
    const token=authHeader.split(' ')[1];
    console.log(token)
     try{
        const decoded=jwt.verify(token,token,process.env.JSON_SECRETKEY)
        
        //fetch the user details
        const{email,username,role}=decoded;
        req.user=(email,username,role)
        next()
    }catch(err){
       console.log(err)
       next(new CustomeApiError('Not a valid token',401))
    }
}
module.exports=authMiddleware