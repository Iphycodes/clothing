import React from "react";
import DirectoryMenu from "../../components/Directory-menu/directorymenu.component";
// import { useMatch } from "react-router-dom";

import '../homepage/homepage.styles.scss'

const Homepage = () => {
    // const match = useMatch();

    // console.log(match);
    return (
        <div className="homepage">
           <DirectoryMenu/>
        </div>
    )
}



export default Homepage;