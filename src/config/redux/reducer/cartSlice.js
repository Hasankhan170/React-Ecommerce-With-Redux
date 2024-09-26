import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name : 'carts',
    initialState : {
        cartItems : []
    },
    reducers : {
        addItem : (state,action)=>{
            state.cartItems.push(action.payload)
        },
        
    }
})

export const {addItem} = cartSlice.actions

export default cartSlice.reducer;