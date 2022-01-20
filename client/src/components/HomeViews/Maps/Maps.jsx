import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './Maps.css';

function Maps() {

  const mapState = {
    center: [59.943683, 30.360164],
    zoom: 15,
  };

  const coordinates = [59.943683, 30.360164];

  return (
    <>
      <div style={{ margin: '15px', marginTop:'40px'  }} className='line'></div>
      <h2 style={{ color: '#FFE4B5', text: 'bold' }}>
        КАК С НАМИ СВЯЗАТЬСЯ 
      </h2>
      <div className="homePageMapBlock">
        <span className="homePageMapContacts">
          <span>ТЕЛЕФОН: +7(112)4242343</span>
          <span>АДРЕСС: САНКТ-ПЕТЕРБУРГб УЛ.КИРОЧНАЯ 19</span>
          <span>РАБОТАЕМ с 10:00 до 20:00</span>
        </span>
        <YMaps>
          <Map state={mapState} width={'100%'} height={'100%'}>
            <Placemark
              geometry={coordinates}
              properties={{
                hintContent: 'Costantino',
                balloonContent: ''
              }}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/icons/barbericon.png',
                iconImageSize: [60, 82],
                iconImageOffset: [-30, -82]
              }}
            />
          </Map>
        </YMaps>
      </div>
    </>
  );
}

export default Maps;
