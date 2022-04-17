import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CheckOutItem } from "../../components/checkOutItem/checkoutItem.component";

import '../checkOutPage/checkOutPage.style.scss'

const CheckOutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItem)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        console.log(cartItems)
        const total = cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price, 0)
        setCartTotal(total)
    }, [cartItems])
    

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-column">
                    <span>Product</span>
                </div>
                <div className="header-column">
                    <span>Description</span>
                </div>
                <div className="header-column">
                    <span>Quantity</span>
                </div>
                <div className="header-column">
                    <span>Price</span>
                </div>
                <div className="header-column">
                    <span>Remove</span>
                </div>
            </div>
                {cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
            <div className="total">
                <span>{`TOTAL: $${cartTotal}`}</span>
            </div>
        </div>
    )
}

export default CheckOutPage