import { TextField } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor:"#671F97",padding:'5px'}} className="d-flex my-1">
         
         <div>
           <h1 className="text-bold text-white">our sport bike</h1>
          <ul style={{listStyle:"none", color:'white'}}>
         <li>Honda cbr</li>
          <li>Honda cb300</li>
          <li>Honda Hness CB350</li>
          <li>Honda cbu300r</li>
          <li>Apache RTR 160</li></ul>
         </div>
          <div style={{ color:'white'}}>
              <h1>contact</h1>
              <p>email: BikeZone@gmail.com</p>
               <p>phone:+99935474</p>
          </div>
          <div >           
          <TextField  sx={{m:3,color:'white'}} id="standard-basic" label="email" variant="standard" />                
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="standard"
        
        />
          </div>
        </div>
    );
};

export default Footer;