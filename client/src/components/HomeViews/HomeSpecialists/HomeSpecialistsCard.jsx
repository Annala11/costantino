import React from 'react';

import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';



function HomeSpecialistsCard({ specialist }) {

  return (
    <div style={{ textAlign: 'center' }}>
      <ImageShadow style={{ margin: '15px' }} src={specialist.photo} />
      <h3 style={{ color: '#FFE4B5' }}>{specialist.name}</h3>
    </div>
  );
}

export default HomeSpecialistsCard;
