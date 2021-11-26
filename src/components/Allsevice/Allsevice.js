import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Allsevice = ({bike}) => {
     console.log(bike);
     const{img,price,descripstion,bikeName,_id}=bike
    return (
        
    
    
         <div className="col-lg-4 col-md-4 col-6 my-5">
      <div class="card w-100 ">
     <img src={img} class="card-img-top" alt=""/>
     <div class="card-body">
     <h5 class="card-title">{bikeName} </h5>
     <h5 class="card-title">{descripstion} </h5>
     <p class="card-text">{price} </p>
     <Link to={`/bookingbike/${_id}`}><Button variant="contained">ByeNow</Button> </Link>
   
 </div>
 </div>
 </div>
      
    );
};

export default Allsevice;