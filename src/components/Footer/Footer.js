import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='mt-5'>

            <div className='footer-container'>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img src={logo} alt="" className="logo-style ml-5"/>
                    </div>
                    <div className="col-sm-12 col-md-3 link-info align-correction">
                        <h6>About Online food</h6>
                        <h6>Read our blog</h6>
                        <h6>Sign up to deliver</h6>
                        <h6>Add your restaurant</h6>
                    </div>
                    <div className="col-sm-12 col-md-3 link-info align-correction">
                        <h6>Get help</h6>
                        <h6>Read FAQs</h6>
                        <h6>View all cities</h6>
                        <h6>Restaurant near me</h6>
                    </div>
                </div>

                <div className="row mt-5 pb-4 text-light">
                    <div className="col-sm-12 col-md-6">
                        <small className="ml-5">© SABBIR AHMMED 2021, all rights reserved</small>
                    </div>
                    <div className="col-sm-12 col-md-2 align-correction"><small>Privacy Policy</small></div>
                    <div className="col-sm-12 col-md-2 align-correction"><small>Terms of Use</small></div>
                    <div className="col-sm-12 col-md-2 align-correction"><small>Pricing</small></div>
                </div>

            </div>

        </div>
    );
};

export default Footer;