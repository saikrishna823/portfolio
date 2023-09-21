import React from 'react';
import  {Instagram,Facebook,Twitter,LinkedIn} from '@mui/icons-material'
import {Link} from "react-router-dom";
import "../styles/Footer.css"
function Footer(props) {
    return (
        <div className='footer'>
           <div className='social-media'>
           <Link to="https://instagram.com/sai_.krishna_.reddy?igshid=OGQ5ZDc2ODk2ZA=="><Instagram/></Link>
                 
            <Link to="https://www.facebook.com/msaikrishnareddy.mule"> <Facebook/></Link>    
                 
            <Link to="https://twitter.com/saikris09388006"><Twitter/></Link>
            <Link to="https://www.linkedin.com/in/sai-krishna-reddy-mule-b5a5b920a/"><LinkedIn/></Link>
           </div>
           <div className='end-part'>
             <p> &copy; All Rights Reserved</p>
           </div>
        </div>
    );
}

export default Footer;