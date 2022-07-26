import {createSlice} from "@reduxjs/toolkit"

const cartslice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
        subtotal: 0 
    },
    reducers:{
        addproduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += (action.payload.price * action.payload.productquantity ) < 500 ? (action.payload.price * action.payload.productquantity ) + 120 : (action.payload.price * action.payload.productquantity )
            state.subtotal += action.payload.price * action.payload.productquantity ;

        }
    }

    

})
export const { addproduct } = cartslice.actions;
export default cartslice.reducer;