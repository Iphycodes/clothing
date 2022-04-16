import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../redux/user/user.reducer'
import hiddenReducer from "./cart/hidden.reducer";
import cartReducer from "./cart/cart.reducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        hidden: hiddenReducer,
        cart: cartReducer
    }
})

