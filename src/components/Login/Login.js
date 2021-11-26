import React, { useState } from 'react';
import { Password } from '@mui/icons-material';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import UseAuth from '../../Context/UseAuth/UseAuth';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
     
     const {error, handelLogin, Loding}=UseAuth()
    const [login,setLogin]=useState()

    const handelOnblur=e=>{
        const field = e.target.name
        const value = e.target.value
        const newValue= {...login}
           newValue[field]=value
           setLogin(newValue)
           
    }
    const location=useLocation()
    const history =useHistory()
    const handelOnsubmit = e => { 
         handelLogin (login.email, login.password,location,history)
        e.preventDefault()

    }
   
    return (
                  
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">login</Typography>
               {!Loding&&<form onSubmit={handelOnsubmit}>

                
                <br />
                 <TextField sx={{m:1, width:'70%',textAlign:'center'}}
                    id="filled-search"
                    label="email"
                    name="email"
                    onBlur={handelOnblur}
                    type="email"
                    variant="filled"
                />
                <br />  
                <TextField sx={{m:1, width:'70%'}}
                    id="filled-search"
                    label="password"
                    name="password"
                    onBlur={handelOnblur}
                    type="password"
                    variant="filled"
                />
                <Link to="/reagistar"
                  style={{textDecoration:"none"}}
                >
                     <Button variant="text" >new User pleace?Reagistar</Button>
                 </Link>
                <Button  sx={{m:1, width:'70%'}}     variant="contained" type="submit">login</Button>
            </form>}
            {error&&<p>{error} </p>
                }
                </Grid>
                
            </Grid>
            
        </Container>
    );
};

export default Login;