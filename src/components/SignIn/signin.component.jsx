import React, { useState } from "react";

import { Input } from "./Input/input.component";

import '../SignIn/signin.style.scss'

import { CustomButton } from "../custom-button/custom-button.component";

export const SignIn = () => {
const [details, setDetails] = useState({email: '', password: ''})

let {email, password} = details;

const onSubmit = (e) => {
    e.preventDefault()

    console.log(email)
    console.log(password)

    email = ''
    password = ''


    setDetails({email: email, password: password})   
}



const onChange = (e) => {

    const {value} = e.target;

    e.target.name === 'email' ? email = value : password = value
    
    setDetails({email: email, password: password})
}

return (
    <div className="sign-in">
        <h1>Have an Account</h1>
            <p>Insert email and password</p>

            <form onSubmit={onSubmit}>

                <Input onChange={onChange} name='email' type ='email' value={email} label='Email'/>
                <Input onChange={onChange} name='password' type ='password' value={password} label='Password'/>

                
                <CustomButton value="sign in" backcolor = 'black'/>
            </form>
    </div>
   
)

}


