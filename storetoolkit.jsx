import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./createslice";

export const store=configureStore({
    reducer:{
     counter:counterSlice,
    }
})