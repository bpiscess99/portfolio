import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import './Resume.css'
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className='resume'>
       
       <div className='resume-left'>
      <div className='icon'>
        <Link to="https://github.com/bpiscess99" target='_blank'>
      <AiFillGithub size="8rem"/>
      <h3 className='heading'>GitHub</h3>
      </Link>
      
      <p className='paragraph'>I have uploaded some projects on GITHUB for access please click on above button.</p>
      </div>

      </div>

      <div className='resume-right'>
        <h1>Cover Letter</h1>
        <p>Full Stack Developer with expertise in the MERN stack. With over 1 year of experience, I have a strong foundation in front-end development using React JS and back-end development using Node JS and Express JS. I am skilled in building responsive and interactive web applications, with a focus on delivering high-quality code and exceptional user experiences.
        If you are seeking a dedicated Full Stack Developer with a passion for technology and a drive for delivering exceptional results, I would love to connect and explore potential opportunities. Feel free to reach out to me via email at bumair97@gmail.com or connect with me on LinkedIn.</p>
      </div>



    </div>
  )
}

export default Resume
