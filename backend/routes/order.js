const router = require("express").Router();
const { verifyToken, verifyTokenandAuthorization, verifyTokenandAdmin } = require("../middleware/verifyToken");
const Order = require("../models/Order");


// creting orders
// http://localhost:5000/api/order/corder
router.post("/corder", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json("some interanl error occured while adding your order ")

    }
}
);



//  updating order of user
// http://localhost:5000/api/order/update/:id
router.put("/update/:id", verifyTokenandAuthorization, async (req, res) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json("some error has occured while updating the existing order");
    }
});




//  delelting added cart of user 
// http://localhost:5000/api/order/thisp/:id
router.delete("/thisp/:id", verifyTokenandAuthorization, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("your order has been deleted ");

    } catch (error) {
        res.status(500).json("internal error occured while deleting order ")
    }
})



// get all orders of user
// http://localhost:5000/api/order/getall/id
router.get("/getall/id", verifyToken ,async(req,res)=>{
    try{
        const getorder = await Order.find();
        res.status(200).json(getorder)
    }catch(error){
        res.status(500).json("some error ocurred while getting all orders")
    }
})


router.get("/income", verifyTokenandAdmin , async(req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const priviousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));
    try {
        const income = await Order.aggregate([
            {$match :{createdAt: {$gte :priviousMonth}}},
            {
                $project:{
                    _id :"$month",
                    total :{$sum :"$sales"}
                }
            }
        ])
        res.status(200).json(income)
        
    } catch (error) {
        res.status(500).json("some internal error occured while getting an income")
    }

});



module.exports = router