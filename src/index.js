import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


// const routing = (
//   <BrowserRouter>
//       <div>
//       <Routes>
//         <Route exact index path = '/' element={<App/>}>
//           {/* <Route path=":id" element={<App />} /> */}
//         </Route>
//       </Routes>
//       </div>
//   </BrowserRouter>
// )

ReactDOM.render(
<React.StrictMode>
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path = '/' element={<App/>}>
          <Route index element={<App />}/>
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
