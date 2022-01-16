
import React from 'react';
import Carousel from 'nuka-carousel';

import './MyCarousel.css';

export default function MyCarousel() {
  return (
    <Carousel>
      <div>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <span className="sliderText">Text on slide 1</span>
      </div>
      <div>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <span className="sliderText">Text on slide 2</span>
      </div>
      <div>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <span className="sliderText">Text on slide 3</span>
      </div>
      <div>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <span className="sliderText">Text on slide 4</span>
      </div>
      <div>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <span className="sliderText">Text on slide 5</span>
      </div>
      <div>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
        <span className="sliderText">Text on slide 6</span>
      </div>
    </Carousel>
  );
}
