import React from 'react';
import '../Footer/Footer.css'
import { assets } from '../../assets/assets';

 const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
         <p>lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been industry's standard dummy text ever since the a52, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
         <div>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li> Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-22-33-444-55</li>
                    <li>Contanct@gmail.com</li>
                
                </ul>

            </div>

        </div>
<hr />
<p className='footer-copyright'> Copyright 2024 @ Tomato.com all Rights Reserved</p>
    </div>
  )
}

export default Footer;