import React from "react";


import '../custom-button/custom-button.styles.scss'

export const CustomButton = ({signWithGoogle, children, ...rest}) => (
    <button className={`${signWithGoogle ? 'google' : ''} custom-button`} {...rest}>
        {children}
    </button>
)