
import React from 'react';
import { useSelector } from 'react-redux';

import HomeSpecialistsCard from './HomeSpecialistsCard';

import './HomeSpecialistsList.css'

function HomeSpecialistsList() {

  const specialists = useSelector(state => state.specialists.specialists);

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3 
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2 
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1 
//     }
//   };


  return (
    <>
      <div style={{margin:'15px'}} className='line'></div>
      <h2 style={{ color: '#FFE4B5', text: 'bold' }}>
        Наши специалисты
      </h2>
      <div className='homePageSpecialistContainer'>
        {specialists && specialists.map(specialist => <HomeSpecialistsCard key={specialist.id} specialist={specialist} />)}
      </div>
    </>
  )
}
export default HomeSpecialistsList;
