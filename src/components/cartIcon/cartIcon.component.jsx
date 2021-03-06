import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as ShoppingBag } from '../../assets/shoppingBag.svg';
import '../cartIcon/cartIcon.style.scss'

const CartIcon = () =>  {
    const cartItems = useSelector(state => (state.cart.cartItem))
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        const total = cartItems.reduce((summation, cartItem) => summation + cartItem.quantity, 0)
        console.log(total)
        setAmount(total)
    }, [cartItems])   
    
    return (
        <div className="cart-icon">
            <ShoppingBag className="shopping-icon"/>
            <span className='item-count'>{amount}</span>
        </div>
    )
}


export default CartIcon