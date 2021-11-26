
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Context/UseAuth/UseAuth';
      
const Order = () => {
    const {user}=UseAuth()
    const [orders,setOrders]=useState([])
        
      console.log(orders);
       console.log();
       useEffect(()=>{
            
           fetch(`https://damp-ridge-45794.herokuapp.com/user/${user.email}`)
           .then(res=>res.json())
           .then(data=> setOrders(data))
             
       },[])
            
            const handelDeleat=id=>{
                fetch(`https://damp-ridge-45794.herokuapp.com/user/${id}`,{method:'DELETE'})
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
        <div>
            {
               orders.map(order=> <div>
                     <img src={order?.img} alt="" />
                   <h1>{order?.bikeName}</h1>
                
                  
                  <Button variant="contained" onClick={()=>handelDeleat(order._id)}>order cancel</Button>    
               </div>)
            }      
        </div>
    );
};

export default Order;