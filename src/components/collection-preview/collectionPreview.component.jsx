import React from "react";

import { CollectionItem } from "../collection-item/collectionItem.component";

import '../collection-preview/collection-preview.styles.scss'

export const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            .filter((item, idx) => idx < 4)
            .map(({id, ...rest}) => (
            <CollectionItem key = {id} {...rest}/>
            ))}
        </div>
    </div>

)