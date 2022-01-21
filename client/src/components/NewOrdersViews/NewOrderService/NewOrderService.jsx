import React from 'react';

function NewOrderService({service}) {
  return (
    <div>
      {service?.name}<br/>
      Длительность: {service?.interval * 30} минут
      <br/>
      <br/>
    </div>
  );
}

export default NewOrderService;
