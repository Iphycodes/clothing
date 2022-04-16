import React from "react";
import {Link} from 'react-router-dom'
import '../Header/header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cartIcon/cartIcon.component";
import CartDropdown from "../cartDropdown/cartDropdown.component";
import { useDispatch, useSelector} from "react-redux";
import { toggleHidden } from "../../redux/cart/hidden.reducer";

export const Header = () => {
const hiddenStatus = useSelector((state) => (state.hidden.hiddenStatus))
const dispatch = useDispatch()
const currentUser = useSelector(state => (state.user.currentUser))


const handleClick = () => {
    dispatch(toggleHidden())

    console.log(hiddenStatus)
}
return (

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
            <div onClick = {handleClick}>
                <CartIcon/>
            </div>
            
        </div>
        <CartDropdown/>
    </div>
    )
}

export default Header;