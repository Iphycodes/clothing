import React from "react";

// import { StyledButton, GoogleButton } from "./custom-button.styled";


import '../custom-button/custom-button.styles.scss'

export const CustomButton = ({signWithGoogle, children, ...rest}) => (
    <button className={`${signWithGoogle ? 'google' : ''} custom-button`} {...rest}>
    {children}
    </button>

    // if(signWithGoogle){
    //     return (
    //     <GoogleButton>
    //         {children}
    //     </GoogleButton>
    //     )
    // }
    // else{
    // return (
    //     <StyledButton>
    //     {children}
    //     </StyledButton>
    // )
    // }

)