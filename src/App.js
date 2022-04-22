import React, { useEffect } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {
  Navigate,
  Route, Routes
} from 'react-router-dom'
import Profile from './pages/Profile';
import User from './pages/User';
import Shop from './pages/Shop/ShopPage';
import { Header } from './components/Header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { createUserData } from './firebase/test';
import { onSnapshot } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.reducer';
import CheckOutPage from './pages/checkOutPage/checkOutPage.component';
import { CollectionPage } from './pages/collection-page/collection-page.component';


const App = () => {
  const currentUser = useSelector(state => (state.user.currentUser))
  const cartItems = useSelector(state => state.cart.cartItem)
  const dispatch = useDispatch()
 

  useEffect(() => {
    
  auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(user);
      if(userAuth){
        const userRef = await createUserData(userAuth)

        onSnapshot(userRef, (snapshot) => {
          
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))
          
        })
      }
      else{
        dispatch(setCurrentUser(userAuth))
      }

    })

  }, [])

  


  return(
    <>
    {console.log(currentUser)}
    <div className='app'>
      <Header/>
      <Routes>
        <Route exact path = '/' element = {<Homepage/>} />
        <Route exact path = '/shop' element = {<Shop/>}>
          <Route exact path = ':categoryId' element = {<CollectionPage/>}/>
          {/* <Route exact path = '*' element = {<Shop/>}/> */}
        </Route>
        <Route exact path = '/sign-in' element = {currentUser ? <Navigate to='/' replace/> : <SignInAndSignUp/>}/>
        <Route exact path = '/profile' element = {<Profile/>}>
          <Route exact path = ':userid' element = {<User/>}/>
        </Route>
        <Route exact path = '/checkout' element={cartItems.length ? <CheckOutPage/> : <Navigate to='/shop' replace/>}></Route>
      </Routes>
    </div>
    </>
  )
}


export default App;
