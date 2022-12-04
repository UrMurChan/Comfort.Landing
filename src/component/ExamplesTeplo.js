import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img21 from "../img/img21.png"
import img23 from "../img/img23.png"
import img24 from "../img/img24.png"
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={img21} onDragStart={handleDragStart} role="presentation" />,
  <img src={img23} onDragStart={handleDragStart} role="presentation" />,
  <img src={img24} onDragStart={handleDragStart} role="presentation" />,
];

export default function ExamplesTeplo(){
    return(
        <div>
    <div className='Phone' id='Examples'>
      <div className='Milo'>
            <AliceCarousel

            disableButtonsControls
            disableDotsControls
            infinite
            autoPlayInterval={4500}
             mouseTracking items={items} />
        </div>
    </div>
       </div>
    )
}