import React from 'react';
import { Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
const Reviews = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => 
    {console.log(data)
    
      axios.post('https://damp-ridge-45794.herokuapp.com/review',data)
       .then(res=>{
          if(res.data.insertedId){
            alert('data add')
            reset()
          }
       })
     };
     
    return (
        <div className="row my-5" style={{height:'800px'}}>
            
             <form onSubmit={handleSubmit(onSubmit)}>
          <span><input style={{width:'35%'}} {...register("review", { required: true, maxLength: 20 })}placeholder="PleaceReview" /></span>
        <br />
        <Button variant="contained" type="submit" sx={{m:1,width:'35%'}}>submit</Button>
    </form>
        </div>
    );
};

export default Reviews;