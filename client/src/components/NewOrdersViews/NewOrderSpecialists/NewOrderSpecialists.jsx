import React from 'react';
import { useSelector } from 'react-redux';
import SpecialistsList from '../../PagesViews/PagesSpecialists/SpecialistsList';
import NewOrderSpec from '../NewOrderSpec/NewOrderSpec';
import { getServiceRootCategoryId } from '../../../helpers/main';

function NewOrderSpecialists({ specid, serviceid }) {
  let categoryid;
  let spec;
  let specsToChoose;

  if(serviceid){
    categoryid = getServiceRootCategoryId(serviceid);
  }

  const specs = useSelector(state => state.specialists.specialists);

  if (specid) {
    spec = specs.find((el) => el.id === +specid);
  }else if(categoryid){
    specsToChoose = specs.filter((el) => {
      return el.catids?.includes(categoryid);
    });
  }
  
  return (
    <div>
      {specid ?
        <div>
          <div>Ваш мастер:</div>
          <NewOrderSpec spec={spec} />
        </div>
        :
        <div>
          <div>Выберите мастера:</div>
          <SpecialistsList specs={specsToChoose}/>
        </div>
      }
    </div>
  );
}

export default NewOrderSpecialists;
