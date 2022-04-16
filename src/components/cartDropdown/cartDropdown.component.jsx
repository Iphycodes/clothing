import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { useSelector } from "react-redux";

import '../cartDropdown/cartDropdown.style.scss'

const CartDropdown = () => {
    const hiddenStatus = useSelector((state) => (state.hidden.hiddenStatus))
    
    return (
    <div className={`${hiddenStatus ? 'hidden' : ''} cart-dropdown`}>
        <div className="cart-item"/>
        <CustomButton>Go to CheckOut</CustomButton>
    </div>
    )
}

export default CartDropdown