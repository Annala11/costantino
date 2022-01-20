import React from 'react';

import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';

import './HomeSpecialistsCard.css'



function HomeSpecialistsCard({ specialist }) {

  return (
    <div style={{ textAlign: 'center' }}>
      <ImageShadow className='specialistPhoto' style={{ margin: '20px' }} src={specialist.photo} width={200} shadowHover={true} />
      <h3 style={{ color: '#778899' }}>{specialist.name}</h3>
    </div>
  );
}

export default HomeSpecialistsCard;

