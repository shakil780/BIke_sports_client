import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button } from '@mui/material';
import UseAuth from '../../Context/UseAuth/UseAuth';
import { useHistory } from 'react-router';
const BikeBooking = () => {
    let history= useHistory()
    const {bikeID}=useParams()
    const { register, handleSubmit,reset } = useForm();
     const[bike,setbike]=useState({})
     console.log(bike);
     const {user}=UseAuth()  
     const onSubmit = data => {
        delete bike._id
      
     console.log(data)
     axios.post('https://damp-ridge-45794.herokuapp.com/user',{...data,...bike,status:'pending'})
     .then(res=>{
         if(res.data.insertedId){
             alert('add successfuly')
              history.push('/order')
             reset() 
            
         }     
     }) 
     .catch(error=>{
        console.log(error);
    })    
 }
       useEffect(()=>{
           fetch(`https://damp-ridge-45794.herokuapp.com/bike/${bikeID}`)
            .then(res=>res.json())
            .then(data=>setbike(data))
             .catch(error=>{
               console.log(error);
             })
       },[])
           
      
    return (
           
               <div class="container">
  <div class="row">
    <div class="col-lg-6 col-md-6 ">
    <img className="my-2" src={bike?.img} alt="" />
      <h5>{bike?.bikeName}</h5>
     <h5>{bike?.price}</h5>
      <p>{bike?.descripstion} </p>
      
    </div>
    <div class="col-lg-6 col-md-6">
    <form onSubmit={handleSubmit(onSubmit)}>
               <p>Email</p>
          <input defaultValue={user?.email} {...register("email",)}placeholder="email" />    
          <p>bikeName</p>
         {
           bike?.bikeName&&<input defaultValue={bike?.bikeName} {...register("bikeName", )}placeholder="BikeName" />
       
         } 
          <br />
          <p>discripstion</p>
        <span><input defaultValue={bike?.descripstion} {...register("descripstion", ) } placeholder="description" /></span>
        <br />
            <p>imgurl</p>
        <span><input defaultValue={bike?.img} {...register("img",  )}placeholder="img"  /></span>
        <br />  
           <p>price</p>   
        <span><input defaultValue={bike?.price} type="price" {...register("price")} placeholder="price"/></span>
          <br />   
        <Button variant="contained" type="submit">oreder</Button>
    </form>
    </div>
  </div>
</div>       
    );
};

export default BikeBooking;