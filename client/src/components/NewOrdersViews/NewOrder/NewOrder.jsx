import React from 'react';
import NewOrderServices from '../NewOrderServices/NewOrderServices';
import NewOrderSpecialists from '../NewOrderSpecialists/NewOrderSpecialists';
import './NewOrder.css';
function NewOrder() {
  const queryParams = new URLSearchParams(window.location.search)
  const serviceid = queryParams.get("serviceid")
  const specid = queryParams.get("specid")
  return (
    <div>
      <div>
        <h1>
          Выберите услугу, мастера и желаемое время.
        </h1>
      </div>
      <div className="orderTopContainer">
        <div>
          <NewOrderServices serviceid={serviceid} />
        </div>
        <div>
          <NewOrderSpecialists specid={specid} />
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
