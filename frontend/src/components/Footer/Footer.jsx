import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem sukjfher sdjhfkfhjer ewkjrerhw</p>
                <div className="footer-social-icons">
                    
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>               
                 </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>8073968723</li>
                    <li>Contact@food.com</li>             
                 </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 Food.com-All Right Reserved.</p>
       
    </div>
  )
}

export default Footer