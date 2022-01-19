
import React from 'react';
import { useSelector } from 'react-redux';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function HomeSpecialistsList() {

  const specialists = useSelector(state => state.specialists.specialists);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

  return (

    <Carousel responsive={responsive}>

    {specialists && specialists.map(el => <div key={el.id}> {el.photo} </div>)}

      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>

    // <>
    //   {specialists && specialists.map(specialist => <HomeSpecialistsCard key={specialist.id} specialist={specialist} />)}
    // </>
  );
}
export default HomeSpecialistsList;
