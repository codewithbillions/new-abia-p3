
import './footer.css';
// import {useState} from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
// import firebase from "firebase/app";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './footer.css'

function Footer() {
 
    return (
            <div className="footer-container">
              <div className='footer-logo'>
              <Link to='/' className='social-logo'>
              <img src="RCCG-logo.png" height="88" width="88" style={{backgroundColor: "", borderRadius: "50px"}}  alt="chat-icon" />
                <i className='fab fa-typo3' />
              </Link>
              </div>

            
            
          
              <div>
              <small className='website-rights'>Abia Province 3 © 2023</small>
              </div>
              
              <div className='link-items'>
                <div>< FaFacebook/></div>
                <div>< FaTwitter/></div>
                <div>< FaInstagram/></div>
                <div>< FaWhatsapp/></div>
              </div>
      </div>
            
            
    )}  
  export default Footer;

  