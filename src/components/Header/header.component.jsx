import React from "react";

import {Link} from 'react-router-dom'

import '../Header/header.styles.scss'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import {auth} from '../../firebase/firebase.utils'


export const Header = ({currentUser}) => (

    <div className="header">
        <Link to='/' className="logo-container">
        <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link to='/shop' className="option">SHOP</Link>
            <Link to='/profile' className="option">PROFILE</Link>
            {currentUser ? 
            
            (
            <div className="option" onClick = {() => auth.signOut()}>
                SIGN-OUT
            </div>
            )
            : 
            (
            <Link to='/sign-in' className="option">SIGN-IN</Link>
            )
            }
        </div>
        
    </div>
    

    
)