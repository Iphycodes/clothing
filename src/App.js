import React from 'react';
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



const App = () => (

  <div className='app'>
    <Header/>
    <Routes>
      <Route exact path = '/' element = {<Homepage/>} />
      <Route exact path = '/shop' element = {<Shop/>}/>
      <Route exact path = '/sign-in' element = {<SignInAndSignUp/>}/>
      <Route exact path = '/profile' element = {<Profile/>}>
        <Route exact path = ':userid' element = {<User/>}/>
      </Route>
    </Routes>
  </div>
)

export default App;
