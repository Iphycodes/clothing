import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../redux/user/user.reducer'
import hiddenReducer from "./cart/hidden.reducer";
// import cartReducer from "./cart/cart.reducer";
import persistStore from "redux-persist/es/persistStore";
import { persistedCartReducer } from "./cart/cart.reducer";
import { persistedDirectoryReducer } from "./directory/directory.reducer";
import { persistedShopReducer } from "./shop/shop.reducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        hidden: hiddenReducer,
        cart: persistedCartReducer,
        directory: persistedDirectoryReducer,
        shop: persistedShopReducer
    }
})

export const persistor = persistStore(store)

export default store