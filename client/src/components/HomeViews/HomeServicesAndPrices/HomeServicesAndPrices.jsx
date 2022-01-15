import React from 'react';

function HomeServicesAndPrices() {


  return (
    <>
      <h2> УСЛУГИ И ЦЕНЫ </h2>
      <div style={{
        background: '#ADD8E6',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',

      }}>
        <div style={{border:'2px solid black', borderRadius:'5px', }}>
        <p>
          Мужские
        </p>
        </div>
        <div style={{border:'2px solid black', borderRadius:'5px', }}>
        <p>
          Женские
        </p>
        </div>
        <div style={{border:'2px solid black', borderRadius:'5px', }}>
        <p>
          Детские
        </p>
        </div>
      </div>
    </>
  );
}

export default HomeServicesAndPrices;
