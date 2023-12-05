import React from 'react';

function CarouselItem({item}) {
  return (
    <div className="carousel-item">
      <div></div>
      <img src={item.icon} alt="" className="carousel-img" />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
}

export default CarouselItem;
