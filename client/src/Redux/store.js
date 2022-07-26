import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart"
import filterReducer from "./filter"
import addwhishlist from "./whishlist"

export default configureStore({
     reducer:{
         cart: cartReducer,
         filter: filterReducer,
         whishlist: addwhishlist
     }
})