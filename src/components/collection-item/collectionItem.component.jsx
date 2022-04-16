import React from "react";

import '../collection-item/collectionItem.styles.scss'
import { CustomButton } from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.reducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


export const CollectionItem = ({id, imageUrl, price, name}) => {
    const cartItem = useSelector(state => (state.cart.cartItem))
    const dispatch = useDispatch()

    const item = {
            id: id,
            name: name,
            imageUrl: imageUrl,
            price: price
    }

    async function asyncDispatch(anyItem){
        return dispatch(addItem(anyItem))
    }

    const handleClick = async () => {
        console.log('done')
        await asyncDispatch(item)
    }

//    useEffect(() => {
//        console.log(cartItem)
//    }, [cartItem])

return (
    <>
    <div className="collection-item">
        <div className="image"
        style = {{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <div className="button-container">
            <CustomButton onClick = {handleClick}>ADD TO CART</CustomButton>
        </div>
    </div>
    </>
)
}