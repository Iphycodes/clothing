import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.reducer";

import '../checkOutItem/checkoutItem.style.scss'


export const CheckOutItem = ({cartItem}) => {
        const cartItems = useSelector(state => state.cart.cartItem)
        const dispatch = useDispatch()
        const {imageUrl, name, quantity, price} = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
            <div className="remove-one" onClick={() => {
                dispatch(removeItem(cartItem))
                console.log(cartItems)
                }}>&lt;</div>
            <span className='qt'>{quantity}</span>
            <div className="add-one" onClick={() => {
                dispatch(addItem(cartItem))
                console.log(cartItems)
                }}>&gt;</div>
            </div>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => dispatch(clearItem(cartItem)) }>&#10006;</span>
        </div>
    )
}