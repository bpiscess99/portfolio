import React, { useEffect } from 'react';
import './Home.css';
import home from '../../image/home.avif'
import { useNavigate } from 'react-router-dom';
 import AOS from 'aos';
import "aos/dist/aos.css";

const Home = () => {

  const navigate = useNavigate()

 useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, []);
  return (
  
    <div className='home'>

      <div className="box">
        
      <div className="left" data-aos="fade-up">
        <h3> Hello!</h3>
        <h1>I Am Umair Bashir</h1>
        <p>I'm a MERN Stack developer with extensive experience for over 1 year. My expertise to to create a websites from scratch and many more...</p>
      
        <button onClick={()=> navigate("/resume")}>Resume</button>
        <button onClick={() => navigate("/portfolio")}>Portflio</button>
      </div>

      <div className="right">
        <img src={home} alt="home" />
      </div>

      </div>
     {/* <img src={mern} alt="mern" />    */}
    </div>

  )
}

export default Home
