import React from "react";

import { CollectionItem } from "../collection-item/collectionItem.component";
import { useSelector } from "react-redux";
import '../collection-preview/collection-preview.styles.scss'

export const CollectionPreview = ({title, items}) => {
    const cartItem = useSelector((state) => (state.cart.cartItem))

return (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            .filter((item, idx) => idx < 4)
            .map(({id, ...rest}) => (
            <CollectionItem key = {id} id = {id} {...rest}/>
            ))}
        </div>
    </div>

)
}
