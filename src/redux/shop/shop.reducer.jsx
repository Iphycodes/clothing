import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import SHOP_DATA from "./shop.data";

const persistConfig = {
    key: 'root',
    storage
}

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopSlice = createSlice({
    name: 'shop',
    initialState: INITIAL_STATE,
    reducers: {

    }
})

export const persistedShopReducer = persistReducer(persistConfig, shopSlice.reducer)

