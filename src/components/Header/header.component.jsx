import React from "react";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cartIcon/cartIcon.component";
import CartDropdown from "../cartDropdown/cartDropdown.component";
import { useDispatch, useSelector} from "react-redux";
import { toggleHidden } from "../../redux/cart/hidden.reducer";
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from "./header.styled";

export const Header = () => {
const hiddenStatus = useSelector((state) => (state.hidden.hiddenStatus))
const dispatch = useDispatch()
const currentUser = useSelector(state => (state.user.currentUser))


const handleClick = () => {
    dispatch(toggleHidden())

    console.log(hiddenStatus)
}
return (

    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionContainer className="options">
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/profile'>PROFILE</OptionLink>
           
            {currentUser ? 
            (
            <OptionLink as='div' onClick = {() => auth.signOut()}>
                SIGN-OUT
            </OptionLink>
            )
            : 
            (
            <OptionLink to='/sign-in' className="option">SIGN-IN</OptionLink>
            )
            }
            <div onClick = {handleClick}>
                <CartIcon/>
            </div>
            
        </OptionContainer>
        <CartDropdown/>
    </HeaderContainer>
    )
}

export default Header;