import React from "react";
import DirectoryMenu from "../../components/Directory-menu/directorymenu.component";
import { HomePageContainer } from "./homepage.styled";

// import '../homepage/homepage.styles.scss'

const Homepage = () => {

    return (
        <HomePageContainer>
           <DirectoryMenu/>
        </HomePageContainer>
    )
}



export default Homepage;