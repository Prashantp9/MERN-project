const router = require("express").Router();
const { verifyToken, verifyTokenandAuthorization, verifyTokenandAdmin } = require("../middleware/verifyToken");
const Product = require("../models/Product");



router.post("/", verifyTokenandAdmin, async (req, res) => {
    const newProducts = new Product(req.body);
    try {
        const savedProduct = await newProducts.save();
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json("some interanl error occured in your adding product list ")

    }
}
);



//  updating poducts of admins
// http://localhost:5000/api/product/update/:id
router.put("/update/:id", verifyTokenandAdmin, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json("some error has occured while updating the existing products");
    }
});




//  delelting added product of admin 
// http://localhost:5000/api/product/thisp/:id
router.delete("/thisp/:id", verifyToken, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("your product has been deleted ");

    } catch (error) {
        res.status(500).json("internal error occured while deleting product ")
    }
})


// get all products by admins id
// http://localhost:5000/api/product/getproduct/:id
router.get("/getproduct/:id",  async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json("internal error occured while getting admin product")
    }
})

// finding a single product by product by product id 
// http://localhost:5000/api/product/selectedproduct/:id

router.get("/selectedproduct/:id",  async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json("internal error occured while getting admin product")
    }
})


// get products by category and newly added products 
// http://localhost:5000/api/product
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qcategory = req.query.category;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1)
        } else if (qcategory) {
            products = await Product.find({
                categories: {
                    $in: [qcategory],
                },
            });
        } else {
            products = await Product.find()
        }
        res.status(200).json(products)
    }

    catch (error) {
        res.status(500).json("internal error occured")
    }
})



module.exports = router