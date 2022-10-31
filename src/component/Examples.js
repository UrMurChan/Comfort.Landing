import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpg"
import img3 from "../img/img3.jpg"
import img4 from "../img/img4.jpg"
import "./Examples.css"
const handleDragStart = (e) => e.preventDefault();

const items = [
  // <img src={img1} onDragStart={handleDragStart} role="presentation" />,
  <img src={img2} onDragStart={handleDragStart} role="presentation" />,
  <img src={img3} onDragStart={handleDragStart} role="presentation" />,
  <img src={img4} onDragStart={handleDragStart} role="presentation" />,
//   <img src={img3} onDragStart={handleDragStart} role="presentation" />
];

export default function Examples(){
    return(
        <div>
    <div className='Phone' id='Examples'>
      <h2>Примеры наших работ</h2>
            <div className='Carousel'>
            <AliceCarousel

            autoPlay 
            disableButtonsControls
            disableDotsControls
            infinite
            autoPlayInterval={1500}
             mouseTracking items={items} />
            </div>
    </div>
      </div>
    )
}