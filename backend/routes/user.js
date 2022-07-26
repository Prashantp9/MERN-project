const { verifyToken, verifyTokenandAuthorization,verifyTokenandAdmin } = require("../middleware/verifyToken");
const User = require("../models/User");

const router = require("express").Router();


// here we are creating a request for updating user info 
// http://localhost:5000/api/user/:id
router.put("/:id",verifyTokenandAuthorization , async(req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASS).toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    });

// get user by user id and delelte
 // http://localhost:5000/api/user/delete/:id
router.delete("/this/:id", verifyTokenandAdmin ,async(req,res)=>{
  try {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json("this user has been deleted ");
  
} catch (error) {
    res.status(500).json("internal error occured")
}
})

// get user by user id
 // http://localhost:5000/api/user/getusers/:id
router.get("/getusers/:id", verifyTokenandAdmin ,async(req,res)=>{
  try {
  const user = await User.findById(req.params.id);
  const { password, ...others} = user._doc
  res.status(200).json(others);
  
} catch (error) {
    res.status(500).json("internal error occured")
}
})
// get all users by user 
 // http://localhost:5000/api/user/getusers
router.get("/getusers", verifyTokenandAdmin ,async(req,res)=>{
  try {
  const user = await User.find();
  res.status(200).json(user);
  
} catch (error) {
    res.status(500).json("internal error occured")
}
})


module.exports = router 