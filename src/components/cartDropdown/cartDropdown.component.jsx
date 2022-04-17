import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { useSelector } from "react-redux";
import { CartItem } from "../cartItem/cartItem.component";
import '../cartDropdown/cartDropdown.style.scss'
import { useNavigate } from "react-router-dom";
import {toggleHidden} from '../../redux/cart/hidden.reducer'
import { useDispatch } from "react-redux";

const CartDropdown = () => {
    const hiddenStatus = useSelector((state) => (state.hidden.hiddenStatus))
    const cartItems = useSelector((state) => state.cart.cartItem)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => { 
    if(cartItems.length){
        navigate('/checkout')
        dispatch(toggleHidden())
    } 
    else{
        alert('No item on the cart')
    }
    }
    
    return (
    <div className={`${hiddenStatus ? 'hidden' : ''} cart-dropdown`}>
        <div className="cart-items">
            {cartItems.length ?
            cartItems.map(cartItem => {
                return (<CartItem key={cartItem.id} item={cartItem}/>)
            }) : 
            <div className="empty-cart">
                <span>Your cart is Empty</span>
            </div>
            }
        </div>
        <CustomButton onClick = {handleClick}>
            Go to CheckOut
        </CustomButton>
    </div>
    )
}

export default CartDropdown