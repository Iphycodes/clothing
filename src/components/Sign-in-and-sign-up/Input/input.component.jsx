import React from "react";

import '../Input/input.style.scss'


export const Input = ({onChange, type, name, value, label}) => (
    <div className="group">
        <input className="form-input"
            onChange={onChange}
            name={name}
            type={type}
            value = {value}
        />
        {label ? <label htmlFor={name} className = {`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
        
    </div>
)


