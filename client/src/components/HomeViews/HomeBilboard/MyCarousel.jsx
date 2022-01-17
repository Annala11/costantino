
import React from 'react';
import Carousel from 'nuka-carousel';

import './MyCarousel.css';

export default function MyCarousel() {
  return (
    <Carousel className='slider'>
      <div>
        <img  src="categoryFoto/mensFoto.jpg" />
        <span className="sliderText">Text on slide 1</span>
      </div>
      <div>
        <img src="categoryFoto/womensFoto.jpg" />
        <span className="sliderText">Text on slide 2</span>
      </div>
      <div>
        <img src="categoryFoto/childFoto.jpg" />
        <span className="sliderText">Text on slide 3</span>
      </div>
      <div>
        <img src="categoryFoto/someWoman.jpg" />
        <span className="sliderText">Text on slide 4</span>
      </div>
      <div>
        <img src="categoryFoto/someBarber.jpg" />
        <span className="sliderText">Text on slide 5</span>
      </div>
      <div>
        <img src="categoryFoto/someChild.png" />
        <span className="sliderText">Text on slide 6</span>
      </div>
    </Carousel>
  );
}
