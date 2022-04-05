import React, { useEffect, useState } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

import {
  Route, Routes
} from 'react-router-dom'
import Profile from './pages/Profile';
import User from './pages/User';
import Shop from './pages/Shop/ShopPage';
import { Header } from './components/Header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { createUserData } from './firebase/test';
import { getDoc, onSnapshot } from 'firebase/firestore';


const App = () => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
  auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(user);
      if(userAuth){
        const userRef = await createUserData(userAuth)

        onSnapshot(userRef, (snapshot) => {
          
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
          
        })
        
      }
      else{
        setCurrentUser(userAuth)
      }

    })

  }, [])


  return(
    <>
    {console.log(currentUser)}
    <div className='app'>
      <Header currentUser = {currentUser}/>
      <Routes>
        <Route exact path = '/' element = {<Homepage/>} />
        <Route exact path = '/shop' element = {<Shop/>}/>
        <Route exact path = '/sign-in' element = {<SignInAndSignUp/>}/>
        <Route exact path = '/profile' element = {<Profile/>}>
          <Route exact path = ':userid' element = {<User/>}/>
        </Route>
      </Routes>
    </div>
    </>
  )
}


export default App;
