import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CollectionItem } from "../../components/collection-item/collectionItem.component";
import '../collection-page/collection-page.style.scss'


export const CollectionPage = () => {
    const collections = useSelector(state => state.shop.collections)
    const {categoryId} = useParams() 

    console.log(categoryId)

    const collectionItem = collections.find(collection => collection.routeName === categoryId)
    console.log(collectionItem)
    
    if (collectionItem){
        const {title, items} = collectionItem
        return(
            <div className="collection-page">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <div className="collections">
                        {items.map(({id, ...rest}) => (
                        <CollectionItem key={id} id={id} {...rest}/>
                        ))}
                    </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>Category {categoryId} not found</h1>
            </div>
        )
    }
    
}