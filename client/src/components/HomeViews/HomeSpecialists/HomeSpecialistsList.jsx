
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

function HomeSpecialistsList() {

  // const dispatch = useDispatch();

  const specialists  = useSelector(state => state.reviews);
  console.log(specialists);

  useEffect(() => {
    fetch('/getSpecialists')
    .then(res => res.json())
    .then(data => data.specialists)
  })


  return (
    <div>
      
    </div>
  );
}

export default HomeSpecialistsList;
