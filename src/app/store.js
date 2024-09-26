import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../config/redux/reducer/cartSlice";

export const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})