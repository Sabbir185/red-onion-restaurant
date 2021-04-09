import React from 'react';
import fastDelivery from '../../images/fast_delivery.jpg'
import responder from '../../images/responder.jpg'
import homeDelivery from '../../images/home_delivery.jpg'
import './Services.css'


const Services = () => {


    return (
        <div>

            <section>
                <h1 className='text-center mt-5'>WHY YOU CHOOSE US</h1>

               <div className="mt-5 container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xlg-4">
                            <img src={fastDelivery} alt="" className="img-style img-fluid"/>
                        </div>
                        <div className="col-6 text-style subcontainer">
                            <div className="row">
                                <div className="col-2"> </div>
                                <div className="col">
                                    <h4>Fast Delivery</h4>
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit dignissimos, repellat dolor magni ipsa eos sed delectus quo itaque.</p>
                                    <h6 className='text-primary'><a href="">see more</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-xlg-4">
                            <img src={responder} alt="" className="img-style img-fluid"/>
                        </div>
                        <div className="col-6 text-style subcontainer">
                        <div className="row ">
                                <div className="col-2"> </div>
                                <div className="col">
                                    <h4>A good Auto Responder</h4>
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit dignissimos, repellat dolor magni ipsa eos sed delectus quo itaque.</p>
                                    <h6 className='text-primary'><a href="">see more</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-xlg-4">
                            <img src={homeDelivery} alt="" className="img-style img-fluid"/>
                        </div>
                        <div className="col-6 text-style">
                        <div className="row">
                                <div className="col-2"> </div>
                                <div className="col">
                                    <h4>Fast Home Delivery</h4>
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit dignissimos, repellat dolor magni ipsa eos sed delectus quo itaque.</p>
                                    <h6 className='text-primary'><a href="">see more</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    
               </div>

            </section>
            
        </div>
    );
};

export default Services;