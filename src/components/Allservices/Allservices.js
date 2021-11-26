import React, { useEffect, useState } from 'react';
import Allsevice from '../Allsevice/Allsevice';


const Allservices = () => {
     const [allbikes,setAllbikes]=useState([])
      console.log(allbikes);
      useEffect(()=>{
          fetch('https://damp-ridge-45794.herokuapp.com/bike')
           .then(res=>res.json())
           .then(data=> setAllbikes(data))
            .catch((error)=>{
                console.log(error);
 
            })
      },[])
           
    return (
        <div className="row">   
            {
                allbikes?.map(bike=> <Allsevice bike={bike}></Allsevice>)
            }
            
        </div>
    );
};

export default Allservices;