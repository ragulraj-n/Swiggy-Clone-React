import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers: {
        addItems : (state,action) =>{
            state.cart.push(action.payload);
        },
        removeItems : (state) => {
            state.cart.pop();
        },
        clearItems : (state)=>{
            state.cart.lenght = 0;
        }
    }
});

export const  {addItems , removeItems , clearItems} = cartSlice.actions;
export default cartSlice.reducer;