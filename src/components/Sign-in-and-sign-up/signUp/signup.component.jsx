import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase/firebase.utils";
import { createUserData } from "../../../firebase/test";
import { CustomButton } from "../../custom-button/custom-button.component";
import { Input } from "../Input/input.component";

import '../signUp/signup.styles.scss'


export const SignUp = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPsw, setConfirmPsw] = useState('')


    const handleChange = async (e) => {

        e.preventDefault()
    
        const {value} = e.target;
    
        switch (e.target.name) {
            case 'username':
                setUserName(value)
                break;
    
            case 'email':
                setEmail(value)
                break;
    
            case 'password':
                setPassword(value)
                break;
    
            case 'confirmPsw':
                setConfirmPsw(value)
                break;
        
            default:
                break;
        }
    
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(password === confirmPsw){

            try{
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const uc = userCredential.user
                    
                    uc.displayName = username

                    createUserData(uc)
                })
                .catch(err => {
                    console.error(err)
                })

                // console.log(user)
            }
            catch(err){
                console.error(err)
            }
            
        }
        else{
            alert('Password is not the same as confirm password')
        }
    }

    // useEffect(() => {
    //     console.log(username)
    // }, [username])

    // useEffect(() => {
    //     console.log(email)
    // }, [email])

    // useEffect(() => {
    //     console.log(password)
    // }, [password])

    // useEffect(() => {
    //     console.log(confirmPsw)
    // }, [confirmPsw])

    return(

        
        <div className="sign-up">
            
            <h1>I do not have an account?</h1>
            <p>Create new Account</p>
            <form onSubmit={handleSubmit}>
                <Input 
                    onChange = {handleChange}
                    type = 'text'
                    name = 'username'
                    value = {username}
                    label = 'Username'
                />
                

                <Input 
                    onChange = {handleChange}
                    type = 'email'
                    name = 'email'
                    value = {email}
                    label = 'Email'
                    validate = 'true'
                />

                <Input 
                    onChange = {handleChange}
                    type = 'password'
                    name = 'password'
                    value = {password}
                    label = 'Password'
                />

                <Input 
                    onChange = {handleChange}
                    type = 'password'
                    name = 'confirmPsw'
                    value = {confirmPsw}
                    label = 'Confirm Password'
                />

                <CustomButton>Sign Up</CustomButton>
                
            </form>
        </div>
    )
}