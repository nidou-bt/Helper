const jwt = require('jsonwebtoken');
const User = require('../models/User');
const isAuth=async(req,res,next)=>{
    try {
    const token=req.headers["authorization"];
    if(!token){
        return res.status(401).send({errors:[{msg:"Not Authorized"}]});
    }
    //decode token
    const decoded=jwt.verify(token, process.env.SECRET_KEY);
    if(!decoded){
        return res.status(401).send({errors:[{msg:"Not Authorized"}]});
    }
    const findUser=await User.findById(decoded._id)
    // verified id of user
    if(!findUser){
        return res.status(200).send({errors:[{msg:"No User With This Id"}]})
    }
    req.user=findUser;
        next();
    } catch (error) {
        return res.status(401).send({errors:[{msg:"Not Authorized"}]})
    }
    }
    
    module.exports=isAuth;