import React, { useState } from "react";

import { Input } from "../Input/input.component";

import '../signIn/signin.style.scss'

import { CustomButton } from "../../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";
// import { createUserData } from "../../../firebase/test";
import { signInWithEmailAndPassword } from "firebase/auth";




export const SignIn = () => {
// const [details, setDetails] = useState({email: '', password: ''})

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const onSubmit = (e) => {
    e.preventDefault()

    //signInWithEmailAndPassword(auth, email, password)    
    console.log(email)
    console.log(password)


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(`${errorCode}: ${errorMessage}`)
  });
    

    setEmail('')
    setPassword('')   
}



const onChange = (e) => {

    const {value} = e.target;

    e.target.name === 'email' ? setEmail(value) : setPassword(value)
    

}

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


