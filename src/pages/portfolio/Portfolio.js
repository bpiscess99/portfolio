import React from 'react';
import mongodb from '../../image/mongodb.png';
import express from '../../image/express.png';
import react from '../../image/react.jpg';
import node from '../../image/node.png';
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className='portfolio'>

      <div className='delivered'>
      
        <h1>Pojects I have Delivered</h1>
        <p>Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy. See out Portfolio below.</p>
      </div>

      <div className='mongodb'>
        
        <div className='mong' data-aos="fade-up">
        <h1>MongoDB</h1>
        <p>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions.</p>
        </div>

        <div className='mongo' data-aos="fade-down">
        <img src={mongodb} alt="mongodb" />
        </div>

      </div>

      <div className='express'>
        
        
        <div className='express-left' data-aos="fade-right">
        <img src={express} alt="express" />
        </div>

        <div className='express-right' data-aos="fade-left">
        <h1>ExpressJs</h1>
        <p>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p>
        </div>

      </div>

      <div className='react'>
        
        <div className='react-left' data-aos="fade-down">
        <h1>ReactJs</h1>
        <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
        </div>

        <div className='react-right'>
        <img src={react} alt="react" />
        </div>

      </div>

      <div className='node'>
        
      <div className='node-left'>
        <img src={node} alt="node" data-aos="fade-right"/>
        </div>

        <div className='node-right'>
        <h1>NodeJs</h1>
        <p>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</p>
        </div>

    
      </div>

    </div>
  )
}

export default Portfolio
