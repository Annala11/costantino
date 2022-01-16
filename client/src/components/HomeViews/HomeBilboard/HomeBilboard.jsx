import React from 'react';

import Carousel from './Carousel';
import './HomeBilboard.css';


function HomeBilboard() {
  
  return (
    <Carousel>
      <div className='item item-1' >
        item 1
      </div>
      <div className='item item-2' >
        item 2
      </div>
      <div className='item item-3' >
        item 3
      </div>
    </Carousel>
    // <div style={{display:'flex', flexDirection:'column', background:'#FAEBD7'}}>

    // <h2 style={{color:'#008080'}}>
    //   БОЛЬШЕ, ЧЕМ ПРОСТО СТРИЖКА
    // </h2>
    // <img style={{
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat:'no-repeat', 
    //   backgroundAttachment: 'fixed',
    // }}
    // src="https://koffkindom.ru/wp-content/uploads/2017/11/Fotografii-salona-krasoty.jpg.webp" />
    // <p>ОНЛАЙН ЗАПИСЬ К ЛУЧШИМ МАСТЕРАМ</p>
    // </div>
  );
}
export default HomeBilboard;
