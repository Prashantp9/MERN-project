import {createSlice} from "@reduxjs/toolkit"

const filterslice = createSlice({
    name:"filter",
    initialState:{
        filter: "",
       
    },
    reducers: {
        filteredproduct:(state,action)=>{
            state.filter = action.payload.categories;
        }
    }
})

export const { filteredproduct } = filterslice.actions;
export default filterslice.reducer;