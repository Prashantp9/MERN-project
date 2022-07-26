import {createSlice} from "@reduxjs/toolkit"

const whishlistslice = createSlice({
    name:"whishlist",
    initialState:{
        products:[],
        counter:0,
       
    },
   
    reducers:{
        whishlistproduct:(state,action)=>{
     
            state.products.push(action.payload);
            state.counter += action.payload.counta;
           

        }
    }

    

})
export const { whishlistproduct } = whishlistslice.actions;
export default whishlistslice.reducer;