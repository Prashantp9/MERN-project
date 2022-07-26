const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js")
const dotenv = require("dotenv")
const jwt = require('jsonwebtoken');
dotenv.config()



// here we creating a post request for registration 
// http://localhost:5000/auth/user/register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASS).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err)
    }
})


// now here we crating a endpoint for user login 
//  http://localhost:5000/auth/user/login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            return res.status(404).json("wrong credentials ")
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SEC_PASS);
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        if (Originalpassword !== req.body.password) {
            return res.status(404).json("please try again with correct credentials")
        }


        const jwttoken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.SEC_TOKEN)

        const { password, ...others } = user._doc;
        const success = true;
        res.status(200).json({ ...others,jwttoken,success })

    } catch (err) {
        res.status(500).json(err)

    }


})
module.exports = router;