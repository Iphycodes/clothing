import React from "react";
import { useParams } from "react-router-dom";
import '../collection-page/collection-page.style.scss'


export const CollectionPage = () => {
    const {categoryId} = useParams() 

    console.log(categoryId)

    return(
        <div>
            <h1>CollectionPage: {categoryId}</h1>
        </div>
    )
}