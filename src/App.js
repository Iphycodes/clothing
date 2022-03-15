import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

import {
  Route, Routes, Link
} from 'react-router-dom'
import Profile from './pages/Profile';
import User from './pages/User';
import { Hats } from './pages/Hats';


export const HatsPage = (props) => {
  console.log(props)
  return (
  <div>
    <h1>Hats page</h1>
  </div>
  )
}
  


const App = () => (

  <div className='app'>
    <Link to='/'>home</Link><br/>
    <Link to= '/hats'>hats</Link><br/>
    <Link to='/profile'>profile</Link><br/>
    <Routes>
      <Route exact path = '/' element = {<Homepage/>} />
      <Route exact path = '/shop/hats' element = {<Hats/>}/>
      <Route exact path = '/profile' element = {<Profile/>}>
        <Route exact path = ':userid' element = {<User/>}/>
      </Route>
    </Routes>
  </div>
)

export default App;
