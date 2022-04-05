import React from "react";
import { SignIn } from "../../components/Sign-in-and-sign-up/signIn/signin.component";
import { SignUp } from "../../components/Sign-in-and-sign-up/signUp/signup.component";

import '../sign-in-and-sign-up/sign-in-and-sign-up.styles.scss'


const SignInAndSignUp = () => (
    <div className="signInAndSignUp">
            <SignIn/>
            <SignUp/>
    </div>
)

export default SignInAndSignUp;