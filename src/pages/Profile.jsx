import React from 'react';

import {
        Link,
        Outlet, useNavigate} from 'react-router-dom';
// import User from './User';





const Profile = () => {

    const navigate = useNavigate()
    // const location = useLocation();
    return (
        <div>
            <h1>This is the profile page</h1>
            <li><Link to={`ifeanyi`}>Ifeanyi</Link></li>
            <li><Link to={`peter`}>peter</Link></li>
            <li><Link to={`samuel`}>samuel</Link></li>
            <button onClick = {() => {navigate('/hats')}}>click</button>
            <Outlet/>
            
        </div>
    )
}


export default Profile;