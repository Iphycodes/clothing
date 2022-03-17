import React from "react";

import {Link} from 'react-router-dom'

import '../Header/header.styles.scss'

import {ReactComponent as Logo} from '../../assets/crown.svg'

export const Header = () => (

    <div className="header">
        <Link to='/' className="logo-container">
        <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link to='/shop' className="option">SHOP</Link>
            <Link to='/profile' className="option">PROFILE</Link>
            <Link to='/sign-in' className="option">SIGN-IN</Link>
        </div>
        
    </div>
    

    
)