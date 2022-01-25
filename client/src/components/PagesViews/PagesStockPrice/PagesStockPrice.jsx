import React from 'react';
import { useEffect } from 'react';

import './PagesStockPrice.css'

function PagesStockPrice() {

  function slidesPlagin(slideIndex = 0) {

    const slides = document.querySelectorAll('.slide');

    
    console.log(slides);
    slides[slideIndex].classList.add('active')

    for (const slide of slides) {
      slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active')
      })
    }

    function clearActiveClasses() {
      slides.forEach((slide) => {
        slide.classList.remove('active')
      })
    }
  }

  useEffect(() => {
    slidesPlagin(2)

  }, [])

  return (
    <div className="pagesStockPriceContainer">
      <div
        className="slide"
        style={{ backgroundImage: "url('https://skidki.marimedia.ru/storage/cache/images/public/datatypes/actions/0000/00000026/actions-preview-26.jpg/fit570x400.jpg')", padding: '-90px' }}
      >
      </div>
      <div
        className="slide"
        style={{ backgroundImage: "url('https://cs33.babysfera.ru/e/c/f/c/36505394.249495102.jpeg')", padding: '-90px' }}
      >
      </div>
      <div
        className="slide"
        style={{ backgroundImage: "url('https://shatilova.com/img/uploads/actions/10second/L_10second.jpg')", padding: '-90px' }}
      >
      </div>
      <div
        className="slide"
        style={{ backgroundImage: "url('https://moskvacenter.ru/images/center/actions/2019/12/4.jpg')", padding: '-90px' }}
      >
      </div>
    </div>
  );
}

export default PagesStockPrice;
