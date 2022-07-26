const router = require("express").Router();
const { verifyToken, verifyTokenandAuthorization, verifyTokenandAdmin } = require("../middleware/verifyToken");
const cart = require("../models/Cart");


// creting cart 
router.post("/", verifyToken, async (req, res) => {
    const newCart = new cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json("some interanl error occured while adding your cart ")

    }
}
);



//  updating cart of user
// http://localhost:5000/api/cart/update/:id
router.put("/update/:id", verifyTokenandAuthorization, async (req, res) => {

    try {
        const updatedCart = await cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json("some error has occured while updating the existing products");
    }
});




//  delelting added cart of user 
// http://localhost:5000/api/cart/thisp/:id
router.delete("/thisp/:id", verifyTokenandAuthorization, async (req, res) => {
    try {
        await cart.findByIdAndDelete(req.params.id);
        res.status(200).json("your product has been deleted ");

    } catch (error) {
        res.status(500).json("internal error occured while deleting cart ")
    }
})


// get all carts of user
// http://localhost:5000/api/cart/getall/id
router.get("/getall/id", verifyToken ,async(req,res)=>{
    try{
        const getproduct = await cart.find();
        res.status(200).json(getproduct)
    }catch(error){
        res.status(500).json("some error ocurred while getting all carts")
    }
})





module.exports = router