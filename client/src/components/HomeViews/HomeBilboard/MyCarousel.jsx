
import React from 'react';
import { Carousel } from 'react-carousel-minimal';
// import './MyCarousel.css';

export default function MyCarousel() {
  const data = [
    {
      image: "categoryFoto/mensFoto.jpg",
      caption: "hali-gali"
    },
    {
      image: "categoryFoto/womensFoto.jpg",
      caption: "hali-gali2"
    },
    {
      image: "categoryFoto/childFoto.jpg",
      caption: "hali-gali2"
    },
    {
      image: "categoryFoto/someWoman.jpg",
      caption: "hali-gali2"
    },
    {
      image: "categoryFoto/someBarber.jpg",
      caption: "hali-gali2"
    },
    {
      image: "categoryFoto/someChild.png",
      caption: "hali-gali2"
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

    <Carousel
      data={data}
      time={2500}
      width="850px"
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
        maxWidth: "850px",
        maxHeight: "500px",
        margin: "40px auto",
      }}
    />
  );
}
