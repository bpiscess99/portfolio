import React from 'react';
import {HiOutlineMail} from 'react-icons/hi'
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>

      <div className="contact-left">
      
      <p>  Let's Chat. <br /> Tell Me about your project. </p>
      <span>Let's create something together</span>
      
       <div className="email">
       <i className='email-icon'> <HiOutlineMail/> </i>
        <span>mail me at</span><br />
        <span>bumair97@gmail.com</span> 
       </div>
       
      </div>

      <div className="contact-right">
        <h1>Send me a message</h1>
        <input type="text" placeholder='Enter Your Full Name' /><br />
        <input type="email" placeholder='Enter Your Email' /><br />
        <input type="subject" placeholder='Enter Your Subject' />
        <p>Tell me about your project</p>

        <textarea name="text" placeholder='Enter you message here'></textarea>
        <button className='btn-sumbit'>Send Message</button>
      </div>
    </div>
  )
}

export default Contact
