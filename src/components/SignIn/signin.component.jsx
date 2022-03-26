import React, { useState } from "react";

import { Input } from "./Input/input.component";

import '../SignIn/signin.style.scss'

import { CustomButton } from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";



export const SignIn = () => {
const [details, setDetails] = useState({email: '', password: ''})

let {email, password} = details;

const onSubmit = (e) => {
    e.preventDefault()

    email = ''
    password = ''

    setDetails({email: email, password: password})   
}



const onChange = (e) => {

    const {value} = e.target;

    e.target.name === 'email' ? email = value : password = value
    
    setDetails({email: email, password: password})
}

// const googleSign = async () => {
//     let details = await signInWithGoogle()

//     console.log(details)
// }

return (
    <div className="sign-in">
        <h1>Have an Account</h1>
            <p>Insert email and password</p>

            <form onSubmit={onSubmit}>

                <Input onChange={onChange} name='email' type ='email' value={email} label='Email'/>
                <Input onChange={onChange} name='password' type ='password' value={password} label='Password'/>

                <div className="buttons">
                <CustomButton type = 'submit'>Sign In</CustomButton>
                <CustomButton onClick = {signInWithGoogle} signWithGoogle>Sign In with Google</CustomButton>
                </div>
                
            </form>
    </div>
   
)

}


