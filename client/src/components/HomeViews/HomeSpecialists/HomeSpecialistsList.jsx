
import React from 'react';
import { useSelector } from 'react-redux';

import HomeSpecialistsCard from './HomeSpecialistsCard';

import './HomeSpecialistsList.css'

function HomeSpecialistsList() {

  const specialists = useSelector(state => state.specialists.specialists);

  return (

    <div className='homePageSpecialistContainer'>
      {specialists && specialists.map(specialist => <HomeSpecialistsCard key={specialist.id} specialist={specialist} />)}
    </div>
  )
}
export default HomeSpecialistsList;
