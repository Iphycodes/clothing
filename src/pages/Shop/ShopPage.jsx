import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { CollectionOverview} from "../../components/collection-overview/collection-overview.component";

const Shop = () => {
    const location = useLocation()

    console.log(location.pathname)

    return(
        <div>
            {/* <CollectionOverview/> */}
            {/* <Routes>
                <Route path='/shop' element={<CollectionOverview/>}/>
            </Routes> */}
            <Outlet/>
        </div>
    )
}

export default Shop;