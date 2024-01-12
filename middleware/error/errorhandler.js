const CustomeApiError = require('./customApiError');
const CustomeApiErrorv=require('./customApiError');
const errorhandler=(err,req,res,next)=>{
    if(err instanceof CustomeApiError)
    res.status(500).json({'msg':err.message});
    else res.status(500).json({msg:err.message});
};
module.exports=errorhandler