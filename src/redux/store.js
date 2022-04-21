import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../redux/user/user.reducer'
import hiddenReducer from "./cart/hidden.reducer";
// import cartReducer from "./cart/cart.reducer";
import persistStore from "redux-persist/es/persistStore";
import { persistedCartReducer } from "./cart/cart.reducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        hidden: hiddenReducer,
        cart: persistedCartReducer
    }
})

export const persistor = persistStore(store)

export default store