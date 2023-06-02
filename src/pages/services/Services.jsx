import React from 'react';
import data from '../../data';
import './Services.css'



const Services = () => {
  return (
    <div>
      <h1>Services we provide to our customers</h1>
      {
        data.map(({id, title, description, images}) => {
          return(
            <div className='services' key={id}>
            <img src={`${images}${id}.jpg`} alt="images" />
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Services
