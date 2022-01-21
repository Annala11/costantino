import React from 'react';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-carousel-minimal';

import './MyCarousel.css';

export default function MyCarousel() {
  const data = [
    {
      image: "categoryFoto/mensFoto.jpg",
    caption: "ВАШ ЗОЛОТОЙ СТИЛЬ"
    },
    {
      image: "categoryFoto/womensFoto.jpg",
      caption: "БЫТЬ КРАСИВОЙ - ЛЕГКО ..."
    },
    {
      image: "categoryFoto/childFoto.jpg",
      caption: "МЫ ЛЮБИМ И УМЕЕМ СТРИЧЬ ДЕТЕЙ"
    },
    {
      image: "categoryFoto/someWoman.jpg",
      caption: "ЛУЧШЕЕ В КАЖДОМ ИЗ ВАС"
    },
    {
      image: "categoryFoto/someBarber.jpg",
      caption: "СОВЕРШЕНСТВО - ДОСТУПНО!"
    },
    {
      image: "categoryFoto/someChild.png",
      caption: "ВОЛШЕБСТВО МЕЖДУ НАМИ"
    },
  ]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="caruselContainer" style={{position:'relative'}} >
      <Carousel 
        data={data}
        time={2500}
        width="100%"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "1400px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      >
      </Carousel>
      <button className='caruselButton'>
      <Link className='caruselButtonLink' to='/neworder'> Записаться </Link>
      </button>
    </div>
  );
}
