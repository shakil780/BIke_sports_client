import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Allorder from '../Allorder/Allorder'
const MangeAllorder = () => {
   
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('https://damp-ridge-45794.herokuapp.com/bike')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    const handelDeleat=id=>{
        fetch(`https://damp-ridge-45794.herokuapp.com/bike/${id}`,{method:'DELETE'})
        .then(res => res.json())
        .then(
            data => {
              if(data.deletedCount===1){
                const remaining =orders.filter((order) => order._id !== id);
                 setOrders(remaining);
              }
            }
        )
       
    }
    return (
        <div className="row">
            {
                orders.map(order=>       <div className="col-lg-4 col-md-4 col-6 my-5">
                <div class="card w-100 ">
               <img src={order.img} class="card-img-top" alt=""/>
               <div class="card-body">
               <h5 class="card-title">{order.bikeName} </h5>
               <h5 class="card-title">{order.descripstion} </h5>
               <p class="card-text">{order.price} </p>
               <Button variant="contained" onClick={()=>handelDeleat(order._id)}>DeleteItem</Button>    
             
           </div>
           </div>
           </div>)
            }
        </div>
    );
};

export default MangeAllorder;