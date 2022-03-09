import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
// import {
//   //Switch,
//   Route
//   //Link
// } from 'react-router-dom'


export const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)


const App = () => (
  <div className='app'>
    {/* <Route exact path = '/'> */}
      <Homepage/>
    {/* </Route> */}
  </div>
)

export default App;
