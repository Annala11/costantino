import React from 'react';

function HomeBilboard() {
  return (
    <div style={{display:'flex', flexDirection:'column', background:'#FAEBD7'}}>

    <h2 style={{color:'#008080'}}>
      БОЛЬШЕ, ЧЕМ ПРОСТО СТРИЖКА
    </h2>
    <img style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat:'no-repeat', 
      backgroundAttachment: 'fixed',
    }}
    src="https://koffkindom.ru/wp-content/uploads/2017/11/Fotografii-salona-krasoty.jpg.webp" />
    <p>ОНЛАЙН ЗАПИСЬ К ЛУЧШИМ МАСТЕРАМ</p>
    </div>
  );
}

export default HomeBilboard;
