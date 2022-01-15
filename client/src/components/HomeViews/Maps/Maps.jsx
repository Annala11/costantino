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
    <div className="homePageMapBlock">
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
  );
}

export default Maps;
