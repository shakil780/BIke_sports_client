import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

  export default function App() {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => 
  {console.log(data)
  
    axios.post('https://damp-ridge-45794.herokuapp.com/bike',data)
     .then(res=>{
        if(res.data.insertedId){
          alert('data add')
          reset()
        }
     })
   };
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <p>Name</p>
        <span><input {...register("bikeName", { required: true, maxLength: 20 })}placeholder="BikeName" /></span>
        <br />
          <p>discripstion</p>
        <span><input {...register("descripstion", ) } placeholder="description" /></span>
        <br />
            <p>imgurl</p>
        <span><input {...register("img",  )}placeholder="img"  /></span>
        <br />  
           <p>price</p>   
        <span><input type="price" {...register("price")} placeholder="price"/></span>
          <br />  
          <br />  
        <Button variant="contained" type="submit">submit</Button>
    </form>
  );
}