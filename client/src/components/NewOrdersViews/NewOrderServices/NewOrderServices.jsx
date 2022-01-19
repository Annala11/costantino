import React from 'react';
import { useSelector } from 'react-redux';
import NewOrderService from '../NewOrderService/NewOrderService';

function NewOrderServices({serviceid}) {
  let service;
  if(serviceid){
    const services = useSelector(state=>state.services.services);
    service = services.find((el)=>el.id === +serviceid);
  }
  return (
    <div>
      { serviceid ? 
        <div>
          <div>Выбранная услуга</div>
          <NewOrderService service={service} />
        </div>
        :
        serviceid}
    </div>
  );
}

export default NewOrderServices;
