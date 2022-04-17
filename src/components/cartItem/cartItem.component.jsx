import React from "react";

import '../cartItem/cartItem.style.scss'

export const CartItem = ({item: {imageUrl, price, name, quantity}}) => {

    return (
        <div className="cartItem">
            <div className="image">
                <img src={imageUrl} alt="cartImg"/>
            </div>
            
            <div className="desc">
                <span>{name}</span>
                <span>{`${quantity} x $${price}`}</span>
            </div>
        </div>
    )
}