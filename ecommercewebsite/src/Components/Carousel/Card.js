import React from 'react';
import "./CardCarousel.css"

const CardElement = ({...cardData }) => {
    return (
      <div className='item'>
        <img className="carousel-img1" src={cardData.img} alt={cardData.name} />
        <p className='carousel-font'>{cardData.name}</p>
        <p className='carousel-font'>{cardData.price}</p>
      </div>
    );
  }

export default CardElement;