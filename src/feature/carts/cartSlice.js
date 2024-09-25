import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'carts',
    initialState : {
        cartItems : []
    },
    reducers : {
        addCartItem  : (state,action)=>{
            state.cartItems.push(action.payload.item)
        },
        removeCartItem  : (state,action)=>{
            state.cartItems.splice(action.payload.index,1)
        }
    }
})