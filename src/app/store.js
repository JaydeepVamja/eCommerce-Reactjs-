import { configureStore } from "@reduxjs/toolkit";
import productAPI from "./feature/productApi";
import cartSlice from "./feature/cart";

export const store = configureStore({
    reducer : {
        api: productAPI,
        cart: cartSlice,
    }
})