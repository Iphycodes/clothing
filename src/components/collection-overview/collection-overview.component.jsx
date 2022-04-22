import React from "react";
import { useSelector } from "react-redux";

import { CollectionPreview } from "../collection-preview/collectionPreview.component";

export const CollectionOverview = () => {
        const collections = useSelector(state => state.shop.collections)

    return(
        <div>
            {collections.map(({id, ...rest}) => (
                <CollectionPreview key={id} {...rest}/>
            ))}
        </div>
    )
}