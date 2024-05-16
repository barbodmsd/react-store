import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import cartSlice from "./Slices/cartSlice";

// create store
const store =configureStore({
    // present the slices to store 
    reducer:{
        authSlice,
        cartSlice
    }
})
export default store
