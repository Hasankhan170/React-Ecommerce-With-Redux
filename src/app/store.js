import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/carts/cartSlice"

export const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})