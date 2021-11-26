import { Password } from '@mui/icons-material';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth/UseAuth';
import bike1 from '../images/img1.png'
const Registar = () => {
    
    const { error, handelRegister,user,Loding } = UseAuth()
    const [register, setRegister] = useState({})
  console.log(user);
    const handelOnblur = e => {
        const field = e.target.name
        const value = e.target.value
        const newValue = { ...register }
        newValue[field] = value
        setRegister(newValue)
        console.log(field, value);

    }
     let location= useLocation()
    let history =useHistory()
   
    const handelOnsubmit = e => {
      
        handelRegister(register.email, register.password, register.name,location,history)
        e.preventDefault()

    }
    return (



        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">Register</Typography>
    {! Loding&& <form onSubmit={handelOnsubmit}>

            <TextField sx={{ m: 1, width: '70%', textAlign: 'center' }}
                id="filled-search"
                label="Name"
                onBlur={handelOnblur}
                name="name"
                type="name"
                variant="filled"
            />
            <br />
            <TextField sx={{ m: 1, width: '70%', textAlign: 'center' }}
                id="filled-search"
                label="email"
                name="email"
                onBlur={handelOnblur}
                type="email"
                variant="filled"
            />
            <br />
            <TextField sx={{ m: 1, width: '70%' }}
                id="filled-search"
                label="password"
                name="password"
                onBlur={handelOnblur}
                type="password"
                variant="filled"
            />
            <Link to="/login"
                style={{ textDecoration: "none" }}
            >
                <Button variant="text" >Already Reagistar?pleacelogin</Button>
            </Link>
            <Button sx={{ m: 1, width: '70%' }} variant="contained" type="submit">Register</Button>
        </form>}
                     {
                         error&&<p>{error} </p>
                     }
                </Grid>
                <Grid item xs={12}md={6}>
                    <img src={bike1} alt="" />

                </Grid>
            </Grid>

        </Container>
    );
};

export default Registar;