const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config();

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader
        jwt.verify(token,process.env.SEC_TOKEN , (err,user)=>{
            if(err){
               return res.status(401).json("token is invalid")
            }

            req.user = user;
            
            
            next();
        });
    }else{
        res.status(401).json("your are not authenticate")
    }
};

const verifyTokenandAuthorization = (req,res,next)=>{
    verifyToken(req,res, ()=>{
    
      if( req.user.id == req.params.id) {
            next();
        }else{
            res.status(403).json("you are not allowed to do that !")
        }
    })
}
const verifyTokenandAdmin = (req,res,next)=>{
    verifyToken(req,res, ()=>{
    
      if(req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("you are not an admin")
        }
    })
}
module.exports = {verifyToken,verifyTokenandAuthorization,verifyTokenandAdmin};