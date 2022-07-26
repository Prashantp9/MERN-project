const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const cors = require("cors")
// dotenv.config is the method to use dotenv folder in our index.js where we actually run are script 
dotenv.config();
// here we connected are mongodb server 
// process.env.MONGO_URL
mongoose
    .connect("mongodb+srv://mainuser:admin@cluster0.yn5ka.mongodb.net/shop?retryWrites=true&w=majority")
    .then(() => console.log("you are connected to mongodb"))
    .catch((err) => { console.log("err :", err) });

app.use(cors())    
app.use(express.json())

app.use("/api/user", userRoute);
app.use("/auth/user", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("you are connected to the server")
})
