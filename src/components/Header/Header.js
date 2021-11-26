
import { Button } from '@mui/material';
import { fontWeight } from '@mui/system';
import React from 'react';
import bike from '../images/bike1.jpg'
import bike1 from '../images/honda-cbr-650r-standard20210330171401.jpg'
const Header = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row d-flex justify-content-center align-items-center" >
                        <div className="col-lg-7 col-md-7 " >
                        <img  style={{width:"400px"}} src={bike}  alt="" />
                        </div>
                        <div style={{color:'#9F7EB5', fontWeight:900}}  className="col-lg-5 col-md-5">
                          <h5>Honda-cb300r</h5>
                          <p>OUR Latest Bike</p>
                          <p>price: 500000tk </p>
                            <Button variant="contained">byeNow</Button>
                        </div>
                    </div>
                    
                </div>
                <div className="carousel-item">
                <div className="row d-flex justify-content-center align-items-center" >
                        <div className="col-lg-7 col-md-7 " >
                        <img style={{width:'100px'}} src={bike1} className="d-block w-100" alt="" />
                        </div>
                        <div style={{color:'#9F7EB5', fontWeight:900}}  className="col-lg-5 col-md-5">
                          <h3>Honda-cbr</h3>
                          <h6>OUR Latest Bike</h6>
                           <p>price: 600000tk </p>
                            <Button variant="contained">byeNow</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Header;