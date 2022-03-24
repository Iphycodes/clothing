import React from "react";

import '../custom-button/custom-button.styles.scss'

export const CustomButton = ({value, ...rest}) => (
    <button className="custom-button" {...rest}>
        {value}
    </button>
)