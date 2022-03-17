import React from "react";


export const Input = ({onChange, type, name, value, label}) => (
    <div>
        <input 
            onChange={onChange}
            name={name}
            type={type}
            value = {value}
        />
        <label htmlFor={name}>{label}</label>
    </div>
)


