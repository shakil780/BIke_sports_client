import { Email } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
     const[email,setEmail]=useState('')
     const handaleOnblur=e=>{
          setEmail(e.target.value)
     } 
    const handelSubmite=e=>{
        const user={email}
       fetch('https://damp-ridge-45794.herokuapp.com/users/admin',{ 
        method:'PUT',
         headers:{
           'content-type':'application/json'
         },
          body:JSON.stringify(user)
        
      })
       .then(res=>res.json())
       .then(data=>  setEmail(data))
        e.preventDefault()
    }
    return (
        <div>
             <h1>Make Admine</h1>
           <form onSubmit={handelSubmite}>
           <TextField
          id="standard-multiline-flexible"
          label="email"
           type="email"
           onBlur={handaleOnblur}
          multiline
          variant="standard"
        />
        <br />
        <br />
          <Button variant="contained" type="submit">makeadmin</Button>
           </form>
        </div>
    );
};

export default MakeAdmin;