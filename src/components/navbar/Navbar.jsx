import React, { useEffect, useState } from 'react';
import './Navbar.css';
import pic from '../../image/pic2.jpg';
// import mern from '../../image/mern.png';
import {AiOutlineHome} from 'react-icons/ai';
import {RxResume} from 'react-icons/rx';
import {RiPassportFill} from 'react-icons/ri';
import {FaServicestack} from 'react-icons/fa';
import {IoMdContact} from 'react-icons/io';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if(window.scrollY > 0){
      setIsSticky(true);
    }else{
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
   
  
  return (

    <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
    <div className='navbar' >

          <div className="left" >
            
            <div className="pic">
            <img src={pic} alt="pic" />
            <h1>Portfolio </h1>
            </div>

            {/* <div className="icons">
              <Link to="https:www.twitter.com/bpisces99" target='_blank'> <i><SiTwitter/></i></Link> 
               <Link to="https://www.linkedin.com/in/umair-bashir/" target='_blank'><i><FiLinkedin/></i></Link>
              <Link to="https://www.facebook.com/bpisces99" target='_blank'><i><BsFacebook/></i></Link>
              <Link to="https://www.instagram.com/umairkhan.insta" target="_blank"><i><BsInstagram/></i></Link>
            </div> */}

            <div className="nav">
              <ul>
              <Link to="/"><li><AiOutlineHome/> Home</li></Link>
              <Link to="/resume"><li><RxResume/>Resume</li> </Link>
              <Link to="/portfolio"><li><RiPassportFill/>Portfolio</li> </Link>
              <Link to="/services"><li><FaServicestack/>Services</li> </Link>
              <Link to="/contact"><li><IoMdContact/>Contact</li> </Link>
              </ul>
            </div>

            </div>

         


        </div>
      
        </nav>
  )
}

export default Navbar
