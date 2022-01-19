import React from 'react';
import NewOrderServices from '../NewOrderServices/NewOrderServices';
import NewOrderSpecialists from '../NewOrderSpecialists/NewOrderSpecialists';
import './NewOrder.css';
function NewOrder({serv_id, spec_id}) {
  const queryParams = new URLSearchParams(window.location.search);
  const serviceid = serv_id ? serv_id : queryParams.get("serviceid");
  const specid = spec_id ? spec_id : queryParams.get("specid");

  return (
    <div>
      <div>
        <h1>
          Выберите услугу, мастера и желаемое время.
        </h1>
      </div>
      <div className="orderTopContainer">
        <div>
          <NewOrderServices serviceid={serviceid} specid={specid} />
        </div>
        <div>
          <NewOrderSpecialists specid={specid} serviceid={serviceid} />
        </div>
      </div>
      { 
      specid && serviceid &&
      <div className="orderCalendar">
        Calendar
      </div>
      }
    </div>
  );
}

export default NewOrder;
