import { Button } from '@mui/material';
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
        serviceid &&
        <div>
          <div>Выбранная услуга</div>
          <NewOrderService service={service} />
        </div>
      }
      <Button >
        <Link to="/servicesandprices">
          {
            service ?
              'Выбрать другую услугу'
              :
              'Выбрать услугу'
          }
        </Link>
      </Button>
    </div>
  );
}

export default NewOrderServices;
