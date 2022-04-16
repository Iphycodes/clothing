import { createSlice } from "@reduxjs/toolkit";

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

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addItem: (state, action) => {
            state.cartItem = addItemToCart(state.cartItem, action.payload)
        }
    }
})

export const {addItem} = cartSlice.actions

export default cartSlice.reducer