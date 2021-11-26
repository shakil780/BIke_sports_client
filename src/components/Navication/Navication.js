import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth/UseAuth';
import { Button,  } from '@mui/material';
const Navication = () => {
  const{user, handelLogout}=UseAuth()
    return (
        
      <nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
<Link className="navbar-brand" to="#">BikeSport</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav mx-auto " >
  <li className="nav-item mx-3 " >
    <Link   style={{textDecoration:'none'}}  className="text-light active list" aria-current="page" to="/home">Home</Link>
  </li>
  <li className="nav-item mx-3" > 
    <Link style={{textDecoration:'none'}} className="text-light list" to="/allservices">Explor</Link>
  </li>
    {
      user?.email&&<li className="nav-item mx-3">
      <Link  style={{textDecoration:'none'}}  className="text-light list" to="/dashboard">Dashboard</Link>
    </li>
    } 
    
   { user.email?<div>
    
     <Button variant="contained" onClick={handelLogout}> logout</Button>
   
   
   </div>:
    <li className="nav-item mx-3">
     <Link className="text-light list" to="/login">login</Link>
   </li>
   }



   {
      user?.email&&<span className="text-white">{user.displayName} </span>
    }
 
  
  
</ul>
</div>
</div>

</nav>
      
  </nav>
        
    );
};

export default Navication;