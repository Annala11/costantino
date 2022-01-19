import React from 'react';
import { useSelector } from 'react-redux';
import NewOrderSpec from '../NewOrderSpec/NewOrderSpec';

function NewOrderSpecialists({specid}) {
  let spec;
  if(specid){
    const specs = useSelector(state=>state.specialists.specialists);
    spec = specs.find((el)=>el.id === +specid);
    console.log(spec);
  }
  return (
    <div>
      { specid ? 
        <div>
          <div>Ваш мастер:</div>
          <NewOrderSpec spec={ spec } />
        </div>
        :
      specid}
    </div>
  );
}

export default NewOrderSpecialists;
