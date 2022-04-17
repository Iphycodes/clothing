import React from "react";

import './input.style.scss'


export const Input = ({onChange, type, name, value, label, validate}) => (
    <div className="group">
        <input className="form-input"
            onChange={onChange}
            name={name}
            type={type}
            value = {value}
            validate = {validate}
        />
        {label ? <label htmlFor={name} className = {`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
        
    </div>
)


