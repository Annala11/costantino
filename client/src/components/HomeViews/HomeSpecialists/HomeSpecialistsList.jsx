
import React from 'react';
import { useSelector } from 'react-redux';

import HomeSpecialistsCard from './HomeSpecialistsCard';

import './HomeSpecialistsList.css'

function HomeSpecialistsList() {

  const specialists = useSelector(state => state.specialists.specialists);

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
