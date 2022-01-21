import React from 'react';
import { useSelector } from 'react-redux';
import SpecialistsList from '../../PagesViews/PagesSpecialists/SpecialistsList';
import NewOrderSpec from '../NewOrderSpec/NewOrderSpec';
import { getServiceRootCategoryId } from '../../../helpers/main';
import { useHistory } from 'react-router-dom';

function NewOrderSpecialists({ specid, serviceid }) {
  let categoryid;
  let spec;
  let specsToChoose;
  const history = useHistory();

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

  function chooseAnotherSpec(event){
    event.preventDefault();
    history.push(`/neworder?serviceid=${serviceid}`);
  }
  
  return (
    <div>
      {specid ?
        <div>
          <h3>Ваш мастер:</h3>
          <NewOrderSpec spec={spec} />
          <br/><br/>
          <a href="#" className="mainButton" onClick={chooseAnotherSpec}>Выбрать другого мастера</a>
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
