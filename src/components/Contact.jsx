import React from 'react';
import "../styles/Contact.css";
import SendIcon from '@mui/icons-material/Send';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact(props) {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qefvbt2', 'template_w7jngp4', form.current, '1qjeLqnnooigqpsb4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <form className='contact-us' onSubmit={sendEmail} ref={form}>
        <h1>Send Me an Email</h1>
        <div className='name-email'>
        <input type="text" className='name' placeholder='Name'/>
        <input type="email" className='email' placeholder='Email'/>
        </div>
       
        <input type="text" className='subject' placeholder='Subject'/>
        <textarea className='message' rows="10" cols="50" placeholder='Message'/>
         <button className='send-button'><SendIcon/></button>
        </form>
    );
}

export default Contact;