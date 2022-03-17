import React, { useState } from "react";

import { Input } from "./Input/input.component";


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
    <div>
        <h1>Have an Account</h1>
            <p>Insert email and password</p>

            <form onSubmit={onSubmit}>

                <Input onChange={onChange} name='email' type ='email' value={email} label='Email main'/>
                <Input onChange={onChange} name='password' type ='password' value={password} label='Password'/>

                {/* <input 
                onChange={onChange}
                name="email"
                type="email"
                value = {email}
                />
                <label htmlFor="email">Email</label> */}

                {/* <input 
                onChange = {onChange}
                type="password" 
                name="password"
                value = {password} 
                />
                <label htmlFor="password">password</label> */}

                <input type="submit" value="Login" />
            </form>
    </div>
   
)

}