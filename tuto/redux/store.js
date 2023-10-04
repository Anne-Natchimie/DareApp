import { configureStore } from "@reduxjs/toolkit";
import category from "./category";
import product from "./product";


export const store = configureStore({
    reducer:{
        category        : category,
        product         : product,
    }

})