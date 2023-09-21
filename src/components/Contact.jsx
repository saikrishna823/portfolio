import React from 'react';
import "../styles/Contact.css";
import SendIcon from '@mui/icons-material/Send';
function Contact(props) {
    return (
        <div className='contact-us'>
        <h1>Send Me an Email</h1>
        <div className='name-email'>
        <input type="text" className='name' placeholder='Name'/>
        <input type="email" className='email' placeholder='Email'/>
        </div>
       
        <input type="text" className='subject' placeholder='Subject'/>
        <textarea className='message' rows="10" cols="50" placeholder='Message'/>
         <button className='send-button'><SendIcon/></button>
        </div>
    );
}

export default Contact;