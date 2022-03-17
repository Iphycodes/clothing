import React, { useEffect, useState } from "react";

import SHOP_DATA from "../../shop.data";

import { CollectionPreview } from "../../components/collection-preview/collectionPreview.component";

const Shop = () => {

    const [collections, setCollections] = useState([])

    useEffect(() => {
        setCollections(SHOP_DATA)
    }, [])

    return(
        <div>
            {collections.map(({id, ...rest}) => (
                <CollectionPreview key={id} {...rest}/>
            ))}
        </div>
    )
}

export default Shop;