import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NewOrderService from '../NewOrderService/NewOrderService';

function NewOrderServices({ serviceid }) {
  let service;
  const stateservices = useSelector(state => state.services.services);
  if (serviceid) {
    const services = stateservices;
    service = services.find((el) => el.id === +serviceid);
  }
  return (
    <div>
      {
        serviceid ?
        <div>
          <h3>Выбранная услуга</h3>
          <NewOrderService service={service} />
        </div>
        :
        <div>
          Начните запись с выбора услуги
          <br/><br/>
        </div>
      }
        <Link to="/servicesandprices" className="mainButton">
          {
            service ?
              'ВЫБРАТЬ ДРУГУЮ УСЛУГУ'
              :
              'ВЫБРАТЬ УСЛУГУ'
          }
        </Link>
    </div>
  );
}

export default NewOrderServices;
