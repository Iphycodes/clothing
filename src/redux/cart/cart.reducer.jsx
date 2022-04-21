import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
  }

const INITIAL_STATE = {
    cartItem: []
}

const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

const clearItemFromCart = (cartItems, cartItemToClear) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToClear.id)

    if(existingItem){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
    }
}

const removeItemFromCart = (cartItems, cartItemToRemove) => {

    if(cartItemToRemove.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
   
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addItem: (state, action) => {
            state.cartItem = addItemToCart(state.cartItem, action.payload)
        },
        clearItem: (state, action) => {
            state.cartItem = clearItemFromCart(state.cartItem, action.payload)
        },
        removeItem: (state, action) => {
            state.cartItem = removeItemFromCart(state.cartItem, action.payload)
        }
    }
})

export const {addItem, clearItem, removeItem} = cartSlice.actions

// export default cartSlice.reducer

export const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer)