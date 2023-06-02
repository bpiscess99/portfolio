import React from 'react';
import {SiTwitter} from 'react-icons/si';
import {FiLinkedin} from 'react-icons/fi';
import {BsFacebook, BsInstagram} from 'react-icons/bs';
import {MdEmail, MdPhoneInTalk} from 'react-icons/md';
import {IoLocationSharp} from 'react-icons/io5';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  const servicesLinks = ["webdevelopment", "ReactJs", "ExpressJs", "NodeJS", "MongoDB"];
  const companyLinks = ["Home", "About", "Freelancer", "Seller", "Development"]

  const socialIcons = [
       <BsFacebook/>,
       <BsInstagram/>,
       <FiLinkedin/>,
       <SiTwitter/>
  ];

  const contactInfo = [
    {
     icon: <MdEmail/>,
     value: "bumair97@gmail.com",
    },

    {
      icon: <MdPhoneInTalk/>,
      value: "+92 2545 5455",
    },

    {
      icon: <IoLocationSharp/>,
      value: "city tower main gulberg"
    },
  ]

  return (
    <div className='footer'>

      <div className='row'>
        <p className='address'>House 191 CityLahore Pakistan Punjab</p>
        <div className='social-icons'>
          {
            socialIcons.map(icon => {
            // <Link to="https://www.linkedin.com/in/umair-bashir/">
            return(
              <Link to="https://www.linkedin.com/in/umair-bashir/" target='_blank' className='icon'>{icon}</Link>
            )
          // </Link>
          })
          }
        </div>
      </div>

      <div className='row'>
        <h3>Our Services</h3>
        <ul className='list'>
          {servicesLinks.map(service => {
            return(
              <li className='order'>{service}</li>
            )
          })}
        </ul>
      </div>

      <div className='row'>
        <h3>Company</h3>
        <ul className='list'>
          {companyLinks.map(company => {
            return(
              <li className='order'>{company}</li>
            )
          })}
        </ul>
      </div>

      <div className='row'>
        <h3>Contact Us</h3>
        <ul className='list'>
          {contactInfo.map(({icon, value}) => {
            return(
              <li className='order gap'>
               <div className='contact-icon'>{icon}</div> 
               <span>{value}</span>
                </li>
            )
          } ) }
        </ul>
      </div>

      
    </div>
  )
}



export default Footer
