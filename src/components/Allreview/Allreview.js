import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Services from '../Services/Services';
import Allsevice from '../Allsevice/Allsevice';

const Allreview = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://damp-ridge-45794.herokuapp.com/review')
         .then(res=>res.json())
         .then(data=>setReviews(data))    
    },[])
    return (
             <div className="row">
            {
              reviews.map(review=> <div className="col-lg-4 col-md-4 col-6 my-5">
              <div class="card w-100 ">
             <div class="card-body">
              <h1 className="text-bold">productReview</h1>
             <p class="card-title">{review.review} </p>
            
      
           
        
         </div> 
         </div>
         </div> )
            }
            </div>
        
    );
};

export default Allreview;