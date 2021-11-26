
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Services from '../Services/Services';
import Allsevice from '../Allsevice/Allsevice';
const BikeService = () => {
    const [bikes,setBikes]=useState([])
    useEffect(()=>{
        fetch('https://damp-ridge-45794.herokuapp.com/bike')
         .then(res=>res.json())
         .then(data=>setBikes(data))    
    },[])
    return (
        <div className="row " >
            <div>
                HONDA BIKE
            </div>
          
          {
              bikes.slice(0,6).map(bike=><Services bike={bike}></Services>  )
              
          }
          <div>
         
          </div>
          
            
        </div>
    );  
};

export default BikeService;