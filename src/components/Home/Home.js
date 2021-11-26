import React from 'react';
import Allreview from '../Allreview/Allreview';
import BikeEngine from '../BikeEngine/BikeEngine';
import BikeService from '../BikeService/BikeService';
import Header from '../Header/Header';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
      
           <Header></Header>
          <BikeService></BikeService>
          <Allreview></Allreview>
          <BikeEngine></BikeEngine>
          
         
            
            
        </div>
    );
};

export default Home;